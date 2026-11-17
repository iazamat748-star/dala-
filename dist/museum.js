"use strict";

(() => {
  const key = "dala-murasy-museum-quiz-v1";
  const questions = [
    {text:"Айша еденге төсеуге арналған өрнекті киізді сұрады. Қай бұйымды таңдайсың?", item:0},
    {text:"Киім мен мата жинап, жүкаяқтың үстіне қою үшін қай бұйым қажет?", item:1},
    {text:"Жолаушы қымызды жолға алып шықпақ. Қай бұйымды ұсынасың?", item:2}
  ];
  const state = {best:null, index:0, answers:[]};
  let storageOk = true;
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (Number.isInteger(saved?.best) && saved.best >= 0 && saved.best <= 3) state.best = saved.best;
    if (Number.isInteger(saved?.index) && saved.index >= 0 && saved.index <= 3 &&
        Array.isArray(saved.answers) && saved.answers.length >= saved.index && saved.answers.length <= Math.min(saved.index + 1, 3) &&
        saved.answers.every((answer) => Number.isInteger(answer) && answer >= 0 && answer < dwelling.objects.length)) {
      state.index = saved.index;
      state.answers = saved.answers.slice();
    }
  } catch {}
  const score = () => state.answers.filter((answer, index) => answer === questions[index].item).length;
  function save() {
    let previous;
    try {previous = JSON.parse(localStorage.getItem(key));} catch {}
    try {
      if (Number.isInteger(previous?.best) && previous.best >= 0 && previous.best <= 3) state.best = Math.max(state.best ?? 0, previous.best);
      localStorage.setItem(key, JSON.stringify(state));
      storageOk = true;
    } catch { storageOk = false; }
  }
  const button = (text, action, classes) => {
    const node = document.createElement("button");
    node.type = "button";
    node.textContent = text;
    if (classes) node.className = classes;
    node.addEventListener("click",action);
    get("choices").append(node);
    return node;
  };
  function returnToJournal() {hidePanel();openJournal();}
  function render() {
    stage = "museum-quiz";
    const finished = state.index === questions.length;
    const question = questions[state.index];
    showPanel(finished ? "МҰРА ІЗДЕУ · ҚОРЫТЫНДЫ" : `АЙШАНЫҢ СЫНАҒЫ · ${state.index + 1} / 3`,
      finished ? `Нәтижең · ${score()} / 3` : "Қай бұйымды таңдайсың?",
      finished ? score() === 3 ? "Үш бұйымның қолданылуын дұрыс таныдың. «Мұра білгірі» белгісін алдың." : "Дәптердегі жазбаларды қайталап, сынақты тағы өтіп көр. Үздік нәтижең сақталады." : question.text);
    advance.hidden = true;
    if (finished) {
      for (let index = 0; index < questions.length; index++) {
        const item = dwelling.objects[questions[index].item];
        const entry = document.createElement("p");
        entry.className = "museum-review";
        entry.textContent = `${state.answers[index] === questions[index].item ? "✓" : "↻"} ${item.text}`;
        get("choices").append(entry);
      }
      button("Сынақты қайта өту",() => {state.index = 0;state.answers = [];save();render();},"museum-quiz-open");
    } else {
      const chosen = state.answers[state.index];
      dwelling.objects.forEach((item,index) => {
        const choice = button(item.name,() => {
          if (state.answers[state.index] !== undefined) return;
          state.answers[state.index] = index;
          save();
          render();
          get("choices").querySelector(".museum-quiz-next").focus();
        },"museum-choice");
        choice.disabled = chosen !== undefined;
        choice.setAttribute("aria-pressed",String(chosen === index));
      });
      if (chosen !== undefined) {
        const item = dwelling.objects[question.item];
        get("feedback").textContent = `${chosen === question.item ? "✓ Дұрыс." : "↻ Дұрыс бұйым — " + item.name + "."} ${item.text}`;
        button(state.index === 2 ? "Қорытындыны көру" : "Келесі тапсырма",() => {
          state.index++;
          if (state.index === 3) state.best = Math.max(state.best ?? 0, score());
          save();
          document.dispatchEvent(new Event("dala:progress"));
          render();
        },"museum-quiz-next");
      }
    }
    const source = document.createElement("a");
    source.href = "https://e-history.kz/media/scorm/333/400/text/text.htm";
    source.target = "_blank";
    source.rel = "noopener";
    source.textContent = "Тұрмыс бұйымдары туралы дерек ↗";
    get("choices").append(source);
    button("Дәптерге оралу",returnToJournal,"museum-quiz-return");
    if (!storageOk) {
      const warning = document.createElement("p");
      warning.textContent = "Браузер нәтижені сақтай алмады. Осы беттен шықпай қорытындыны жүктеп ал.";
      get("choices").append(warning);
    }
    get("choices").querySelector("button:not(:disabled)")?.focus();
  }
  window.DALA_MUSEUM = {
    open:() => {if (discoveries.size === dwelling.objects.length) render();},
    best:() => state.best,
    report:() => `Мұра білгірі сынағы · ${state.best === null ? "өтілмеген" : state.best + " / 3"}`
  };
})();
