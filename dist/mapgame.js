"use strict";
// Дала мұрасы · «Картадан тап» ойыны: тарихи орынды Қазақстан картасынан табу
(() => {
  const M = window.DALA_MAP, PLACES = window.DALA_PLACES;
  if (!M || !PLACES) return;
  const make = (tag, text, cls, attrs) => {
    const n = document.createElement(tag);
    if (text != null && text !== "") n.textContent = text;
    if (cls) n.className = cls;
    if (attrs) for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  };
  const svg = (tag, attrs) => { const n = document.createElementNS("http://www.w3.org/2000/svg", tag); for (const [k, v] of Object.entries(attrs || {})) n.setAttribute(k, v); return n; };
  const button = (text, fn, cls = "trial-button") => { const b = make("button", text, cls, {type: "button"}); b.addEventListener("click", fn); return b; };
  const KEY = "dala-murasy-mapgame-v1";
  const ROUNDS = 8;
  const proj = (lon, lat) => [(lon - M.lon0) * M.k * M.sx, (M.lat1 - lat) * M.sx];
  const unproj = (x, y) => [x / (M.k * M.sx) + M.lon0, M.lat1 - y / M.sx];
  const km = ([lo1, la1], [lo2, la2]) => {
    const r = Math.PI / 180, a = Math.sin((la2 - la1) * r / 2) ** 2 + Math.cos(la1 * r) * Math.cos(la2 * r) * Math.sin((lo2 - lo1) * r / 2) ** 2;
    return 6371 * 2 * Math.asin(Math.sqrt(a));
  };
  const points = (d) => Math.max(0, Math.min(100, Math.round(125 * Math.exp(-d / 350) - 25)));
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {best: 0, played: 0}; } catch { return {best: 0, played: 0}; } };
  const byId = new Map(HISTORY_CHAPTERS.map((c) => [c.id, c]));

  function render(panel) {
    let rounds = [], round = 0, total = 0, locked = false;
    const box = make("div", null, "mg-wrap");
    panel.append(box);
    function intro() {
      const st = read();
      box.replaceChildren();
      const top = make("div", null, "x-daily-top");
      top.append(make("span", "КАРТАДАН ТАП", "x-kicker"), make("span", `Үздік нәтиже · ${st.best} / ${ROUNDS * 100}`, "x-streak"));
      box.append(top, make("h3", "Тарихи орын қай жерде?"),
        make("p", `${ROUNDS} раунд. Атауы берілген тарихи орынды картадан тауып бас. Неғұрлым жақын бассаң, соғұрлым көп ұпай аласың (ең көбі 100). Шекаралар — қазіргі Қазақстан.`, "x-note"),
        button("Ойынды бастау →", start, "play"));
    }
    function start() {
      rounds = PLACES.slice().sort(() => Math.random() - .5).slice(0, ROUNDS);
      round = 0; total = 0;
      play();
    }
    function play() {
      locked = false;
      const [id, name, lon, lat, text, cids] = rounds[round];
      box.replaceChildren();
      const top = make("div", null, "x-daily-top");
      top.append(make("span", `${round + 1} / ${ROUNDS} РАУНД`, "x-kicker"), make("span", `Ұпай · ${total}`, "x-streak"));
      const chapter = byId.get(cids[0]);
      const q = make("h3", null, "mg-question");
      q.append(document.createTextNode("Табу керек: "), make("strong", name));
      const hint = make("p", chapter ? `Кеңес: «${chapter.title}» бөлімімен байланысты.` : "", "x-note");
      const map = svg("svg", {viewBox: `0 0 ${M.W} ${M.H}`, class: "mg-map", role: "application", "aria-label": `Қазақстан картасы. ${name} орнын басып белгіле. Пернетақтамен: бағыт пернелерімен жылжы, Enter арқылы таңда.`, tabindex: "0"});
      map.append(svg("rect", {x: 0, y: 0, width: M.W, height: M.H, fill: "#dbe8f1"}));
      for (const [code, d] of Object.entries(M.shapes)) if (code !== "kz") map.append(svg("path", {d, fill: "#eceee8", stroke: "#b9c0b5"}));
      map.append(svg("path", {d: M.shapes.kz, fill: "#f6efdc", stroke: "#7d6a45", "stroke-width": "1.6"}));
      const cursor = svg("circle", {r: "7", fill: "none", stroke: "#315d8c", "stroke-width": "2.5", cx: M.W / 2, cy: M.H / 2, class: "mg-cursor"});
      map.append(cursor);
      const result = make("div", null, "mg-result", {"aria-live": "polite"});
      let cx = M.W / 2, cy = M.H / 2;
      const guess = (x, y) => {
        if (locked) return;
        locked = true;
        const real = proj(lon, lat), dist = km(unproj(x, y), [lon, lat]), pts = points(dist);
        total += pts;
        map.append(svg("line", {x1: x, y1: y, x2: real[0], y2: real[1], stroke: "#b2453b", "stroke-width": "2.5", "stroke-dasharray": "6 5"}));
        map.append(svg("circle", {cx: x, cy: y, r: "8", fill: "#315d8c", stroke: "#fff", "stroke-width": "2.5"}));
        const g = svg("g", {transform: `translate(${real[0]} ${real[1]})`});
        g.append(svg("circle", {r: "11", fill: "#2f6d58", stroke: "#fff", "stroke-width": "3"}));
        const label = svg("text", {x: "16", y: "5", class: "mg-label"}); label.textContent = name; g.append(label);
        map.append(g);
        result.replaceChildren(make("strong", `${Math.round(dist)} км қателік · +${pts} ұпай`), make("p", text));
        const next = button(round + 1 < ROUNDS ? "Келесі раунд →" : "Нәтижені көру →", () => { round++; round < ROUNDS ? play() : finish(); }, "play");
        result.append(next);
        next.focus();
      };
      map.addEventListener("click", (e) => {
        const pt = map.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
        const p = pt.matrixTransform(map.getScreenCTM().inverse());
        guess(p.x, p.y);
      });
      map.addEventListener("keydown", (e) => {
        const step = e.shiftKey ? 40 : 12;
        const moves = {ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step]};
        if (moves[e.key]) { e.preventDefault(); cx = Math.max(0, Math.min(M.W, cx + moves[e.key][0])); cy = Math.max(0, Math.min(M.H, cy + moves[e.key][1])); cursor.setAttribute("cx", cx); cursor.setAttribute("cy", cy); }
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); guess(cx, cy); }
      });
      box.append(top, q, hint, map, result);
    }
    function finish() {
      const st = read();
      st.played = (st.played || 0) + 1;
      st.best = Math.max(st.best || 0, total);
      st.last = total;
      try { localStorage.setItem(KEY, JSON.stringify(st)); } catch {}
      document.dispatchEvent(new CustomEvent("dala:progress"));
      box.replaceChildren();
      const grade = total >= 650 ? "Керемет! Сен — нағыз картограф." : total >= 450 ? "Жақсы нәтиже! Бірнеше орынды қайталап көр." : "Тарихи картаны ашып, орындармен танысып шық та, қайта ойна.";
      const fb = make("div", null, "x-feedback " + (total >= 450 ? "ok" : "no"), {role: "status"});
      fb.append(make("strong", `${total} / ${ROUNDS * 100} ұпай`), make("p", grade), make("p", `Үздік нәтижең: ${st.best}`));
      const actions = make("div", null, "x-actions");
      actions.append(button("Қайта ойнау →", start, "play"), Object.assign(make("a", "Тарихи картаны ашу", "trial-button", {href: "#timeline-map"})));
      box.append(fb, actions);
    }
    intro();
  }
  (window.DALA_EXTRA_PRACTICE ||= []).push(["Картадан тап", render]);
})();
