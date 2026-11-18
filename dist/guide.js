"use strict";
// Дала мұрасы · көптілді ЖИ гид.
// Тілдік модельдер: Claude (Anthropic API), OpenAI-үйлесімді сервер (Ollama, LM Studio, OpenAI т.б.) немесе өз проксиің.
// Модель қосылмаса, гид интернетсіз режимде сайт деректерінен жауап құрастырады.
// Әр сұраққа сайттың ең жақын деректері (оқиғалар, тұлғалар, сөздік, орындар, мәдениет) контекст ретінде қосылады.
(() => {
  const $ = (id) => document.getElementById(id);
  const make = (tag, text, cls, attrs) => {
    const n = document.createElement(tag);
    if (text != null && text !== "") n.textContent = text;
    if (cls) n.className = cls;
    if (attrs) for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  };
  const log = $("chat-log"), form = $("chat-form"), input = $("chat-input");
  if (!log || !form) return;
  const t = (k) => window.DALA_I18N?.t(k) || k;
  const lang = () => window.DALA_I18N?.lang || "kk";
  const KEY = "dala-murasy-guide-v1";
  const DEFAULTS = {provider: "offline", anthropicKey: "", anthropicModel: "claude-sonnet-5-5", openaiBase: "http://localhost:11434/v1", openaiModel: "qwen2.5:7b", openaiKey: "", proxyUrl: ""};
  let cfg;
  try { cfg = {...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY))}; } catch { cfg = {...DEFAULTS}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cfg)); } catch {} };
  // Тарихи тұлғалар: [id, аты, жылдары, кім, байланысты бөлім]
  const PERSONAS = [
    ["guide", "Дала мұрасы гиді", "", "Тарих пен мәдениет бойынша жалпы гид", ""],
    ["abai", "Абай Құнанбайұлы", "1845–1904", "ақын, ойшыл, аудармашы, «Қара сөздердің» авторы", "resistance"],
    ["abylai", "Абылай хан", "1711–1781", "1771 жылы үш жүздің ханы болып сайланған мемлекет қайраткері", "diplomacy"],
    ["tole", "Төле би", "1663–1756", "Ұлы жүздің биі, шешен әрі әділ төреші", "law"],
    ["farabi", "Әбу Насыр әл-Фараби", "шамамен 870–950", "Фараб (Отырар) өңірінен шыққан философ, «Екінші ұстаз»", "cities"],
    ["kurmangazy", "Құрманғазы Сағырбайұлы", "1823–1896", "ұлы күйші, «Сарыарқа» мен «Адай» күйлерінің авторы", ""],
    ["bokeikhan", "Әлихан Бөкейхан", "1866–1937", "Алаш Орда үкіметінің төрағасы", "alash"],
    ["tomyris", "Томирис", "б.з.б. VI ғасыр", "сақ-массагет патшайымы", "saka"]
  ];
  let persona = (() => { try { return localStorage.getItem(KEY + "-persona") || "guide"; } catch { return "guide"; } })();
  if (!PERSONAS.some((p) => p[0] === persona)) persona = "guide";
  const P = () => PERSONAS.find((p) => p[0] === persona);
  const HKEY = () => `${KEY}-chat-${persona}`;
  const loadHistory = () => { try { return JSON.parse(localStorage.getItem(HKEY())) || []; } catch { return []; } };
  const history = loadHistory(); // {role, content}
  const saveHistory = () => { try { localStorage.setItem(HKEY(), JSON.stringify(history.slice(-30))); } catch {} };

  /* ---------- Сайт деректерінен контекст ---------- */
  const A = () => window.DALA_ASSISTANT;
  const cultureDocs = (window.DALA_CULTURE || []).map(([id, title, tagline, paras, items]) => ({title, text: [tagline, ...paras, ...items.map((i) => i.join(": "))].join(" ")}));
  const stems = (q) => (A()?.stem ? q.toLocaleLowerCase("kk").replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter((w) => w.length > 2).map(A().stem) : []);
  function context(q) {
    const out = [];
    const found = A()?.search(q)?.results || [];
    for (const {d} of found.slice(0, 5)) {
      if (d.type === "chapter") out.push({title: `${d.title} (${d.date})`, text: (window.DALA_LEARNING.records(d.chapter) || []).map((r) => `${r[0]} — ${r[1]}: ${r[2]}`).join(" "), href: d.chapter.href || `#history-${d.id}`});
      else if (d.type === "person") out.push({title: `${d.title} (${d.date})`, text: d.text, href: "#people"});
      else if (d.type === "term") out.push({title: d.title, text: d.text, href: "#people"});
      else if (d.type === "place") out.push({title: d.title, text: d.text, href: `#place-${d.id}`});
    }
    const qs = stems(q);
    for (const c of cultureDocs) {
      const hay = stems(c.title + " " + c.text);
      const score = qs.filter((s) => hay.some((h) => h === s || (s.length > 4 && h.startsWith(s.slice(0, 5))))).length;
      if (score >= Math.min(2, qs.length) && out.length < 7) out.push({title: "Мәдениет: " + c.title, text: c.text.slice(0, 700), href: "#culture"});
    }
    return out;
  }

  /* ---------- Хабарламаларды көрсету ---------- */
  function rich(el, text) {
    el.replaceChildren();
    const blocks = text.replace(/\r/g, "").split(/\n{2,}/);
    for (const block of blocks) {
      const lines = block.split("\n");
      if (lines.every((l) => /^\s*([-*•]|\d+[.)])\s+/.test(l) || !l.trim())) {
        const ul = make("ul");
        lines.filter((l) => l.trim()).forEach((l) => { const li = make("li"); inline(li, l.replace(/^\s*([-*•]|\d+[.)])\s+/, "")); ul.append(li); });
        el.append(ul);
      } else {
        const p = make("p");
        lines.forEach((l, i) => { if (i) p.append(make("br")); inline(p, l.replace(/^#+\s*/, "")); });
        el.append(p);
      }
    }
  }
  function inline(el, text) {
    text.split(/(\*\*[^*]+\*\*)/g).forEach((part) => {
      if (/^\*\*[^*]+\*\*$/.test(part)) el.append(make("strong", part.slice(2, -2)));
      else if (part) el.append(document.createTextNode(part));
    });
  }
  function bubble(role, text) {
    const m = make("div", null, "msg " + role);
    if (role === "user") m.textContent = text; else rich(m, text);
    log.append(m);
    log.scrollTop = log.scrollHeight;
    return m;
  }
  function finish(m, text, refs, meta) {
    m.classList.remove("typing");
    rich(m, text);
    if (refs?.length) {
      const r = make("div", null, "refs");
      refs.slice(0, 5).forEach((x) => r.append(make("a", x.title.replace(/^Мәдениет: /, ""), null, {href: x.href})));
      m.append(r);
    }
    const tools = make("span", meta || "", "meta");
    if ("speechSynthesis" in window) {
      const b = make("button", "🔊", null, {type: "button", "aria-label": "Дауыстап оқу", style: "margin-left:8px;border:0;background:none;cursor:pointer"});
      b.addEventListener("click", () => { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text.replace(/\*\*/g, "")); u.lang = {kk: "kk-KZ", ru: "ru-RU", en: "en-US"}[guessLang(text)] || "kk-KZ"; const v = speechSynthesis.getVoices().find((x) => x.lang.startsWith(u.lang.slice(0, 2))); if (v) u.voice = v; speechSynthesis.speak(u); });
      tools.append(b);
    }
    m.append(tools);
    log.scrollTop = log.scrollHeight;
  }
  const guessLang = (s) => /[әғқңөұүһі]/i.test(s) ? "kk" : /[а-яё]/i.test(s) ? "ru" : /[a-z]/i.test(s) ? "en" : lang();

  /* ---------- Интернетсіз жауап ---------- */
  function offlineAnswer(q) {
    const ctx = context(persona === "guide" ? q : `${q} ${P()[1]}`);
    if (persona !== "guide") {
      const [, name, years, who] = P();
      const person = (window.DALA_PEOPLE || []).find((x) => x[0].startsWith(name.split(" ")[0]));
      const intro = `Мен — ${name} (${years}). ${person ? person[3] : who[0].toLocaleUpperCase("kk") + who.slice(1) + "."}`;
      const rest = ctx.filter((c) => !c.title.startsWith(name.split(" ")[0])).slice(0, 2);
      return {text: intro + (rest.length ? "\n\nСенің сұрағыңа қатысты деректер:\n" + rest.map((c) => `- **${c.title}:** ${c.text.slice(0, 180).replace(/\s\S*$/, "")}…`).join("\n") : "") + "\n\nТұлғамен еркін сөйлесу үшін «Гидті баптау» арқылы тілдік модельді қос.", refs: ctx};
    }
    if (!ctx.length) return {text: {kk: "Бұл сұраққа сайт деректерінен жауап таппадым. Тұлғаның атын, жылды не тақырыпты нақтырақ жазып көр. Толық жауап алу үшін «Гидті баптау» арқылы тілдік модельді қос.", ru: "В материалах сайта ответа не нашлось. Уточните имя, год или тему. Для полноценных ответов на любом языке подключите языковую модель в «Настроить гида».", en: "I couldn't find an answer in this site's material. Try a name, a year or a topic. To get full answers in any language, connect a language model in Guide settings."}[guessLang(q)] || "", refs: []};
    const top = ctx[0];
    let text = `**${top.title}**\n\n${top.text}`;
    if (ctx.length > 1) text += "\n\n" + ctx.slice(1, 4).map((c) => `- **${c.title}:** ${c.text.slice(0, 160).replace(/\s\S*$/, "")}…`).join("\n");
    const note = guessLang(q) !== "kk" ? {ru: "\n\n_Офлайн-режим отвечает на казахском. Подключите языковую модель, чтобы получать ответы на русском._", en: "\n\n_Offline mode answers in Kazakh. Connect a language model to get answers in English._"}[guessLang(q)] : "";
    return {text: text + (note || "").replace(/_/g, ""), refs: ctx};
  }

  /* ---------- Тілдік модельдер ---------- */
  const SYSTEM = (ctx) => persona !== "guide" ? `You are role-playing ${P()[1]} (${P()[2]}), ${P()[3]}, in a conversation on "Dala Murasy", a website about the history and culture of Kazakhstan.
Rules:
- Speak in the first person, in the voice and worldview of ${P()[1]}, but always answer in the same language as the user's latest message.
- Stay faithful to what historians actually know about your life and times. Do not invent quotations and present them as real; if you paraphrase your known ideas or works, say so. If asked about events after your death, say you did not live to see them and answer briefly as a modern narrator would.
- Keep replies to 2–4 short paragraphs. Be warm, dignified and true to the era.
- Your first reply in a conversation should make clear, in one short phrase, that this is an imaginative reconstruction.

Site excerpts:
${ctx.map((c, i) => `[${i + 1}] ${c.title}: ${c.text}`).join("\n") || "(no close match on the site)"}` : `You are "Dala Murasy" — a friendly expert guide to the history and culture of Kazakhstan on a museum-style website.
Rules:
- Always answer in the same language as the user's latest message (Kazakh, Russian, English, Turkish, Chinese, Arabic or any other).
- Be accurate. Prefer the site excerpts below when they are relevant; add well-established historical knowledge when needed. If historians disagree or you are unsure, say so briefly. Never invent dates, quotes or sources.
- Keep answers focused: usually 2–5 short paragraphs or a short list. Use **bold** sparingly for key names and dates.
- When it helps, suggest which section of the site to open (History, Culture, 3D museum, 3D journeys, People).
- Politely steer off-topic questions back to Kazakhstan's history and culture.

Site excerpts:
${ctx.map((c, i) => `[${i + 1}] ${c.title}: ${c.text}`).join("\n") || "(no close match on the site)"}`;

  async function* sse(response) {
    const reader = response.body.getReader(), dec = new TextDecoder();
    let buf = "";
    for (;;) {
      const {value, done} = await reader.read();
      if (done) break;
      buf += dec.decode(value, {stream: true});
      let i;
      while ((i = buf.indexOf("\n")) >= 0) {
        const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
        if (line.startsWith("data:")) yield line.slice(5).trim();
      }
    }
  }
  async function askModel(q, ctx, onText, signal) {
    const messages = [...history.slice(-8), {role: "user", content: q}];
    if (cfg.provider === "anthropic" || cfg.provider === "proxy") {
      const url = cfg.provider === "proxy" ? cfg.proxyUrl : "https://api.anthropic.com/v1/messages";
      const headers = {"content-type": "application/json"};
      if (cfg.provider === "anthropic") Object.assign(headers, {"x-api-key": cfg.anthropicKey, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true"});
      const res = await fetch(url, {method: "POST", headers, signal, body: JSON.stringify({model: cfg.anthropicModel, max_tokens: 1200, stream: true, system: SYSTEM(ctx), messages})});
      if (!res.ok) throw Error(`${res.status} ${(await res.text()).slice(0, 200)}`);
      let text = "";
      for await (const data of sse(res)) {
        try { const ev = JSON.parse(data); if (ev.type === "content_block_delta" && ev.delta?.text) { text += ev.delta.text; onText(text); } if (ev.type === "error") throw Error(ev.error?.message || "error"); } catch (e) { if (e.message && !/JSON/.test(e.message)) throw e; }
      }
      return text;
    }
    if (cfg.provider === "openai") {
      const headers = {"content-type": "application/json"};
      if (cfg.openaiKey) headers.authorization = `Bearer ${cfg.openaiKey}`;
      const res = await fetch(cfg.openaiBase.replace(/\/$/, "") + "/chat/completions", {method: "POST", headers, signal, body: JSON.stringify({model: cfg.openaiModel, stream: true, temperature: .4, messages: [{role: "system", content: SYSTEM(ctx)}, ...messages]})});
      if (!res.ok) throw Error(`${res.status} ${(await res.text()).slice(0, 200)}`);
      let text = "";
      for await (const data of sse(res)) {
        if (data === "[DONE]") break;
        try { const delta = JSON.parse(data).choices?.[0]?.delta?.content; if (delta) { text += delta; onText(text); } } catch {}
      }
      return text;
    }
    throw Error("offline");
  }
  const online = () => (cfg.provider === "anthropic" && cfg.anthropicKey) || (cfg.provider === "openai" && cfg.openaiBase) || (cfg.provider === "proxy" && cfg.proxyUrl);
  const providerName = () => ({anthropic: "Claude", openai: cfg.openaiModel, proxy: "Claude (прокси)"})[cfg.provider];

  let busy = null;
  async function ask(q) {
    q = q.trim();
    if (!q) return;
    if (busy) busy.abort();
    bubble("user", q);
    const m = bubble("bot", "");
    m.classList.add("typing");
    const ctx = context(q);
    if (!online()) {
      const r = offlineAnswer(q);
      history.push({role: "user", content: q}, {role: "assistant", content: r.text}); saveHistory();
      setTimeout(() => finish(m, r.text, r.refs, t("guide.offline")), 250);
      return;
    }
    const ctrl = new AbortController(); busy = ctrl;
    try {
      const text = await askModel(q, ctx, (partial) => { rich(m, partial); log.scrollTop = log.scrollHeight; }, ctrl.signal);
      history.push({role: "user", content: q}, {role: "assistant", content: text}); saveHistory();
      finish(m, text || "…", ctx, providerName());
    } catch (e) {
      if (e.name === "AbortError") return;
      const r = offlineAnswer(q);
      finish(m, r.text, r.refs, `Модельге қосылу мүмкін болмады (${String(e.message).slice(0, 90)}). Жауап сайт деректерінен берілді.`);
    } finally { if (busy === ctrl) busy = null; }
  }

  /* ---------- Пішін ---------- */
  form.addEventListener("submit", (e) => { e.preventDefault(); const q = input.value; input.value = ""; input.style.height = ""; ask(q); });
  input.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });
  input.addEventListener("input", () => { input.style.height = "auto"; input.style.height = Math.min(140, input.scrollHeight) + "px"; });
  // Дауыспен енгізу (браузер қолдаса)
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SR) {
    const mic = make("button", "🎙", "btn btn-line", {type: "button", "aria-label": "Дауыспен сұрау", title: "Дауыспен сұрау"});
    form.insertBefore(mic, form.lastElementChild);
    mic.addEventListener("click", () => {
      const r = new SR(); r.lang = {kk: "kk-KZ", ru: "ru-RU", en: "en-US"}[lang()]; r.interimResults = false;
      r.onresult = (e) => { input.value = e.results[0][0].transcript; form.requestSubmit(); };
      r.start();
    });
  }
  $("guide-clear").addEventListener("click", () => { history.length = 0; saveHistory(); log.replaceChildren(); greet(); });
  // Тұлғаны таңдау
  const side = document.querySelector(".chat-side");
  const pickWrap = make("div", null, "field persona-pick");
  const pick = make("select", null, null, {id: "persona"});
  PERSONAS.forEach(([id, name, years]) => { const o = make("option", years ? `${name} (${years})` : name, null, {value: id}); o.selected = id === persona; pick.append(o); });
  pickWrap.append(make("label", "Кіммен сөйлесесің?", null, {for: "persona"}), pick);
  side.insertBefore(pickWrap, $("suggest"));
  pick.addEventListener("change", () => {
    persona = pick.value;
    try { localStorage.setItem(KEY + "-persona", persona); } catch {}
    history.length = 0; history.push(...loadHistory());
    log.replaceChildren(); restore(); suggestions();
  });
  function restore() {
    if (!history.length) { greet(); return; }
    for (const msg of history) { if (msg.role === "user") bubble("user", msg.content); else { const m = bubble("bot", ""); finish(m, msg.content, [], ""); } }
  }
  const SUGGEST = {
    kk: ["Қазақ хандығы қашан және қалай құрылды?", "Киіз үй қалай жиналады?", "Абылай хан кім болған?", "Күй дегеніміз не?", "Алаш қозғалысы туралы айтшы"],
    ru: ["Как образовалось Казахское ханство?", "Как устроена юрта?", "Кем был Абылай хан?", "Что такое кюй?", "Расскажи о движении Алаш"],
    en: ["How did the Kazakh Khanate begin?", "How is a yurt put together?", "Who was Abylai Khan?", "What is a küi?", "Tell me about the Alash movement"]
  };
  const PERSONA_Q = {kk: ["Өміріңнің ең маңызды кезеңі қандай болды?", "Сен өмір сүрген заман қандай еді?", "Бүгінгі жастарға не айтар едің?"], ru: ["Какой период твоей жизни был самым важным?", "Каким было твоё время?", "Что бы ты сказал сегодняшней молодёжи?"], en: ["What was the most important time of your life?", "What was your era like?", "What would you tell young people today?"]};
  function suggestions() {
    const box = $("suggest");
    box.replaceChildren();
    for (const s of (persona === "guide" ? SUGGEST : PERSONA_Q)[lang()] || SUGGEST.kk) { const b = make("button", s, null, {type: "button"}); b.addEventListener("click", () => ask(s)); box.append(b); }
  }
  function status() {
    const pill = $("guide-status");
    pill.classList.toggle("on", Boolean(online()));
    pill.querySelector("span").textContent = online() ? `${t("guide.online")}: ${providerName()}` : t("guide.offline");
  }
  function greet() {
    if (persona !== "guide") {
      const [, name, years, who] = P();
      const text = {kk: `Сәлем! Мен — ${name} (${years}), ${who}. Бұл — тарихи деректерге сүйенген көркем сұхбат. Не сұрағың келеді?`, ru: `Здравствуй! Я — ${name} (${years}). Это художественная беседа по историческим источникам. О чём хочешь спросить?`, en: `Greetings! I am ${name} (${years}). This is an imaginative conversation grounded in history. What would you like to ask?`}[lang()];
      const m = bubble("bot", ""); finish(m, text, [], online() ? providerName() : t("guide.offline"));
      return;
    }
    const text = {kk: "Сәлем! Мен «Дала мұрасы» гидімін. Қазақстан тарихы мен мәдениеті туралы кез келген тілде сұрай бер.", ru: "Сәлем! Я гид «Дала мұрасы». Спрашивайте об истории и культуре Казахстана на любом языке.", en: "Sälem! I'm the Dala Murasy guide. Ask me about Kazakhstan's history and culture in any language."}[lang()];
    const m = bubble("bot", ""); finish(m, text, [], online() ? providerName() : t("guide.offline"));
  }
  document.addEventListener("dala:lang", () => { suggestions(); status(); });

  /* ---------- Баптаулар терезесі ---------- */
  const dialog = $("guide-dialog");
  $("guide-settings").addEventListener("click", () => { buildDialog(); dialog.showModal(); });
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  function buildDialog() {
    dialog.replaceChildren();
    const body = make("div", null, "dialog-body");
    body.append(make("h2", "Гидті баптау", null, {id: "guide-dialog-title"}),
      make("p", "Тілдік модель қосылса, гид кез келген тілде еркін сөйлеседі. Кілттер мен баптаулар тек осы браузерде сақталады және тек таңдалған қызметке жіберіледі."));
    const providers = make("div", null, "providers", {role: "radiogroup", "aria-label": "Жауап көзі"});
    const opts = [
      ["offline", "Интернетсіз режим", "Тегін, кілт қажет емес. Жауап сайттағы деректерден құрастырылады, тек қазақ тілінде."],
      ["anthropic", "Claude (Anthropic API)", "Ең сапалы көптілді жауап. console.anthropic.com сайтынан алынған API кілті керек."],
      ["openai", "Өз компьютеріңдегі немесе OpenAI-үйлесімді модель", "Мысалы, Ollama (тегін, ноутбукта жұмыс істейді), LM Studio немесе OpenAI."],
      ["proxy", "Өз проксиің", "Сайтты жалпыға ашсаң: кілт серверде сақталады (tools/cloudflare-worker.js)."]
    ];
    const fields = make("div");
    for (const [id, title, hint] of opts) {
      const label = make("label");
      const r = make("input", null, null, {type: "radio", name: "provider", value: id});
      r.checked = cfg.provider === id;
      r.addEventListener("change", () => { cfg.provider = id; drawFields(); });
      const txt = make("span"); txt.append(make("strong", title), document.createTextNode(hint));
      label.append(r, txt); providers.append(label);
    }
    const field = (label, key, attrs = {}, hint) => {
      const f = make("div", null, "field");
      const id = "g-" + key;
      const inp = make("input", null, null, {id, ...attrs});
      inp.value = cfg[key] || "";
      inp.addEventListener("input", () => { cfg[key] = inp.value.trim(); });
      f.append(make("label", label, null, {for: id}), inp);
      if (hint) f.append(make("small", hint));
      return f;
    };
    function drawFields() {
      fields.replaceChildren();
      if (cfg.provider === "anthropic") {
        fields.append(field("API кілті", "anthropicKey", {type: "password", autocomplete: "off", placeholder: "sk-ant-…"}, "Кілт браузерде сақталады. Ортақ компьютерде қолданба: кілтті басқалар көруі мүмкін."));
        const f = make("div", null, "field");
        const sel = make("select", null, null, {id: "g-model"});
        for (const [v, n] of [["claude-sonnet-5-5", "Claude Sonnet 5.5 · тепе-тең"], ["claude-haiku-5-5", "Claude Haiku 5.5 · жылдам әрі арзан"], ["claude-opus-5-5", "Claude Opus 5.5 · ең қуатты"]]) { const o = make("option", n, null, {value: v}); o.selected = cfg.anthropicModel === v; sel.append(o); }
        sel.addEventListener("change", () => { cfg.anthropicModel = sel.value; });
        f.append(make("label", "Модель", null, {for: "g-model"}), sel);
        fields.append(f);
      }
      if (cfg.provider === "openai") {
        fields.append(field("Сервер мекенжайы", "openaiBase", {type: "url"}, "Ollama: http://localhost:11434/v1 · LM Studio: http://localhost:1234/v1 · OpenAI: https://api.openai.com/v1"),
          field("Модель атауы", "openaiModel", {}, "Ollama үшін көптілді модель: qwen2.5:7b немесе llama3.1:8b (алдымен «ollama pull qwen2.5:7b»)."),
          field("API кілті (қажет болса)", "openaiKey", {type: "password", autocomplete: "off"}));
      }
      if (cfg.provider === "proxy") fields.append(field("Прокси мекенжайы", "proxyUrl", {type: "url", placeholder: "https://dala-guide.example.workers.dev"}, "Прокси Anthropic Messages API пішімін қабылдап, кілтті өзі қосады."));
    }
    drawFields();
    const result = make("p", "", null, {role: "status"});
    const test = make("button", "Байланысты тексеру", "btn btn-line", {type: "button"});
    test.addEventListener("click", async () => {
      save(); status();
      if (!online()) { result.textContent = "Интернетсіз режим таңдалған: тексерудің қажеті жоқ."; return; }
      result.textContent = "Тексерілуде…";
      try { const text = await askModel("Сәлем! Бір сөйлеммен жауап бер: сен кімсің?", [], () => {}, AbortSignal.timeout(30000)); result.textContent = "Байланыс бар ✓ " + text.slice(0, 140); }
      catch (e) { result.textContent = "Қосылмады: " + String(e.message).slice(0, 200) + (cfg.provider === "openai" ? " · Ollama үшін OLLAMA_ORIGINS=* айнымалысын орнатып, қайта іске қос." : ""); }
    });
    const done = make("button", "Сақтау", "btn btn-gold", {type: "button"});
    done.addEventListener("click", () => { save(); status(); dialog.close(); });
    const actions = make("div", null, "dialog-actions");
    actions.append(done, test);
    body.append(providers, fields, actions, result);
    dialog.append(body);
  }

  suggestions(); status(); restore();
  window.DALA_GUIDE = {ask, get config() { return {...cfg, anthropicKey: cfg.anthropicKey ? "•••" : "", openaiKey: cfg.openaiKey ? "•••" : ""}; }};
})();
