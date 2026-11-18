"use strict";
// Дала мұрасы · ұлттық және тарихи ойындар: тоғызқұмалақ, асық ату (3D), «Кім бұл?», сөзжұмбақ, күй жады, жұп тап,
// ортақ ұпай мен жетістіктер жүйесі.
(() => {
  const make = (tag, text, cls, attrs) => { const n = document.createElement(tag); if (text != null && text !== "") n.textContent = text; if (cls) n.className = cls; if (attrs) for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v); return n; };
  const btn = (text, fn, cls = "btn btn-line", attrs) => { const b = make("button", text, cls, {type: "button", ...attrs}); b.addEventListener("click", fn); return b; };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.classList.contains("reduce-motion");
  const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
  const dayIndex = () => Math.floor(Date.parse(today() + "T00:00:00Z") / 864e5);

  /* ================= Ұпай мен жетістіктер ================= */
  const SKEY = "dala-murasy-games-v1";
  const GAMES = {
    toguz: "Тоғызқұмалақ", asyk: "Асық ату", bayge: "Бәйге", who: "Кім бұл?", word: "Сөзжұмбақ", kuy: "Күй жады", pairs: "Жұп тап"
  };
  const ACH = [
    ["toguz-win", "Қазан иесі", "Тоғызқұмалақта компьютерді жең."],
    ["toguz-hard", "Тоғызқұмалақ шебері", "Компьютерді қиын деңгейде жең."],
    ["tuzdyk", "Тұздық", "Тоғызқұмалақта тұздық ал."],
    ["asyk-double", "Қос олжа", "Бір атыста екі не одан көп асық шығар."],
    ["asyk-level3", "Сақа ұстаған", "Асық атуда 3-деңгейге жет."],
    ["who-30", "Шежіреші", "«Кім бұл?» ойынында 30 ұпайдан асыр."],
    ["word-win", "Алғашқы сөз", "Сөзжұмбақты шеш."],
    ["word-3", "Сөз зергері", "Сөзжұмбақты 3 әрекетте не одан тез тап."],
    ["kuy-8", "Күйші", "Күй жадында 8 нотаны жаңылмай қайтала."],
    ["kuy-15", "Құрманғазы ізімен", "Күй жадында 15 нотаға жет."],
    ["pairs-12", "Зерде", "Жұп тап ойынын 12 жүрістен аз аяқта."],
    ["bayge-win", "Бәйге жүйрігі", "Бәйгеде бірінші келіп, бас жүлдені ал."],
    ["daily-3", "Тұрақты ойыншы", "Күнделікті тапсырмаларды 3 күн қатарынан орында."],
    ["all-games", "Дала жиһангезі", "Жеті ойынның бәрін кемі бір рет ойна."]
  ];
  const load = () => { try { return {best: {}, plays: {}, ach: {}, points: 0, ...JSON.parse(localStorage.getItem(SKEY) || "{}")}; } catch { return {best: {}, plays: {}, ach: {}, points: 0}; } };
  let S = load();
  const save = () => { try { localStorage.setItem(SKEY, JSON.stringify(S)); } catch {} refreshScore(); };
  const toastBox = make("div", null, "g2-toasts", {"aria-live": "polite", role: "status"});
  document.body.append(toastBox);
  function toast(title, text) {
    const t = make("div", null, "g2-toast");
    t.append(make("strong", title), make("span", text));
    toastBox.append(t);
    setTimeout(() => t.classList.add("out"), 4200);
    setTimeout(() => t.remove(), 4800);
  }
  function unlock(id) {
    if (S.ach[id]) return;
    const a = ACH.find((x) => x[0] === id); if (!a) return;
    S.ach[id] = today(); S.points += 25; save();
    toast(`Жаңа жетістік: ${a[1]}`, a[2] + " +25 ұпай");
  }
  // Ойын аяқталғанда шақырылады: ұпай қосылады, рекорд жаңарады
  function finish(game, score, higherIsBetter = true, meta = {}) {
    S.plays[game] = (S.plays[game] || 0) + 1;
    S.points += Math.max(0, Math.round(meta.points ?? (higherIsBetter ? score : 0)));
    const old = S.best[game];
    const record = old == null || (higherIsBetter ? score > old : score < old);
    if (record) S.best[game] = score;
    save();
    if (Object.keys(GAMES).every((g) => S.plays[g])) unlock("all-games");
    checkDaily(game, score, meta);
    return record;
  }
  /* ---------- Күнделікті тапсырмалар ---------- */
  const TASKS = [
    ["toguz-win", "Тоғызқұмалақта компьютерді жең", "toguz", (g, s, m) => g === "toguz" && m.win],
    ["toguz-play", "Тоғызқұмалақты соңына дейін ойна", "toguz", (g) => g === "toguz"],
    ["asyk-60", "Асық атуда 60 ұпай жина", "asyk", (g, s) => g === "asyk" && s >= 60],
    ["who-20", "«Кім бұл?» ойынында 20 ұпайдан асыр", "who", (g, s) => g === "who" && s >= 20],
    ["word", "Сөзжұмбақты шеш", "word", (g, s) => g === "word" && s > 0],
    ["kuy-6", "Күй жадында 6 нотаға жет", "kuy", (g, s) => g === "kuy" && s >= 6],
    ["pairs-16", "Жұп тапты 16 жүрістен аз аяқта", "pairs", (g, s) => g === "pairs" && s < 16],
    ["bayge-3", "Бәйгеде алғашқы үштікке кір", "bayge", (g, s, m) => g === "bayge" && m.place <= 3]
  ];
  function todayTasks() {
    // Күн нөміріне байланған тұрақты кездейсоқ таңдау: бүгін бәріне бірдей үш тапсырма
    let seed = dayIndex() * 9301 + 49297;
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const pool = TASKS.slice(), out = [];
    while (out.length < 3) { const t = pool.splice(Math.floor(rnd() * pool.length), 1)[0]; if (!out.some((x) => x[2] === t[2])) out.push(t); }
    return out;
  }
  function dailyState() { if (!S.daily || S.daily.date !== today()) S.daily = {date: today(), done: []}; return S.daily; }
  function checkDaily(game, score, meta) {
    const d = dailyState(); let changed = false;
    for (const [id, text, , test] of todayTasks()) {
      if (d.done.includes(id) || !test(game, score, meta)) continue;
      d.done.push(id); changed = true; S.points += 20;
      toast("Күнделікті тапсырма орындалды", `${text}. +20 ұпай`);
    }
    if (changed && d.done.length === 3) {
      const y = new Date(Date.parse(today() + "T00:00:00Z") - 864e5).toISOString().slice(0, 10);
      S.streak = {last: today(), n: S.streak?.last === y ? (S.streak.n || 0) + 1 : 1};
      S.points += 50;
      toast("Бүгінгі үш тапсырма да орындалды!", `+50 ұпай. Қатарынан ${S.streak.n} күн.`);
      if (S.streak.n >= 3) setTimeout(() => unlock("daily-3"), 50);
    }
    if (changed) save();
  }
  const dailyBox = make("div", null, "g2-daily");
  function drawDaily() {
    const d = dailyState();
    const streak = S.streak && (S.streak.last === today() || S.streak.last === new Date(Date.parse(today() + "T00:00:00Z") - 864e5).toISOString().slice(0, 10)) ? S.streak.n : 0;
    dailyBox.replaceChildren(make("strong", `Бүгінгі тапсырмалар${streak ? ` · қатарынан ${streak} күн` : ""}`));
    const ul = make("ul");
    todayTasks().forEach(([id, text, game]) => {
      const li = make("li", null, d.done.includes(id) ? "done" : "");
      const a = make("a", text, null, {href: `#game-${game}`});
      li.append(make("i", d.done.includes(id) ? "✓" : "", null, {"aria-hidden": "true"}), a, make("span", d.done.includes(id) ? " (орындалды)" : "", "sr"));
      ul.append(li);
    });
    dailyBox.append(ul);
  }
  const scorePill = make("p", null, "g2-score", {"aria-live": "polite"});
  function refreshScore() {
    const got = Object.keys(S.ach).length;
    scorePill.textContent = `Жалпы ұпай: ${S.points} · Жетістік: ${got}/${ACH.length} · Бүгінгі тапсырма: ${dailyState().done.length}/3`;
    drawDaily();
    document.querySelectorAll("[data-best]").forEach((n) => { const v = S.best[n.dataset.best]; n.textContent = v == null ? "Әлі ойналмады" : `Рекорд: ${v}${n.dataset.unit || ""}`; });
  }
  const head = document.querySelector("#games .band-head");
  if (head) head.append(scorePill, dailyBox);
  refreshScore();

  /* ================= Дыбыс ================= */
  let actx = null;
  const audio = () => { try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === "suspended") actx.resume(); } catch { actx = null; } return actx; };
  const pluckCache = new Map();
  function pluck(freq, gain = .45, when = 0) {
    const ctx = audio(); if (!ctx) return;
    let buf = pluckCache.get(freq);
    if (!buf) {
      const sr = ctx.sampleRate, n = Math.floor(sr * 1.3), p = Math.max(2, Math.round(sr / freq));
      buf = ctx.createBuffer(1, n, sr); const d = buf.getChannelData(0);
      const ring = new Float32Array(p); for (let i = 0; i < p; i++) ring[i] = Math.random() * 2 - 1;
      for (let s = 0, i = 0; s < n; s++) { const a = ring[i], b = ring[(i + 1) % p]; d[s] = a; ring[i] = (a + b) * .4983; i = (i + 1) % p; }
      pluckCache.set(freq, buf);
    }
    const src = ctx.createBufferSource(), g = ctx.createGain();
    src.buffer = buf; g.gain.value = gain; src.connect(g).connect(ctx.destination); src.start(ctx.currentTime + when);
  }
  const tick = (f = 880, dur = .05, vol = .08) => {
    const ctx = audio(); if (!ctx) return;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.value = f; g.gain.setValueAtTime(vol, ctx.currentTime); g.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + dur);
    o.connect(g).connect(ctx.destination); o.start(); o.stop(ctx.currentTime + dur);
  };

  /* ================= 1. Тоғызқұмалақ ================= */
  // Ұялар: 0–8 — төменгі ойыншы (сен), 9–17 — жоғарғы ойыншы. Құмалақ сағат тіліне қарсы таралады.
  const T = {
    init: () => ({h: Array(18).fill(9), k: [0, 0], t: [-1, -1], turn: 0, over: false, winner: null}),
    moves: (s) => { const p = s.turn, r = []; for (let i = p * 9; i < p * 9 + 9; i++) if (s.h[i] > 0) r.push(i); return r; },
    apply(s, i, frames) {
      const p = s.turn, h = s.h.slice(), k = s.k.slice(), t = s.t.slice();
      const n = h[i]; h[i] = 0;
      const drop = (pos) => {
        if (pos === t[0]) k[0]++; else if (pos === t[1]) k[1]++; else h[pos]++;
        if (frames) frames.push({h: h.slice(), k: k.slice(), pos});
      };
      let pos = i;
      if (n === 1) { pos = (i + 1) % 18; drop(pos); }
      else { drop(i); for (let left = n - 1; left > 0; left--) { pos = (pos + 1) % 18; drop(pos); } }
      let event = null;
      if (Math.floor(pos / 9) !== p && pos !== t[0] && pos !== t[1]) {
        if (h[pos] % 2 === 0) { if (h[pos]) event = {type: "capture", n: h[pos], pos}; k[p] += h[pos]; h[pos] = 0; }
        else if (h[pos] === 3 && t[p] < 0 && pos % 9 !== 8 && !(t[1 - p] >= 0 && t[1 - p] % 9 === pos % 9)) {
          t[p] = pos; k[p] += 3; h[pos] = 0; event = {type: "tuzdyk", pos};
        }
      }
      const ns = {h, k, t, turn: 1 - p, over: false, winner: null, event};
      T.checkEnd(ns);
      if (frames) frames.push({h: ns.h.slice(), k: ns.k.slice(), pos: -1});
      return ns;
    },
    checkEnd(s) {
      if (s.k[0] > 81 || s.k[1] > 81) { s.over = true; s.winner = s.k[0] > 81 ? 0 : 1; return; }
      if (!T.moves(s).length) {
        const o = 1 - s.turn;
        for (let i = o * 9; i < o * 9 + 9; i++) { s.k[o] += s.h[i]; s.h[i] = 0; }
        s.over = true; s.winner = s.k[0] === s.k[1] ? -1 : s.k[0] > s.k[1] ? 0 : 1;
      }
    },
    evaluate(s, me) {
      if (s.over) return s.winner === me ? 1e4 : s.winner === -1 ? 0 : -1e4;
      let v = (s.k[me] - s.k[1 - me]) * 10;
      if (s.t[me] >= 0) v += 60 - Math.abs(4 - (s.t[me] % 9)) * 6;
      if (s.t[1 - me] >= 0) v -= 60 - Math.abs(4 - (s.t[1 - me] % 9)) * 6;
      // Қарсыласқа оңай олжа қалдырмау: менің жағымдағы жұп емес ұялар осал
      for (let i = me * 9; i < me * 9 + 9; i++) if (s.h[i] % 2 === 1) v -= 1;
      return v;
    },
    search(s, depth, me, a, b) {
      if (depth === 0 || s.over) return T.evaluate(s, me);
      const ms = T.moves(s);
      if (s.turn === me) {
        let best = -Infinity;
        for (const m of ms) { best = Math.max(best, T.search(T.apply(s, m), depth - 1, me, a, b)); a = Math.max(a, best); if (a >= b) break; }
        return best;
      }
      let best = Infinity;
      for (const m of ms) { best = Math.min(best, T.search(T.apply(s, m), depth - 1, me, a, b)); b = Math.min(b, best); if (a >= b) break; }
      return best;
    },
    choose(s, level) {
      const ms = T.moves(s), me = s.turn;
      if (level === 0 && Math.random() < .45) return ms[Math.floor(Math.random() * ms.length)];
      const depth = [1, 3, 6][level];
      let best = -Infinity, pick = [];
      for (const m of ms) {
        const v = T.search(T.apply(s, m), depth - 1, me, -Infinity, Infinity) + Math.random() * (level === 2 ? .1 : 4);
        if (v > best + 1e-9) { best = v; pick = [m]; } else if (Math.abs(v - best) < 1e-9) pick.push(m);
      }
      return pick[0];
    }
  };
  window.DALA_TOGUZ = T;

  function renderToguz(panel) {
    let s = T.init(), mode = "ai", level = 1, busy = false, last = -1, history = [];
    const box = make("div", null, "g2 g2-toguz");
    const top = make("div", null, "g2-bar");
    const modeSel = make("select", null, null, {"aria-label": "Ойын түрі"});
    [["ai", "Компьютерге қарсы"], ["two", "Екі адам бір құрылғыда"]].forEach(([v, t]) => modeSel.append(new Option(t, v)));
    const levelSel = make("select", null, null, {"aria-label": "Деңгей"});
    ["Жеңіл", "Орташа", "Қиын"].forEach((t, i) => levelSel.append(new Option(t, i)));
    levelSel.value = "1";
    const undo = btn("Жүрісті қайтару", () => { if (busy || !history.length) return; s = history.pop(); if (mode === "ai" && s.turn === 1 && history.length) s = history.pop(); last = -1; draw(); });
    top.append(modeSel, levelSel, btn("Жаңа ойын", () => newGame()), undo);
    modeSel.addEventListener("change", () => { mode = modeSel.value; levelSel.hidden = mode !== "ai"; newGame(); });
    levelSel.addEventListener("change", () => { level = +levelSel.value; newGame(); });
    const status = make("p", null, "g2-status", {"aria-live": "polite"});
    const board = make("div", null, "tg-board");
    const kazan = [make("div", null, "tg-kazan me"), make("div", null, "tg-kazan opp")];
    const rowOpp = make("div", null, "tg-row opp"), rowMe = make("div", null, "tg-row me");
    const holes = [];
    for (let i = 0; i < 18; i++) {
      const b = make("button", null, "tg-hole", {type: "button"});
      b.addEventListener("click", () => play(i));
      holes[i] = b;
    }
    for (let i = 17; i >= 9; i--) rowOpp.append(holes[i]);
    for (let i = 0; i < 9; i++) rowMe.append(holes[i]);
    board.append(kazan[1], rowOpp, rowMe, kazan[0]);
    const rules = make("details", null, "g2-rules");
    rules.append(make("summary", "Ойын ережесі"));
    [
      "Әр ойыншының 9 отауы бар, әр отауда 9 құмалақтан. Барлығы 162 құмалақ.",
      "Өз отауыңның бірін таңда. Бір құмалақ сол отауда қалады, қалғаны келесі отауларға сағат тіліне қарсы бір-бірден таралады. Отауда жалғыз құмалақ болса, ол келесі отауға көшеді.",
      "Соңғы құмалақ қарсыластың отауына түсіп, ондағы сан жұп болса, бәрі сенің қазаныңа түседі.",
      "Соңғы құмалақ қарсылас отауындағы санды 3-ке жеткізсе, ол отау сенің тұздығың болады. Тұздық бір ойында бір-ақ рет алынады, 9-отаудан алынбайды, қарсыласыңның тұздығымен бірдей нөмірлі отаудан да алынбайды. Тұздыққа түскен әр құмалақ сенікі.",
      "82 құмалақ жинаған жеңеді. 81:81 болса — тең. Жүретін құмалақ қалмаса, қалған құмалақтар иесінің қазанына түседі."
    ].forEach((t) => rules.append(make("p", t)));
    box.append(top, status, board, rules);
    panel.append(box);

    const name = (p) => mode === "ai" ? (p === 0 ? "Сен" : "Компьютер") : (p === 0 ? "Төменгі ойыншы" : "Жоғарғы ойыншы");
    function paintHole(i, count, s2) {
      const b = holes[i], own = i < 9 ? 0 : 1;
      const tz = s2.t[0] === i ? 0 : s2.t[1] === i ? 1 : -1;
      b.replaceChildren();
      const dots = make("span", null, "tg-dots", {"aria-hidden": "true"});
      for (let d = 0; d < Math.min(count, 24); d++) dots.append(make("i"));
      b.append(dots, make("span", `${own === 0 ? name(0) : name(1)}: `, "sr"), make("b", String(count)), make("span", " құмалақ, ", "sr"), make("small", String((i % 9) + 1)), make("span", `-отау${tz >= 0 ? `, ${name(tz)} тұздығы` : ""}`, "sr"));
      b.classList.toggle("tuz", tz >= 0);
      b.classList.toggle("last", i === last);
      const canPlay = !s2.over && !busy && s2.turn === own && count > 0 && (mode === "two" || own === 0);
      b.disabled = !canPlay;
    }
    function paint(st, hl = -1) {
      for (let i = 0; i < 18; i++) { paintHole(i, st.h[i], st); holes[i].classList.toggle("hl", i === hl); }
      [0, 1].forEach((p) => {
        kazan[p].replaceChildren(make("span", `${name(p)} қазаны`), make("b", String(st.k[p])));
        const bar = make("i"); bar.style.width = `${Math.min(100, st.k[p] / 82 * 100)}%`; kazan[p].append(bar);
      });
    }
    function draw() {
      paint(s);
      undo.disabled = busy || !history.length;
      if (s.over) {
        status.textContent = s.winner === -1 ? `Тең ойын: ${s.k[0]}:${s.k[1]}.` : `${name(s.winner)} жеңді! Есеп ${s.k[0]}:${s.k[1]}.`;
      } else status.textContent = busy ? "Құмалақтар таралып жатыр…" : `${mode === "ai" && s.turn === 0 ? "Сенің кезегің" : `${name(s.turn)} жүреді`}. Есеп ${s.k[0]}:${s.k[1]}.`;
    }
    async function animate(frames) {
      const delay = reduced() ? 0 : Math.max(35, Math.min(140, 1400 / frames.length));
      for (const f of frames) {
        if (!delay) break;
        paint({...s, h: f.h, k: f.k}, f.pos);
        if (f.pos >= 0) pluck(f.pos < 9 ? 392 : 294, .12);
        await new Promise((r) => setTimeout(r, delay));
      }
    }
    async function play(i) {
      if (busy || s.over) return;
      if (!T.moves(s).includes(i)) return;
      busy = true; history.push(s); last = i;
      const frames = []; const ns = T.apply(s, i, frames);
      await animate(frames);
      s = ns; busy = false;
      afterMove();
    }
    function afterMove() {
      if (s.event?.type === "tuzdyk") {
        const who = 1 - s.turn;
        status.textContent = `${name(who)} тұздық алды!`;
        if (mode === "ai" && who === 0) unlock("tuzdyk");
      }
      draw();
      if (s.event?.type === "tuzdyk") status.textContent = `${name(1 - s.turn)} тұздық алды! ` + status.textContent;
      else if (s.event?.type === "capture") status.textContent = `${name(1 - s.turn)} ${s.event.n} құмалақ алды. ` + status.textContent;
      if (s.over) return gameOver();
      if (mode === "ai" && s.turn === 1) {
        busy = true; draw();
        setTimeout(async () => {
          const m = T.choose(s, level);
          last = m;
          const frames = []; const ns = T.apply(s, m, frames);
          await animate(frames);
          s = ns; busy = false; afterMove();
        }, reduced() ? 50 : 450);
      }
    }
    function gameOver() {
      draw();
      if (mode !== "ai") return;
      if (s.winner === 0) { unlock("toguz-win"); if (level === 2) unlock("toguz-hard"); toast("Жеңіс!", `Тоғызқұмалақ: ${s.k[0]}:${s.k[1]}`); }
      finish("toguz", s.k[0], true, {win: s.winner === 0});
    }
    function newGame() { s = T.init(); history = []; last = -1; busy = false; draw(); }
    draw();
  }

  /* ================= 2. Асық ату (3D) ================= */
  function renderAsyk(panel) {
    const box = make("div", null, "g2 g2-asyk");
    const stage = make("div", null, "asyk-stage");
    const canvas = make("canvas", null, null, {tabindex: "0", "aria-label": "Асық ату алаңы. Бағыт: сол және оң бағыттауыш, күш: жоғары және төмен, ату: бос орын пернесі."});
    const hud = make("div", null, "asyk-hud", {"aria-live": "polite"});
    const msg = make("p", null, "asyk-msg");
    const tools = make("div", null, "g2-bar");
    stage.append(canvas, hud, msg);
    box.append(stage, tools,
      make("p", "Сақаны тышқанмен немесе саусақпен артқа тартып жібер — асықтарды шеңберден шығар. Әр деңгейде ату саны шектеулі. Пернетақта: ← → бағыт, ↑ ↓ күш, A/D сақаны жылжыту, бос орын — ату.", "g2-note"));
    panel.append(box);
    msg.textContent = "Алаң жүктеліп жатыр…";
    (window.DALA_LOAD3D ? window.DALA_LOAD3D() : Promise.reject(new Error("3d"))).then((m) => m.asyk({canvas, hud, msg, tools, btn, finish, unlock, toast})).catch((e) => {
      msg.textContent = "3D алаң ашылмады: браузер WebGL қолдамайды.";
      console.warn(e);
    });
  }

  /* ================= 3. Кім бұл? ================= */
  function renderWho(panel) {
    const people = (window.DALA_PEOPLE || []).filter((p) => p[3]);
    const eras = typeof HISTORY_ERAS !== "undefined" ? Object.fromEntries(HISTORY_ERAS.map((e) => [e[0], e[1]])) : {};
    const chapters = typeof HISTORY_CHAPTERS !== "undefined" ? Object.fromEntries(HISTORY_CHAPTERS.map((c) => [c.id, c])) : {};
    const GROUP = {ancient: "Ежелгі дәуір", medieval: "Орта ғасырлар", khanate: "Қазақ хандығы", modern: "Жаңа және қазіргі заман"};
    const ROUNDS = 8;
    let round, score, order, cur, level, done;
    const box = make("div", null, "g2 g2-who");
    const bar = make("div", null, "g2-bar");
    const info = make("p", null, "g2-status", {"aria-live": "polite"});
    const card = make("div", null, "who-card");
    const opts = make("div", null, "who-opts");
    const after = make("div", null, "who-after");
    box.append(bar, info, card, opts, after);
    panel.append(box);
    bar.append(btn("Жаңа ойын", () => start()), make("span", "", "g2-best", {"data-best": "who", "data-unit": " ұпай"}));
    const mask = (text, nm) => {
      let out = text;
      nm.split(/[\s-]+/).filter((w) => w.length > 2).forEach((w) => {
        const stem = w.slice(0, Math.max(3, w.length - 2)).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        out = out.replace(new RegExp(`(^|[\\s«(])${stem}[^\\s,.;:»)]*`, "giu"), "$1…");
      });
      return out;
    };
    function clues(p) {
      const ch = chapters[p[4]];
      return [
        ["Дәуірі", `${GROUP[p[2]] || eras[p[2]] || ""} · ${p[1]}`],
        ["Қай оқиғаға қатысты", ch ? `${ch.title} (${ch.date})` : "Сайттағы тарихи бөлім"],
        ["Ол туралы", mask(p[3], p[0])],
        ["Аты", `«${p[0][0]}» әрпінен басталады, ${p[0].replace(/\s/g, "").length} әріп`]
      ];
    }
    function start() {
      round = 0; score = 0; order = shuffle(people).slice(0, ROUNDS); refreshScore(); next();
    }
    function next() {
      after.replaceChildren();
      if (round >= ROUNDS) return end();
      cur = order[round]; level = 1; done = false;
      const same = shuffle(people.filter((p) => p !== cur && p[2] === cur[2]));
      const rest = shuffle(people.filter((p) => p !== cur && p[2] !== cur[2]));
      const choices = shuffle([cur, ...[...same, ...rest].slice(0, 3)]);
      opts.replaceChildren(...choices.map((p) => btn(p[0], (e) => answer(p, e.currentTarget), "x-option")));
      showClues();
    }
    function showClues() {
      const cs = clues(cur);
      card.replaceChildren();
      cs.forEach(([k, v], i) => {
        const row = make("div", null, "who-clue" + (i < level ? "" : " hidden"));
        row.append(make("small", `${i + 1}-кілт · ${k}`), make("p", i < level ? v : "Жабық"));
        card.append(row);
      });
      if (!done && level < 4) card.append(btn(`Келесі кілтті ашу (−1 ұпай)`, () => { level++; showClues(); }, "btn btn-line who-more"));
      info.textContent = `${round + 1}/${ROUNDS}-тұлға · ұпай: ${score} · қазір дұрыс жауап ${5 - level} ұпай береді`;
    }
    function answer(p, el) {
      if (done) return;
      done = true;
      const ok = p === cur, gain = ok ? 5 - level : 0;
      score += gain;
      [...opts.children].forEach((b) => { b.disabled = true; if (b.textContent === cur[0]) b.classList.add("right"); });
      if (!ok) el.classList.add("wrong");
      level = 4; showClues();
      tick(ok ? 990 : 220, .12);
      after.replaceChildren(make("p", ok ? `Дұрыс! +${gain} ұпай.` : `Бұл — ${cur[0]}.`, "who-verdict"),
        make("p", cur[3]),
        btn(round + 1 < ROUNDS ? "Келесі тұлға" : "Нәтижені көру", () => { round++; next(); }, "btn btn-gold"));
      info.textContent = `${round + 1}/${ROUNDS}-тұлға · ұпай: ${score}`;
    }
    function end() {
      const record = finish("who", score);
      if (score >= 30) unlock("who-30");
      card.replaceChildren(make("p", `Ойын аяқталды: ${score} ұпай (ең көбі ${ROUNDS * 4}).${record ? " Жаңа рекорд!" : ""}`, "who-verdict"));
      opts.replaceChildren(); after.replaceChildren(btn("Қайта ойнау", () => start(), "btn btn-gold"));
      info.textContent = "";
    }
    start();
  }

  /* ================= 4. Сөзжұмбақ ================= */
  const WORDS = [
    ["бәйге", "Ұзақ қашықтыққа шабылатын ат жарысы. Той мен мерекенің басты сайысы."],
    ["қобыз", "Қыл қобыз — ысқышпен тартылатын көне аспап. Аңыз бойынша оны Қорқыт ата жасаған."],
    ["шапан", "Ұзын, кең сырт киім. Құрметті қонаққа шапан жабу — ежелгі салт."],
    ["тұмар", "Бойтұмар. Сақ патшайымы Томиристің есімі де «Тұмар» деп айтылады."],
    ["жырау", "Хан қасындағы ойшыл ақын, кеңесші. Асан қайғы, Бұқар жырау — белгілі жыраулар."],
    ["тараз", "Екі мың жылдан астам тарихы бар көне қала. Ұлы Жібек жолының бойында тұрған."],
    ["түрік", "552 жылы құрылған Түрік қағанаты Ұлы Даланы біріктірген алып мемлекет болды."],
    ["қаған", "Түркі мемлекеттерінің жоғарғы билеушісі. Бумын, Істемі — алғашқы қағандар."],
    ["батыр", "Елін қорғаған ер. Қабанбай, Бөгенбай, Наурызбай — XVIII ғасырдың батырлары."],
    ["тарих", "Өткен оқиғалар туралы ғылым. Бұл сайттың басты тақырыбы."],
    ["сарай", "Алтын Орданың астанасы Сарай деп аталған. Сарайшық — Жайық бойындағы қала."],
    ["қылыш", "Ұзын жүзді суық қару. Батырлардың сенімді серігі."],
    ["садақ", "Жебе ататын қару. Сақтар мен ғұндар садақты атпен шауып келе атқан."],
    ["найза", "Ұзын сапқа орнатылған өткір ұш. Атты әскердің негізгі қаруы."],
    ["бөрік", "Аң терісімен әдіптелген жылы бас киім."],
    ["жүзік", "Саусаққа салатын әшекей. Қазақ зергерлері күмістен жүзік соққан."],
    ["ертіс", "Қазақстанның ең ұзын өзендерінің бірі. Бойында Павлодар, Семей, Өскемен тұр."],
    ["жібек", "Ұлы Жібек жолы — Қытайдан Еуропаға дейін созылған сауда жолы."],
    ["алтын", "Есік қорғанынан табылған «Алтын адам» — сақ дәуірінің ұлы олжасы."],
    ["тамға", "Ру белгісі. Малға, тасқа, теңгеге басылған."],
    ["жарғы", "«Жеті жарғы» — Тәуке хан тұсындағы заңдар жинағы."],
    ["құрық", "Жылқы ұстайтын ұзын сырық. Ұшында тұзақ бар."],
    ["бесік", "Сәбиге арналған ағаш төсек. Бесікке салу — ерекше той."],
    ["тұсау", "Тұсаукесер — сәбидің алғашқы қадамына арналған салт."],
    ["күрес", "Қазақ күресі — белбеуден ұстап алысатын ұлттық сайыс."],
    ["күйші", "Күй шығарып, орындайтын домбырашы. Құрманғазы, Дәулеткерей, Тәттімбет — ұлы күйшілер."],
    ["мүйіз", "Қошқар мүйіз — қазақ оюының ең көп тараған өрнегі."],
    ["қымыз", "Бие сүтінен ашытылған сусын. Көшпелілердің басты асы."],
    ["қазан", "Ас пісіретін үлкен ыдыс. Тоғызқұмалақта жинаған құмалақ та «қазанға» түседі."],
    ["сауыт", "Темір тордан тоқылған қорғаныс киімі."],
    ["түмен", "Он мың адамдық әскер бөлімі. Ұлыстардың әскери құрылымы."],
    ["әскер", "Елді қорғайтын қарулы күш."],
    ["кеңес", "Ақылдасу. Кеңестік кезең — 1920–1991 жылдар."],
    ["тоқым", "Ер-тұрманның ердің астына салатын бөлігі."],
    ["ырғыз", "Ырғыз өзені мен бекінісі. Ыбырай Алтынсарин осында мектеп ашқан."]
  ].filter(([w]) => [...w].length === 5);
  window.DALA_WORDS = WORDS;
  const KZ = "аәбвгғдеёжзийкқлмнңоөпрстуұүфхһцчшщъыіьэюя";
  function renderWord(panel) {
    const LEN = 5, TRIES = 6;
    const KEYS = ["әіңғүұқөһ", "йцукенгшщзхъ", "фывапролджэ", "ячсмитьбю"];
    let target, guesses, cur, over, daily;
    const box = make("div", null, "g2 g2-word");
    const bar = make("div", null, "g2-bar");
    const info = make("p", null, "g2-status", {"aria-live": "polite"});
    const grid = make("div", null, "wd-grid", {role: "grid", "aria-label": "Сөзжұмбақ торы"});
    const kb = make("div", null, "wd-kb");
    const after = make("div", null, "wd-after");
    box.append(bar, info, grid, kb, after,
      make("p", "Тарих пен мәдениетке қатысты 5 әріпті сөзді 6 әрекетте тап. Жасыл — әріп орнында, сары — сөзде бар, бірақ басқа орында, сұр — сөзде жоқ.", "g2-note"));
    panel.append(box);
    bar.append(btn("Күннің сөзі", () => start(true)), btn("Кездейсоқ сөз", () => start(false)), make("span", "", "g2-best", {"data-best": "word", "data-unit": " ұпай"}));
    const keyBtns = new Map();
    KEYS.forEach((row, ri) => {
      const r = make("div", null, "wd-row");
      if (ri === 3) r.append(btn("Енгізу", () => press("Enter"), "wd-key wide"));
      [...row].forEach((ch) => { const b = btn(ch, () => press(ch), "wd-key"); keyBtns.set(ch, b); r.append(b); });
      r.addEventListener("mousedown", (e) => { if (e.target.closest("button")) e.preventDefault(); });
      if (ri === 3) r.append(btn("⌫", () => press("Backspace"), "wd-key wide", {"aria-label": "Өшіру"}));
      kb.append(r);
    });
    const SKEY_W = "dala-murasy-word-v1";
    function start(isDaily) {
      daily = isDaily;
      target = isDaily ? WORDS[((dayIndex() * 7) % WORDS.length + WORDS.length) % WORDS.length] : WORDS[Math.floor(Math.random() * WORDS.length)];
      guesses = []; cur = ""; over = false; after.replaceChildren();
      if (isDaily) {
        try { const d = JSON.parse(localStorage.getItem(SKEY_W) || "{}"); if (d.date === today() && d.word === target[0]) { guesses = d.guesses; over = d.over; } } catch {}
      }
      keyBtns.forEach((b) => b.className = "wd-key");
      guesses.forEach((g) => colorKeys(g, score(g)));
      draw();
      if (over) result(guesses[guesses.length - 1] === target[0], false);
      info.textContent = isDaily ? `Күннің сөзі (${today()})` : "Кездейсоқ сөз";
    }
    function score(g) {
      const t = [...target[0]], a = [...g], res = Array(LEN).fill("absent"), left = {};
      t.forEach((ch, i) => { if (a[i] !== ch) left[ch] = (left[ch] || 0) + 1; });
      a.forEach((ch, i) => { if (ch === t[i]) res[i] = "correct"; else if (left[ch]) { res[i] = "present"; left[ch]--; } });
      return res;
    }
    function colorKeys(g, res) {
      const rank = {absent: 1, present: 2, correct: 3};
      [...g].forEach((ch, i) => { const b = keyBtns.get(ch); if (!b) return; const old = b.dataset.state; if (!old || rank[res[i]] > rank[old]) { b.dataset.state = res[i]; b.className = "wd-key " + res[i]; } });
    }
    const NAMES = {correct: "орнында", present: "басқа орында", absent: "жоқ"};
    function draw(revealRow = -1) {
      grid.replaceChildren();
      for (let r = 0; r < TRIES; r++) {
        const row = make("div", null, "wd-line", {role: "row"});
        const word = r < guesses.length ? guesses[r] : r === guesses.length ? cur : "";
        const res = r < guesses.length ? score(guesses[r]) : null;
        for (let c = 0; c < LEN; c++) {
          const ch = [...word][c] || "";
          const tile = make("span", ch, "wd-tile" + (res ? " " + res[c] : ch ? " filled" : ""), {role: "gridcell", "aria-label": ch ? `${ch}${res ? ", " + NAMES[res[c]] : ""}` : "бос"});
          if (r === revealRow && !reduced()) tile.style.animationDelay = `${c * 120}ms`, tile.classList.add("flip");
          row.append(tile);
        }
        grid.append(row);
      }
    }
    function persist() { if (daily) try { localStorage.setItem(SKEY_W, JSON.stringify({date: today(), word: target[0], guesses, over})); } catch {} }
    function press(k) {
      if (over) return;
      if (k === "Enter") {
        if ([...cur].length < LEN) { info.textContent = "Сөз 5 әріптен тұруы керек."; grid.children[guesses.length]?.classList.add("shake"); setTimeout(() => grid.children[guesses.length]?.classList.remove("shake"), 400); return; }
        guesses.push(cur); const res = score(cur); colorKeys(cur, res); cur = "";
        const win = guesses[guesses.length - 1] === target[0];
        draw(guesses.length - 1);
        tick(win ? 990 : 520, .08);
        if (win || guesses.length >= TRIES) { over = true; setTimeout(() => result(win, true), reduced() ? 0 : 700); }
        persist();
        return;
      }
      if (k === "Backspace") { cur = [...cur].slice(0, -1).join(""); draw(); return; }
      const ch = k.toLocaleLowerCase("kk");
      if ([...ch].length === 1 && KZ.includes(ch) && [...cur].length < LEN) { cur += ch; draw(); }
    }
    function result(win, fresh) {
      const n = guesses.length;
      const pts = win ? (TRIES + 1 - n) * 10 : 0;
      if (fresh) { finish("word", pts); if (win) { unlock("word-win"); if (n <= 3) unlock("word-3"); } }
      const share = `Дала мұрасы · сөзжұмбақ ${daily ? today() : ""} ${win ? n : "X"}/${TRIES}\n` + guesses.map((g) => score(g).map((r) => r === "correct" ? "🟩" : r === "present" ? "🟨" : "⬜").join("")).join("\n");
      after.replaceChildren(
        make("p", win ? `Тамаша! «${target[0].toLocaleUpperCase("kk")}» сөзін ${n}-әрекетте таптың. +${pts} ұпай.` : `Сөз: «${target[0].toLocaleUpperCase("kk")}».`, "who-verdict"),
        make("p", target[1]),
        btn("Нәтижені көшіру", async (e) => { try { await navigator.clipboard.writeText(share); e.target.textContent = "Көшірілді"; } catch { e.target.textContent = "Көшіру мүмкін болмады"; } }),
        btn("Кездейсоқ сөз", () => start(false), "btn btn-gold"));
    }
    document.addEventListener("keydown", (e) => {
      if (panel.hidden || e.ctrlKey || e.metaKey || e.altKey || e.target.closest("input,textarea,select,dialog")) return;
      const r = panel.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
      if (e.key === "Enter" || e.key === "Backspace" || ([...e.key].length === 1 && KZ.includes(e.key.toLocaleLowerCase("kk")))) {
        if (e.key === "Enter" && e.target.closest("button")) return;
        e.preventDefault(); press(e.key);
      }
    });
    start(true);
  }

  /* ================= 5. Күй жады ================= */
  function renderKuy(panel) {
    // Домбыраның «ре–ля» бұрауына жақын бес дыбыс
    const NOTES = [["Ре", 146.83], ["Ми", 164.81], ["Соль", 196], ["Ля", 220], ["До", 261.63], ["Ре²", 293.66]];
    let seq = [], pos = 0, state = "idle";
    const box = make("div", null, "g2 g2-kuy");
    const info = make("p", "Домбыра әуенін тыңда да, сол ретпен қайтала. Әр айналымда бір нота қосылады.", "g2-status", {"aria-live": "polite"});
    const neck = make("div", null, "kuy-neck");
    const pads = NOTES.map(([nm, f], i) => {
      const b = make("button", null, "kuy-pad", {type: "button"});
      b.style.setProperty("--i", i);
      b.append(make("b", nm), make("small", String(i + 1)));
      b.addEventListener("pointerdown", (e) => { e.preventDefault(); hit(i); });
      b.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); hit(i); } });
      neck.append(b); return b;
    });
    const bar = make("div", null, "g2-bar");
    const startBtn = btn("Бастау", () => begin(), "btn btn-gold");
    bar.append(startBtn, make("span", "", "g2-best", {"data-best": "kuy", "data-unit": " нота"}));
    box.append(info, neck, bar, make("p", "Пернетақта: 1–6 сандары.", "g2-note"));
    panel.append(box);
    const flash = (i, ms = 260) => { pads[i].classList.add("on"); pluck(NOTES[i][1], .55); setTimeout(() => pads[i].classList.remove("on"), ms); };
    function begin() { seq = []; audio(); addNote(); }
    function addNote() {
      seq.push(Math.floor(Math.random() * NOTES.length));
      state = "listen"; pos = 0;
      info.textContent = `Тыңда: ${seq.length} нота`;
      const gap = Math.max(260, 620 - seq.length * 22);
      seq.forEach((n, k) => setTimeout(() => flash(n, gap * .7), 500 + k * gap));
      setTimeout(() => { state = "play"; info.textContent = `Енді сен қайтала (${seq.length} нота)`; }, 500 + seq.length * gap);
    }
    function hit(i) {
      if (state !== "play") { if (state === "idle") flash(i); return; }
      flash(i, 180);
      if (i !== seq[pos]) {
        state = "idle";
        const got = seq.length - 1;
        const record = got > 0 && finish("kuy", got);
        info.textContent = got ? `Қате нота! Сен ${got} нотаны жаңылмай қайталадың.${record ? " Жаңа рекорд!" : ""}` : "Алғашқы нотадан жаңылдың. Қайта тыңдап көр.";
        startBtn.textContent = "Қайта бастау";
        return;
      }
      pos++;
      if (pos === seq.length) {
        if (seq.length >= 8) unlock("kuy-8");
        if (seq.length >= 15) unlock("kuy-15");
        state = "wait"; info.textContent = "Дұрыс!"; setTimeout(addNote, 700);
      }
    }
    document.addEventListener("keydown", (e) => {
      if (panel.hidden || e.target.closest("input,textarea,select,dialog")) return;
      const n = +e.key; if (n >= 1 && n <= NOTES.length) { e.preventDefault(); hit(n - 1); }
    });
  }

  /* ================= 6. Жұп тап ================= */
  function renderPairs(panel) {
    const people = (window.DALA_PEOPLE || []);
    const chapters = typeof HISTORY_CHAPTERS !== "undefined" ? HISTORY_CHAPTERS : [];
    let mode = "events", cards = [], open = [], moves = 0, found = 0, t0 = 0, timer = 0, lock = false;
    const box = make("div", null, "g2 g2-pairs");
    const bar = make("div", null, "g2-bar");
    const sel = make("select", null, null, {"aria-label": "Жұп түрі"});
    [["events", "Оқиға — уақыт"], ["people", "Тұлға — ғасыр"]].forEach(([v, t]) => sel.append(new Option(t, v)));
    sel.addEventListener("change", () => { mode = sel.value; start(); });
    bar.append(sel, btn("Жаңа ойын", () => start()), make("span", "", "g2-best", {"data-best": "pairs", "data-unit": " жүріс"}));
    const info = make("p", null, "g2-status", {"aria-live": "polite"});
    const grid = make("div", null, "pr-grid");
    box.append(bar, info, grid);
    panel.append(box);
    function pick() {
      const seen = new Set(), out = [];
      if (mode === "events") {
        for (const c of shuffle(chapters)) { if (!c.date || seen.has(c.date) || out.length >= 8) continue; seen.add(c.date); out.push([c.title, c.date, c.era]); }
      } else {
        for (const p of shuffle(people)) { const y = p[1].split(",")[0]; if (seen.has(y) || out.length >= 8) continue; seen.add(y); out.push([p[0], y, p[2]]); }
      }
      return out;
    }
    function start() {
      clearInterval(timer); moves = 0; found = 0; open = []; lock = false; t0 = 0;
      cards = shuffle(pick().flatMap(([a, b, era], id) => [{id, text: a, kind: "a", era}, {id, text: b, kind: "b", era}]));
      grid.replaceChildren(...cards.map((c, i) => {
        const b = make("button", null, "pr-card", {type: "button"});
        const inner = make("span", null, "pr-inner");
        c.back = make("span", null, "pr-back"); c.back.append(make("span", "Жабық карта", "sr"));
        c.face = make("span", null, "pr-face " + c.kind);
        inner.append(c.back, c.face);
        b.append(inner); b.addEventListener("click", () => flip(i)); c.el = b; return b;
      }));
      status();
    }
    const secs = () => t0 ? Math.round((Date.now() - t0) / 1000) : 0;
    const status = () => { info.textContent = `Жүріс: ${moves} · табылған жұп: ${found}/${cards.length / 2} · уақыт: ${secs()} с`; };
    function flip(i) {
      const c = cards[i];
      if (lock || c.done || open.includes(c)) return;
      if (!t0) { t0 = Date.now(); timer = setInterval(status, 1000); }
      c.el.classList.add("open"); c.face.textContent = c.text; c.back.replaceChildren();
      open.push(c); tick(660, .04, .05);
      if (open.length < 2) return;
      moves++;
      const [a, b] = open;
      if (a.id === b.id) {
        a.done = b.done = true; open = []; found++;
        [a, b].forEach((x) => { x.el.classList.add("done"); x.el.disabled = true; });
        pluck(330 + found * 30, .3);
        if (found === cards.length / 2) {
          clearInterval(timer);
          const record = finish("pairs", moves, false, {points: Math.max(10, 100 - (moves - 8) * 5)});
          if (moves < 12) unlock("pairs-12");
          info.textContent = `Бәрі табылды! ${moves} жүріс, ${secs()} секунд.${record ? " Жаңа рекорд!" : ""}`;
          return;
        }
      } else {
        lock = true;
        setTimeout(() => {
          [a, b].forEach((x) => { x.el.classList.remove("open"); x.back.replaceChildren(make("span", "Жабық карта", "sr")); setTimeout(() => { if (!x.el.classList.contains("open")) x.face.textContent = ""; }, 460); });
          open = []; lock = false;
        }, 950);
      }
      status();
    }
    start();
  }

  /* ================= Жетістіктер ================= */
  function renderAch(panel) {
    const box = make("div", null, "g2 g2-ach");
    const draw = () => {
      S = load();
      box.replaceChildren();
      const stats = make("div", null, "ach-stats");
      Object.entries(GAMES).forEach(([id, nm]) => {
        const c = make("div", null, "ach-stat");
        const b = S.best[id];
        c.append(make("strong", nm), make("span", b == null ? "Әлі ойналмады" : `Рекорд: ${b}${id === "pairs" ? " жүріс" : id === "kuy" ? " нота" : id === "bayge" ? " с" : ""}`), make("small", `Ойналды: ${S.plays[id] || 0} рет`));
        stats.append(c);
      });
      const list = make("ul", null, "ach-list");
      ACH.forEach(([id, title, text]) => {
        const li = make("li", null, S.ach[id] ? "got" : "");
        li.append(make("i", S.ach[id] ? "✦" : "◇", null, {"aria-hidden": "true"}), make("strong", title), make("span", text), make("small", S.ach[id] ? `Алынды: ${S.ach[id]}` : "Әлі алынбады"));
        list.append(li);
      });
      const dclone = dailyBox.cloneNode(true); dclone.classList.add("in-ach");
      box.append(make("p", `Жалпы ұпай: ${S.points}. Жетістік: ${Object.keys(S.ach).length}/${ACH.length}.`, "g2-status"), dclone, stats, make("h3", "Жетістіктер"), list,
        make("h3", "Прогресті сақтау"),
        make("p", "Ұпайларың мен жетістіктерің тек осы браузерде сақталады. Басқа құрылғыға көшіру үшін файлға сақтап, сол жақта қайта жүкте. ЖИ гидтің кілттері файлға кірмейді.", "g2-note"),
        backupBar, confirmReset);
    };
    const confirmReset = make("p", null, "g2-confirm"); confirmReset.hidden = true;
    const fileIn = make("input", null, "sr", {type: "file", accept: ".json,application/json", "aria-label": "Прогресс файлын таңдау"});
    const backupBar = make("div", null, "g2-bar");
    const backupMsg = make("span", "", "g2-note", {"aria-live": "polite"});
    backupBar.append(
      btn("Файлға сақтау", () => {
        const data = {app: "dala-murasy", version: 1, saved: new Date().toISOString(), keys: {}};
        for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith("dala-murasy") && !k.includes("guide")) data.keys[k] = localStorage.getItem(k); }
        const a = make("a", null, null, {href: URL.createObjectURL(new Blob([JSON.stringify(data, null, 1)], {type: "application/json"})), download: `Dala-murasy-progress-${today()}.json`});
        document.body.append(a); a.click(); a.remove(); backupMsg.textContent = "Файл сақталды.";
      }, "btn btn-gold"),
      btn("Файлдан қалпына келтіру", () => fileIn.click()),
      btn("Нәтижелерді тазалау", () => { confirmReset.hidden = false; }),
      fileIn, backupMsg);
    fileIn.addEventListener("change", async () => {
      const f = fileIn.files[0]; if (!f) return;
      try {
        const data = JSON.parse(await f.text());
        if (data.app !== "dala-murasy" || typeof data.keys !== "object") throw new Error("format");
        let n = 0;
        for (const [k, v] of Object.entries(data.keys)) if (k.startsWith("dala-murasy") && !k.includes("guide") && typeof v === "string") { localStorage.setItem(k, v); n++; }
        S = load(); refreshScore(); draw(); backupMsg.textContent = `Қалпына келтірілді: ${n} жазба.`;
      } catch { backupMsg.textContent = "Бұл файл «Дала мұрасының» прогресс файлы емес."; }
      fileIn.value = "";
    });
    confirmReset.append(make("span", "Барлық ұпай мен жетістік өшеді. "), btn("Иә, тазалау", () => { localStorage.removeItem(SKEY); S = load(); refreshScore(); confirmReset.hidden = true; draw(); }, "btn btn-gold"), btn("Жоқ", () => { confirmReset.hidden = true; }));
    panel.append(box);
    draw();
    panel.addEventListener("g2:show", draw);
  }

  /* ================= 7. Бәйге (3D) ================= */
  function renderBayge(panel) {
    const box = make("div", null, "g2 g2-bayge");
    const stage = make("div", null, "asyk-stage bayge-stage");
    const canvas = make("canvas", null, null, {tabindex: "0", "aria-label": "Бәйге: 3D ат жарысы. Бос орын не жоғары бағыттауыш — қамшы."});
    const hud = make("div", null, "asyk-hud", {"aria-live": "off"});
    const msg = make("p", null, "asyk-msg", {"aria-live": "polite"});
    const rh = make("div", null, "bayge-rhythm", {"aria-hidden": "true"});
    const bar = make("div", null, "rh-bar"), zone = make("i", null, "rh-zone"), mark = make("b", null, "rh-mark");
    bar.append(zone, mark);
    const stam = make("div", null, "rh-stamina"), stamFill = make("i"); stam.append(stamFill);
    rh.append(make("small", "Ырғақ"), bar, make("small", "Тыныс"), stam);
    stage.append(canvas, hud, msg, rh);
    const tools = make("div", null, "g2-bar");
    tools.append(make("span", "", "g2-best", {"data-best": "bayge", "data-unit": " с"}));
    box.append(stage, tools, make("p", "Сенің атың — Тайбурыл. Сары белгі жасыл аймаққа жеткенде бассаң, ат қатты екпін алады. Тым жиі басқанда ат шаршайды — «Тыныс» жолағына қара. Қашықтық 320 метр, бес жүйрікпен жарысасың.", "g2-note"));
    panel.append(box);
    const rhythm = {
      set(phase, stamina) { mark.style.left = `${phase * 100}%`; stamFill.style.width = `${stamina * 100}%`; stam.classList.toggle("low", stamina < .15); },
      flash(perfect) { bar.classList.remove("ok", "hit"); void bar.offsetWidth; bar.classList.add(perfect ? "ok" : "hit"); tick(perfect ? 1040 : 520, .05, .06); }
    };
    msg.textContent = "Жарыс алаңы жүктеліп жатыр…";
    (window.DALA_LOAD3D ? window.DALA_LOAD3D() : Promise.reject(new Error("3d"))).then((m) => m.bayge({canvas, hud, msg, tools, btn, finish, unlock, toast, rhythm})).catch((e) => { msg.textContent = "3D алаң ашылмады: браузер WebGL қолдамайды."; console.warn(e); });
  }

  /* ================= Киіз үйіңді безендір (мәдениет бөлімінде) ================= */
  const yurtHost = document.getElementById("yurt-design");
  if (yurtHost) {
    const ob = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      ob.disconnect();
      yurtHost.append(make("h3", "Киіз үйіңді безендір"), make("p", "Киіздің түсін, басқұрдың оюын және есікті таңда. Өзің салған оюды да жапсыра аласың. Киіз үйді тышқанмен не саусақпен айналдыр.", "lead"));
      (window.DALA_LOAD3D ? window.DALA_LOAD3D() : Promise.reject(new Error("3d"))).then((m) => m.yurt({host: yurtHost, make, btn})).catch((e) => { yurtHost.append(make("p", "3D көрініс ашылмады: браузер WebGL қолдамайды.")); console.warn(e); });
    }, {rootMargin: "500px"});
    ob.observe(yurtHost);
  }

  // Ойын панелі ашылған сайын рекордтар жаңарады
  document.addEventListener("g2:show", refreshScore, true);
  window.DALA_GAMES = {
    "tab-toguz": renderToguz, "tab-asyk": renderAsyk, "tab-bayge": renderBayge, "tab-who": renderWho, "tab-word": renderWord,
    "tab-kuy": renderKuy, "tab-pairs": renderPairs, "tab-ach": renderAch
  };
  window.DALA_SCORE = {finish, unlock, toast, state: () => load(), ACH, GAMES};
})();
