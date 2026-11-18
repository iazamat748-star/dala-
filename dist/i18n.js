"use strict";
// Дала мұрасы · интерфейс тілдері: қазақша, орысша, ағылшынша.
// Беттегі [data-i18n] элементтерінің мәтіні таңдалған тілге ауысады. Тарихи мазмұн қазақ тілінде.
(() => {
  const S = {
    kk: {
      "nav.history": "Тарих", "nav.culture": "Мәдениет", "nav.museum": "3D мұражай", "nav.journeys": "3D саяхат", "nav.people": "Тұлғалар", "nav.games": "Ойындар", "nav.guide": "ЖИ гид",
      "hero.title": "Қазақ даласының тарихы мен мәдениеті", "hero.lead": "Сақтардан тәуелсіз Қазақстанға дейінгі жол, киіз үйден күйге дейінгі мұра. Оқып, 3D-де айналдырып көр, гидтен кез келген тілде сұра.",
      "hero.explore": "Тарихты ашу", "hero.ask": "Гидтен сұрау", "hero.hint": "Шаңырақ — киіз үйдің төбесі. Сен қазір үйдің ішінен аспанға қарап тұрсың.",
      "history.title": "Тарих", "history.lead": "Алты дәуір, 26 оқиға. Дәуірді таңда, уақыт сызығын жылжыт немесе картадан орынды тап.",
      "history.timeline": "Уақыт сызығы", "history.map": "Карта", "history.eras": "Дәуірлер",
      "culture.title": "Мәдениет", "culture.lead": "Киіз үй, домбыра, ою-өрнек, дастарқан, ойын мен жыр — далада ғасырлар бойы қалыптасқан өмір салты.",
      "museum.title": "3D мұражай", "museum.lead": "Экспонатты таңда, тінтуірмен айналдыр, жақындат. Анимация экспонаттың қалай жасалатынын немесе қолданылатынын көрсетеді.",
      "museum.play": "Анимацияны қосу", "museum.reset": "Бастапқы көрініс", "museum.more": "Мәдениет бөлімінде оқу",
      "journeys.title": "3D саяхат", "journeys.lead": "Тарихи оқиғаның ішіне кір: XV ғасырдағы қоныс, 1643 жылғы шатқал, 1723 жылғы көш.", "journeys.start": "Саяхатты бастау",
      "people.title": "Тұлғалар мен ұғымдар", "people.lead": "Тарихта із қалдырған адамдар және тарихи терминдердің мағынасы.", "people.people": "Тұлғалар", "people.terms": "Сөздік",
      "games.title": "Ойындар", "games.lead": "Ұлттық ойындар мен тарихи сынақтар: тоғызқұмалақ, 3D асық ату, сөзжұмбақ, күй жады және басқалар.",
      "guide.title": "ЖИ гид", "guide.lead": "Қазақстан тарихы мен мәдениеті туралы кез келген тілде сұра. Гид сайттағы деректерге сүйеніп жауап береді.",
      "guide.placeholder": "Мысалы: Абылай хан кім болған?", "guide.send": "Сұрау", "guide.settings": "Гидті баптау", "guide.clear": "Тазалау",
      "guide.offline": "Интернетсіз режим: жауап сайттағы деректерден құрастырылады.", "guide.online": "Тілдік модель қосылған",
      "footer.text": "Дала мұрасы · Қазақстан тарихы мен мәдениеті", "reader.journey": "3D саяхатты бастау", "reader.ask": "Гидтен толығырақ сұрау", "reader.sources": "Дереккөздер", "reader.people": "Тұлғалар", "reader.places": "Орындар", "reader.close": "Жабу",
      "lang.note": ""
    },
    ru: {
      "nav.history": "История", "nav.culture": "Культура", "nav.museum": "3D-музей", "nav.journeys": "3D-путешествия", "nav.people": "Личности", "nav.games": "Игры", "nav.guide": "ИИ-гид",
      "hero.title": "История и культура Казахской степи", "hero.lead": "Путь от саков до независимого Казахстана, наследие от юрты до кюя. Читайте, вращайте в 3D, спрашивайте гида на любом языке.",
      "hero.explore": "Открыть историю", "hero.ask": "Спросить гида", "hero.hint": "Шанырак — венец юрты. Вы смотрите на небо изнутри юрты.",
      "history.title": "История", "history.lead": "Шесть эпох, 26 событий. Выберите эпоху, листайте ленту времени или найдите место на карте.",
      "history.timeline": "Лента времени", "history.map": "Карта", "history.eras": "Эпохи",
      "culture.title": "Культура", "culture.lead": "Юрта, домбра, орнамент, дастархан, игры и эпос — уклад жизни, сложившийся в степи за века.",
      "museum.title": "3D-музей", "museum.lead": "Выберите экспонат, вращайте и приближайте мышью. Анимация показывает, как предмет устроен или используется.",
      "museum.play": "Включить анимацию", "museum.reset": "Исходный вид", "museum.more": "Читать в разделе «Культура»",
      "journeys.title": "3D-путешествия", "journeys.lead": "Окажитесь внутри события: стоянка XV века, ущелье 1643 года, кочевье 1723 года.", "journeys.start": "Начать путешествие",
      "people.title": "Личности и понятия", "people.lead": "Люди, оставившие след в истории, и значение исторических терминов.", "people.people": "Личности", "people.terms": "Словарь",
      "games.title": "Игры", "games.lead": "Национальные игры и исторические испытания: тогызкумалак, 3D асыки, словесная головоломка, мелодии домбры и другие.",
      "guide.title": "ИИ-гид", "guide.lead": "Спрашивайте об истории и культуре Казахстана на любом языке. Гид опирается на материалы сайта.",
      "guide.placeholder": "Например: кем был Абылай хан?", "guide.send": "Спросить", "guide.settings": "Настроить гида", "guide.clear": "Очистить",
      "guide.offline": "Офлайн-режим: ответ составляется из материалов сайта.", "guide.online": "Языковая модель подключена",
      "footer.text": "Дала мұрасы · История и культура Казахстана", "reader.journey": "Начать 3D-путешествие", "reader.ask": "Спросить гида подробнее", "reader.sources": "Источники", "reader.people": "Личности", "reader.places": "Места", "reader.close": "Закрыть",
      "lang.note": "Тексты разделов — на казахском языке. Гиду можно задавать вопросы на русском."
    },
    en: {
      "nav.history": "History", "nav.culture": "Culture", "nav.museum": "3D museum", "nav.journeys": "3D journeys", "nav.people": "People", "nav.games": "Games", "nav.guide": "AI guide",
      "hero.title": "History and culture of the Kazakh steppe", "hero.lead": "From the Saka to independent Kazakhstan, from the yurt to the küi. Read, turn objects in 3D and ask the guide in any language.",
      "hero.explore": "Explore history", "hero.ask": "Ask the guide", "hero.hint": "The shanyrak is the crown of a yurt. You are looking up at the sky from inside one.",
      "history.title": "History", "history.lead": "Six eras, 26 events. Pick an era, scroll the timeline or find a place on the map.",
      "history.timeline": "Timeline", "history.map": "Map", "history.eras": "Eras",
      "culture.title": "Culture", "culture.lead": "The yurt, the dombyra, ornament, the dastarkhan, games and epics: a way of life shaped by the steppe.",
      "museum.title": "3D museum", "museum.lead": "Pick an object, then drag to rotate and scroll to zoom. The animation shows how it is built or used.",
      "museum.play": "Play animation", "museum.reset": "Reset view", "museum.more": "Read in the Culture section",
      "journeys.title": "3D journeys", "journeys.lead": "Step inside history: a 15th-century camp, the 1643 gorge, the 1723 migration.", "journeys.start": "Start the journey",
      "people.title": "People and terms", "people.lead": "People who shaped history and what historical terms mean.", "people.people": "People", "people.terms": "Glossary",
      "games.title": "Games", "games.lead": "Traditional Kazakh games and history challenges: togyz kumalak, 3D asyk shooting, a word puzzle, a dombra memory game and more.",
      "guide.title": "AI guide", "guide.lead": "Ask about the history and culture of Kazakhstan in any language. The guide draws on this site's material.",
      "guide.placeholder": "For example: who was Abylai Khan?", "guide.send": "Ask", "guide.settings": "Guide settings", "guide.clear": "Clear",
      "guide.offline": "Offline mode: answers are built from this site's material.", "guide.online": "Language model connected",
      "footer.text": "Dala Murasy · History and culture of Kazakhstan", "reader.journey": "Start the 3D journey", "reader.ask": "Ask the guide for more", "reader.sources": "Sources", "reader.people": "People", "reader.places": "Places", "reader.close": "Close",
      "lang.note": "Section texts are in Kazakh. You can ask the guide in English."
    }
  };
  const KEY = "dala-murasy-lang-v1";
  let lang = (() => { try { return localStorage.getItem(KEY) || "kk"; } catch { return "kk"; } })();
  if (!S[lang]) lang = "kk";
  const t = (key) => S[lang][key] ?? S.kk[key] ?? key;
  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((n) => { n.textContent = t(n.dataset.i18n); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((n) => { n.placeholder = t(n.dataset.i18nPlaceholder); });
    const note = document.getElementById("lang-note");
    if (note) { note.textContent = t("lang.note"); note.hidden = !t("lang.note"); }
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    document.dispatchEvent(new CustomEvent("dala:lang", {detail: lang}));
  }
  function set(next) { if (!S[next]) return; lang = next; try { localStorage.setItem(KEY, lang); } catch {} apply(); }
  window.DALA_I18N = {t, set, get lang() { return lang; }, apply};
  document.addEventListener("click", (e) => { const b = e.target.closest("[data-lang]"); if (b) set(b.dataset.lang); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply); else apply();
})();
