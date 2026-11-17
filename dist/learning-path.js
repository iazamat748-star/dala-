"use strict";

(() => {
  const find = (id) => document.getElementById(id);
  const make = (tag, text, classes) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (classes) node.className = classes;
    return node;
  };
  const link = (text, href) => {
    const node = make("a", text);
    node.href = href;
    return node;
  };
  const read = (key) => {
    try { return JSON.parse(localStorage.getItem(key)); }
    catch { return null; }
  };
  const chapters = HISTORY_ERAS.flatMap(([id]) => HISTORY_CHAPTERS.filter((chapter) => chapter.era === id));
  const gameKeys = {qozybasy:"dala-murasy-qozybasy-v2", orbulak:"dala-murasy-1643-v1", karatau:"dala-murasy-1723-v1"};
  const records = (chapter) => chapter.records ?? {
    qozybasy: [
      ["XV ғасырдың ортасы", "Керей мен Жәнібектің көші", "Керей мен Жәнібек сұлтандар өздеріне ерген жұртпен Шығыс Дешті Қыпшақтан Батыс Жетісуға көшті."],
      ["Батыс Жетісу", "Есенбұға берген қоныс", "Моғолстан ханы Есенбұға көшіп келгендерді қабылдап, Шу бойындағы Қозыбасы өңірінен қоныс берді."],
      ["1465–1466", "Дулатидің мәліметі", "Мұхаммед Хайдар Дулати қазақ сұлтандарының билік жүргізе бастауын хижраның 870 жылына жатқызады. Бұл 1465–1466 жылдарға сәйкес келеді."]
    ],
    orbulak: [["1643", "Орбұлақ шайқасы", "Жәңгір хан бастаған жасақ жер жағдайын қорғанысқа пайдаланды. Жалаңтөс баһадүрдің көмегі шайқас туралы деректерде аталады."]],
    karatau: [["1723", "Ақтабан шұбырынды", "Жоңғар шапқыншылығы қазақ қоғамын ауыр босқыншылыққа ұшыратты. Бұл кезең Ақтабан шұбырынды, Алқакөл сұлама атауымен есте қалды."]]
  }[chapter.id] ?? [];
  const appendSources = (container, chapter) => {
    const list = make("ul", "", "source-links");
    for (const key of [chapter.source, ...(chapter.extra ?? [])]) {
      const [title, url] = HISTORY_SOURCES[key];
      const item = make("li");
      const source = link(title + " ↗", url);
      source.target = "_blank";
      source.rel = "noopener";
      item.append(source);
      list.append(item);
    }
    container.append(list);
  };

  for (const [id, title, detail, symbol] of HISTORY_ERAS) {
    const group = chapters.filter((chapter) => chapter.era === id);
    const card = make("article", "", "period-card");
    card.append(make("span", symbol, "period-symbol"), make("h3", title), make("p", detail), make("small", `${group.length} бөлім · ${group[0].date} — ${group.at(-1).date}`));
    const open = link("Кезеңді зерттеу →", "#facts");
    open.addEventListener("click", () => {
      find("fact-topic").value = group[0].id;
      selectTab(document.getElementById("tab-events"));
    });
    card.append(open);
    find("period-cards").append(card);
  }
  const topic = find("fact-topic");
  for (const [id, title] of HISTORY_ERAS) {
    const group = make("optgroup");
    group.label = title;
    for (const chapter of chapters.filter((chapter) => chapter.era === id)) {
      const option = make("option", `${chapter.date} · ${chapter.title}`);
      option.value = chapter.id;
      group.append(option);
    }
    topic.append(group);
  }
  topic.value = "qozybasy";
  let factType = "people";
  const people = [
    ["Керей мен Жәнібек", "Керей мен Жәнібек сұлтандар Қазақ хандығының қалыптасуымен байланысты. Олардың көші мен Есенбұға берген қоныс туралы толық сабақ төменде берілген.", "qozybasy"],
    ["Мұхаммед Хайдар Дулати", "«Тарих-и Рашиди» еңбегінің авторы. Қазақ сұлтандарының билік жүргізе бастау мерзімі туралы мәлімет қалдырған.", "qozybasy"],
    ["Жәңгір хан және Жалаңтөс баһадүр", "Орбұлақ шайқасы туралы деректерде қорғаныс пен көмекке келген жасақ басшылары ретінде аталады.", "orbulak"],
    ["Абылай хан", "XVIII ғасырдағы елшілік қатынастарын «Елшілік хаттары» тапсырмасында зерттей аласың.", "diplomacy"],
    ["Кенесары Қасымұлы", "Кенесары бастаған көтерілісті «Қарсылық жолдары» бөліміндегі деректермен салыстыр.", "resistance"],
    ["Әлихан Бөкейхан", "Алаш тарихы мен саяси қуғын-сүргін туралы деректер арқылы тұлғаның өмір жолын зертте.", "alash"]
  ];
  const routes = [
    ["Керуен жолындағы қалалар", ["Тараз", "Сайрам", "Отырар"], "cities", "Ортағасырлық қалалар арасындағы мәдени және сауда байланыстарын зертте."],
    ["Керей мен Жәнібектің көші", ["Шығыс Дешті Қыпшақ", "Батыс Жетісу", "Шу · Қозыбасы"], "qozybasy", "Көш бағытын кеңістіктегі байланыс ретінде көрсететін оқу сызбасы."],
    ["1723 жылғы көш", ["Қаратау", "Көш жолы", "Сырдария бойы"], "karatau", "Босқыншылық туралы деректі ойынның көркем көш жолымен салыстыр."]
  ];
  function showFacts() {
    const chapter = chapters.find((entry) => entry.id === topic.value);
    const panel = find("fact-panel");
    panel.replaceChildren();
    panel.setAttribute("aria-labelledby", "tab-" + factType);
    panel.append(make("p", `${chapter.date} · ${chapter.title}`, "selected-topic"));
    if (factType === "people") {
      let related = people.filter((person) => person[2] === chapter.id);
      if (!related.length) related = people.filter((person) => chapters.find((entry) => entry.id === person[2]).era === chapter.era);
      panel.append(make("p", related.length ? "Таңдалған тақырып пен дәуірге қатысты тұлғалар." : "Бұл тақырыпты оқиғалар мен заттай деректер арқылы зертте. Төмендегі дереккөзден зерттеу мәліметтерін қарай аласың."));
      const grid = make("div", "", "fact-grid");
      for (const [name, text, id] of related) {
        const card = make("article", "", "fact-card");
        card.append(make("h3", name), make("p", text), link("Бөлімге өту →", "#history-" + id));
        appendSources(card, chapters.find((entry) => entry.id === id));
        grid.append(card);
      }
      panel.append(grid);
      if (!related.length) appendSources(panel, chapter);
    }
    if (factType === "events") {
      const list = make("ol", "", "fact-events");
      for (const [date, title, text] of records(chapter)) {
        const item = make("li");
        item.append(make("small", date), make("h3", title), make("p", text));
        list.append(item);
      }
      panel.append(list);
      appendSources(panel, chapter);
    }
    if (factType === "maps") {
      panel.append(make("p", "Оқу сызбалары · масштабсыз. Белгілер географиялық координаттарды көрсетпейді."));
      let related = routes.filter((route) => route[2] === chapter.id);
      if (!related.length) related = routes.filter((route) => chapters.find((entry) => entry.id === route[2]).era === chapter.era);
      if (!related.length) {
        panel.append(make("p", "Тақырыптың дереккөзінен қоныстарды, аумақтарды және оқиға орындарын зертте. Салыстырған кезде деректегі мерзімді ескер."));
        appendSources(panel, chapter);
      }
      for (const [title, places, id, caption] of related) {
        const card = make("article", "", "route-card");
        const route = make("ol", "", "route-stops");
        for (const place of places) route.append(make("li", place));
        card.append(make("h3", title), route, make("p", caption), link("Оқиғаны зерттеу →", "#history-" + id));
        appendSources(card, chapters.find((entry) => entry.id === id));
        panel.append(card);
      }
    }
    if (factType === "documents") {
      panel.append(make("h3", "Тақырыптың дереккөздері"), make("p", "Төмендегі сілтемелер оқу материалдары мен зерттеулердің түпнұсқасына апарады. Тәуелсіздік пен референдум бөлімдерінде ресми құжаттар да берілген."));
      appendSources(panel, chapter);
      const details = make("details", "", "document-library");
      details.append(make("summary", "Барлық тақырыптың дереккөздерін ашу"));
      const list = make("ul");
      for (const [label, url] of Object.values(HISTORY_SOURCES)) {
        const item = make("li");
        const source = link(label + " ↗", url);
        source.target = "_blank";
        source.rel = "noopener";
        item.append(source);
        list.append(item);
      }
      details.append(list);
      panel.append(details);
    }
    panel.append(link("Осы тақырыптың тапсырмасын ашу →", "#history-" + chapter.id));
  }
  const tabs = Array.from(document.querySelectorAll("[data-fact]"));
  const selectTab = (tab) => {
    factType = tab.dataset.fact;
    for (const other of tabs) {
      other.setAttribute("aria-selected", String(other === tab));
      other.tabIndex = other === tab ? 0 : -1;
    }
    showFacts();
  };
  for (const tab of tabs) {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (event) => {
      let index = tabs.indexOf(tab);
      if (event.key === "ArrowRight") index = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") index = (index + tabs.length - 1) % tabs.length;
      else if (event.key === "Home") index = 0;
      else if (event.key === "End") index = tabs.length - 1;
      else return;
      event.preventDefault();
      selectTab(tabs[index]);
      tabs[index].focus();
    });
  }
  topic.addEventListener("change", showFacts);
  showFacts();

  const normalize = (text) => text.toLocaleLowerCase("kk").replace(/[^\p{L}\p{N}\s]/gu, " ");
  const stops = new Set(["қашан", "қалай", "неге", "туралы", "кім", "не", "мен", "және", "ма", "ме", "болды", "қандай", "түсіндір", "бер", "сайт"]);
  function answerQuestion() {
    const question = find("helper-query").value.trim();
    if (!question) return;
    if (window.DALA_ASSISTANT) return window.DALA_ASSISTANT.answer(question);
    const terms = normalize(question).split(/\s+/).filter((word) => word.length > 1 && !stops.has(word));
    const stems = [...new Set(terms.map((word) => word.length >= 5 ? word.slice(0, 4) : word))];
    const ranked = chapters.map((chapter) => {
      const text = normalize([chapter.title, chapter.date, ...records(chapter).flat()].join(" "));
      const heading = normalize(chapter.title + " " + chapter.date);
      const score = stems.reduce((total, term) => total + (text.includes(term) ? 1 : 0) + (heading.includes(term) ? 3 : 0), 0);
      return {chapter, score};
    }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score).slice(0, 2);
    const response = find("helper-response");
    response.replaceChildren(make("p", "Сұрағың · " + question, "selected-topic"));
    if (!ranked.length) {
      response.append(make("p", "Сайт деректерінен сәйкес жауап табылмады. Тұлғаның атын, жылды немесе тақырыпты жазып көр. Мысалы, «Ботай», «1643», «Желтоқсан»."));
      return;
    }
    response.append(make("p", "Сұрағыңа қатысты табылған деректер"));
    for (const {chapter} of ranked) {
      const card = make("article", "", "answer-card");
      card.append(make("h3", chapter.title));
      for (const [date, title, fact] of records(chapter)) card.append(make("p", `${date} · ${title}. ${fact}`));
      appendSources(card, chapter);
      if (chapter.prompt) card.append(make("p", "Бекіту сұрағы · " + chapter.prompt));
      card.append(link("Тапсырмамен бекіту →", "#history-" + chapter.id));
      response.append(card);
    }
  }
  find("helper-form").addEventListener("submit", (event) => {event.preventDefault(); answerQuestion();});
  for (const prompt of document.querySelectorAll("[data-ask]")) prompt.addEventListener("click", () => {
    find("helper-query").value = prompt.dataset.ask;
    answerQuestion();
  });

  function learningState() {
    const progress = read("dala-murasy-history-v1");
    const completed = chapters.filter((chapter) => chapter.href ? read(gameKeys[chapter.id])?.chapterIndex === 6 : progress?.[chapter.id] === 3);
    const quizzes = [
      ["Қозыбасы", "dala-murasy-lesson-01", 5],
      ["Орбұлақ", "dala-murasy-lesson-1643", 4],
      ["Қаратау", "dala-murasy-lesson-1723", 4]
    ].map(([name, key, total]) => ({name, total, score:read(key)?.score})).filter((quiz) => Number.isInteger(quiz.score) && quiz.score >= 0 && quiz.score <= quiz.total);
    return {completed, quizzes};
  }
  function museumCount() {
    const found = read("dala-murasy-qozybasy-v2")?.discoveries;
    return ["rug", "chest", "flask"].filter((id) => Array.isArray(found) && found.includes(id)).length;
  }
  function updateResults() {
    const {completed, quizzes} = learningState();
    const count = museumCount();
    find("museum-progress").textContent = count === 3 ? "✓ Мұра зерттеушісі · 3 / 3 бұйым" : `Зерттелген бұйымдар · ${count} / 3`;
    const museumBest = window.DALA_MUSEUM.best();
    find("museum-knowledge").textContent = museumBest === null ? "Білім сынағы · әлі өтілмеген" : museumBest === 3 ? "✓ Мұра білгірі · білім сынағы 3 / 3" : `Білім сынағы · үздік нәтиже ${museumBest} / 3`;
    const metrics = find("result-metrics");
    metrics.replaceChildren();
    for (const [value, label] of [[`${completed.length} / 26`, "Аяқталған бөлім"], [`${completed.filter((chapter) => chapter.href).length} / 3`, "Аяқталған 3D оқиға"], [`${quizzes.length} / 3`, "Өтілген викторина"]]) {
      const card = make("div");
      card.append(make("strong", value), make("span", label));
      metrics.append(card);
    }
    const recommendation = find("learning-recommendation");
    const next = chapters.find((chapter) => !completed.includes(chapter));
    recommendation.replaceChildren(make("h3", "Келесі қадамың"));
    if (next) recommendation.append(make("p", `${next.date} · ${next.title}`), link("Зерттеуді жалғастыру →", "#history-" + next.id));
    else recommendation.append(make("p", "Барлық бөлімді аяқтадың. Тұлғалар мен құжаттарды салыстырып, қорытындыңды жаз."), link("Деректерге қайту →", "#facts"));
    for (const quiz of quizzes) recommendation.append(make("p", `${quiz.name} викторинасы · үздік нәтиже ${quiz.score} / ${quiz.total}. ${quiz.score / quiz.total < 0.8 ? "Деректерді қайталап, сынақты тағы өт." : "Тақырыпты өз сөзіңмен түсіндіріп көр."}`));
    const list = find("completed-chapters");
    list.replaceChildren();
    if (!completed.length) list.append(make("li", "Әзірге аяқталған бөлім жоқ. Бірінші тапсырмадан бастай аласың."));
    for (const chapter of completed) list.append(make("li", `${chapter.date} · ${chapter.title}`));
  }
  const feedback = read("dala-murasy-feedback-v1");
  if (["1", "2", "3", "4", "5"].includes(feedback?.rating)) find("feedback-rating").value = feedback.rating;
  if (typeof feedback?.note === "string") find("feedback-note").value = feedback.note.slice(0, 1200);
  find("feedback-form").addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      localStorage.setItem("dala-murasy-feedback-v1", JSON.stringify({rating:find("feedback-rating").value, note:find("feedback-note").value, date:new Date().toISOString()}));
      find("feedback-status").textContent = "Пікір осы браузерде сақталды. Оны оқу нәтижесімен бірге жүктей аласың.";
    } catch {
      find("feedback-status").textContent = "Браузер пікірді сақтай алмады. Қазір оқу нәтижесін жүктеп ал.";
    }
  });
  find("download-results").addEventListener("click", () => {
    const {completed, quizzes} = learningState();
    const lines = ["Дала мұрасы · Оқу нәтижесі", `Аяқталған бөлімдер ${completed.length} / 26`, ...completed.map((chapter) => `${chapter.date} · ${chapter.title}`), "", ...quizzes.map((quiz) => `${quiz.name} · ${quiz.score} / ${quiz.total}`), `Мұра зерттеушісі · ${museumCount()} / 3 бұйым`, window.DALA_MUSEUM.report(), "", ...(window.DALA_JOURNEY?.report() ?? []), "", `Оқушы бағасы ${find("feedback-rating").value || "берілмеген"} / 5`, "Оқушы пікірі", find("feedback-note").value];
    const url = URL.createObjectURL(new Blob(["\uFEFF" + lines.join("\n")], {type:"text/plain;charset=utf-8"}));
    const download = link("", url);
    download.download = "Dala-murasy-natizhe.txt";
    download.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  document.addEventListener("dala:progress", updateResults);
  document.addEventListener("dala:game-closed", updateResults);
  window.addEventListener("storage", updateResults);
  window.addEventListener("pageshow", updateResults);
  window.DALA_LEARNING = {chapters, records, appendSources, learningState};
  updateResults();
})();
