"use strict";
// Дала мұрасы · ою-өрнек құрастырғыш: симметриялы өрнек салу, қошқар мүйіз мөрі, PNG ретінде сақтау
(() => {
  const host = document.getElementById("oyu");
  if (!host) return;
  const make = (tag, text, cls, attrs) => { const n = document.createElement(tag); if (text) n.textContent = text; if (cls) n.className = cls; if (attrs) for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v); return n; };
  const SIZE = 900;
  const BG = [["#9e2f28", "Қызыл киіз"], ["#14324c", "Көк"], ["#ece3d0", "Ақ киіз"], ["#2f4a2a", "Жасыл"]];
  const FG = [["#e8bf6a", "Алтын"], ["#f6f0e2", "Ақ"], ["#1d4566", "Көк"], ["#a2322b", "Қызыл"]];
  const state = {bg: BG[0][0], fg: FG[0][0], sym: 8, width: 16, mode: "horn", frame: true, items: []};
  const canvas = make("canvas", null, "oyu-canvas", {width: SIZE, height: SIZE, role: "img", "aria-label": "Ою-өрнек салатын алаң. Басып немесе сүйреп өрнек сал."});
  const ctx = canvas.getContext("2d");

  function horn(g, x, y, s, rot) {
    const lw = g.lineWidth;
    g.save(); g.translate(x, y); g.rotate(rot); g.scale(s, s); g.lineWidth = lw / s;
    for (const d of [-1, 1]) {
      g.beginPath(); g.moveTo(0, 10);
      g.bezierCurveTo(d * 3, -2, d * 16, -8, d * 22, 2);
      g.bezierCurveTo(d * 26, 10, d * 18, 17, d * 13, 12);
      g.bezierCurveTo(d * 9, 8, d * 13, 4, d * 16, 7);
      g.stroke();
    }
    g.beginPath(); g.moveTo(0, 10); g.lineTo(0, 24); g.stroke();
    g.restore();
  }
  // Симметрия: нүктені N есе бұрып, айнадай шағылыстырамыз
  function forSym(fn) {
    const c = SIZE / 2, n = state.sym;
    for (let k = 0; k < n; k++) {
      const a = k / n * Math.PI * 2;
      for (const mirror of [1, -1]) {
        ctx.save(); ctx.translate(c, c); ctx.rotate(a); ctx.scale(mirror, 1); ctx.translate(-c, -c);
        fn(); ctx.restore();
      }
    }
  }
  function draw() {
    ctx.fillStyle = state.bg; ctx.fillRect(0, 0, SIZE, SIZE);
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    if (state.frame) {
      ctx.strokeStyle = state.fg; ctx.lineWidth = 10; ctx.strokeRect(28, 28, SIZE - 56, SIZE - 56);
      ctx.lineWidth = 4; ctx.strokeRect(48, 48, SIZE - 96, SIZE - 96);
      ctx.lineWidth = 5;
      for (let x = 100; x < SIZE - 60; x += 70) { horn(ctx, x, 6, 1.1, 0); horn(ctx, x, SIZE - 6, 1.1, Math.PI); }
    }
    for (const it of state.items) {
      ctx.strokeStyle = it.color; ctx.lineWidth = it.width;
      forSym(() => {
        if (it.type === "horn") { ctx.lineWidth = Math.max(5, it.width * .55); horn(ctx, it.x, it.y, it.width / 4.2, Math.atan2(it.y - SIZE / 2, it.x - SIZE / 2) + Math.PI / 2); return; }
        ctx.beginPath(); it.pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
      });
    }
  }
  const point = (e) => { const r = canvas.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * SIZE, (e.clientY - r.top) / r.height * SIZE]; };
  let drawing = null;
  canvas.addEventListener("pointerdown", (e) => {
    canvas.setPointerCapture(e.pointerId);
    const [x, y] = point(e);
    if (state.mode === "horn") { state.items.push({type: "horn", x, y, color: state.fg, width: state.width}); draw(); return; }
    drawing = {type: "line", pts: [[x, y]], color: state.fg, width: state.width};
    state.items.push(drawing);
  });
  canvas.addEventListener("pointermove", (e) => { if (!drawing) return; drawing.pts.push(point(e)); draw(); });
  const stop = () => { drawing = null; };
  canvas.addEventListener("pointerup", stop); canvas.addEventListener("pointercancel", stop);
  // Пернетақтамен: Enter — ортаға мөр басу
  canvas.tabIndex = 0;
  canvas.addEventListener("keydown", (e) => { if (e.key === "Enter") { state.items.push({type: "horn", x: SIZE / 2, y: SIZE * .32, color: state.fg, width: state.width}); draw(); } });

  function random() {
    state.items = [];
    const rings = 2 + Math.floor(Math.random() * 3);
    for (let r = 0; r < rings; r++) {
      const radius = 80 + r * 95 + Math.random() * 30;
      state.items.push({type: "horn", x: SIZE / 2, y: SIZE / 2 - radius, color: FG[Math.floor(Math.random() * 2)][0], width: 10 + Math.random() * 14});
    }
    const pts = []; for (let i = 0; i <= 30; i++) { const t = i / 30; pts.push([SIZE / 2 + Math.sin(t * Math.PI) * 60, SIZE / 2 - 20 - t * 360]); }
    state.items.push({type: "line", pts, color: state.fg, width: 7});
    draw();
  }

  // Басқару тақтасы
  const tools = make("div", null, "oyu-tools");
  const group = (label, opts, key, onPick) => {
    const f = make("fieldset", null, "oyu-group"); f.append(make("legend", label));
    for (const [value, name, swatch] of opts) {
      const b = make("button", swatch ? "" : name, "oyu-opt", {type: "button", "aria-pressed": String(state[key] === value), title: name});
      if (swatch) { b.style.background = value; b.setAttribute("aria-label", name); }
      b.addEventListener("click", () => { state[key] = value; f.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); onPick?.(); draw(); });
      f.append(b);
    }
    return f;
  };
  tools.append(
    group("Құрал", [["horn", "Қошқар мүйіз мөрі"], ["line", "Еркін сызу"]], "mode"),
    group("Симметрия", [[4, "4 бөлік"], [6, "6 бөлік"], [8, "8 бөлік"]], "sym"),
    group("Аясы", BG.map(([v, n]) => [v, n, true]), "bg"),
    group("Өрнек түсі", FG.map(([v, n]) => [v, n, true]), "fg"),
    group("Жуандығы", [[8, "Жіңішке"], [16, "Орташа"], [26, "Жуан"]], "width")
  );
  const actions = make("div", null, "oyu-actions");
  const btn = (text, fn, cls = "btn btn-line") => { const b = make("button", text, cls, {type: "button"}); b.addEventListener("click", fn); actions.append(b); return b; };
  btn("Кездейсоқ ою", random, "btn btn-dark");
  btn("Болдырмау", () => { state.items.pop(); draw(); });
  btn("Тазалау", () => { state.items = []; draw(); });
  btn("Жиектеме", () => { state.frame = !state.frame; draw(); });
  btn("Сурет ретінде сақтау", () => canvas.toBlob((b) => { const a = make("a", null, null, {href: URL.createObjectURL(b), download: "Dala-murasy-oyu.png"}); document.body.append(a); a.click(); a.remove(); }), "btn btn-gold");
  const intro = make("div", null, "oyu-intro");
  intro.append(make("h3", "Өз оюыңды сал"), make("p", "Алаңды басып қошқар мүйіз мөрін қой немесе еркін сыз. Сызығың симметрия бойынша бірнеше рет қайталанады, сондықтан өрнек киіз бен кілемдегідей тепе-тең шығады."), tools, actions);
  host.append(intro, canvas);
  random();
})();
