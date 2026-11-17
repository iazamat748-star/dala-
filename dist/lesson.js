"use strict";

(() => {
  const find = (id) => document.getElementById(id);
  const lessonEpisode = window.DALA_EPISODE;
  const storageKey = lessonEpisode ? `dala-murasy-lesson-${lessonEpisode.id}` : "dala-murasy-lesson-01";
  const items = lessonEpisode?.quiz ?? [
    {
      question: "Керей мен Жәнібек бастаған көш қай бағытқа бет алды?",
      options: ["Батыс Жетісудан Еділ бойына", "Шығыс Дешті Қыпшақтан Батыс Жетісуға", "Шу бойынан Ертіс өңіріне"],
      correct: 1,
      explanation: "Көш Әбілқайыр хан билеген Шығыс Дешті Қыпшақтан Батыс Жетісуға бет алды."
    },
    {
      question: "Көшіп келген жұртқа Қозыбасы өңірінен қоныс берген кім?",
      options: ["Есенбұға", "Әбілқайыр", "Мұхаммед Хайдар Дулати"],
      correct: 0,
      explanation: "Моғолстан ханы Есенбұға Керей мен Жәнібекті қабылдап, жаңа қоныс берді."
    },
    {
      question: "Дулати қазақ сұлтандарының билік жүргізе бастауын қай кезеңге жатқызады?",
      options: ["1428–1429 жылдарға", "1499–1500 жылдарға", "1465–1466 жылдарға"],
      correct: 2,
      explanation: "«Тарих-и Рашидиде» хижраның 870 жылы көрсетілген. Ол 1465–1466 жылдарға сәйкес келеді."
    },
    {
      question: "Оқиғаларды ертеректен кейінгіге қарай орналастыр.",
      options: ["Дулати көрсеткен хандықтың бастау мерзімі", "Керей мен Жәнібектің Әбілқайыр ұлысынан бөлініп көшуі", "Моғолстаннан жаңа қоныс алуы"],
      order: [1, 2, 0],
      explanation: "Әуелі Керей мен Жәнібек көшті. Кейін Есенбұға қоныс берді. 1465–1466 жылдар хандықтың бастау мерзімі ретінде айтылады."
    },
    {
      question: "Осы көріністердің қайсысы ойын үшін жазылған?",
      options: ["Керей мен Жәнібектің Батыс Жетісуға көшуі", "Жас шабарманның өткел таңдап, көшті бастап келуі", "Есенбұғаның көшіп келген жұртты қабылдауы"],
      correct: 1,
      explanation: "Жас шабарман мен өткелдегі тапсырма ойынның көркем оқиғасына жатады. Көш пен жаңа қоныс тарихи деректерде айтылады."
    }
  ];

  function read(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  }
  const stored = read(storageKey);
  const state = {
    read: stored?.read === true,
    game: stored?.game === true || read(lessonEpisode ? `dala-murasy-${lessonEpisode.id}-v1` : "dala-murasy-qozybasy-v2")?.chapterIndex === window.DALA_STORY.length,
    score: Number.isInteger(stored?.score) && stored.score >= 0 && stored.score <= items.length ? stored.score : null,
    note: typeof stored?.note === "string" ? stored.note.slice(0, 1200) : ""
  };
  const markRead = find("mark-read");
  const quizStart = find("quiz-start");
  const quizCard = find("quiz-card");
  const question = find("quiz-question");
  const options = find("quiz-options");
  const feedback = find("quiz-feedback");
  const next = find("quiz-next");
  const check = find("quiz-check");
  const undo = find("quiz-undo");
  const note = find("reflection-note");
  let index = 0;
  let points = 0;
  let selection = [];
  let answered = false;

  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
      return true;
    } catch {
      return false;
    }
  }
  function updateProgress() {
    document.dispatchEvent(new Event("dala:progress"));
    const steps = [state.read, state.game, state.score !== null];
    const total = steps.filter(Boolean).length;
    find("lesson-count").textContent = `${total} / 3`;
    find("lesson-progress").value = total;
    const messages = ["Алдымен тарихи деректерді оқы.", "3D ойындағы шабарман сапарын аяқта.", "Енді біліміңді сынап көр."];
    find("lesson-status").textContent = total === 3 ? "Сабақтың үш кезеңін аяқтадың." : messages[steps.indexOf(false)];
    document.querySelectorAll("[data-step-status]").forEach((step, position) => {
      step.textContent = steps[position] ? "✓" : `0${position + 1}`;
      step.closest("a").classList.toggle("step-done", steps[position]);
    });
    markRead.setAttribute("aria-pressed", String(state.read));
    markRead.textContent = state.read ? "Оқылды ✓" : "Деректі оқып шықтым";
    const saved = find("quiz-saved");
    saved.hidden = state.score === null;
    if (!saved.hidden) saved.textContent = `Ең жақсы нәтиже · ${state.score} / ${items.length}`;
  }

  markRead.addEventListener("click", () => {
    state.read = true;
    save();
    updateProgress();
  });
  document.addEventListener("dala:story-complete", () => {
    state.game = true;
    save();
    updateProgress();
  });
  note.value = state.note;
  note.addEventListener("input", () => {
    state.note = note.value;
    find("reflection-status").textContent = save() ? "Жазба осы браузерде сақталды." : "Браузер бұл жазбаны сақтай алмады.";
  });

  function showOptions() {
    const item = items[index];
    options.replaceChildren();
    item.options.forEach((text, option) => {
      const button = document.createElement("button");
      button.type = "button";
      const rank = item.order ? selection.indexOf(option) + 1 : 0;
      if (item.order) button.setAttribute("aria-pressed", String(Boolean(rank)));
      button.textContent = rank ? `${rank}. ${text}` : text;
      button.disabled = answered || Boolean(rank);
      if (answered && !item.order && option === item.correct) button.classList.add("right-answer");
      if (answered && !item.order && option === selection[0] && option !== item.correct) button.classList.add("wrong-answer");
      button.addEventListener("click", () => {
        selection.push(option);
        if (item.order) {
          showOptions();
          const available = options.querySelector("button:not(:disabled)");
          (available || check).focus();
        } else submitAnswer();
      });
      options.append(button);
    });
    undo.hidden = !item.order || answered || !selection.length;
    check.hidden = !item.order || answered;
    check.disabled = selection.length !== item.options.length;
  }
  function submitAnswer() {
    if (answered) return;
    const item = items[index];
    answered = true;
    const correct = item.order ? item.order.every((option, rank) => option === selection[rank]) : selection[0] === item.correct;
    if (correct) points++;
    showOptions();
    feedback.hidden = false;
    feedback.dataset.result = correct ? "correct" : "review";
    feedback.textContent = (correct ? "Дұрыс! " : "Қайта қара. ") + item.explanation;
    find("quiz-points").textContent = `${points} ұпай`;
    next.hidden = false;
    next.textContent = index + 1 === items.length ? "Нәтижені көру" : "Келесі сұрақ";
    next.focus();
  }
  function renderQuestion() {
    answered = false;
    selection = [];
    feedback.hidden = true;
    next.hidden = true;
    const item = items[index];
    find("quiz-step").textContent = `${index + 1} / ${items.length} тапсырма`;
    find("quiz-points").textContent = `${points} ұпай`;
    question.textContent = item.question;
    find("quiz-hint").textContent = item.order ? "Нұсқаларды ретімен бас, содан кейін «Тексеру» батырмасын таңда." : "Бір жауапты таңда.";
    showOptions();
    question.focus();
  }
  function finish() {
    state.score = Math.max(state.score ?? 0, points);
    save();
    updateProgress();
    find("quiz-step").textContent = "СЫНАҚ АЯҚТАЛДЫ";
    question.textContent = `Нәтижең · ${points} / ${items.length}`;
    find("quiz-hint").textContent = "Енді төмендегі сұраққа өз сөзіңмен жауап бер. Қаласаң, сынақты қайта өт.";
    options.replaceChildren();
    feedback.hidden = true;
    next.hidden = true;
    quizStart.hidden = false;
    quizStart.textContent = "Сынақты қайта өту";
    question.focus();
  }
  quizStart.addEventListener("click", () => {
    index = 0;
    points = 0;
    quizStart.hidden = true;
    quizCard.hidden = false;
    renderQuestion();
  });
  undo.addEventListener("click", () => {
    selection.pop();
    showOptions();
    options.querySelector("button:not(:disabled)")?.focus();
  });
  check.addEventListener("click", submitAnswer);
  next.addEventListener("click", () => {
    index++;
    if (index < items.length) renderQuestion();
    else finish();
  });
  updateProgress();
})();
