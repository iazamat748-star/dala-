"use strict";
// Дала мұрасы · жетістіктер жүйесі. Барлық беттерде (басты бет пен 3D оқиғалар) жұмыс істейді.
// Деректер тек осы браузердегі localStorage-тен оқылады.
(() => {
  const read = (key) => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } };
  const chapters = typeof HISTORY_CHAPTERS !== "undefined" ? HISTORY_CHAPTERS : [];
  const eras = (typeof HISTORY_ERAS !== "undefined" ? HISTORY_ERAS : []).map((e) => e[0]);
  const gameKeys = {qozybasy: "dala-murasy-qozybasy-v2", orbulak: "dala-murasy-1643-v1", karatau: "dala-murasy-1723-v1"};

  function snapshot() {
    const history = read("dala-murasy-history-v1") || {};
    const games = Object.fromEntries(Object.entries(gameKeys).map(([id, key]) => [id, read(key)?.chapterIndex === 6]));
    const completed = chapters.filter((c) => c.href ? games[c.id] : history[c.id] === 3).map((c) => c.id);
    const trials = read("dala-murasy-era-trials-v1")?.best || {};
    const eraBest = Object.fromEntries(eras.map((e) => [e, Number.isInteger(trials[e]) ? trials[e] : null]));
    const quizzes = {
      qozybasy: read("dala-murasy-lesson-01")?.score ?? null,
      orbulak: read("dala-murasy-lesson-1643")?.score ?? null,
      karatau: read("dala-murasy-lesson-1723")?.score ?? null
    };
    const found = read("dala-murasy-qozybasy-v2")?.discoveries;
    const museum = ["rug", "chest", "flask"].filter((id) => Array.isArray(found) && found.includes(id)).length;
    const museumQuiz = read("dala-murasy-museum-quiz-v1")?.best ?? null;
    const daily = read("dala-murasy-daily-v1") || {};
    const chrono = read("dala-murasy-chrono-v1") || {};
    const mapSeen = (read("dala-murasy-map-v1")?.seen || []).length;
    const photos = read("dala-murasy-photos-v1")?.count || 0;
    const feedback = read("dala-murasy-feedback-v1");
    const cardState = read("dala-murasy-cards-v1") || {};
    const cardList = Object.values(cardState.cards || {});
    const cards = {reviews: cardState.reviews || 0, learned: cardList.filter((c) => c.box >= 3).length, mastered: cardList.filter((c) => c.box >= 5).length};
    const mapGame = read("dala-murasy-mapgame-v1") || {};
    const correct = Object.values(eraBest).reduce((t, v) => t + (v || 0), 0);
    const xp = completed.length * 100 + correct * 20;
    const level = xp >= 2000 ? "Шежіреші" : xp >= 1000 ? "Деректанушы" : xp >= 300 ? "Ізденуші" : "Бастаушы";
    const erasCovered = new Set(chapters.filter((c) => completed.includes(c.id)).map((c) => c.era)).size;
    return {completed, games, eraBest, quizzes, museum, museumQuiz, daily, chrono, mapSeen, photos, feedback: Boolean(feedback?.rating), xp, level, erasCovered, cards, mapGame: {best: mapGame.best || 0, played: mapGame.played || 0}};
  }

  const LIST = [
    ["first", "🧭", "Алғашқы із", "Бір бөлімді аяқта.", (s) => s.completed.length >= 1],
    ["eras", "🗺️", "Алты дәуір саяхатшысы", "Әр дәуірден кемінде бір бөлімді аяқта.", (s) => s.erasCovered >= 6],
    ["half", "📜", "Шежіре жинаушы", "13 бөлімді аяқта.", (s) => s.completed.length >= 13],
    ["all", "🏆", "Дала білгірі", "Барлық 26 бөлімді аяқта.", (s) => s.completed.length >= 26],
    ["qozybasy", "🐎", "Шабарман", "Қозыбасы 3D оқиғасын соңына дейін өт.", (s) => s.games.qozybasy],
    ["orbulak", "🛡️", "Орбұлақ қорғаушысы", "Орбұлақ 3D оқиғасын соңына дейін өт.", (s) => s.games.orbulak],
    ["karatau", "🐪", "Көш жолшысы", "Қаратау 3D оқиғасын соңына дейін өт.", (s) => s.games.karatau],
    ["museum", "🏺", "Мұра зерттеушісі", "Киіз үйдегі үш бұйымды зертте.", (s) => s.museum >= 3],
    ["museum-quiz", "🎓", "Мұра білгірі", "Айшаның сынағынан 3 / 3 ал.", (s) => s.museumQuiz === 3],
    ["trial", "⭐", "Дәуір білгірі", "Бір дәуір сынағынан 3 / 3 ал.", (s) => Object.values(s.eraBest).some((v) => v === 3)],
    ["trials-all", "🌟", "Алты дәуірдің білгірі", "Барлық дәуір сынағынан 3 / 3 ал.", (s) => eras.length > 0 && Object.values(s.eraBest).every((v) => v === 3)],
    ["quiz", "✅", "Мінсіз шабарман", "Шабарман сынағынан 5 / 5 ал.", (s) => s.quizzes.qozybasy === 5],
    ["daily-3", "🔥", "Үш күн қатарынан", "Күн сұрағына үш күн қатарынан жауап бер.", (s) => (s.daily.best || 0) >= 3],
    ["daily-7", "📅", "Апталық зерттеуші", "Күн сұрағына жеті күн қатарынан жауап бер.", (s) => (s.daily.best || 0) >= 7],
    ["chrono", "🕰️", "Хронолог", "Хронология ойынында бес оқиғаны мінсіз реттеп шық.", (s) => (s.chrono.perfect || 0) >= 1],
    ["map", "📍", "Картограф", "Тарихи картадағы 10 орынды аш.", (s) => s.mapSeen >= 10],
    ["cards-20", "🃏", "Жады мықты", "20 карточканы 3-қорапқа дейін жеткіз.", (s) => s.cards.learned >= 20],
    ["map-game", "🧭", "Жер білгірі", "«Картадан тап» ойынында 650 ұпайдан асыр.", (s) => s.mapGame.best >= 650],
    ["photo", "📷", "Дала суретшісі", "3D саяхатта сурет түсір.", (s) => s.photos >= 1],
    ["feedback", "💬", "Ой бөлісуші", "Оқу тәжірибең туралы пікір қалдыр.", (s) => s.feedback],
    ["xp", "🎖️", "Деректанушы", "1000 XP жина.", (s) => s.xp >= 1000]
  ];
  const storeKey = "dala-murasy-achievements-v1";
  const unlocked = (s = snapshot()) => LIST.filter((a) => { try { return a[4](s); } catch { return false; } }).map((a) => a[0]);

  // Хабарлама (toast)
  let toastBox;
  function toast(a) {
    if (!toastBox) {
      toastBox = document.createElement("div");
      toastBox.className = "ach-toasts";
      toastBox.setAttribute("aria-live", "polite");
      document.body.append(toastBox);
      const style = document.createElement("style");
      style.textContent = `.ach-toasts{position:fixed;z-index:2147483000;right:16px;bottom:16px;display:grid;gap:8px;pointer-events:none}
.ach-toast{display:flex;gap:12px;align-items:center;min-width:250px;max-width:340px;background:#14271f;color:#f6efdc;border:1px solid #e7bf7d;border-radius:14px;padding:12px 16px;box-shadow:0 14px 34px #0007;font:14px/1.4 Arial,"Segoe UI",sans-serif;animation:ach-in .45s cubic-bezier(.2,1.4,.4,1) both}
.ach-toast b{display:block;font-size:11px;letter-spacing:1.4px;color:#e7bf7d}.ach-toast strong{font-size:16px}.ach-toast span:first-child{font-size:30px}
.ach-toast.out{animation:ach-out .4s ease both}@keyframes ach-in{from{transform:translateY(30px) scale(.9);opacity:0}}@keyframes ach-out{to{transform:translateX(40px);opacity:0}}
@media (prefers-reduced-motion:reduce){.ach-toast,.ach-toast.out{animation:none}}`;
      document.head.append(style);
    }
    // dialog ашық болса, toast сол dialog-тың ішінде көрінуі үшін top layer-ге көшіреміз
    const open = [...document.querySelectorAll("dialog[open]")].pop();
    (open || document.body).append(toastBox);
    const n = document.createElement("div");
    n.className = "ach-toast";
    const icon = document.createElement("span"); icon.textContent = a[1];
    const text = document.createElement("span");
    const kicker = document.createElement("b"); kicker.textContent = "ЖАҢА ЖЕТІСТІК";
    const title = document.createElement("strong"); title.textContent = a[2];
    text.append(kicker, title);
    n.append(icon, text);
    toastBox.append(n);
    window.DALA_SOUND?.chime?.();
    setTimeout(() => { n.classList.add("out"); setTimeout(() => n.remove(), 450); }, 4200);
  }

  function check() {
    if (!chapters.length) return;
    const now = unlocked();
    let stored = read(storeKey);
    if (!stored || !Array.isArray(stored.seen)) {
      // Алғашқы іске қосу: бұрынғы прогресті үнсіз тіркейміз
      stored = {seen: now, dates: Object.fromEntries(now.map((id) => [id, new Date().toISOString()]))};
      try { localStorage.setItem(storeKey, JSON.stringify(stored)); } catch {}
      render();
      return;
    }
    const fresh = now.filter((id) => !stored.seen.includes(id));
    if (!fresh.length) return;
    stored.seen.push(...fresh);
    for (const id of fresh) stored.dates[id] = new Date().toISOString();
    try { localStorage.setItem(storeKey, JSON.stringify(stored)); } catch {}
    fresh.forEach((id, i) => setTimeout(() => toast(LIST.find((a) => a[0] === id)), i * 700));
    render();
    document.dispatchEvent(new CustomEvent("dala:achievement", {detail: fresh}));
  }

  // Нәтиже бөліміндегі жетістіктер торы
  function render() {
    const results = document.getElementById("results");
    if (!results) return;
    let box = document.getElementById("achievements");
    if (!box) {
      box = document.createElement("div");
      box.id = "achievements";
      box.className = "ach-grid-wrap";
      const anchor = document.getElementById("journey-results") || document.getElementById("result-metrics");
      anchor?.after(box);
    }
    const s = snapshot(), have = new Set(unlocked(s));
    box.replaceChildren();
    const head = document.createElement("div");
    head.className = "ach-head";
    const h = document.createElement("h3"); h.textContent = "Жетістіктер";
    const c = document.createElement("span"); c.textContent = `${have.size} / ${LIST.length}`;
    head.append(h, c);
    const grid = document.createElement("ul");
    grid.className = "ach-grid";
    for (const [id, icon, title, desc] of LIST) {
      const li = document.createElement("li");
      li.className = have.has(id) ? "on" : "off";
      const i = document.createElement("span"); i.textContent = have.has(id) ? icon : "🔒"; i.setAttribute("aria-hidden", "true");
      const t = document.createElement("strong"); t.textContent = title;
      const d = document.createElement("small"); d.textContent = desc;
      li.append(i, t, d);
      li.setAttribute("aria-label", `${title}: ${have.has(id) ? "алынды" : "әлі алынбаған"}. ${desc}`);
      grid.append(li);
    }
    box.append(head, grid);
  }

  window.DALA_ACHIEVEMENTS = {list: LIST, snapshot, unlocked, check};
  for (const e of ["dala:progress", "dala:game-closed"]) document.addEventListener(e, () => setTimeout(check, 50));
  window.addEventListener("storage", check);
  window.addEventListener("pageshow", check);
  setInterval(() => { if (!document.hidden) check(); }, 4000);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => { render(); check(); });
  else { render(); check(); }
})();
