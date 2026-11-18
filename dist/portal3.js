"use strict";
// Дала мұрасы 3.0 · басты беттің бөлімдері: дәуірлер, тарихи оқиғалар, уақыт сызығы мен карта,
// мәдениет, 3D мұражай тізімі, тұлғалар мен сөздік, ойындар және оқиға оқырманы.
(() => {
  const $ = (id) => document.getElementById(id);
  const make = (tag, text, cls, attrs) => {
    const n = document.createElement(tag);
    if (text != null && text !== "") n.textContent = text;
    if (cls) n.className = cls;
    if (attrs) for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  };
  const R = window.DALA_RENDER;
  const years = window.DALA_YEARS;
  const chapters = HISTORY_CHAPTERS, eras = HISTORY_ERAS;
  const byId = new Map(chapters.map((c) => [c.id, c]));
  const eraVar = (era) => `var(--era-${era})`;
  const ask = (text) => { location.hash = "#guide"; window.DALA_GUIDE?.ask(text); };
  const fmtYear = (y) => y < -9999 ? "1 млн жыл бұрын" : y < 0 ? `б.з.б. ${-y}` : String(y);
  const records = (c) => c.records || {
    qozybasy: [["XV ғасырдың ортасы", "Керей мен Жәнібектің көші", "Керей мен Жәнібек сұлтандар өздеріне ерген жұртпен Шығыс Дешті Қыпшақтан Батыс Жетісуға көшті."], ["Батыс Жетісу", "Есенбұға берген қоныс", "Моғолстан ханы Есенбұға көшіп келгендерді қабылдап, Шу бойындағы Қозыбасы өңірінен қоныс берді."], ["1465–1466", "Дулатидің мәліметі", "Мұхаммед Хайдар Дулати қазақ сұлтандарының билік жүргізе бастауын хижраның 870 жылына жатқызады. Бұл 1465–1466 жылдарға сәйкес келеді."]],
    orbulak: [["1643", "Орбұлақ шайқасы", "Жәңгір хан бастаған шағын жасақ тар шатқалдағы ордың артында жоңғар әскеріне тойтарыс берді. Жалаңтөс баһадүрдің көмегі шайқастың нәтижесін шешті."]],
    karatau: [["1723", "Ақтабан шұбырынды", "Жоңғар шапқыншылығы қазақ жұртын ауыр босқыншылыққа ұшыратты. Бұл кезең Ақтабан шұбырынды, Алқакөл сұлама атауымен есте қалды."]]
  }[c.id] || [];
  window.DALA_LEARNING = {records, appendSources: (box, c) => box.append(sourceList(c))};

  /* ---------- Мәзір ---------- */
  const toggle = document.querySelector(".menu-toggle"), nav = $("nav");
  toggle?.addEventListener("click", () => { const open = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); } });
  const links = [...nav.querySelectorAll("a")];
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) links.forEach((a) => a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + e.target.id)));
  }, {rootMargin: "-45% 0px -50% 0px"});
  document.querySelectorAll("main > section[id]").forEach((s) => io.observe(s));

  /* ---------- Қойындылар ---------- */
  function tablist(list, renderers) {
    const tabs = [...list.querySelectorAll("[role=tab]")];
    const show = (tab) => {
      tabs.forEach((t) => { t.setAttribute("aria-selected", String(t === tab)); $(t.getAttribute("aria-controls")).hidden = t !== tab; });
      const panel = $(tab.getAttribute("aria-controls"));
      const render = renderers[panel.id] || window.DALA_GAMES?.[panel.id];
      if (!panel.dataset.ready && render) { panel.dataset.ready = "1"; render(panel); }
      panel.dispatchEvent(new CustomEvent("g2:show"));
    };
    tabs.forEach((t) => t.addEventListener("click", () => show(t)));
    list.addEventListener("keydown", (e) => {
      const i = tabs.indexOf(document.activeElement);
      if (i < 0 || !["ArrowLeft", "ArrowRight"].includes(e.key)) return;
      const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      next.focus(); show(next);
    });
    return {show, tabs};
  }
  // Бөлім экранға жақындағанда ғана құрылады
  const whenNear = (el, fn) => {
    const ob = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { ob.disconnect(); fn(); } }, {rootMargin: "600px"});
    ob.observe(el);
  };

  /* ---------- Дәуірлер мен оқиғалар ---------- */
  let currentEra = "khanate";
  const eraBox = $("eras"), chapterBox = $("chapters");
  for (const [id, name, desc] of eras) {
    const list = chapters.filter((c) => c.era === id);
    const from = Math.min(...list.map((c) => years[c.id][0])), to = Math.max(...list.map((c) => years[c.id][1]));
    const b = make("button", null, "era", {type: "button", "aria-pressed": String(id === currentEra)});
    b.style.setProperty("--era", eraVar(id));
    b.append(make("strong", name), make("small", `${fmtYear(from)} – ${to >= 2026 ? "бүгін" : fmtYear(to)}`), make("small", desc));
    b.addEventListener("click", () => { currentEra = id; eraBox.querySelectorAll(".era").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); drawChapters(); });
    eraBox.append(b);
  }
  function drawChapters() {
    chapterBox.replaceChildren();
    for (const c of chapters.filter((x) => x.era === currentEra).sort((a, b) => years[a.id][0] - years[b.id][0])) {
      const card = make("button", null, "chapter", {type: "button"});
      card.style.setProperty("--era", eraVar(c.era));
      const first = records(c)[0];
      card.append(make("time", years[c.id][2]), make("strong", c.title), make("span", first ? first[2] : ""));
      if (c.href) card.append(make("span", "3D", "badge3d", {"aria-label": "3D саяхаты бар"}));
      card.addEventListener("click", () => openReader(c.id));
      chapterBox.append(card);
    }
  }
  drawChapters();
  tablist(document.querySelector("#history .subtabs"), {"tab-timeline": R.renderTimeline, "tab-map": R.renderMap});
  whenNear($("tab-timeline"), () => { const p = $("tab-timeline"); if (!p.dataset.ready) { p.dataset.ready = "1"; R.renderTimeline(p); } });

  /* ---------- Оқиға оқырманы ---------- */
  const reader = $("reader");
  const t = (k) => window.DALA_I18N?.t(k) || k;
  function sourceList(c) {
    const box = make("div", null, "sources");
    for (const key of [c.source, ...(c.extra || [])]) {
      const s = HISTORY_SOURCES[key];
      if (s) box.append(make("a", s[0] + " ↗", null, {href: s[1], target: "_blank", rel: "noopener"}));
    }
    return box;
  }
  function openReader(id) {
    const c = byId.get(id);
    if (!c) return;
    reader.replaceChildren();
    reader.style.setProperty("--era", eraVar(c.era));
    const body = make("div", null, "dialog-body");
    const head = make("header");
    const eraName = eras.find((e) => e[0] === c.era)[1];
    head.append(make("time", `${eraName} · ${years[c.id][2]}`), make("h2", c.title, null, {id: "reader-title"}));
    const close = make("button", "×", "close", {type: "button", "aria-label": t("reader.close")});
    close.addEventListener("click", () => reader.close());
    const list = make("ol");
    for (const [when, title, text] of records(c)) { const li = make("li"); li.append(make("time", when), make("strong", title), make("p", text)); list.append(li); }
    body.append(list);
    const people = (window.DALA_PEOPLE || []).filter((p) => p[4] === c.id);
    if (people.length) {
      body.append(make("h3", t("reader.people")));
      const chips = make("div", null, "chips");
      people.forEach(([name, life, , fact]) => chips.append(make("span", `${name} (${life})`, null, {title: fact})));
      body.append(chips);
    }
    const places = (window.DALA_PLACES || []).filter((p) => p[5].includes(c.id));
    if (places.length) {
      body.append(make("h3", t("reader.places")));
      const chips = make("div", null, "chips");
      places.forEach(([pid, name]) => { const a = make("a", name + " ↗", null, {href: `#place-${pid}`}); a.addEventListener("click", () => reader.close()); chips.append(a); });
      body.append(chips);
    }
    body.append(make("h3", t("reader.sources")), sourceList(c));
    const actions = make("div", null, "dialog-actions");
    if (c.href) actions.append(make("a", t("reader.journey"), "btn btn-gold", {href: c.href}));
    const askBtn = make("button", t("reader.ask"), "btn btn-line", {type: "button"});
    askBtn.addEventListener("click", () => { reader.close(); ask(`«${c.title}» (${years[c.id][2]}) туралы толығырақ айтып бер.`); });
    actions.append(askBtn);
    body.append(actions);
    reader.append(close, head, body);
    // header мен body бір айналдыру аймағында болсын
    body.prepend(head);
    reader.showModal();
  }
  reader.addEventListener("click", (e) => { if (e.target === reader) reader.close(); });
  reader.addEventListener("close", () => { if (location.hash.startsWith("#history-")) history.replaceState(null, "", "#history"); });

  /* ---------- Мәдениет ---------- */
  const culture = window.DALA_CULTURE || [];
  const topics = $("topics"), topic = $("topic");
  let currentTopic = culture[0]?.[0];
  culture.forEach(([id, title]) => {
    const b = make("button", title, null, {type: "button", "aria-pressed": String(id === currentTopic)});
    b.addEventListener("click", () => { currentTopic = id; topics.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); drawTopic(); });
    topics.append(b);
  });
  function drawTopic() {
    const [id, title, tagline, paras, items, model, mark] = culture.find((c) => c[0] === currentTopic);
    topic.replaceChildren();
    if (mark) topic.append(make("span", mark, "mark"));
    topic.append(make("h3", title), make("p", tagline, "tagline"));
    paras.forEach((p) => topic.append(make("p", p)));
    const dl = make("dl");
    items.forEach(([k, v]) => dl.append(make("dt", k), make("dd", v)));
    topic.append(dl);
    const actions = make("div", null, "topic-actions");
    if (model) {
      const b = make("button", "3D мұражайда көру", "btn btn-dark", {type: "button"});
      b.addEventListener("click", () => { selectExhibit(model); $("museum").scrollIntoView({block: "start"}); });
      actions.append(b);
    }
    const a = make("button", "Гидтен сұрау", "btn btn-line", {type: "button"});
    a.addEventListener("click", () => ask(`Қазақ мәдениетіндегі «${title}» туралы айтып бер.`));
    actions.append(a);
    topic.append(actions);
  }
  if (culture.length) drawTopic();

  /* ---------- 3D мұражай тізімі ---------- */
  const exhibits = window.DALA_EXHIBITS || [];
  const exBox = $("exhibits");
  let currentExhibit = exhibits[0]?.[0];
  exhibits.forEach(([id, title, text]) => {
    const b = make("button", null, "exhibit", {type: "button", "aria-pressed": String(id === currentExhibit), "data-exhibit": id});
    b.append(make("strong", title), make("span", text));
    b.addEventListener("click", () => selectExhibit(id));
    exBox.append(b);
  });
  function selectExhibit(id) {
    const ex = exhibits.find((e) => e[0] === id);
    if (!ex) return;
    currentExhibit = id;
    exBox.querySelectorAll(".exhibit").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.exhibit === id)));
    $("exhibit-title").textContent = ex[1];
    $("exhibit-text").textContent = ex[2];
    window.DALA_PENDING_EXHIBIT = id;
    document.dispatchEvent(new CustomEvent("dala:exhibit", {detail: id}));
  }
  if (exhibits.length) selectExhibit(currentExhibit);

  /* ---------- Тұлғалар, сөздік, ойындар ---------- */
  tablist(document.querySelector("#people .subtabs"), {"tab-persons": R.renderPeople, "tab-terms": R.renderGlossary});
  whenNear($("tab-persons"), () => { const p = $("tab-persons"); if (!p.dataset.ready) { p.dataset.ready = "1"; R.renderPeople(p); } });
  const mapGame = (window.DALA_EXTRA_PRACTICE || []).find((x) => x[0] === "Картадан тап")?.[1];
  tablist(document.querySelector("#games .subtabs"), {"tab-chrono": R.renderChrono, "tab-mapgame": mapGame, "tab-daily": R.renderDaily});
  whenNear($("tab-chrono"), () => { const p = $("tab-chrono"); if (!p.dataset.ready) { p.dataset.ready = "1"; R.renderChrono(p); } });

  /* ---------- Сілтемелер: #history-<id>, #place-<id> ---------- */
  function route() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (id.startsWith("history-")) openReader(id.slice(8));
    if (id.startsWith("culture-")) {
      const b = [...topics.querySelectorAll("button")][culture.findIndex((c) => c[0] === id.slice(8))];
      if (b) { b.click(); $("culture").scrollIntoView({block: "start"}); }
    }
    if (id.startsWith("game-")) {
      const tab = $("t-" + id.slice(5));
      if (tab) { tab.click(); $("games").scrollIntoView({block: "start"}); }
    }
    if (id.startsWith("museum-")) { selectExhibit(id.slice(7)); $("museum").scrollIntoView({block: "start"}); }
    if (id.startsWith("place-")) {
      const mapTab = $("t-map");
      mapTab.click();
      setTimeout(() => R.focusPlace(id.slice(6)), 60);
    }
  }
  window.addEventListener("hashchange", route);
  route();
  window.DALA_PORTAL = {openReader, selectExhibit, ask};
})();
