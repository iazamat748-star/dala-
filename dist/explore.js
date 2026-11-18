"use strict";
// Дала мұрасы · жаңа зерттеу бөлімдері: уақыт сызығы, тарихи карта, тұлғалар, сөздік,
// күн сұрағы және хронология ойыны. Барлық дерек history-data.js пен encyclopedia-data.js файлдарынан алынады.
(() => {
  const chapters = HISTORY_CHAPTERS, eras = HISTORY_ERAS;
  const byId = new Map(chapters.map((c) => [c.id, c]));
  const eraById = new Map(eras.map((e) => [e[0], e]));
  const years = window.DALA_YEARS, places = window.DALA_PLACES, people = window.DALA_PEOPLE, glossary = window.DALA_GLOSSARY;
  const ERA_COLORS = {ancient:"#a0643a", medieval:"#7a5aa6", khanate:"#2f6d58", empire:"#b2453b", soviet:"#4a6587", modern:"#c08a1e"};
  const make = (tag, text, cls, attrs) => {
    const n = document.createElement(tag);
    if (text != null && text !== "") n.textContent = text;
    if (cls) n.className = cls;
    if (attrs) for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  };
  const svg = (tag, attrs) => {
    const n = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (const [k, v] of Object.entries(attrs || {})) n.setAttribute(k, v);
    return n;
  };
  const button = (text, fn, cls = "trial-button", attrs) => {
    const b = make("button", text, cls, attrs);
    b.type = "button";
    b.addEventListener("click", fn);
    return b;
  };
  const read = (key) => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } };
  const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; } };
  const gameKeys = {qozybasy:"dala-murasy-qozybasy-v2", orbulak:"dala-murasy-1643-v1", karatau:"dala-murasy-1723-v1"};
  const isDone = (c) => c.href ? read(gameKeys[c.id])?.chapterIndex === 6 : read("dala-murasy-history-v1")?.[c.id] === 3;
  const chapterHref = (c) => c.href || `#history-${c.id}`;
  const announce = () => document.dispatchEvent(new CustomEvent("dala:progress"));
  const sortedChapters = chapters.slice().sort((a, b) => years[a.id][0] - years[b.id][0] || years[a.id][1] - years[b.id][1]);

  // Жинақталған бөлімдерді compact.js стилінде қосу
  function addSection(id, title, lead, after) {
    const details = make("details", null, "compact-section explore-section");
    const summary = make("summary", title);
    const section = make("section", null, "path-section", {id, "aria-labelledby": id + "-title"});
    const h2 = make("h2", title.replace(/^\S+ · /, ""), null, {id: id + "-title"});
    section.append(h2);
    if (lead) section.append(make("p", lead, "section-lead"));
    details.append(summary, section);
    after.after(details);
    return {details, section};
  }
  const host = (id) => document.getElementById(id)?.closest("details") || document.getElementById(id);
  const tabs = (parent, items) => {
    const list = make("div", null, "x-tabs", {role: "tablist"});
    const panels = items.map(([label, render], i) => {
      const tab = make("button", label, "x-tab", {role: "tab", "aria-selected": String(i === 0), type: "button"});
      const panel = make("div", null, "x-panel", {role: "tabpanel"});
      panel.hidden = i !== 0;
      tab.addEventListener("click", () => {
        list.querySelectorAll("[role=tab]").forEach((t) => t.setAttribute("aria-selected", "false"));
        panels.forEach((p) => p.hidden = true);
        tab.setAttribute("aria-selected", "true");
        panel.hidden = false;
        if (!panel.dataset.ready) { render(panel); panel.dataset.ready = "1"; }
      });
      list.append(tab);
      return panel;
    });
    parent.append(list, ...panels);
    const [, firstRender] = items[0];
    firstRender(panels[0]); panels[0].dataset.ready = "1";
  };
  const eraChips = (onChange, withAll = true) => {
    const wrap = make("div", null, "x-chips", {role: "group", "aria-label": "Дәуір сүзгісі"});
    const options = (withAll ? [["all", "Барлығы"]] : []).concat(eras.map((e) => [e[0], e[1]]));
    options.forEach(([id, label], i) => {
      const chip = button(label, () => {
        wrap.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", "false"));
        chip.setAttribute("aria-pressed", "true");
        onChange(id);
      }, "x-chip", {"aria-pressed": String(i === 0)});
      if (id !== "all") chip.style.setProperty("--era", ERA_COLORS[id]);
      wrap.append(chip);
    });
    return wrap;
  };

  /* ---------- 1. Уақыт сызығы ---------- */
  function renderTimeline(panel) {
    const help = make("p", "Бөлімдер уақыт ретімен орналасқан. Карточканы басып, тапсырманы аш. ✓ белгісі аяқталған бөлімді көрсетеді.", "x-note");
    const controls = make("div", null, "x-timeline-controls");
    const track = make("ol", null, "x-timeline", {"aria-label": "Тарих уақыт сызығы"});
    const prev = button("◀", () => track.scrollBy({left: -track.clientWidth * .8, behavior: "smooth"}), "x-round", {"aria-label": "Солға жылжыту"});
    const next = button("▶", () => track.scrollBy({left: track.clientWidth * .8, behavior: "smooth"}), "x-round", {"aria-label": "Оңға жылжыту"});
    const jump = make("select", null, "x-select", {"aria-label": "Дәуірге өту"});
    jump.append(make("option", "Дәуірге өту…", null, {value: ""}));
    eras.forEach((e) => jump.append(make("option", e[1], null, {value: e[0]})));
    jump.addEventListener("change", () => {
      const first = track.querySelector(`[data-era="${jump.value}"]`);
      if (first) track.scrollTo({left: first.offsetLeft - track.offsetLeft - 8, behavior: "smooth"});
    });
    controls.append(prev, jump, next);
    let lastEra = "";
    for (const c of sortedChapters) {
      const li = make("li", null, "x-tl-item", {"data-era": c.era});
      li.style.setProperty("--era", ERA_COLORS[c.era]);
      if (c.era !== lastEra) { li.classList.add("x-era-start"); li.append(make("span", eraById.get(c.era)[1], "x-tl-era")); lastEra = c.era; }
      const a = make("a", null, "x-tl-card", {href: chapterHref(c)});
      a.append(make("small", years[c.id][2]), make("strong", c.title), make("span", c.href ? "3D оқиға" : c.role, "x-tl-role"));
      if (isDone(c)) { a.classList.add("done"); a.append(make("span", "✓", "x-tl-done", {"aria-label": "аяқталған"})); }
      li.append(make("span", null, "x-tl-dot"), a);
      track.append(li);
    }
    panel.append(help, controls, track);
    document.addEventListener("dala:progress", () => {
      track.querySelectorAll(".x-tl-card").forEach((a, i) => {
        const c = sortedChapters[i];
        if (isDone(c) && !a.classList.contains("done")) { a.classList.add("done"); a.append(make("span", "✓", "x-tl-done")); }
      });
    });
  }

  /* ---------- 2. Тарихи карта ---------- */
  let mapFocus = null;
  function renderMap(panel) {
    const M = window.DALA_MAP;
    const proj = (lon, lat) => [(lon - M.lon0) * M.k * M.sx, (M.lat1 - lat) * M.sx];
    const seen = new Set(read("dala-murasy-map-v1")?.seen || []);
    const layout = make("div", null, "x-map-layout");
    const figure = make("figure", null, "x-map");
    const map = svg("svg", {viewBox: `0 0 ${M.W} ${M.H}`, role: "group", "aria-labelledby": "x-map-caption"});
    const defs = svg("defs");
    const pattern = svg("pattern", {id: "x-hatch", width: "8", height: "8", patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)"});
    pattern.append(svg("line", {x1: "0", y1: "0", x2: "0", y2: "8", stroke: "#cfd6df", "stroke-width": "2"}));
    defs.append(pattern);
    map.append(defs, svg("rect", {x: "0", y: "0", width: M.W, height: M.H, fill: "#dbe8f1"}));
    for (const [code, d] of Object.entries(M.shapes)) if (code !== "kz") map.append(svg("path", {d, fill: "#eceee8", stroke: "#b9c0b5", "stroke-width": "1"}));
    map.append(svg("path", {d: M.shapes.kz, fill: "#f6efdc", stroke: "#7d6a45", "stroke-width": "1.6"}));
    const labels = [["РЕСЕЙ", 62, 55.3], ["ҚЫТАЙ", 85, 42.5], ["ӨЗБЕКСТАН", 61, 41.2], ["ҚЫРҒЫЗСТАН", 74.3, 41.5], ["ТҮРІКМЕНСТАН", 56.5, 39.8], ["Каспий т.", 50.2, 42.6], ["ҚАЗАҚСТАН", 66.5, 47.4]];
    for (const [t, lo, la] of labels) {
      const [x, y] = proj(lo, la);
      const node = svg("text", {x, y, class: t === "ҚАЗАҚСТАН" ? "x-map-country main" : "x-map-country", "text-anchor": "middle"});
      node.textContent = t;
      map.append(node);
    }
    const markers = svg("g");
    map.append(markers);
    const views = [["Бүкіл ел", 0, 0, M.W, M.H], ["Оңтүстік", ...(() => { const [x0, y0] = proj(64.5, 46.4), [x1, y1] = proj(80.5, 41.6); return [x0, y0, x1 - x0, y1 - y0]; })()], ["Жетісу", ...(() => { const [x0, y0] = proj(72.5, 46.2), [x1, y1] = proj(80.8, 42.3); return [x0, y0, x1 - x0, y1 - y0]; })()]];
    let zoom = 1;
    const zoomBar = make("div", null, "x-zoom", {role: "group", "aria-label": "Картаны үлкейту"});
    views.forEach(([label, x, y, w, h], i) => {
      const b = button(label, () => {
        zoomBar.querySelectorAll("button").forEach((n) => n.setAttribute("aria-pressed", "false"));
        b.setAttribute("aria-pressed", "true");
        map.setAttribute("viewBox", `${x.toFixed(1)} ${y.toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)}`);
        zoom = w / M.W;
        draw();
      }, "x-chip", {"aria-pressed": String(i === 0)});
      zoomBar.append(b);
    });
    const caption = make("figcaption", "Оқу картасы: қазіргі шекаралар Natural Earth деректері бойынша жеңілдетіліп берілген. Тарихи орындардың кейбірі болжамды.", null, {id: "x-map-caption"});
    figure.append(zoomBar, map, caption);
    const side = make("aside", null, "x-map-side", {"aria-live": "polite"});
    const chips = eraChips((era) => { filter = era; draw(); });
    let filter = "all", active = null;
    const counter = make("p", null, "x-map-count");
    function info(place) {
      const [id, name, , , text, ids] = place;
      side.replaceChildren(make("small", "ТАРИХИ ОРЫН"), make("h3", name), make("p", text));
      const list = make("ul", null, "x-map-chapters");
      for (const cid of ids) {
        const c = byId.get(cid);
        const li = make("li");
        li.style.setProperty("--era", ERA_COLORS[c.era]);
        li.append(make("span", years[cid][2]), make("a", c.title + (isDone(c) ? " ✓" : ""), null, {href: chapterHref(c)}));
        list.append(li);
      }
      side.append(list);
      if (!seen.has(id)) { seen.add(id); write("dala-murasy-map-v1", {seen: [...seen]}); announce(); }
      counter.textContent = `Зерттелген орындар · ${seen.size} / ${places.length}`;
      side.append(counter);
    }
    function draw() {
      markers.replaceChildren();
      places.forEach((place, i) => {
        const [id, name, lon, lat, , ids] = place;
        const list = ids.map((x) => byId.get(x)).filter((c) => filter === "all" || c.era === filter);
        if (!list.length) return;
        const [x, y] = proj(lon, lat);
        const g = svg("g", {class: "x-marker" + (seen.has(id) ? " seen" : "") + (active === id ? " active" : ""), transform: `translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${Math.max(zoom, .45).toFixed(3)})`, tabindex: "0", role: "button", "aria-label": `${i + 1} ${name} — ${list.map((c) => c.title).join(", ")}`});
        g.append(svg("circle", {r: "13", fill: ERA_COLORS[list[0].era]}));
        if (list.length > 1) g.append(svg("circle", {r: "16.5", fill: "none", stroke: ERA_COLORS[list[1].era], "stroke-width": "2"}));
        const num = svg("text", {"text-anchor": "middle", dy: "4.5"}); num.textContent = String(i + 1); g.append(num);
        const label = svg("text", {class: "x-marker-label" + (zoom < 1 ? " always" : ""), x: "18", dy: "4"}); label.textContent = name; g.append(label);
        const open = () => { active = id; info(place); draw(); };
        g.addEventListener("click", open);
        g.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
        markers.append(g);
      });
    }
    side.append(make("small", "ТАРИХИ КАРТА"), make("h3", "Орынды таңда"), make("p", `Картада ${places.length} тарихи орын белгіленген. Нүктені бас, сол жерге байланысты бөлімдер ашылады.`));
    const free = make("p", "Ашаршылық (1928–1933) бүкіл республика аумағын қамтығандықтан, картада жеке нүктемен көрсетілмеген.", "x-note");
    counter.textContent = `Зерттелген орындар · ${seen.size} / ${places.length}`;
    side.append(counter, free);
    layout.append(figure, side);
    panel.append(chips, layout);
    draw();
    mapFocus = (pid) => {
      const place = places.find((x) => x[0] === pid);
      if (!place) return;
      const [, , lon] = place;
      const view = lon > 72.5 && place[3] < 46.2 ? 2 : place[3] < 46.4 && lon > 64.5 ? 1 : 0;
      zoomBar.querySelectorAll("button")[view].click();
      active = pid; info(place); draw();
      figure.scrollIntoView({block: "center"});
    };
  }

  /* ---------- 3. Тұлғалар ---------- */
  const initials = (name) => name.replace(/[«»()]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toLocaleUpperCase("kk")).join("");
  function renderPeople(panel) {
    let era = "all", q = "";
    const search = make("input", null, "x-search", {type: "search", placeholder: "Тұлғаны іздеу: Абай, 1916, би…", "aria-label": "Тұлғаны іздеу"});
    const grid = make("div", null, "x-people");
    const count = make("p", null, "x-note", {"aria-live": "polite"});
    const draw = () => {
      grid.replaceChildren();
      const list = people.filter((p) => (era === "all" || p[2] === era) && (!q || p.join(" ").toLocaleLowerCase("kk").includes(q)));
      count.textContent = `${list.length} тұлға`;
      for (const [name, life, e, fact, cid] of list) {
        const card = make("article", null, "x-person");
        card.style.setProperty("--era", ERA_COLORS[e]);
        const head = make("div", null, "x-person-head");
        head.append(make("span", initials(name), "x-avatar", {"aria-hidden": "true"}), Object.assign(make("div"), {}));
        head.lastChild.append(make("h3", name), make("small", life));
        card.append(head, make("p", fact));
        const c = byId.get(cid);
        if (c) card.append(make("a", `${eraById.get(e)[1]} · ${c.title} →`, "x-person-link", {href: chapterHref(c)}));
        grid.append(card);
      }
      if (!list.length) grid.append(make("p", "Ешкім табылмады. Басқа сөзбен іздеп көр."));
    };
    search.addEventListener("input", () => { q = search.value.trim().toLocaleLowerCase("kk"); draw(); });
    panel.append(eraChips((v) => { era = v; draw(); }), search, count, grid);
    draw();
  }

  /* ---------- 4. Сөздік ---------- */
  function renderGlossary(panel) {
    let q = "";
    const search = make("input", null, "x-search", {type: "search", placeholder: "Терминді іздеу: хандық, алаш…", "aria-label": "Терминді іздеу"});
    const letters = make("div", null, "x-letters");
    const list = make("dl", null, "x-glossary");
    const sorted = glossary.slice().sort((a, b) => a[0].localeCompare(b[0], "kk"));
    const draw = () => {
      list.replaceChildren();
      letters.replaceChildren();
      const shown = sorted.filter((g) => !q || (g[0] + " " + g[1]).toLocaleLowerCase("kk").includes(q));
      const firsts = [...new Set(shown.map((g) => g[0][0].toLocaleUpperCase("kk")))];
      for (const L of firsts) letters.append(make("a", L, null, {href: `#x-gl-${L}`}));
      let last = "";
      for (const [term, def, e] of shown) {
        const L = term[0].toLocaleUpperCase("kk");
        const dt = make("dt", term);
        if (L !== last) { dt.id = `x-gl-${L}`; last = L; }
        dt.style.setProperty("--era", ERA_COLORS[e]);
        dt.append(make("span", eraById.get(e)[1], "x-tag"));
        list.append(dt, make("dd", def));
      }
      if (!shown.length) list.append(make("p", "Термин табылмады."));
    };
    search.addEventListener("input", () => { q = search.value.trim().toLocaleLowerCase("kk"); draw(); });
    panel.append(make("p", `${glossary.length} тарихи термин. Әр терминнің қай дәуірге тән екені белгіленген.`, "x-note"), search, letters, list);
    draw();
  }

  /* ---------- 5. Күн сұрағы ---------- */
  const today = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  const MONTHS = ["ҚАҢТАР", "АҚПАН", "НАУРЫЗ", "СӘУІР", "МАМЫР", "МАУСЫМ", "ШІЛДЕ", "ТАМЫЗ", "ҚЫРКҮЙЕК", "ҚАЗАН", "ҚАРАША", "ЖЕЛТОҚСАН"];
  const dayNumber = (s) => Math.floor(Date.parse(s + "T00:00:00Z") / 864e5);
  function renderDaily(panel) {
    const pool = sortedChapters.filter((c) => c.prompt && Array.isArray(c.choices) && Number.isInteger(c.answer));
    const key = "dala-murasy-daily-v1";
    const box = make("div", null, "x-daily");
    const draw = () => {
      const date = today();
      const state = read(key) || {streak: 0, best: 0, total: 0, correct: 0, last: "", answers: {}};
      const c = pool[((dayNumber(date) % pool.length) + pool.length) % pool.length];
      const answered = state.answers?.[date];
      box.replaceChildren();
      const top = make("div", null, "x-daily-top");
      top.append(make("span", `${new Date().getDate()} ${MONTHS[new Date().getMonth()]} · КҮН СҰРАҒЫ`, "x-kicker"),
        make("span", `🔥 ${state.streak || 0} күн қатарынан · ${state.correct || 0}/${state.total || 0} дұрыс`, "x-streak"));
      box.append(top, make("small", `${eraById.get(c.era)[1]} · ${c.date} · ${c.title}`, "x-daily-meta"), make("h3", c.prompt));
      const opts = make("div", null, "x-options");
      c.choices.forEach(([text, explain], i) => {
        const b = button(text, () => {
          if (answered !== undefined) return;
          const ok = i === c.answer;
          const yesterday = new Date(Date.parse(date + "T00:00:00Z") - 864e5).toISOString().slice(0, 10);
          state.streak = state.last === yesterday ? (state.streak || 0) + 1 : state.last === date ? state.streak : 1;
          state.best = Math.max(state.best || 0, state.streak);
          state.total = (state.total || 0) + 1;
          state.correct = (state.correct || 0) + (ok ? 1 : 0);
          state.last = date;
          state.answers = Object.fromEntries(Object.entries(state.answers || {}).slice(-30));
          state.answers[date] = i;
          write(key, state);
          announce();
          draw();
        }, "x-option");
        if (answered !== undefined) {
          b.disabled = true;
          if (i === c.answer) b.classList.add("right");
          else if (i === answered) b.classList.add("wrong");
        }
        opts.append(b);
      });
      box.append(opts);
      if (answered !== undefined) {
        const ok = answered === c.answer;
        const fb = make("div", null, "x-feedback " + (ok ? "ok" : "no"), {role: "status"});
        fb.append(make("strong", ok ? "Дұрыс!" : "Бұл жолы қате."), make("p", c.choices[answered][1]));
        if (!ok) fb.append(make("p", "Дұрыс жауап: " + c.choices[c.answer][0]));
        fb.append(make("a", "Бөлімді толық зерттеу →", null, {href: chapterHref(c)}), make("p", "Ертең жаңа сұрақ ашылады.", "x-note"));
        box.append(fb);
      }
    };
    draw();
    panel.append(box);
  }

  /* ---------- 6. Хронология ойыны ---------- */
  function renderChrono(panel) {
    const key = "dala-murasy-chrono-v1";
    const box = make("div", null, "x-chrono");
    const SIZE = 5;
    const fmt = (y) => y < 0 ? (y <= -10000 ? "б.з.б." : `б.з.б. ${-y} ж.`) : `${y} ж.`;
    function pick() {
      // уақыт аралықтары қиылыспайтын бөлімдерді таңдау
      for (let attempt = 0; attempt < 200; attempt++) {
        const pool = chapters.slice().sort(() => Math.random() - .5);
        const out = [];
        for (const c of pool) {
          const [a, b] = years[c.id];
          if (out.every((o) => { const [x, y] = years[o.id]; return b < x || a > y; })) out.push(c);
          if (out.length === SIZE) return out;
        }
      }
      return sortedChapters.filter((_, i) => i % 5 === 0).slice(0, SIZE);
    }
    let set = pick(), order = [], checked = false;
    const draw = () => {
      const state = read(key) || {played: 0, perfect: 0, best: 0};
      box.replaceChildren();
      const top = make("div", null, "x-daily-top");
      top.append(make("span", "ХРОНОЛОГИЯ ОЙЫНЫ", "x-kicker"), make("span", `Ойналды · ${state.played} · Мінсіз · ${state.perfect}`, "x-streak"));
      box.append(top, make("h3", "Оқиғаларды ең ертесінен бастап ретімен бас"), make("p", "Карточканы басқан сайын ол реттік нөмір алады. Қате бассаң, қайта басып алып таста.", "x-note"));
      const grid = make("div", null, "x-chrono-grid");
      const correct = set.slice().sort((a, b) => years[a.id][0] - years[b.id][0]);
      for (const c of set) {
        const pos = order.indexOf(c.id);
        const b = button("", () => {
          if (checked) return;
          if (pos >= 0) order.splice(pos, 1); else order.push(c.id);
          draw();
        }, "x-chrono-card" + (pos >= 0 ? " picked" : ""));
        b.style.setProperty("--era", ERA_COLORS[c.era]);
        b.append(make("span", pos >= 0 ? String(pos + 1) : "", "x-chrono-num"), make("strong", c.title), make("small", checked ? years[c.id][2] : eraById.get(c.era)[1]));
        if (checked) {
          const ok = correct[pos]?.id === c.id;
          b.classList.add(ok ? "right" : "wrong");
          b.disabled = true;
        }
        grid.append(b);
      }
      box.append(grid);
      const actions = make("div", null, "x-actions");
      if (!checked) {
        const check = button("Тексеру", () => {
          checked = true;
          const score = correct.filter((c, i) => order[i] === c.id).length;
          state.played++; if (score === SIZE) state.perfect++;
          state.best = Math.max(state.best, score);
          state.last = score;
          write(key, state); announce(); draw();
        }, "play");
        check.disabled = order.length !== SIZE;
        actions.append(check, button("Тазалау", () => { order = []; draw(); }, "trial-button"));
      } else {
        const score = correct.filter((c, i) => order[i] === c.id).length;
        const fb = make("div", null, "x-feedback " + (score === SIZE ? "ok" : "no"), {role: "status"});
        fb.append(make("strong", score === SIZE ? `Мінсіз! ${score} / ${SIZE}` : `${score} / ${SIZE} орын дұрыс`));
        const ol = make("ol");
        correct.forEach((c) => ol.append(make("li", `${years[c.id][2]} · ${c.title}`)));
        fb.append(make("p", "Дұрыс рет:"), ol);
        box.append(fb);
        actions.append(button("Жаңа ойын →", () => { set = pick(); order = []; checked = false; draw(); }, "play"));
      }
      box.append(actions);
    };
    draw();
    panel.append(box);
  }

  /* ---------- Бөлімдерді орналастыру ---------- */
  window.DALA_RENDER = {renderTimeline, renderMap, renderPeople, renderGlossary, renderDaily, renderChrono, focusPlace: (id) => mapFocus?.(id), isDone, years};
  const periods = host("periods");
  if (!periods) return;
  const s1 = addSection("timeline-map", "02+ · Уақыт сызығы мен тарихи карта", "Барлық 26 бөлімді уақыт ретімен көр немесе Қазақстан картасынан тарихи орындарды тап.", periods);
  // Мазмұн бөлім алғаш ашылғанда ғана құрылады: бет тезірек жүктеледі
  const lazy = ({details}, build) => {
    const run = () => { if (details.dataset.built) return; details.dataset.built = "1"; build(); };
    if (details.open) run(); else details.addEventListener("toggle", () => details.open && run());
  };
  lazy(s1, () => tabs(s1.section, [["Уақыт сызығы", renderTimeline], ["Тарихи карта", renderMap]]));
  const s2 = addSection("people", "03+ · Тұлғалар мен сөздік", "Тарихи тұлғалардың қысқаша өмірбаяны және негізгі ұғымдардың түсіндірмесі.", host("facts") || s1.details);
  lazy(s2, () => tabs(s2.section, [["Тарихи тұлғалар", renderPeople], ["Тарих сөздігі", renderGlossary]]));
  const tasksHost = host("tasks") || s2.details;
  const s3 = addSection("practice", "05+ · Жаттығу орталығы", "Күн сұрағы, хронология ойыны, жаттығу карточкалары және «Картадан тап» ойыны.", tasksHost);
  lazy(s3, () => tabs(s3.section, [["Күн сұрағы", renderDaily], ["Хронология ойыны", renderChrono], ...(window.DALA_EXTRA_PRACTICE || [])]));

  // Сілтеме арқылы ашу: #timeline-map, #people, #practice
  const reveal = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (id.startsWith("place-")) {
      s1.details.open = true;
      setTimeout(() => {
        if (!s1.details.dataset.built) { s1.details.dataset.built = "1"; tabs(s1.section, [["Уақыт сызығы", renderTimeline], ["Тарихи карта", renderMap]]); }
        s1.section.querySelectorAll(".x-tab")[1].click();
        mapFocus?.(id.slice(6));
      }, 30);
      return;
    }
    const target = {"timeline-map": s1, people: s2, practice: s3}[id];
    if (target) { target.details.open = true; target.section.scrollIntoView({block: "start"}); }
  };
  window.addEventListener("hashchange", reveal);
  reveal();
  window.DALA_EXPLORE = {years, isDone};
})();
