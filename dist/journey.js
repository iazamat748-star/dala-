"use strict";

(() => {
  const {chapters, appendSources, learningState} = window.DALA_LEARNING;
  const find = (id) => document.getElementById(id);
  const make = (tag, text, classes) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (classes) node.className = classes;
    return node;
  };
  const button = (label, action, classes = "trial-button") => {
    const node = make("button", label, classes);
    node.type = "button";
    node.addEventListener("click", action);
    return node;
  };
  const link = (label, href) => {
    const node = make("a", label);
    node.href = href;
    return node;
  };
  const extra = {
    qozybasy: {prompt:"Дулати қазақ сұлтандарының билік жүргізе бастауын қай мерзімге жатқызады?", choices:[["1465–1466 жылдарға.", "Хижраның 870 жылы 1465–1466 жылдарға сәйкес келеді."], ["1723 жылға.", "1723 жыл Ақтабан шұбырынды кезеңімен байланысты."]], answer:0},
    orbulak: {prompt:"Орбұлақтағы тар өткел қорғанушыларға қалай көмектесті?", choices:[["Қарсы әскердің кең жайылып қозғалуын қиындатты.", "Қорғанушылар тар жер мен орды өз пайдасына пайдаланды."], ["Барлық бағытты бірдей ашық қалдырды.", "Тар өткел шабуылдаушы топтың қозғалысын шектеді."]], answer:0},
    karatau: {prompt:"1723 жылғы шапқыншылықтың бейбіт жұртқа әсерін қай тұжырым сипаттайды?", choices:[["Халықтың қоныс ауыстыруына ықпал етпеді.", "Шапқыншылық ауыр босқыншылыққа әкелді."], ["Ауыр босқыншылық пен қоныс іздеуге әкелді.", "Ақтабан шұбырынды атауы осы ауыр кезеңмен байланысты."]], answer:1}
  };
  const bank = new Map(chapters.map((chapter) => [chapter.id, {...chapter, ...extra[chapter.id]}]));
  const state = {best:{}, runs:{}};
  const key = "dala-murasy-era-trials-v1";
  let saved;
  try { saved = JSON.parse(localStorage.getItem(key)); } catch {}
  for (const [era] of HISTORY_ERAS) {
    const best = saved?.best?.[era];
    if (Number.isInteger(best) && best >= 0 && best <= 3) state.best[era] = best;
    const run = saved?.runs?.[era];
    if (!Array.isArray(run?.ids) || run.ids.length !== 3 || new Set(run.ids).size !== 3) continue;
    if (!run.ids.every((id) => bank.get(id)?.era === era)) continue;
    if (!Number.isInteger(run.index) || run.index < 0 || run.index > 3) continue;
    if (!Array.isArray(run.answers) || run.answers.length < run.index || run.answers.length > Math.min(run.index + 1, 3)) continue;
    if (!run.answers.every((answer, index) => Number.isInteger(answer) && answer >= 0 && answer < bank.get(run.ids[index]).choices.length)) continue;
    state.runs[era] = {ids:run.ids.slice(), index:run.index, answers:run.answers.slice()};
  }
  let currentEra, storageOk = true;
  const dialog = find("era-trial");
  function save() {
    try {
      localStorage.setItem(key, JSON.stringify(state));
      storageOk = true;
    } catch { storageOk = false; }
  }
  function score(run) {
    return run.answers.filter((answer, index) => answer === bank.get(run.ids[index]).answer).length;
  }
  function newRun(era) {
    const ids = chapters.filter((chapter) => chapter.era === era).map((chapter) => chapter.id);
    for (let index = ids.length - 1; index > 0; index--) {
      const other = Math.floor(Math.random() * (index + 1));
      [ids[index], ids[other]] = [ids[other], ids[index]];
    }
    state.runs[era] = {ids:ids.slice(0, 3), answers:[], index:0};
    save();
  }
  function openTrial(era) {
    currentEra = era;
    if (!state.runs[era]) newRun(era);
    dialog.showModal();
    renderQuestion();
  }
  function renderQuestion() {
    const run = state.runs[currentEra];
    const era = HISTORY_ERAS.find(([id]) => id === currentEra);
    find("trial-era-label").textContent = era[1];
    find("trial-title").textContent = "Дәуір білгірі";
    const options = find("trial-options"), sources = find("trial-sources"), actions = find("trial-actions");
    options.replaceChildren();
    sources.replaceChildren();
    actions.replaceChildren();
    const feedback = find("trial-feedback");
    feedback.textContent = "";
    feedback.className = "";
    find("trial-storage").textContent = storageOk ? "Сынақ барысы осы браузерде сақталады." : "Браузер сақтауға рұқсат бермеді. Осы беттен шықпай сынақты аяқтап, нәтижеңді жүктеп ал.";
    if (run.index === 3) {
      const points = score(run);
      find("trial-step").textContent = "СЫНАҚ АЯҚТАЛДЫ";
      find("trial-question").textContent = `Нәтижең · ${points} / 3`;
      feedback.textContent = points === 3 ? "Дәуір белгісін алдың. Келесі кезеңді зерттеуге дайынсың." : "Төмендегі деректерді қайталап, сынақты тағы өтіп көр.";
      for (let index = 0; index < run.ids.length; index++) {
        const chapter = bank.get(run.ids[index]);
        const review = make("article", "", "trial-review");
        const correct = run.answers[index] === chapter.answer;
        review.append(make("h4", `${correct ? "✓" : "↻"} ${chapter.title}`), make("p", chapter.choices[chapter.answer][1]), link("Тақырыпты зерттеу →", "#history-" + chapter.id));
        review.querySelector("a").addEventListener("click", () => dialog.close());
        appendSources(review, chapter);
        sources.append(review);
      }
      actions.append(button("Сынақты қайта өту", () => {newRun(currentEra); renderQuestion(); renderJourney();}, "trial-primary"), button("Жетістіктерді қарау", () => {dialog.close(); location.hash = "results";}));
      find("trial-question").focus();
      return;
    }
    const chapter = bank.get(run.ids[run.index]);
    const chosen = run.answers[run.index];
    find("trial-step").textContent = `${run.index + 1} / 3 · ${chapter.date} · ${chapter.title}`;
    find("trial-question").textContent = chapter.prompt;
    chapter.choices.forEach(([label], index) => {
      const choice = button(label, () => {
        if (run.answers[run.index] !== undefined) return;
        run.answers[run.index] = index;
        save();
        renderQuestion();
        actions.querySelector("button").focus();
      }, "trial-option");
      choice.disabled = chosen !== undefined;
      choice.setAttribute("aria-pressed", String(chosen === index));
      options.append(choice);
    });
    if (chosen !== undefined) {
      const correct = chosen === chapter.answer;
      feedback.textContent = `${correct ? "✓ Дұрыс жауап." : "↻ Бұл жауап сәйкес келмеді."} ${chapter.choices[chosen][1]} Дұрыс тұжырым — ${chapter.choices[chapter.answer][0]}`;
      feedback.className = correct ? "trial-correct" : "trial-review-needed";
      appendSources(sources, chapter);
      actions.append(button(run.index === 2 ? "Нәтижені көру" : "Келесі сұрақ", () => {
        run.index++;
        if (run.index === 3) state.best[currentEra] = Math.max(state.best[currentEra] ?? 0, score(run));
        save();
        renderQuestion();
        renderJourney();
      }, "trial-primary"));
    }
    find("trial-question").focus();
  }
  function summary() {
    const {completed} = learningState();
    const correct = Object.values(state.best).reduce((total, value) => total + value, 0);
    const xp = completed.length * 100 + correct * 20;
    let level = "Бастаушы";
    if (xp >= 300) level = "Ізденуші";
    if (xp >= 1000) level = "Деректанушы";
    if (xp >= 2000) level = "Шежіреші";
    return {completed, xp, level};
  }
  function renderJourney() {
    const {completed, xp, level} = summary();
    const campaign = find("campaign");
    campaign.replaceChildren();
    const status = make("div", "", "campaign-status");
    status.append(make("small", "ЗЕРТТЕУ САПАРЫҢ"), make("h2", level), make("p", `${xp} XP · ${completed.length} / 26 бөлім аяқталды`));
    const progress = make("progress");
    progress.max = 26;
    progress.value = completed.length;
    progress.setAttribute("aria-label", "Зерттеу сапарының барысы");
    status.append(progress);
    const next = make("div", "", "campaign-next");
    let last;
    try { last = localStorage.getItem("dala-murasy-last-chapter"); } catch {}
    const pending = chapters.find((chapter) => chapter.id === last && !completed.includes(chapter));
    const target = pending ?? chapters.find((chapter) => !completed.includes(chapter));
    if (target) {
      next.append(make("small", pending ? "ТОҚТАҒАН ЖЕРІҢНЕН" : "КЕЛЕСІ БӨЛІМ"), make("h3", target.title), make("p", target.date));
      const resume = link(pending ? "Жалғастыру →" : "Сапарды бастау →", "#history-" + target.id);
      resume.className = "campaign-resume";
      next.append(resume);
    } else next.append(make("h3", "Барлық бөлім аяқталды"), link("Дәуір сынағын таңда →", "#era-trials"));
    campaign.append(status, next);
    const cards = find("trial-cards"), achievements = find("journey-results");
    cards.replaceChildren();
    achievements.replaceChildren(make("h3", "Дәуір белгілерің"), make("p", `${level} · ${xp} XP. Әр аяқталған бөлімге 100 XP, дәуір сынағындағы әр дұрыс жауапқа 20 XP беріледі. Сынақты қайталағанда үздік нәтиже есептеледі.`));
    const badges = make("div", "", "era-badges");
    for (const [id, title, , symbol] of HISTORY_ERAS) {
      const best = state.best[id];
      const run = state.runs[id];
      const card = make("article", "", "trial-card");
      card.append(make("span", symbol, "trial-emblem"), make("h4", title), make("p", best === undefined ? "3 сұрақ · дерекке сүйенген шешім" : `Үздік нәтиже · ${best} / 3`));
      const open = button(run && run.index < 3 ? "Сынақты жалғастыру" : run ? "Нәтижені ашу" : "Сынаққа кіру", () => openTrial(id));
      open.dataset.trialEra = id;
      open.setAttribute("aria-label", `${title} · ${open.textContent}`);
      card.append(open);
      cards.append(card);
      const earned = best === 3;
      const badge = make("article", "", "era-badge" + (earned ? " earned" : ""));
      badge.append(make("span", earned ? "✓" : symbol), make("strong", title), make("small", earned ? "Дәуір білгірі · 3 / 3" : best === undefined ? "Белгі алу үшін сынақты өт" : `${best} / 3 · 3 / 3 нәтижеге ұмтыл`));
      badges.append(badge);
    }
    achievements.append(badges);
  }
  find("trial-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => {
    renderJourney();
    find("trial-cards").querySelector(`[data-trial-era="${currentEra}"]`)?.focus();
  });
  for (const event of ["dala:progress", "dala:chapter-open"]) document.addEventListener(event, renderJourney);
  window.addEventListener("pageshow", renderJourney);
  window.DALA_JOURNEY = {report:() => {
    const {xp, level} = summary();
    return ["Дәуір сынақтары", `${level} · ${xp} XP`, ...HISTORY_ERAS.map(([id, title]) => `${title} · ${state.best[id] === undefined ? "өтілмеген" : state.best[id] + " / 3"}`)];
  }};
  renderJourney();
})();
