"use strict";
// Дала мұрасы · оқушы профилі, мұғалімге арналған JSON нәтиже және сертификат.
(() => {
  const results = document.getElementById("results");
  const A = window.DALA_ACHIEVEMENTS;
  if (!results || !A) return;
  const make = (tag, text, cls, attrs) => {
    const n = document.createElement(tag);
    if (text) n.textContent = text;
    if (cls) n.className = cls;
    if (attrs) for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  };
  const read = (key) => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } };
  const profileKey = "dala-murasy-student-v1";
  const profile = read(profileKey) || {name: "", group: ""};

  // 1. Оқушы туралы
  const card = make("form", null, "student-card");
  card.append(make("h3", "Оқушы туралы"), make("p", "Аты-жөнің мен сыныбың сертификатқа және мұғалімге жіберілетін файлға жазылады. Деректер тек осы браузерде сақталады.", "x-note"));
  const row = make("div", null, "student-row");
  const nameLabel = make("label", "Аты-жөні");
  const name = make("input", null, null, {type: "text", maxlength: "60", autocomplete: "name", placeholder: "Мысалы, Айгерім Сейітова"});
  name.value = profile.name || "";
  nameLabel.append(name);
  const groupLabel = make("label", "Сыныбы");
  const group = make("input", null, null, {type: "text", maxlength: "20", placeholder: "Мысалы, 7 «А»"});
  group.value = profile.group || "";
  groupLabel.append(group);
  row.append(nameLabel, groupLabel);
  const status = make("small", "", "x-note", {role: "status"});
  card.append(row, status);
  const saveProfile = () => {
    profile.name = name.value.trim(); profile.group = group.value.trim();
    try { localStorage.setItem(profileKey, JSON.stringify(profile)); status.textContent = "Сақталды."; } catch { status.textContent = "Браузер деректі сақтай алмады."; }
  };
  name.addEventListener("change", saveProfile);
  group.addEventListener("change", saveProfile);
  card.addEventListener("submit", (e) => { e.preventDefault(); saveProfile(); });
  const lead = results.querySelector(".section-lead");
  (lead || results.firstElementChild).after(card);

  // 2. JSON нәтиже (мұғалім кабинетіне)
  function report() {
    const s = A.snapshot();
    const feedback = read("dala-murasy-feedback-v1");
    return {
      app: "dala-murasy", version: 2, exported: new Date().toISOString(),
      student: {name: name.value.trim(), group: group.value.trim()},
      xp: s.xp, level: s.level, completed: s.completed, games: s.games, eraTrials: s.eraBest, quizzes: s.quizzes,
      museum: {found: s.museum, quiz: s.museumQuiz},
      daily: {streak: s.daily.streak || 0, best: s.daily.best || 0, answered: s.daily.total || 0, correct: s.daily.correct || 0},
      chrono: {played: s.chrono.played || 0, perfect: s.chrono.perfect || 0, best: s.chrono.best || 0},
      mapSeen: s.mapSeen, cards: s.cards, mapGame: s.mapGame, achievements: A.unlocked(s),
      reflection: (read("dala-murasy-lesson-01")?.note || document.getElementById("reflection-note")?.value || "").slice(0, 1200),
      feedback: feedback ? {rating: feedback.rating || "", note: (feedback.note || "").slice(0, 1200)} : null
    };
  }
  const safe = (t) => (t || "oqushy").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "").slice(0, 40);
  const download = (blob, file) => {
    const url = URL.createObjectURL(blob);
    const a = make("a", null, null, {href: url, download: file});
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };
  const actions = make("div", null, "x-actions results-actions");
  const jsonBtn = make("button", "Мұғалімге нәтиже файлы (.json) ↓", "play", {type: "button"});
  jsonBtn.addEventListener("click", () => {
    if (!name.value.trim()) { status.textContent = "Алдымен аты-жөніңді жаз."; name.focus(); return; }
    saveProfile();
    download(new Blob([JSON.stringify(report(), null, 2)], {type: "application/json"}), `Dala-murasy-${safe(name.value)}.json`);
  });
  const certBtn = make("button", "Сертификат алу 🏅", "secondary-action", {type: "button"});
  certBtn.addEventListener("click", openCertificate);
  actions.append(jsonBtn, certBtn);
  const txt = document.getElementById("download-results");
  if (txt) { txt.before(actions); actions.append(txt); txt.textContent = "Мәтін түріндегі нәтиже (.txt) ↓"; }
  else card.after(actions);
  actions.after(make("p", "Мұғалім .json файлдарын «Мұғалім кабинеті» бетінде жинап, сынып есебін көре алады.", "x-note"));

  // 3. Сертификат
  const dialog = make("dialog", null, "cert-dialog", {"aria-labelledby": "cert-title"});
  const canvas = make("canvas", null, null, {width: "1600", height: "1131", "aria-label": "Сертификат"});
  const dActions = make("div", null, "x-actions");
  const close = make("button", "Жабу", "trial-button", {type: "button"});
  const png = make("button", "Сурет ретінде жүктеу ↓", "play", {type: "button"});
  const print = make("button", "Басып шығару", "trial-button", {type: "button"});
  close.addEventListener("click", () => dialog.close());
  png.addEventListener("click", () => canvas.toBlob((b) => download(b, `Dala-murasy-sertifikat-${safe(name.value)}.png`), "image/png"));
  print.addEventListener("click", () => {
    const w = window.open("", "_blank");
    if (!w) return;
    w.document.write(`<!doctype html><title>Сертификат</title><style>@page{size:A4 landscape;margin:0}body{margin:0}img{width:100%;display:block}</style><img src="${canvas.toDataURL("image/png")}" onload="setTimeout(()=>print(),200)">`);
    w.document.close();
  });
  const h = make("h2", "Зерттеуші сертификаты", null, {id: "cert-title"});
  const hint = make("p", "", "x-note");
  dActions.append(png, print, close);
  dialog.append(h, hint, canvas, dActions);
  document.body.append(dialog);

  function wrap(ctx, text, x, y, max, lh) {
    const words = text.split(" ");
    let line = "";
    for (const w of words) {
      const test = line ? line + " " + w : w;
      if (ctx.measureText(test).width > max && line) { ctx.fillText(line, x, y); line = w; y += lh; }
      else line = test;
    }
    ctx.fillText(line, x, y);
    return y;
  }
  function ornament(ctx, x, y, s, color) {
    // қошқар мүйіз өрнегі (стильдендірілген)
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.strokeStyle = color; ctx.lineWidth = 3.2 / s; ctx.lineCap = "round";
    for (const dir of [-1, 1]) {
      ctx.beginPath();
      ctx.moveTo(0, 18);
      ctx.bezierCurveTo(dir * 4, 0, dir * 22, -6, dir * 30, 6);
      ctx.bezierCurveTo(dir * 36, 16, dir * 26, 26, dir * 18, 18);
      ctx.bezierCurveTo(dir * 13, 13, dir * 18, 7, dir * 23, 11);
      ctx.stroke();
    }
    ctx.beginPath(); ctx.moveTo(0, 18); ctx.lineTo(0, 34); ctx.stroke();
    ctx.restore();
  }
  function drawCertificate() {
    const s = A.snapshot(), have = A.unlocked(s);
    const ctx = canvas.getContext("2d"), W = canvas.width, H = canvas.height;
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#fbf6e9"); bg.addColorStop(1, "#f1e6cb");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "#173d33"; ctx.lineWidth = 22; ctx.strokeRect(34, 34, W - 68, H - 68);
    ctx.strokeStyle = "#c8a25b"; ctx.lineWidth = 3; ctx.strokeRect(62, 62, W - 124, H - 124);
    for (const [x, y] of [[110, 110], [W - 110, 110], [110, H - 150], [W - 110, H - 150]]) ornament(ctx, x, y, 1.4, "#b0873f");
    for (let x = 220; x < W - 220; x += 80) ornament(ctx, x, 92, .55, "#c8a25b88");
    ctx.textAlign = "center";
    ctx.fillStyle = "#916027"; ctx.font = "700 30px Arial, sans-serif";
    ctx.fillText("Д А Л А   М Ұ Р А С Ы  ·  Қ А З А Қ С Т А Н   Т А Р И Х Ы", W / 2, 205);
    ctx.fillStyle = "#173d33"; ctx.font = "700 92px Georgia, 'Times New Roman', serif";
    ctx.fillText("СЕРТИФИКАТ", W / 2, 320);
    ctx.font = "30px Arial, sans-serif"; ctx.fillStyle = "#545d51";
    ctx.fillText("Осы сертификат", W / 2, 395);
    ctx.font = "italic 700 74px Georgia, 'Times New Roman', serif"; ctx.fillStyle = "#1d4438";
    ctx.fillText(name.value.trim() || "Тарих зерттеушісі", W / 2, 490);
    ctx.strokeStyle = "#c8a25b"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(W / 2 - 420, 515); ctx.lineTo(W / 2 + 420, 515); ctx.stroke();
    ctx.font = "30px Arial, sans-serif"; ctx.fillStyle = "#545d51";
    const groupText = group.value.trim() ? `${group.value.trim()} сынып оқушысына ` : "";
    wrap(ctx, `${groupText}«Дала мұрасы» оқу жобасында Қазақстан тарихын зерттегені үшін берілді.`, W / 2, 575, 1100, 44);
    // көрсеткіштер
    const stats = [[`${s.completed.length} / 26`, "аяқталған бөлім"], [`${s.xp} XP`, s.level], [`${Object.values(s.games).filter(Boolean).length} / 3`, "3D оқиға"], [`${have.length} / ${A.list.length}`, "жетістік"]];
    stats.forEach(([v, l], i) => {
      const x = W / 2 + (i - 1.5) * 290;
      ctx.fillStyle = "#ffffffaa"; ctx.strokeStyle = "#d9c8a1"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.roundRect(x - 125, 660, 250, 130, 16); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#173d33"; ctx.font = "700 46px Arial, sans-serif"; ctx.fillText(v, x, 728);
      ctx.fillStyle = "#6b6f63"; ctx.font = "24px Arial, sans-serif"; ctx.fillText(l, x, 768);
    });
    const icons = A.list.filter((a) => have.includes(a[0])).map((a) => a[1]).join("  ");
    ctx.font = "40px 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif";
    ctx.fillText(icons || "", W / 2, 860);
    ctx.font = "24px Arial, sans-serif"; ctx.fillStyle = "#545d51"; ctx.textAlign = "left";
    const d = new Date();
    ctx.fillText(`Күні: ${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()}`, 170, 990);
    ctx.textAlign = "right";
    ctx.fillText("Мұғалім қолы: ____________________", W - 170, 990);
    // мөр
    ctx.save(); ctx.translate(W / 2, 985);
    ctx.fillStyle = "#173d33"; ctx.beginPath(); ctx.arc(0, 0, 62, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#e8c789"; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(-30, 18); ctx.lineTo(0, -24); ctx.lineTo(30, 18); ctx.moveTo(-17, 18); ctx.lineTo(0, -5); ctx.lineTo(17, 18); ctx.moveTo(-24, 28); ctx.lineTo(24, 28); ctx.stroke();
    ctx.restore();
  }
  function openCertificate() {
    saveProfile();
    hint.textContent = name.value.trim() ? "Сертификатты сурет ретінде жүктеп немесе басып шығара аласың." : "Кеңес: аты-жөніңді «Оқушы туралы» өрісіне жазсаң, сертификатта көрінеді.";
    drawCertificate();
    dialog.showModal();
  }
  window.DALA_CLASSROOM = {report};
})();
