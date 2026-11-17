"use strict";
// Дала мұрасы · ақылды тарих көмекшісі.
// Интернетке қосылмайды: жауапты сайттағы деректерден (бөлімдер, тұлғалар, сөздік, орындар) құрастырады.
// Қазақ тілінің жалғауларын алып тастап, сөз түбірі бойынша іздейді және сұрақ түрін (кім, қашан, қайда, не, неге) таниды.
(() => {
  const L = window.DALA_LEARNING;
  if (!L || typeof HISTORY_CHAPTERS === "undefined") return;
  const $ = (id) => document.getElementById(id);
  const make = (tag, text, cls, attrs) => {
    const n = document.createElement(tag);
    if (text != null && text !== "") n.textContent = text;
    if (cls) n.className = cls;
    if (attrs) for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  };
  const eraName = Object.fromEntries(HISTORY_ERAS.map((e) => [e[0], e[1]]));
  const years = window.DALA_YEARS || {};
  const byId = new Map(HISTORY_CHAPTERS.map((c) => [c.id, c]));
  const chapterHref = (c) => c.href || `#history-${c.id}`;

  /* ---------- Мәтінді өңдеу ---------- */
  const norm = (t) => String(t).toLocaleLowerCase("kk").replace(/ё/g, "е").replace(/[^\p{L}\p{N}\s-]/gu, " ").replace(/-/g, " ");
  // Жалғаулар: ұзыннан қысқаға қарай. Түбір кемінде 3 әріп болып қалады.
  const SUFFIXES = ["лардың", "лердің", "дардың", "дердің", "тардың", "тердің", "ларының", "лерінің", "ларына", "леріне",
    "ларын", "лерін", "лары", "лері", "дары", "дері", "тары", "тері", "дағы", "дегі", "тағы", "тегі", "ндағы", "ндегі",
    "лардан", "лерден", "ларда", "лерде", "ларға", "лерге", "ның", "нің", "дың", "дің", "тың", "тің",
    "ынан", "інен", "нан", "нен", "дан", "ден", "тан", "тен", "ында", "інде", "нда", "нде", "да", "де", "та", "те",
    "ына", "іне", "на", "не", "ға", "ге", "қа", "ке", "ын", "ін", "ды", "ді", "ты", "ті", "ны", "ні",
    "мен", "бен", "пен", "лар", "лер", "дар", "дер", "тар", "тер", "сы", "сі", "ы", "і"];
  function stem(word) {
    if (/^\d+$/.test(word)) return word;
    let w = word;
    for (let pass = 0; pass < 3; pass++) {
      const s = SUFFIXES.find((x) => w.endsWith(x) && w.length - x.length >= 3);
      if (!s) break;
      w = w.slice(0, -s.length);
    }
    return w;
  }
  const STOP = new Set(["қашан", "қалай", "неге", "неліктен", "туралы", "кім", "кімдер", "не", "нені", "немен", "мен", "және", "ма", "ме", "ба", "бе", "па", "пе",
    "болды", "болған", "болады", "қандай", "қай", "қайда", "қайдан", "түсіндір", "айтшы", "айт", "бер", "сайт", "деген", "дегеніміз", "деп", "бұл", "осы", "сол",
    "еді", "екен", "ғой", "да", "де", "үшін", "ол", "оның", "қанша", "нешінші", "жыл", "жылы", "жылдары", "ғасыр", "ғасырда", "маған", "білгім", "келеді", "кел"]);
  const tokens = (t) => norm(t).split(/\s+/).filter((w) => w.length > 1);
  const stems = (t) => tokens(t).filter((w) => !STOP.has(w)).map(stem);

  /* ---------- Деректер индексі ---------- */
  const docs = [];
  for (const c of HISTORY_CHAPTERS) {
    const recs = L.records(c) || [];
    docs.push({type: "chapter", id: c.id, era: c.era, title: c.title, date: c.date, chapter: c,
      head: `${c.title} ${c.date}`, body: [c.brief, c.role, ...recs.flat(), c.prompt, ...(c.choices || []).flat()].filter(Boolean).join(" "),
      range: years[c.id]});
  }
  for (const [name, life, era, fact, cid] of window.DALA_PEOPLE || []) {
    const m = String(life).match(/(\d{3,4})\D+(\d{3,4})/);
    docs.push({type: "person", id: name, era, title: name, date: life, text: fact, chapter: byId.get(cid), head: name, body: `${life} ${fact}`,
      range: m ? [+m[1], +m[2]] : null});
  }
  for (const [term, def, era] of window.DALA_GLOSSARY || []) docs.push({type: "term", id: term, era, title: term, text: def, head: term, body: def});
  for (const [id, name, lon, lat, text, cids] of window.DALA_PLACES || []) {
    docs.push({type: "place", id, title: name, text, head: name, body: text + " " + cids.map((x) => byId.get(x)?.title || "").join(" "), chapters: cids.map((x) => byId.get(x)).filter(Boolean)});
  }
  // Құжат жиілігі (IDF)
  const df = new Map();
  for (const d of docs) {
    d.headStems = new Set(stems(d.head));
    d.bodyStems = stems(d.body);
    for (const s of new Set([...d.headStems, ...d.bodyStems])) df.set(s, (df.get(s) || 0) + 1);
  }
  const idf = (s) => Math.log(1 + docs.length / (1 + (df.get(s) || 0)));

  /* ---------- Сұрақ түрі ---------- */
  function intent(q) {
    const t = " " + norm(q).replace(/\s+/g, " ") + " ";
    const has = (...words) => words.some((w) => t.includes(" " + w + " ") || t.includes(" " + w));
    if (has("қашан", "нешінші", "қай жылы", "қай ғасырда", "қай кезде", "қай жылдары")) return "when";
    if (has("қайда", "қай жерде", "қай өңірде", "қай қалада", "қайдан")) return "where";
    if (has("кім ", "кімдер", "кім еді", "кім болған")) return "who";
    if (has("неге", "неліктен", "себеб", "не үшін", "салдар")) return "why";
    if (has("деген не", "дегеніміз", "деп атайды", "мағынасы", "дегенді", "не ", "деген")) return "what";
    return "any";
  }
  const preferred = {who: "person", what: "term", where: "place", when: "chapter", why: "chapter"};

  function search(q) {
    const want = intent(q);
    const qs = [...new Set(stems(q))];
    const yearsAsked = (norm(q).match(/\b\d{3,4}\b/g) || []).map(Number);
    const scored = docs.map((d) => {
      let score = 0;
      for (const s of qs) {
        const w = idf(s);
        if (d.headStems.has(s)) score += 3 * w;
        else if ([...d.headStems].some((h) => h.length >= 4 && s.length >= 4 && (h.startsWith(s) || s.startsWith(h)))) score += 2 * w;
        const hits = d.bodyStems.filter((b) => b === s || (b.length >= 5 && s.length >= 5 && b.slice(0, 5) === s.slice(0, 5))).length;
        if (hits) score += w * (1 + Math.log(hits));
      }
      for (const y of yearsAsked) {
        if (d.range && y >= d.range[0] && y <= d.range[1]) score += 6;
        else if (d.body.includes(String(y)) || d.head.includes(String(y))) score += 5;
      }
      if (score > 0 && preferred[want] === d.type) score *= 1.6;
      return {d, score};
    }).filter((x) => x.score > 0.5).sort((a, b) => b.score - a.score);
    return {want, results: scored.slice(0, 6), qs};
  }

  /* ---------- Жауап құрастыру ---------- */
  function shortAnswer(want, top) {
    const d = top.d;
    if (d.type === "person") {
      if (want === "when") return `${d.title} ${d.date} жылдары өмір сүрді. ${d.text}`;
      return `${d.title} (${d.date}) — ${lower(d.text)}`;
    }
    if (d.type === "term") return `${d.title} — ${lower(d.text)}`;
    if (d.type === "place") return `${d.title}. ${d.text}`;
    const c = d.chapter, recs = L.records(c) || [];
    if (want === "when") return `${c.title}: ${years[c.id]?.[2] || c.date}. ${recs[0] ? recs[0][2] : c.brief}`;
    if (want === "why") return `${c.title} (${c.date}). ${recs.map((r) => r[2]).slice(0, 2).join(" ")}`;
    return `${c.title} (${c.date}). ${recs[0] ? recs[0][2] : c.brief}`;
  }
  const clip = (t, n) => t.length <= n ? t : t.slice(0, t.lastIndexOf(" ", n) > 40 ? t.lastIndexOf(" ", n) : n).replace(/[.,;:]$/, "") + "…";
  const lower = (t) => t ? t[0].toLocaleLowerCase("kk") + t.slice(1) : "";
  const TYPE_LABEL = {chapter: "Бөлім", person: "Тұлға", term: "Термин", place: "Тарихи орын"};

  function followUps(results) {
    const out = [];
    for (const {d} of results.slice(0, 3)) {
      if (d.type === "person" && d.chapter) out.push(`${d.chapter.title.split(" · ")[0]} қашан болды?`);
      if (d.type === "chapter") {
        const p = (window.DALA_PEOPLE || []).find((x) => x[4] === d.id);
        if (p) out.push(`${p[0]} кім?`);
        const place = (window.DALA_PLACES || []).find((x) => x[5].includes(d.id));
        if (place) out.push(`${place[1]} қайда?`);
      }
      if (d.type === "term") {
        const other = (window.DALA_GLOSSARY || []).find((g) => g[2] === d.era && g[0] !== d.title);
        if (other) out.push(`${other[0]} деген не?`);
      }
      if (d.type === "place" && d.chapters[0]) out.push(`${d.chapters[0].title.split(" · ")[0]} туралы айтшы`);
    }
    return [...new Set(out)].slice(0, 4);
  }

  const history = [];
  function speak(text, button) {
    if (!("speechSynthesis" in window)) return;
    if (speechSynthesis.speaking) { speechSynthesis.cancel(); button.textContent = "🔊 Тыңдау"; return; }
    const u = new SpeechSynthesisUtterance(text);
    const voice = speechSynthesis.getVoices().find((v) => /^kk/i.test(v.lang)) || speechSynthesis.getVoices().find((v) => /^(tr|ru)/i.test(v.lang));
    if (voice) { u.voice = voice; u.lang = voice.lang; } else u.lang = "kk-KZ";
    u.rate = .95;
    u.onend = () => button.textContent = "🔊 Тыңдау";
    button.textContent = "■ Тоқтату";
    speechSynthesis.speak(u);
  }

  function answer(question) {
    const box = $("helper-response");
    if (!box || !question.trim()) return;
    const {want, results} = search(question);
    box.replaceChildren();
    const head = make("div", null, "ai-question");
    head.append(make("span", "СЕН СҰРАДЫҢ", "x-kicker"), make("p", question));
    box.append(head);
    if (!results.length) {
      const miss = make("div", null, "ai-answer");
      miss.append(make("p", "Бұл сұраққа сайт деректерінен жауап таппадым. Тұлғаның атын, жылды не тақырыпты нақтырақ жазып көр."));
      const sugg = make("div", null, "ai-chips");
      for (const s of ["Абылай хан кім?", "Орбұлақ шайқасы қашан болды?", "Жеті жарғы деген не?", "Отырар қайда?"]) sugg.append(chip(s));
      miss.append(sugg);
      box.append(miss);
      return;
    }
    const top = results[0];
    const card = make("article", null, "ai-answer");
    const label = make("div", null, "ai-label");
    label.append(make("span", "✦ ҚЫСҚА ЖАУАП", "x-kicker"), make("span", `${TYPE_LABEL[top.d.type]}${top.d.era ? " · " + eraName[top.d.era] : ""}`, "ai-type"));
    const text = shortAnswer(want, top);
    card.append(label, make("p", text, "ai-text"));
    const actions = make("div", null, "ai-actions");
    const link = (t, h) => make("a", t, "ai-link", {href: h});
    if (top.d.type === "chapter") actions.append(link("Тапсырманы ашу →", chapterHref(top.d.chapter)));
    if (top.d.chapter && top.d.type === "person") actions.append(link(`${top.d.chapter.title} →`, chapterHref(top.d.chapter)));
    if (top.d.type === "place") actions.append(link("Картадан көру →", `#place-${top.d.id}`));
    if (top.d.type === "term") actions.append(link("Сөздікті ашу →", "#people"));
    if ("speechSynthesis" in window) {
      const b = make("button", "🔊 Тыңдау", "ai-link", {type: "button"});
      b.addEventListener("click", () => speak(text, b));
      actions.append(b);
    }
    card.append(actions);
    if (top.d.type === "chapter") L.appendSources(card, top.d.chapter);
    box.append(card);
    if (results.length > 1) {
      box.append(make("h3", "Тағы қатысты деректер", "ai-sub"));
      const grid = make("div", null, "ai-more");
      for (const {d} of results.slice(1, 5)) {
        const a = make("a", null, "ai-mini", {href: d.type === "chapter" ? chapterHref(d.chapter) : d.type === "place" ? `#place-${d.id}` : d.chapter ? chapterHref(d.chapter) : "#people"});
        a.append(make("small", TYPE_LABEL[d.type] + (d.date ? " · " + d.date : "")), make("strong", d.title), make("span", clip(d.text || (L.records(d.chapter)?.[0]?.[2]) || d.chapter?.brief || "", 110)));
        grid.append(a);
      }
      box.append(grid);
    }
    const asked = norm(question).trim();
    const next = followUps(results).filter((x) => norm(x).trim() !== asked);
    if (next.length) {
      box.append(make("h3", "Келесі сұрақ", "ai-sub"));
      const chips = make("div", null, "ai-chips");
      next.forEach((s) => chips.append(chip(s)));
      box.append(chips);
    }
    box.append(make("p", "Жауап сайттағы оқу деректерінен автоматты түрде құрастырылды. Маңызды мәліметті дереккөзден тексер.", "x-note"));
    history.unshift(question);
    renderHistory();
  }
  function chip(text) {
    const b = make("button", text, "ai-chip", {type: "button"});
    b.addEventListener("click", () => { $("helper-query").value = text; answer(text); $("helper-response").scrollIntoView({block: "nearest"}); });
    return b;
  }
  function renderHistory() {
    let h = $("ai-history");
    if (!h) { h = make("div", null, "ai-history", {id: "ai-history"}); $("helper-response").after(h); }
    h.replaceChildren();
    const list = [...new Set(history)].slice(1, 6);
    if (!list.length) return;
    h.append(make("small", "Бұрынғы сұрақтарың:"));
    list.forEach((q) => h.append(chip(q)));
  }

  // Бөлімнің мәтінін жаңарту
  const badge = document.querySelector("#assistant .mode-badge");
  if (badge) badge.textContent = "Дерекке негізделген көмекші · интернетсіз жұмыс істейді";
  const lead = document.querySelector("#assistant .section-lead");
  if (lead) lead.textContent = "Сұрағыңды еркін жаз: «кім», «қашан», «қайда», «деген не», «неге» сұрақтарын түсінеді. Жауап сайттағы бөлімдерден, 43 тұлғадан, сөздік пен картадан құрастырылады және дереккөзге сілтеме беріледі. Көмекші интернетке қосылмайды, сондықтан деректерде жоқ нәрсені ойдан шығармайды.";
  const prompts = document.querySelector("#assistant .helper-prompts");
  if (prompts) {
    prompts.replaceChildren();
    for (const s of ["Керей мен Жәнібек кім?", "Орбұлақ шайқасы қашан болды?", "Жеті жарғы деген не?", "Семей полигоны қайда?", "1916 жылы не болды?", "Ашаршылық неге болды?"]) prompts.append(chip(s));
  }
  window.DALA_ASSISTANT = {answer, search, stem};
})();
