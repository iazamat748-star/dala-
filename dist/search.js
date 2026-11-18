"use strict";
// Дала мұрасы · бүкіл сайт бойынша жылдам іздеу (Ctrl+K немесе «/»)
(() => {
  const dialog = document.getElementById("search-dialog"), open = document.getElementById("search-open");
  if (!dialog || !open) return;
  const make = (tag, text, cls, attrs) => { const n = document.createElement(tag); if (text) n.textContent = text; if (cls) n.className = cls; if (attrs) for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v); return n; };
  const A = window.DALA_ASSISTANT;
  const norm = (t) => String(t).toLocaleLowerCase("kk");
  // Мәдениет пен мұражай да іздеу нәтижесіне кіреді
  const extra = [
    ...(window.DALA_CULTURE || []).map(([id, title, tagline, paras, items]) => ({type: "Мәдениет", title, text: tagline, href: `#culture-${id}`, hay: norm([title, tagline, ...paras, ...items.flat()].join(" "))})),
    ...(window.DALA_EXHIBITS || []).map(([id, title, text]) => ({type: "3D мұражай", title, text, href: `#museum-${id}`, hay: norm(title + " " + text)})),
    ...[["toguz", "Тоғызқұмалақ", "Компьютерге немесе досыңа қарсы ұлттық ойын"], ["asyk", "Асық ату", "3D алаңда сақамен асық ату"], ["who", "Кім бұл?", "Тарихи тұлғаны кілттер арқылы тап"], ["word", "Сөзжұмбақ", "Тарихи сөзді 6 әрекетте тап"], ["kuy", "Күй жады", "Домбыра әуенін есте сақтап қайтала"], ["pairs", "Жұп тап", "Оқиға мен уақытты жұпта"], ["chrono", "Хронология", "Оқиғаларды уақыт ретімен қой"], ["mapgame", "Картадан тап", "Тарихи орынды картадан тап"], ["ach", "Жетістіктер", "Ойын ұпайлары мен марапаттар"]].map(([id, title, text]) => ({type: "Ойын", title, text, href: `#game-${id}`, hay: norm(`${title} ${text} ойын ойындар`)})),
    ...(window.DALA_CALENDAR || []).map(([m, d, y, title, text, href]) => ({type: "Күнтізбе", title: `${d}.${String(m).padStart(2, "0")}${y ? "." + y : ""} · ${title}`, text, href, hay: norm(`${title} ${text} ${y || ""}`)}))
  ];
  const LABEL = {chapter: "Тарихи оқиға", person: "Тұлға", term: "Сөздік", place: "Тарихи орын"};
  const input = make("input", null, null, {type: "search", placeholder: "Іздеу: Абылай, 1916, киіз үй, Отырар…", "aria-label": "Сайт бойынша іздеу", autocomplete: "off"});
  const list = make("ul", null, "search-results", {role: "listbox", "aria-label": "Іздеу нәтижелері"});
  dialog.append(input, list);
  let results = [], active = 0;
  function run() {
    const q = input.value.trim();
    list.replaceChildren(); results = []; active = 0;
    if (!q) { list.append(make("li", "Тарихи оқиға, тұлға, термин, орын, мәдениет тақырыбы немесе жыл жаз.", "search-empty")); return; }
    const found = (A?.search(q)?.results || []).map(({d}) => ({
      type: LABEL[d.type], title: d.title,
      text: d.type === "chapter" ? (window.DALA_LEARNING?.records(d.chapter)?.[0]?.[2] || d.date) : d.text || d.date || "",
      href: d.type === "chapter" ? (d.chapter.href || `#history-${d.id}`) : d.type === "place" ? `#place-${d.id}` : "#people"
    }));
    const words = norm(q).split(/\s+/).filter(Boolean);
    const more = extra.filter((x) => words.every((w) => x.hay.includes(w)));
    results = [...more.filter((x) => x.type !== "Күнтізбе"), ...found, ...more.filter((x) => x.type === "Күнтізбе")].slice(0, 12);
    if (!results.length) { list.append(make("li", "Ештеңе табылмады. Басқа сөзбен жазып көр немесе ЖИ гидтен сұра.", "search-empty")); return; }
    results.forEach((r, i) => {
      const li = make("li", null, null, {role: "none"});
      const a = make("a", null, null, {href: r.href, role: "option", "aria-selected": String(i === 0)});
      a.append(make("small", r.type), make("strong", r.title), make("span", r.text));
      a.addEventListener("click", () => dialog.close());
      li.append(a); list.append(li);
    });
  }
  const select = (i) => {
    const links = [...list.querySelectorAll("a")]; if (!links.length) return;
    active = (i + links.length) % links.length;
    links.forEach((a, k) => a.setAttribute("aria-selected", String(k === active)));
    links[active].scrollIntoView({block: "nearest"});
  };
  input.addEventListener("input", run);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { e.preventDefault(); dialog.close(); open.focus(); return; }
    if (e.key === "ArrowDown") { e.preventDefault(); select(active + 1); }
    if (e.key === "ArrowUp") { e.preventDefault(); select(active - 1); }
    if (e.key === "Enter") { const a = list.querySelectorAll("a")[active]; if (a) { e.preventDefault(); dialog.close(); const h = a.getAttribute("href"); if (h.startsWith("#")) { if (location.hash === h) dispatchEvent(new HashChangeEvent("hashchange")); location.hash = h; } else location.href = h; } }
  });
  const show = () => { if (!dialog.open) { dialog.showModal(); input.select(); run(); } };
  open.addEventListener("click", show);
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  document.addEventListener("keydown", (e) => {
    if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || (e.key === "/" && !e.target.closest("input,textarea,select,[contenteditable]"))) { e.preventDefault(); show(); }
  });
})();
