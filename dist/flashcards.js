"use strict";
// Дала мұрасы · жаттығу карточкалары (Лейтнер жүйесі бойынша аралықпен қайталау)
(() => {
  const make = (tag, text, cls, attrs) => {
    const n = document.createElement(tag);
    if (text != null && text !== "") n.textContent = text;
    if (cls) n.className = cls;
    if (attrs) for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  };
  const button = (text, fn, cls = "trial-button", attrs) => { const b = make("button", text, cls, {type: "button", ...attrs}); b.addEventListener("click", fn); return b; };
  const KEY = "dala-murasy-cards-v1";
  const INTERVAL = [0, 0, 1, 3, 7, 14]; // қорап нөміріне сай күн аралығы
  const NEW_PER_SESSION = 10;
  const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 6e4) / 864e5);
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {cards: {}, reviews: 0, days: []}; } catch { return {cards: {}, reviews: 0, days: []}; } };
  const save = (s) => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} };
  const years = window.DALA_YEARS || {};

  function deck(kind) {
    const out = [];
    if (kind === "terms" || kind === "mix") for (const [term, def, era] of window.DALA_GLOSSARY || []) out.push({id: "t:" + term, era, front: term, hint: "Термин", back: def});
    if (kind === "people" || kind === "mix") for (const [name, life, era, fact] of window.DALA_PEOPLE || []) out.push({id: "p:" + name, era, front: name, hint: "Тұлға · кім?", back: `${life}. ${fact}`});
    if (kind === "dates" || kind === "mix") for (const c of HISTORY_CHAPTERS) {
      const y = years[c.id];
      if (y) out.push({id: "y:" + c.id, era: c.era, front: c.title, hint: "Қай кезең?", back: `${y[2]}. ${c.brief}`});
    }
    return out;
  }
  const DECKS = [["mix", "Аралас"], ["terms", "Терминдер"], ["people", "Тұлғалар"], ["dates", "Кезеңдер"]];
  const eraName = Object.fromEntries(HISTORY_ERAS.map((e) => [e[0], e[1]]));

  function render(panel) {
    let kind = "mix", queue = [], index = 0, flipped = false, session = {known: 0, hard: 0, again: 0};
    const box = make("div", null, "fc-wrap");
    panel.append(box);

    function stats() {
      const s = read(), cards = deck(kind);
      const boxes = [0, 0, 0, 0, 0, 0];
      let due = 0, fresh = 0;
      for (const c of cards) {
        const st = s.cards[c.id];
        if (!st) { fresh++; continue; }
        boxes[st.box]++;
        if (st.due <= today()) due++;
      }
      return {boxes, due, fresh, total: cards.length, s};
    }
    function home() {
      const {boxes, due, fresh, total, s} = stats();
      box.replaceChildren();
      const top = make("div", null, "x-daily-top");
      top.append(make("span", "ЖАТТЫҒУ КАРТОЧКАЛАРЫ", "x-kicker"), make("span", `Барлығы ${s.reviews || 0} қайталау`, "x-streak"));
      box.append(top, make("h3", "Есте сақтауды жаттықтыр"),
        make("p", "Карточканы аударып, өзіңді тексер. Білген карточка кейінірек қайталанады, білмегенің ертең қайта шығады. Аз-аздан күнде қайталау тиімді.", "x-note"));
      const decks = make("div", null, "x-chips", {role: "group", "aria-label": "Карточка жинағы"});
      for (const [id, label] of DECKS) {
        const b = button(label, () => { kind = id; home(); }, "x-chip", {"aria-pressed": String(id === kind)});
        b.classList.add("plain");
        decks.append(b);
      }
      box.append(decks);
      const bar = make("div", null, "fc-boxes", {role: "img", "aria-label": `Меңгеру деңгейі: жаңа ${fresh}, ${boxes.slice(1).map((n, i) => `${i + 1}-қорапта ${n}`).join(", ")}`});
      const segs = [["Жаңа", fresh, "#cfd6df"], ["1", boxes[1], "#e0a48c"], ["2", boxes[2], "#e7c98c"], ["3", boxes[3], "#b9d39a"], ["4", boxes[4], "#7fbf98"], ["5", boxes[5], "#2f6d58"]];
      for (const [label, n, color] of segs) {
        if (!n) continue;
        const seg = make("span", null, null, {title: `${label}: ${n}`});
        seg.style.flex = String(n); seg.style.background = color;
        bar.append(seg);
      }
      box.append(bar);
      const legend = make("p", `Жаңа: ${fresh} · Қайталау керек: ${due} · Толық меңгерілген (5-қорап): ${boxes[5]} / ${total}`, "x-note");
      box.append(legend);
      const startCount = due + Math.min(fresh, NEW_PER_SESSION);
      const start = button(startCount ? `Бастау · ${startCount} карточка →` : "Бүгінгі жаттығу аяқталды ✓", begin, "play");
      start.disabled = !startCount;
      const extra = button("Барлығын қайталау", () => begin(true), "trial-button");
      const actions = make("div", null, "x-actions");
      actions.append(start, extra);
      box.append(actions);
    }
    function begin(all = false) {
      const s = read(), cards = deck(kind), t = today();
      const due = cards.filter((c) => s.cards[c.id] && (all || s.cards[c.id].due <= t));
      const fresh = cards.filter((c) => !s.cards[c.id]).slice(0, all ? 20 : NEW_PER_SESSION);
      queue = [...due, ...fresh].sort(() => Math.random() - .5).slice(0, all ? 25 : 40);
      if (!queue.length) return;
      index = 0; flipped = false; session = {known: 0, hard: 0, again: 0};
      show();
    }
    function grade(level) {
      const s = read(), c = queue[index], t = today();
      const st = s.cards[c.id] || {box: 0, due: t};
      if (level === 0) { st.box = 1; queue.push(c); session.again++; }
      else if (level === 1) { st.box = Math.max(1, st.box); session.hard++; }
      else { st.box = Math.min(5, st.box + 1); session.known++; }
      st.due = t + INTERVAL[st.box];
      s.cards[c.id] = st;
      s.reviews = (s.reviews || 0) + 1;
      s.days = [...new Set([...(s.days || []), t])].slice(-60);
      save(s);
      index++; flipped = false;
      if (index >= queue.length || index > 60) finish(); else show();
      document.dispatchEvent(new CustomEvent("dala:progress"));
    }
    function show() {
      const c = queue[index];
      box.replaceChildren();
      const top = make("div", null, "x-daily-top");
      top.append(make("span", `${index + 1} / ${queue.length}`, "x-kicker"), button("× Жаттығуды тоқтату", home, "fc-quit"));
      const progress = make("progress", null, "fc-progress", {max: String(queue.length), value: String(index), "aria-label": "Жаттығу барысы"});
      const card = make("button", null, "fc-card" + (flipped ? " flipped" : ""), {type: "button", "aria-label": flipped ? "Карточканың алдыңғы беті" : "Карточканы аудару"});
      card.style.setProperty("--era", { ancient: "#a0643a", medieval: "#7a5aa6", khanate: "#2f6d58", empire: "#b2453b", soviet: "#4a6587", modern: "#c08a1e" }[c.era] || "#315d8c");
      const inner = make("span", null, "fc-inner");
      const front = make("span", null, "fc-face fc-front");
      front.append(make("small", `${c.hint} · ${eraName[c.era] || ""}`), make("strong", c.front), make("em", "Аудару үшін бас немесе бос орын пернесі"));
      const back = make("span", null, "fc-face fc-back");
      back.append(make("small", c.front), make("span", c.back));
      inner.append(front, back);
      card.append(inner);
      card.addEventListener("click", () => { flipped = !flipped; card.classList.toggle("flipped", flipped); answers.hidden = !flipped; card.setAttribute("aria-label", flipped ? "Карточканың алдыңғы беті" : "Карточканы аудару"); live.textContent = flipped ? c.back : ""; });
      const live = make("p", "", "sr", {"aria-live": "polite"});
      const answers = make("div", null, "fc-answers");
      answers.append(button("✗ Білмедім (1)", () => grade(0), "fc-btn again"), button("~ Қиын болды (2)", () => grade(1), "fc-btn hard"), button("✓ Білдім (3)", () => grade(2), "fc-btn good"));
      answers.hidden = !flipped;
      box.append(top, progress, card, live, answers);
      card.focus({preventScroll: true});
    }
    function finish() {
      box.replaceChildren();
      const fb = make("div", null, "x-feedback ok", {role: "status"});
      fb.append(make("strong", "Жаттығу аяқталды!"), make("p", `Білдім: ${session.known} · Қиын: ${session.hard} · Қайталадым: ${session.again}`),
        make("p", "Білмеген карточкаларың ертең қайта шығады. Күнде бірнеше минут жаттығу ұзақ есте сақтауға көмектеседі."));
      box.append(fb, button("Жинақтарға оралу", home, "play"));
    }
    box.addEventListener("keydown", (e) => {
      if (!box.querySelector(".fc-card")) return;
      if (e.key === " " && e.target.closest(".fc-card")) return; // батырманың өз әрекеті аударады
      if (!flipped) return;
      if (e.key === "1") grade(0); else if (e.key === "2") grade(1); else if (e.key === "3") grade(2);
    });
    home();
  }
  window.DALA_CARDS = {stats: () => {
    const s = read();
    const all = Object.values(s.cards || {});
    return {reviews: s.reviews || 0, learned: all.filter((c) => c.box >= 3).length, mastered: all.filter((c) => c.box >= 5).length, days: (s.days || []).length};
  }};
  (window.DALA_EXTRA_PRACTICE ||= []).push(["Жаттығу карточкалары", render]);
})();
