"use strict";
// Дала мұрасы · ойынға қосымшалар: домбыра әуені (процедуралық күй), сурет түсіру режимі, жетістік дыбысы.
(() => {
  const AC = window.AudioContext || window.webkitAudioContext;

  /* ---------- Домбыра синтезі (Karplus–Strong) ---------- */
  let ctx, master, reverb, cache = new Map();
  function audio() {
    if (ctx) return ctx;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = .32;
    const comp = ctx.createDynamicsCompressor();
    // қарапайым кеңістік әсері: екі кешігу желісі
    reverb = ctx.createGain(); reverb.gain.value = .22;
    for (const [t, g] of [[.083, .45], [.131, .32]]) {
      const d = ctx.createDelay(1); d.delayTime.value = t;
      const fb = ctx.createGain(); fb.gain.value = g;
      const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 2400;
      reverb.connect(d); d.connect(lp); lp.connect(fb); fb.connect(d); lp.connect(comp);
    }
    master.connect(comp); master.connect(reverb);
    comp.connect(ctx.destination);
    return ctx;
  }
  function pluckBuffer(freq) {
    const key = Math.round(freq * 10);
    if (cache.has(key)) return cache.get(key);
    const rate = ctx.sampleRate, len = Math.floor(rate * 1.6);
    const buf = ctx.createBuffer(1, len, rate), out = buf.getChannelData(0);
    const period = Math.max(2, Math.round(rate / freq));
    const ring = new Float32Array(period);
    // жұмсақ шертпе: сүзілген шу
    let last = 0;
    for (let i = 0; i < period; i++) { const r = Math.random() * 2 - 1; last = last * .55 + r * .45; ring[i] = last; }
    let p = 0;
    const decay = .996 - Math.min(.006, freq / 120000);
    for (let i = 0; i < len; i++) {
      const next = (p + 1) % period;
      const v = ring[p];
      ring[p] = decay * .5 * (v + ring[next]);
      // ішек тербелісінің дене резонансы
      out[i] = v * (1 - Math.exp(-i / 40));
      p = next;
    }
    cache.set(key, buf);
    return buf;
  }
  function pluck(freq, time, gain = .5, pan = 0) {
    const src = ctx.createBufferSource();
    src.buffer = pluckBuffer(freq);
    const g = ctx.createGain(); g.gain.value = gain;
    const body = ctx.createBiquadFilter(); body.type = "peaking"; body.frequency.value = 420; body.gain.value = 5; body.Q.value = 1.2;
    const p = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    src.connect(body).connect(g);
    if (p) { p.pan.value = pan; g.connect(p).connect(master); } else g.connect(master);
    src.start(time);
  }

  /* ---------- Процедуралық күй ---------- */
  // Домбыраның кварта бойынша бапталған екі ішегі: Ре (D3) және Соль (G3)
  const D3 = 146.83;
  const SCALE = [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17]; // табиғи минор (эол ладындағы жартылай тондар)
  const hz = (semi) => D3 * Math.pow(2, semi / 12);
  const MOTIFS = [[4, 3, 2, 3, 4, 4], [2, 3, 4, 5, 4, 3], [4, 5, 6, 5, 4, 2], [7, 6, 5, 4, 3, 4], [2, 2, 3, 4, 3, 2], [4, 3, 1, 2, 0, 0]];
  let playing = false, timer, nextTime = 0, step = 0, phrase = [], phraseIdx = 0, section = 0;
  function newPhrase() {
    section++;
    const base = MOTIFS[Math.floor(Math.random() * MOTIFS.length)];
    const lift = section % 4 === 3 ? 2 : 0; // әр төртінші сөйлем жоғары регистрде
    phrase = base.map((d) => Math.min(SCALE.length - 1, d + lift));
    if (section % 4 === 0) phrase[phrase.length - 1] = 0; // сөйлемді тоникамен аяқтау
    phraseIdx = 0;
  }
  function schedule() {
    const beat = 60 / 132 / 2; // сегіздік нота
    while (nextTime < ctx.currentTime + .25) {
      const pos = step % 6; // 6/8 қағыс
      // төменгі ішек: бурдон (Ре), әр бөліктің басында қатты
      if (pos === 0 || pos === 3) pluck(hz(0), nextTime, pos === 0 ? .42 : .28, -.15);
      // жоғарғы ішек: әуен
      if (pos !== 2 || Math.random() < .5) {
        if (phraseIdx >= phrase.length) newPhrase();
        const deg = phrase[phraseIdx++];
        pluck(hz(SCALE[deg] + 12), nextTime + (Math.random() - .5) * .012, pos === 0 ? .55 : .38, .15);
        // қос ішекті қағыс: кварта аралық
        if (pos === 0 && Math.random() < .55) pluck(hz(5), nextTime + .008, .22, 0);
      }
      nextTime += beat * (pos === 2 || pos === 5 ? 1.12 : .94); // «серпінді» ырғақ
      step++;
    }
  }
  function startMusic() {
    audio();
    ctx.resume();
    if (playing) return;
    playing = true;
    nextTime = ctx.currentTime + .1;
    newPhrase();
    timer = setInterval(schedule, 60);
  }
  function stopMusic() {
    playing = false;
    clearInterval(timer);
  }
  function chime() {
    if (!ctx || ctx.state !== "running") return;
    const t = ctx.currentTime + .02;
    [0, 3, 7, 12].forEach((s, i) => pluck(hz(s + 12), t + i * .09, .45, (i - 1.5) * .2));
  }
  window.DALA_SOUND = {chime, startMusic, stopMusic, get playing() { return playing; }};

  /* ---------- Ойын құралдар тақтасы ---------- */
  const game = document.getElementById("game");
  const tools = game?.querySelector(".game-tools");
  const canvas = document.getElementById("world");
  if (!game || !tools || !canvas) return;
  const close = document.getElementById("close");
  const btn = (text, label) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = text;
    b.title = label; // көрінетін мәтін батырманың атауы болып қалады
    b.setAttribute("aria-description", label);
    close ? close.before(b) : tools.append(b);
    return b;
  };
  const music = AC ? btn("♫ Күй", "Домбыра әуенін қосу (M)") : null;
  if (music) {
    music.setAttribute("aria-pressed", "false");
    music.addEventListener("click", () => {
      if (playing) stopMusic(); else startMusic();
      music.setAttribute("aria-pressed", String(playing));
      music.textContent = playing ? "♫ Күйді өшіру" : "♫ Күй";
    });
    game.addEventListener("close", () => { if (playing) music.click(); });
  }
  const Q = window.DALA_QUALITY;
  if (Q) {
    const modes = [["auto", "Авто"], ["high", "Жоғары"], ["balanced", "Теңгерімді"], ["fast", "Жылдам"]];
    const quality = btn("", "Сурет сапасы: әлсіз компьютерде «Жылдам» режимін таңда");
    const label = () => { quality.textContent = "⚙ " + (modes.find((m) => m[0] === Q.mode) || modes[0])[1]; };
    quality.addEventListener("click", () => {
      const i = modes.findIndex((m) => m[0] === Q.mode);
      Q.mode = modes[(i + 1) % modes.length][0];
      label();
    });
    label();
  }
  const photo = btn("📷 Сурет", "Көріністі суретке түсіру (P)");
  const title = document.getElementById("game-title")?.textContent || "Дала мұрасы";
  const kicker = game.querySelector(".game-top small")?.textContent || "";
  function capture() {
    requestAnimationFrame(() => {
      const w = canvas.width, h = canvas.height;
      if (!w || !h) return;
      const out = document.createElement("canvas");
      out.width = w; out.height = h + Math.round(h * .12);
      const c = out.getContext("2d");
      c.fillStyle = "#14271f"; c.fillRect(0, 0, out.width, out.height);
      c.drawImage(canvas, 0, 0);
      const band = out.height - h, fs = Math.max(14, Math.round(band * .32));
      c.fillStyle = "#e7bf7d"; c.font = `700 ${Math.round(fs * .62)}px Arial, sans-serif`;
      c.fillText(kicker.toUpperCase(), Math.round(fs * .9), h + band * .4);
      c.fillStyle = "#f6efdc"; c.font = `700 ${fs}px Georgia, serif`;
      c.fillText(title, Math.round(fs * .9), h + band * .82);
      c.textAlign = "right"; c.font = `${Math.round(fs * .6)}px Arial, sans-serif`; c.fillStyle = "#cbbf9f";
      c.fillText("Дала мұрасы · " + new Date().toLocaleDateString("ru-RU"), w - fs * .9, h + band * .72);
      out.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = `Dala-murasy-${title.replace(/[^\p{L}\p{N}]+/gu, "-")}.png`;
        document.body.append(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1500);
        try {
          const s = JSON.parse(localStorage.getItem("dala-murasy-photos-v1")) || {count: 0};
          s.count = (s.count || 0) + 1;
          localStorage.setItem("dala-murasy-photos-v1", JSON.stringify(s));
        } catch {}
        document.dispatchEvent(new CustomEvent("dala:progress"));
      }, "image/png");
    });
    const flash = document.createElement("div");
    flash.className = "photo-flash";
    canvas.parentElement.append(flash);
    setTimeout(() => flash.remove(), 600);
  }
  photo.addEventListener("click", capture);
  document.addEventListener("keydown", (e) => {
    if (!game.open || e.target.closest("input,textarea,select") || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === "p" || e.key === "P" || e.key === "з" || e.key === "З") { e.preventDefault(); capture(); }
    if ((e.key === "m" || e.key === "M" || e.key === "ь" || e.key === "Ь") && music) { e.preventDefault(); music.click(); }
  });
  const style = document.createElement("style");
  style.textContent = `.photo-flash{position:absolute;inset:0;background:#fff;pointer-events:none;animation:photo-flash .6s ease-out forwards;z-index:30}
@keyframes photo-flash{from{opacity:.85}to{opacity:0}}
@media (prefers-reduced-motion:reduce){.photo-flash{display:none}}`;
  document.head.append(style);
})();
