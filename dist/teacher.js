"use strict";
// Дала мұрасы · мұғалім кабинеті
(() => {
  const $ = (id) => document.getElementById(id);
  const make = (tag, text, cls, attrs) => {
    const n = document.createElement(tag);
    if (text != null && text !== "") n.textContent = text;
    if (cls) n.className = cls;
    if (attrs) for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  };
  const chapters = HISTORY_CHAPTERS, eras = HISTORY_ERAS;
  const years = window.DALA_YEARS || {};
  const ordered = eras.flatMap(([id]) => chapters.filter((c) => c.era === id));
  const eraName = Object.fromEntries(eras.map((e) => [e[0], e[1]]));
  const achList = window.DALA_ACHIEVEMENTS?.list || [];

  /* ---------- Қойындылар ---------- */
  const tabs = [...document.querySelectorAll(".t-tabs [role=tab]")];
  tabs.forEach((tab) => tab.addEventListener("click", () => {
    tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
    document.querySelectorAll(".t-panel").forEach((p) => p.hidden = p.id !== "tab-" + tab.dataset.tab);
    history.replaceState(null, "", "#" + tab.dataset.tab);
  }));
  const initial = tabs.find((t) => "#" + t.dataset.tab === location.hash);
  if (initial) initial.click();

  /* ---------- 1. Сынып есебі ---------- */
  let students = [];
  const valid = (r) => r && r.app === "dala-murasy" && r.student && Array.isArray(r.completed);
  async function loadFiles(files) {
    const bad = [];
    for (const file of files) {
      try {
        const data = JSON.parse(await file.text());
        if (!valid(data)) { bad.push(file.name); continue; }
        const key = `${data.student.name}|${data.student.group}`.toLocaleLowerCase("kk");
        const old = students.findIndex((s) => `${s.student.name}|${s.student.group}`.toLocaleLowerCase("kk") === key);
        if (old >= 0) { if (Date.parse(data.exported) >= Date.parse(students[old].exported)) students[old] = data; }
        else students.push(data);
      } catch { bad.push(file.name); }
    }
    $("load-status").textContent = `${students.length} оқушының нәтижесі жүктелді.` + (bad.length ? ` Оқылмаған файлдар: ${bad.join(", ")}.` : "");
    render();
  }
  $("files").addEventListener("change", (e) => loadFiles([...e.target.files]));
  const drop = $("drop");
  ["dragenter", "dragover"].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.add("over"); }));
  ["dragleave", "drop"].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.remove("over"); }));
  drop.addEventListener("drop", (e) => loadFiles([...e.dataTransfer.files].filter((f) => f.name.endsWith(".json"))));
  $("clear").addEventListener("click", () => { students = []; $("load-status").textContent = ""; render(); });
  $("demo").addEventListener("click", () => {
    const names = ["Айгерім Сейітова", "Нұрлан Әбдіров", "Дана Қасымова", "Ерасыл Төлеуов", "Мадина Жақсылықова", "Арман Беков", "Әйгерім Омарова", "Темірлан Нұров", "Жансая Сәрсенова", "Бекзат Иманов", "Аружан Мұратова", "Димаш Оспанов"];
    let seed = 7;
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    students = names.map((name, i) => {
      const skill = .25 + rnd() * .75;
      const completed = ordered.filter((c, k) => rnd() < skill * (k < 12 ? 1 : .7)).map((c) => c.id);
      const eraTrials = Object.fromEntries(eras.map(([e]) => [e, rnd() < skill ? Math.min(3, Math.round(skill * 3 + rnd() - .4)) : null]));
      const xp = completed.length * 100 + Object.values(eraTrials).reduce((t, v) => t + (v || 0), 0) * 20;
      return {app: "dala-murasy", version: 2, exported: new Date().toISOString(), student: {name, group: "7 «А»"},
        xp, level: xp >= 2000 ? "Шежіреші" : xp >= 1000 ? "Деректанушы" : xp >= 300 ? "Ізденуші" : "Бастаушы",
        completed, games: {qozybasy: completed.includes("qozybasy"), orbulak: completed.includes("orbulak"), karatau: completed.includes("karatau")},
        eraTrials, quizzes: {qozybasy: rnd() < skill ? Math.round(skill * 5) : null, orbulak: null, karatau: null},
        museum: {found: Math.round(skill * 3), quiz: null}, daily: {streak: Math.round(rnd() * 5), best: Math.round(skill * 8), answered: Math.round(skill * 10), correct: Math.round(skill * 8)},
        chrono: {played: Math.round(rnd() * 6), perfect: Math.round(skill * 2), best: 3 + Math.round(skill * 2)}, mapSeen: Math.round(skill * 21),
        cards: {reviews: Math.round(skill * 120), learned: Math.round(skill * 45), mastered: Math.round(skill * 12)}, mapGame: {best: Math.round(skill * 700), played: 1 + Math.round(rnd() * 3)},
        achievements: achList.filter(() => rnd() < skill * .6).map((a) => a[0]),
        reflection: i % 3 === 0 ? "Керей мен Жәнібектің Жетісуға көшуі жаңа мемлекеттің қалыптасуына жол ашты. Дулатидің деректері осыны көрсетеді." : "",
        feedback: i % 4 === 1 ? {rating: String(3 + (i % 3)), note: "Хронология ойыны ұнады, Кеңестік кезең қиын болды."} : null};
    });
    $("load-status").textContent = "Үлгі сынып көрсетілді (12 ойдан шығарылған оқушы).";
    render();
  });

  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const avg = (list) => list.length ? list.reduce((t, v) => t + v, 0) / list.length : 0;
  function render() {
    $("report").hidden = !students.length;
    $("clear").hidden = !students.length;
    if (!students.length) return;
    $("print-date").textContent = `${new Date().toLocaleDateString("ru-RU")} · ${students.length} оқушы`;
    const n = students.length;
    // көрсеткіштер
    const metrics = $("metrics");
    metrics.replaceChildren();
    const done = students.map((s) => s.completed.length);
    const cards = [
      [String(n), "оқушы"],
      [avg(done).toFixed(1) + " / 26", "орташа аяқталған бөлім"],
      [Math.round(avg(students.map((s) => s.xp || 0))) + " XP", "орташа ұпай"],
      [pct(students.filter((s) => Object.values(s.games || {}).some(Boolean)).length, n) + "%", "кемінде бір 3D оқиғаны аяқтады"],
      [avg(students.map((s) => (s.achievements || []).length)).toFixed(1), "орташа жетістік саны"]
    ];
    for (const [v, l] of cards) { const d = make("div"); d.append(make("strong", v), make("span", l)); metrics.append(d); }
    // дәуірлер
    const bars = $("era-bars");
    bars.replaceChildren();
    const eraStats = eras.map(([id, title]) => {
      const scores = students.map((s) => s.eraTrials?.[id]).filter((v) => Number.isInteger(v));
      const eraChapters = chapters.filter((c) => c.era === id).map((c) => c.id);
      const coverage = avg(students.map((s) => eraChapters.filter((c) => s.completed.includes(c)).length / eraChapters.length));
      return {id, title, trial: scores.length ? avg(scores) : null, taken: scores.length, coverage};
    });
    for (const e of eraStats) {
      const row = make("div", null, "t-bar");
      const label = make("span", e.title);
      const track = make("div", null, "t-track");
      const a = make("i", null, "a"); a.style.width = (e.trial === null ? 0 : e.trial / 3 * 100) + "%";
      const b = make("i", null, "b"); b.style.width = e.coverage * 100 + "%";
      track.append(a, b);
      row.append(label, track, make("small", `${e.trial === null ? "—" : e.trial.toFixed(1) + " / 3"} · ${Math.round(e.coverage * 100)}%`));
      bars.append(row);
    }
    bars.append(make("p", "■ сынақ нәтижесі   ■ аяқталған бөлімдер", "t-legend"));
    // назар аудару
    const ins = $("insights");
    ins.replaceChildren();
    const chapterRate = ordered.map((c) => [c, students.filter((s) => s.completed.includes(c.id)).length / n]);
    const weakest = chapterRate.slice().sort((a, b) => a[1] - b[1]).slice(0, 3);
    const weakEra = eraStats.filter((e) => e.trial !== null).sort((a, b) => a.trial - b.trial)[0];
    const behind = students.filter((s) => s.completed.length < Math.max(2, avg(done) * .5)).map((s) => s.student.name);
    const list = make("ul", null, "t-insights");
    list.append(make("li", `Ең аз орындалған бөлімдер: ${weakest.map(([c, r]) => `${c.title} (${Math.round(r * 100)}%)`).join("; ")}.`));
    if (weakEra) list.append(make("li", `Сынақ нәтижесі ең төмен дәуір: ${weakEra.title} (${weakEra.trial.toFixed(1)} / 3). Осы дәуірдің жұмыс парағын қолданып көр.`));
    if (behind.length) list.append(make("li", `Көмек қажет болуы мүмкін оқушылар: ${behind.join(", ")}.`));
    const low = students.filter((s) => s.feedback && Number(s.feedback.rating) <= 2).map((s) => s.student.name);
    if (low.length) list.append(make("li", `Сабақты қиын деп бағалағандар: ${low.join(", ")}.`));
    const top = students.slice().sort((a, b) => (b.xp || 0) - (a.xp || 0))[0];
    if (top) list.append(make("li", `Ең көп ұпай: ${top.student.name} · ${top.xp} XP.`));
    ins.append(list);
    drawTable();
    // жылу картасы
    const heat = $("heatmap");
    heat.replaceChildren();
    const head = make("tr");
    head.append(make("th", "Оқушы"));
    for (const c of ordered) {
      const th = make("th", null, "t-rot", {title: `${c.date} · ${c.title}`});
      th.append(make("span", c.title.split(" · ")[0]));
      head.append(th);
    }
    const thead = make("thead"); thead.append(head);
    const tbody = make("tbody");
    for (const s of students.slice().sort((a, b) => a.student.name.localeCompare(b.student.name, "kk"))) {
      const tr = make("tr");
      tr.append(make("th", s.student.name));
      for (const c of ordered) tr.append(make("td", s.completed.includes(c.id) ? "✓" : "", s.completed.includes(c.id) ? "on" : "", {title: `${s.student.name} · ${c.title}`}));
      tbody.append(tr);
    }
    const foot = make("tr");
    foot.append(make("th", "Сынып %"));
    for (const [, r] of chapterRate) { const td = make("td", Math.round(r * 100) + "", "pct"); td.style.setProperty("--p", r); foot.append(td); }
    tbody.append(foot);
    heat.append(thead, tbody);
    // пікірлер
    const voices = $("voices");
    voices.replaceChildren();
    const items = students.filter((s) => s.reflection || s.feedback?.note);
    if (!items.length) voices.append(make("p", "Әзірге жазбаша пікір жоқ.", "t-note"));
    for (const s of items) {
      const b = make("blockquote");
      b.append(make("strong", s.student.name + (s.feedback?.rating ? ` · баға ${s.feedback.rating}/5` : "")));
      if (s.reflection) b.append(make("p", "Қорытынды: " + s.reflection));
      if (s.feedback?.note) b.append(make("p", "Пікір: " + s.feedback.note));
      voices.append(b);
    }
  }

  const columns = [
    ["Оқушы", (s) => s.student.name],
    ["Сынып", (s) => s.student.group],
    ["Бөлім", (s) => s.completed.length],
    ["XP", (s) => s.xp || 0],
    ["Деңгей", (s) => s.level || ""],
    ["3D", (s) => Object.values(s.games || {}).filter(Boolean).length],
    ["Дәуір сынағы", (s) => { const v = Object.values(s.eraTrials || {}).filter(Number.isInteger); return v.length ? +(avg(v)).toFixed(1) : ""; }],
    ["Викторина", (s) => s.quizzes?.qozybasy ?? ""],
    ["Күн сұрағы", (s) => s.daily ? `${s.daily.correct}/${s.daily.answered}` : ""],
    ["Карточка", (s) => s.cards ? s.cards.learned : ""],
    ["Карта ойыны", (s) => s.mapGame ? s.mapGame.best : ""],
    ["Жетістік", (s) => (s.achievements || []).length],
    ["Жүктелген", (s) => s.exported ? new Date(s.exported).toLocaleDateString("ru-RU") : ""]
  ];
  let sortBy = 2, sortDir = -1, filter = "";
  function drawTable() {
    const table = $("students");
    const head = make("tr");
    columns.forEach(([title], i) => {
      const th = make("th", null, null, {"aria-sort": i === sortBy ? (sortDir > 0 ? "ascending" : "descending") : "none"});
      const b = make("button", title + (i === sortBy ? (sortDir > 0 ? " ▲" : " ▼") : ""), null, {type: "button"});
      b.addEventListener("click", () => { if (sortBy === i) sortDir *= -1; else { sortBy = i; sortDir = i < 2 ? 1 : -1; } drawTable(); });
      th.append(b);
      head.append(th);
    });
    table.tHead.replaceChildren(head);
    const body = table.tBodies[0];
    body.replaceChildren();
    const rows = students.filter((s) => !filter || (s.student.name + " " + s.student.group).toLocaleLowerCase("kk").includes(filter))
      .sort((a, b) => { const x = columns[sortBy][1](a), y = columns[sortBy][1](b); return (typeof x === "number" && typeof y === "number" ? x - y : String(x).localeCompare(String(y), "kk")) * sortDir; });
    for (const s of rows) {
      const tr = make("tr");
      columns.forEach(([, get], i) => tr.append(make(i === 0 ? "th" : "td", String(get(s)))));
      body.append(tr);
    }
  }
  $("filter").addEventListener("input", (e) => { filter = e.target.value.trim().toLocaleLowerCase("kk"); drawTable(); });
  $("csv").addEventListener("click", () => {
    const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const head = [...columns.map((c) => c[0]), ...ordered.map((c) => c.title), ...eras.map((e) => "Сынақ: " + e[1])];
    const lines = [head.map(esc).join(";")];
    for (const s of students) lines.push([...columns.map((c) => c[1](s)), ...ordered.map((c) => s.completed.includes(c.id) ? 1 : 0), ...eras.map((e) => s.eraTrials?.[e[0]] ?? "")].map(esc).join(";"));
    const url = URL.createObjectURL(new Blob(["﻿" + lines.join("\r\n")], {type: "text/csv;charset=utf-8"}));
    const a = make("a", null, null, {href: url, download: "Dala-murasy-synyp-esebi.csv"});
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  });
  $("print-report").addEventListener("click", () => { document.body.dataset.print = "report"; print(); });

  /* ---------- 2. Жұмыс парақтары ---------- */
  const eraSelect = $("sheet-era");
  eras.forEach(([id, title]) => eraSelect.append(make("option", title, null, {value: id})));
  eraSelect.value = "khanate";
  const shuffle = (list, seed) => {
    const out = list.slice();
    let s = seed;
    for (let i = out.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; }
    return out;
  };
  function makeSheet() {
    const era = eraSelect.value, count = Number($("sheet-count").value);
    const pool = chapters.filter((c) => c.era === era && Array.isArray(c.records) && c.records.length);
    const seed = Date.now() % 233280;
    const picked = (count >= pool.length ? pool : shuffle(pool, seed).slice(0, count)).sort((a, b) => (years[a.id]?.[0] ?? 0) - (years[b.id]?.[0] ?? 0));
    const sheet = $("sheet");
    sheet.replaceChildren();
    const page = make("article", null, "t-page");
    const head = make("header", null, "t-page-head");
    head.append(make("div", "ДАЛА МҰРАСЫ · ЖҰМЫС ПАРАҒЫ", "t-kicker"), make("h2", eraName[era]));
    const fields = make("div", null, "t-fields");
    fields.append(make("span", "Аты-жөні: ______________________________"), make("span", "Сыныбы: ________"), make("span", "Күні: ____________"));
    head.append(fields);
    page.append(head);
    const key = [];
    let task = 0;
    for (const c of picked) {
      const block = make("section", null, "t-task");
      block.append(make("h3", `${c.title}`), make("p", `${c.date} · Рөлің: ${c.role}`, "t-meta"), make("p", c.brief));
      // ретке келтіру
      task++;
      const order = shuffle(c.records.map((r, i) => [r, i]), seed + task * 31);
      block.append(make("p", `${task}. Деректерді дұрыс ретпен нөмірле (1, 2, 3).`, "t-q"));
      const ul = make("ul", null, "t-order");
      order.forEach(([[when, title, text]]) => ul.append(make("li", `☐  ${title} — ${text}`)));
      block.append(ul);
      key.push(`${task}. ${c.title}: тізімдегі ретпен — ` + order.map(([, i]) => i + 1).join(", "));
      // таңдау
      if (c.prompt && c.choices) {
        task++;
        block.append(make("p", `${task}. ${c.prompt}`, "t-q"));
        const ol = make("ol", null, "t-choices", {type: "A"});
        c.choices.forEach(([text]) => ol.append(make("li", text)));
        block.append(ol, make("p", "Таңдауыңды дерекпен дәлелде: ________________________________________________", "t-lines"));
        key.push(`${task}. ${"ABCD"[c.answer]}) ${c.choices[c.answer][0]} — ${c.choices[c.answer][1]}`);
      }
      // өз сөзімен
      task++;
      block.append(make("p", `${task}. «${c.title}» бөліміндегі ең маңызды дерек қайсы? Екі сөйлеммен түсіндір.`, "t-q"));
      block.append(make("div", null, "t-writing"));
      key.push(`${task}. Жауап еркін. Оқушы ${c.records[0][1].toLocaleLowerCase("kk")} сияқты нақты деректі атап, оның маңызын түсіндіруі керек.`);
      page.append(block);
    }
    if ($("sheet-terms").checked) {
      const terms = (window.DALA_GLOSSARY || []).filter((g) => g[2] === era);
      if (terms.length) {
        task++;
        const block = make("section", null, "t-task");
        block.append(make("h3", "Сөздік"), make("p", `${task}. Терминді оның түсіндірмесімен сызықпен қос.`, "t-q"));
        const grid = make("div", null, "t-match");
        const left = make("ol"), right = make("ol", null, null, {type: "a"});
        const shown = terms.slice(0, 6);
        const mixed = shuffle(shown.map((t, i) => [t, i]), seed + 99);
        shown.forEach((t) => left.append(make("li", t[0])));
        mixed.forEach(([t]) => right.append(make("li", t[1])));
        grid.append(left, right);
        block.append(grid);
        key.push(`${task}. ` + shown.map((t, i) => `${i + 1}–${"abcdef"[mixed.findIndex(([, j]) => j === i)]}`).join(", "));
        page.append(block);
      }
    }
    page.append(make("footer", "Дереккөз: e-history.kz және «Дала мұрасы» оқу жобасы", "t-page-foot"));
    sheet.append(page);
    if ($("sheet-key").checked) {
      const k = make("article", null, "t-page t-key");
      k.append(make("div", "МҰҒАЛІМГЕ · ЖАУАП КІЛТІ", "t-kicker"), make("h2", eraName[era]));
      const ol = make("ul");
      key.forEach((line) => ol.append(make("li", line)));
      k.append(ol);
      sheet.append(k);
    }
  }
  $("sheet-make").addEventListener("click", makeSheet);
  $("sheet-print").addEventListener("click", () => { if (!$("sheet").children.length) makeSheet(); document.body.dataset.print = "sheet"; print(); });
  makeSheet();

  /* ---------- 3. Сабақ жоспарлары ---------- */
  const PLANS = [
    {id: "qozybasy", title: "Қазақ хандығының құрылуы (Қозыбасы)", grade: "6–7 сынып", goals: ["Керей, Жәнібек және Есенбұғаның рөлін түсіндіреді.", "Көштің бағытын және Қозыбасының орнын картадан көрсетеді.", "Тарихи дерек пен ойын оқиғасын ажыратады."],
      steps: [["8 мин", "Кіріспе", "Уақыт сызығынан Ұлыстар мен Қозыбасы бөлімдерін ашып, оқиғалар ретін талқыла. Тарихи картадан Шу өңірін тап."], ["22 мин", "3D саяхат", "Жұппен «Қазақ хандығының құрылуы» ойынын өт. Бір оқушы шабарманды басқарады, екіншісі деректерді жазып отырады. Орта тұста рөлдерін ауыстырады."], ["10 мин", "Бекіту", "«Шабарман сынағы» мен Қазақ хандығы дәуірінің сынағын орында."], ["5 мин", "Рефлексия", "Әр жұп ойын оқиғасының бір мысалын және оны толықтыратын бір тарихи деректі атайды."]],
      homework: "Мұхаммед Хайдар Дулатидің «Тарих-и Рашиди» еңбегі туралы үш сөйлем жаз.", sources: ["khan"]},
    {id: "orbulak", title: "Орбұлақ шайқасы (1643)", grade: "7 сынып", goals: ["Жоңғар қаупінің себептерін атайды.", "Жәңгір хан мен Жалаңтөс баһадүрдің рөлін сипаттайды.", "Жер бедерінің шайқас барысына әсерін түсіндіреді."],
      steps: [["7 мин", "Мәселе қою", "Сұрақ: «Аз әскер көп әскерге қалай төтеп бере алды?» Тарихи картадан Жетісу мен Орбұлақты тап."], ["20 мин", "3D оқиға", "«Орбұлақ · Тар шатқалдағы хабар» оқиғасын өт. Оқушылар қорғаныс шептерінің орналасуын дәптерге сызады."], ["10 мин", "Дерекпен жұмыс", "Жұмыс парағындағы «Қазақ хандығы» тапсырмаларын орында. Деректердегі әскер санының әртүрлі екенін талқыла."], ["8 мин", "Қорытынды", "Әр топ шайқастың нәтижесін екі себеппен түсіндіреді: жер бедері және одақтастың көмегі."]],
      homework: "Жалаңтөс баһадүр салдырған Самарқандтағы медреселер туралы қысқа хабарлама дайында.", sources: ["orbulak"]},
    {id: "karatau", title: "Ақтабан шұбырынды (1723)", grade: "7 сынып", goals: ["1723 жылғы шапқыншылықтың халыққа әсерін сипаттайды.", "Босқыншылықтың бағыттарын картадан көрсетеді.", "Тарихи естелік пен деректі салыстырады."],
      steps: [["8 мин", "Кіріспе", "«Елім-ай» әнінің тарихы туралы мұғалім әңгімесі. Уақыт сызығынан 1643 және 1723 жылдарды салыстыр."], ["20 мин", "3D оқиға", "«Қаратау · Көштің соңғы арбасы» оқиғасын өт. Оқушылар көштің қандай қиындықтарға тап болғанын тізеді."], ["10 мин", "Хронология ойыны", "Хронология ойынын екі рет ойна. Қате реттелген оқиғаларды талда."], ["7 мин", "Рефлексия", "«Ақтабан шұбырынды кезінде халықты не біріктірді?» сұрағына жазбаша жауап."]],
      homework: "Отбасы мүшелерінен немесе кітаптан 1723 жылғы оқиғаларға байланысты бір аңыз не естелік жазып кел.", sources: ["karatau"]},
    {id: "era", title: "Дәуірге шолу сабағы (кез келген дәуір)", grade: "5–9 сынып", goals: ["Дәуірдің негізгі оқиғаларын уақыт ретімен орналастырады.", "Дәуірдің негізгі тұлғаларын атайды.", "Дерекке сүйеніп шешім қабылдайды."],
      steps: [["5 мин", "Уақыт сызығы", "Дәуірді уақыт сызығынан ашып, бөлімдерді оқушылармен бірге оқы."], ["15 мин", "Тапсырмалар", "Жұппен дәуірдің екі бөлімін орында (деректерді ашу, ретке келтіру, шешім қабылдау)."], ["10 мин", "Тұлғалар мен сөздік", "Әр жұп бір тұлғаны және екі терминді таңдап, сыныпқа түсіндіреді."], ["10 мин", "Дәуір сынағы", "Дәуір сынағын жеке орында. 3/3 алғандар дәуір белгісін алады."], ["5 мин", "Шығу парағы", "Жұмыс парағындағы соңғы сұраққа жазбаша жауап."]],
      homework: "Картадан дәуірге қатысты бір тарихи орынды тауып, ол туралы бес сөйлем жаз.", sources: []}
  ];
  const planButtons = $("plan-buttons");
  PLANS.forEach((p, i) => {
    const b = make("button", p.title, i ? "t-ghost" : "t-main", {type: "button"});
    b.addEventListener("click", () => { planButtons.querySelectorAll("button").forEach((x) => x.className = "t-ghost"); b.className = "t-main"; showPlan(p); });
    planButtons.append(b);
  });
  const printPlan = make("button", "Басып шығару", "t-ghost", {type: "button"});
  printPlan.addEventListener("click", () => { document.body.dataset.print = "plan"; print(); });
  planButtons.append(printPlan);
  function showPlan(p) {
    const box = $("plan");
    box.replaceChildren();
    const page = make("article", null, "t-page");
    page.append(make("div", `САБАҚ ЖОСПАРЫ · ${p.grade} · 45 МИНУТ`, "t-kicker"), make("h2", p.title));
    page.append(make("h3", "Оқу мақсаттары"));
    const goals = make("ul"); p.goals.forEach((g) => goals.append(make("li", g))); page.append(goals);
    page.append(make("h3", "Сабақ барысы"));
    const table = make("table", null, "t-plan");
    const head = make("tr"); ["Уақыт", "Кезең", "Мұғалім мен оқушы әрекеті"].forEach((h) => head.append(make("th", h)));
    table.append(head);
    for (const [t, stage, text] of p.steps) { const tr = make("tr"); tr.append(make("td", t), make("td", stage), make("td", text)); table.append(tr); }
    page.append(table, make("h3", "Үй тапсырмасы"), make("p", p.homework));
    page.append(make("h3", "Бағалау"), make("p", "Мұғалім кабинетіндегі сынып есебі арқылы бөлімдердің орындалуын және сынақ нәтижелерін тексер. Жазбаша қорытындыларды оқушылардың JSON файлынан оқуға болады."));
    if (p.sources.length) {
      page.append(make("h3", "Дереккөздер"));
      const ul = make("ul");
      p.sources.forEach((id) => { const s = HISTORY_SOURCES[id]; if (!s) return; const li = make("li"); li.append(make("a", s[0], null, {href: s[1], target: "_blank", rel: "noopener"})); ul.append(li); });
      page.append(ul);
    }
    box.append(page);
  }
  showPlan(PLANS[0]);
  window.addEventListener("afterprint", () => delete document.body.dataset.print);
})();
