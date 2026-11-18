"use strict";

const get = (id) => document.getElementById(id);
const query = get("query");
if (query) {
  const entries = [...document.querySelectorAll("[data-search-words]")];
  function search(scroll = false) {
    const terms = query.value.toLocaleLowerCase("kk").trim().split(/[\s–—,]+/).filter(Boolean);
    let count = 0;
    for (const entry of entries) {
      const words = entry.dataset.searchWords.toLocaleLowerCase("kk").split(" ");
      entry.hidden = !terms.every((term) => words.some((word) => word.startsWith(term)));
      if (!entry.hidden) count++;
    }
    get("empty").hidden = count > 0;
    get("result-count").textContent = `${count} ойын`;
    document.dispatchEvent(new CustomEvent("dala:history-search",{detail:query.value}));
    if (scroll) (get("atlas") ?? get("games")).scrollIntoView({block:"start"});
  }
  get("search").addEventListener("submit",(event) => {
    event.preventDefault();
    search(true);
  });
  query.addEventListener("input",() => search());
  document.querySelectorAll("[data-query]").forEach((button) => button.addEventListener("click",() => {
    query.value = button.dataset.query;
    search(true);
  }));
  get("reset").addEventListener("click",() => {
    query.value = "";
    search();
    entries[0].querySelector("button").focus();
  });
}

const episode = window.DALA_EPISODE;
const chapters = window.DALA_STORY;
const obstacles = episode?.obstacles ?? [[-4,-4,2.1],[3,-7,1.8],[-10,-10,1.52],[1,-14,1.6],[7,-12,1.5],[5,4,1.35],[-9,4,1.45]];
const dialog = get("game");
const canvas = get("world");
const panel = get("panel");
const advance = get("continue");
const loading = get("loading");
const interact = get("interact");
const restart = get("restart");
const keys = new Set();
const keyMap = new Map(Object.entries({ ArrowUp:"up", ArrowLeft:"left", ArrowDown:"down", ArrowRight:"right", KeyW:"up", KeyA:"left", KeyS:"down", KeyD:"right", ShiftLeft:"run", ShiftRight:"run" }));
const sprintButton = get("sprint");
const expeditionButton = get("expedition");
let energy = 100, exhausted = false, sprintToggle = false, guideActive = false;
let movementSaveTime = 0;
const position = { x: 0, z: 7 };
let renderer, lastFrame, animation, origin, meshLoad;
let chapterIndex = 0, lineIndex = 0, stage = "", near = false;
let heading = Math.PI, stepTime = 0;
let yaw = 0, pitch = 0, outsideYaw = 0;
let inside = false, discoveryTarget, mapVisible = true;
let returnPosition;
const discoveries = new Set();
const explorePin = document.createElement("button");
explorePin.type = "button";
explorePin.className = "pin explore";
explorePin.hidden = true;
explorePin.addEventListener("click", useDiscovery);
get("pins").append(explorePin);

const scoutRoute = [[4.6,-3.7],[7.3,-5.4],[9.4,-6.9]];
const normalEscort = episode?.id === "1643" ? [[8.3,-6.6],[5.7,-8.9],[3.7,-10.5],[.7,-9.6]] :
  [[8.3,-6.6],[5.5,-4.7],[3.1,-2.8],[.2,-1.3]];
const alternateEscort = episode?.id === "1643" ? [[8.5,-8.8],[6.2,-11.5],[3.6,-12.5],[.7,-11.2]] :
  [[8.6,-8.55],[7.8,-10],[5.1,-10],[2.6,-8.2]];
let decision = null;
const escortRoute = () => decision === 1 ? alternateEscort : normalEscort;
const campStart = { x:10.45, z:-7.1, heading:-1.35 };
const redrawMap = createCampMap(get("map-view"), obstacles,
  [[0,7],...chapters.slice(0,3).map(({x,z}) => [x,z]),...scoutRoute],
  campStart,episode?.dwelling !== false);
const caravan = { ...campStart };
let mission = "", milestone = 0, leading = false;
const defense = episode?.id === "1643" ? orbulakDefense : null;
let practiceSnapshot;
const battleTargetLayer = get("battle-targets");
const battleTargets = battleTargetLayer ? Array.from({length:6},(_,id)=>{
  const button=document.createElement("button");
  button.type="button";
  button.className="battle-target";
  button.hidden=true;
  button.setAttribute("aria-label",`${id+1}-аттыны көздеу`);
  button.addEventListener("click",()=>defense.aim(id));
  battleTargetLayer.append(button);
  return button;
}) : [];
const saveKey = episode ? `dala-murasy-${episode.id}-v1` : "dala-murasy-qozybasy-v2";

function saveGame() {
  if (practiceSnapshot) return;
  try {
    localStorage.setItem(saveKey, JSON.stringify({ chapterIndex, mission, milestone, leading, decision, defenseStep:defense?.step(), position:inside ? returnPosition : position, caravan, discoveries:[...discoveries] }));
  } catch {
    // The game still runs if the browser blocks local storage.
  }
}
function restoreGame() {
  try {
    const saved = JSON.parse(localStorage.getItem(saveKey));
    const validPosition = (point) => Number.isFinite(point?.x) && Number.isFinite(point?.z) && canWalk(point.x,point.z);
    if (!saved || !validPosition(saved.position) || !Number.isInteger(saved.chapterIndex) ||
      saved.chapterIndex < 0 || saved.chapterIndex > chapters.length) return false;
    decision = saved.decision === 0 || saved.decision === 1 ? saved.decision : null;
    if (saved.mission === "scout" && saved.chapterIndex === 3 && Number.isInteger(saved.milestone) &&
      saved.milestone >= 0 && saved.milestone < scoutRoute.length) {
      mission = "scout";
      milestone = saved.milestone;
    } else if (saved.mission === "escort" && saved.chapterIndex === 5 && Number.isInteger(saved.milestone) &&
      saved.milestone >= 0 && saved.milestone < escortRoute().length && validPosition(saved.caravan)) {
      mission = "escort";
      milestone = saved.milestone;
      leading = saved.leading === true;
      Object.assign(caravan, { x:saved.caravan.x, z:saved.caravan.z, heading:campStart.heading });
    }
    if (defense && saved.mission === "defense" && saved.chapterIndex === chapters.length-1) {
      mission = "defense";
      defense.reset(saved.defenseStep);
    }
    if (Array.isArray(saved.discoveries)) {
      for (const {id} of dwelling.objects) if (saved.discoveries.includes(id)) discoveries.add(id);
    }
    chapterIndex = saved.chapterIndex;
    Object.assign(position, { x:saved.position.x, z:saved.position.z });
    if (chapterIndex === chapters.length) {
      const [x,z] = escortRoute()[escortRoute().length-1];
      Object.assign(caravan, {x,z});
    }
    restart.hidden = chapterIndex === 0;
    return true;
  } catch {
    return false;
  }
}
let started = restoreGame();

const pin = document.createElement("button");
pin.type = "button";
pin.className = "pin";
pin.disabled = true;
pin.hidden = true;
pin.addEventListener("click", useAction);
get("pins").append(pin);

function showPanel(label, speaker, body) {
  keys.clear();
  sprintToggle = false;
  get("panel-label").textContent = label;
  get("panel-title").textContent = speaker;
  get("panel-text").textContent = body;
  window.DALA_CINEMA?.panel(label,speaker);
  get("choices").replaceChildren();
  get("feedback").textContent = "";
  advance.hidden = false;
  panel.hidden = false;
  get("pins").inert = true;
  get("pad").inert = true;
  get("leave-yurt").disabled = true;
  interact.disabled = true;
  advance.focus();
}
function hidePanel() {
  panel.hidden = true;
  stage = "";
  get("pins").inert = false;
  get("pad").inert = false;
  get("leave-yurt").disabled = false;
  get("close").focus();
}
function chapterLabel(chapter) {
  return `ТАРАУ 0${chapterIndex + 1} · ${chapter.title}`;
}
function showLine() {
  const chapter = chapters[chapterIndex];
  const [speaker, text] = chapter.lines[lineIndex];
  showPanel(chapterLabel(chapter), speaker, text);
  advance.textContent = lineIndex < chapter.lines.length - 1 ? "Келесі" : chapter.question ? "Таңдау жасау" : "Жолға шығу";
}
function openConversation() {
  if (!panel.hidden || !near || !chapters[chapterIndex]) return;
  stage = "dialogue";
  lineIndex = 0;
  showLine();
}
function showQuestion(chapter) {
  stage = "question";
  showPanel(chapterLabel(chapter), "Таңдауыңды жаса", chapter.question);
  advance.hidden = true;
  chapter.choices.forEach(([name, correct, consequence], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = name;
    button.addEventListener("click", () => {
      if (!correct) {
        get("feedback").textContent = chapter.correction + " Қайта таңдап көр.";
        return;
      }
      if (chapter.branch) {
        decision = index;
        saveGame();
      }
      stage = "after";
      showPanel(chapterLabel(chapter), ...(consequence ?? chapter.after));
      advance.textContent = chapterIndex === chapters.length - 1 ? (episode ? "Топқа бару" : "Көшке бару") : "Хабарды жеткізу";
    });
    get("choices").append(button);
  });
  get("choices").firstElementChild.focus();
}
function intro() {
  stage = "intro";
  if (episode) showPanel(...episode.intro);
  else showPanel("ҚОЗЫБАСЫ · 1465–1466", "Шабарманның алғашқы сапары", "Көштің бір бөлігі Шу бойына жақындап келеді. Айшаны тауып, алғашқы тапсырманы ал. Кейіпкерлерге жақындағанда сөйлесу батырмасы іске қосылады.");
  advance.textContent = "Сапарды бастау";
}
function startMission(name) {
  mission = name;
  milestone = 0;
  leading = false;
  stage = "mission";
  if (episode) {
    showPanel(name === "scout" ? "ТАПСЫРМА · БАРЛАУ" : "ТАПСЫРМА · ЖЕТКІЗУ", ...episode[name]);
  } else if (name === "scout") {
    showPanel("ТАПСЫРМА · БАРЛАУ", "Өзенге апаратын жол", "Жолдағы үш белгіні ретімен тексер. Соңғы белгіден кейін өткелді қарайтын Ержанға бар.");
  } else {
    showPanel("ТАПСЫРМА · КӨШТІ БАСТАУ", "Көшті Қозыбасыға жеткіз", "Өзен жағасында жүк аты мен жолаушы күтіп тұр. Оларға жақындап, көшті баста. Алдыңдағы белгілерді бағыт етіп ұста. Алыстап кетсең, көш сені күтіп қалады.");
  }
  advance.textContent = "Тапсырмаға кірісу";
  saveGame();
}
function startDefense() {
  mission = "defense";
  defense.reset();
  defense.setMode(get("battle-mode")?.value || "normal");
  near = false;
  yaw = pitch = 0;
  heading = Math.PI;
  Object.assign(position,{x:1,z:-9.65});
  stage = "defense-intro";
  showPanel("ОРБҰЛАҚ · ҚОРҒАНЫС","Аттылар жақындап келеді",
    "Ор бойындағы үш шепті ұста. E пернесімен бекін. Аттының үстіндегі белгіні бас немесе Q арқылы нысана таңда. Жақындағанда E не бос орын пернесімен ат, R арқылы мылтықты оқта. Аттылардың шепке жетуіне жол берме. H — бір шепте бір рет жасақ көмегі: жау 4 секунд баяулайды. Оқтап жатқанда жасыл аралықта R бассаң, жылдам оқтап +25 ұпай аласың. Бұл — ойын механикасы, тарихи шайқастың дәл үлгісі емес.");
  advance.textContent = "Қорғанысқа кірісу";
  saveGame();
}
function pauseDefense() {
  if(!defense || mission!=="defense" || !dialog.open || !panel.hidden)return;
  stage="defense-pause";
  showPanel("ҮЗІЛІС · P", "Шайқас тоқтатылды", "Жау қозғалысы, оқтау және көмек уақыты тоқтап тұр. Жалғастырған кезде сол жерден ойнайсың. B — ең жақын аттыны көздеу, H — жасақ көмегі, R — оқтау. Тактиканы шепке бекінер алдында таңда.");
  advance.textContent="Шайқасқа оралу";
}
function renderDefenseReports(all=false) {
  const list=defense.reports();
  for(const report of (all?list:list.slice(-1))) {
    const card=document.createElement("article");card.className="battle-report";
    const title=document.createElement("h4");title.textContent=`${report.step+1}. ${report.name} · +${report.score} ұпай`;
    const stats=document.createElement("p");stats.textContent=`${report.tactic} · дәлдік ${report.accuracy}% · шеп ${report.integrity}/3 · жылдам оқтау ${report.perfects}`;
    const badge=document.createElement("strong");badge.textContent=report.earned?`★ ${report.objective} · +200 ұпай`:`◇ ${report.objective} · келесі жолы байқап көр`;
    card.append(title,stats,badge);get("choices").append(card);
  }
}
function finishDefense(done) {
  if (!done) {
    saveGame();
    stage="defense-intermission";
    const next=defense.goal(position);
    showPanel("ШЕП ҰСТАЛДЫ", "Жасақ келесі шепке дайындалуда", `Келесі мақсат: ${next.name}. ${next.pattern}. Қосымша міндет: ${next.objective.hint} Жалғастырған соң туға барып, тактиканы таңда.`);
    renderDefenseReports();
    advance.textContent="Келесі шепке бару";
    return;
  }
  mission = "";
  if (!practiceSnapshot) {
    nextChapter();
    renderDefenseReports(true);
    return;
  }
  stage = "practice-complete";
  showPanel("ОРБҰЛАҚ · ҚОРҒАНЫС","Үш шеп те ұсталды",
    "Тар өткел аттылардың қатарын жайып жіберуіне кедергі болды. Сен шептерді ауыстырып, атыс қашықтығын есепке алдың. " + defense.summary());
  renderDefenseReports(true);
  advance.textContent = "Жаттығуды аяқтау";
}
function nextChapter() {
  chapterIndex++;
  near = false;
  restart.hidden = false;
  if (chapterIndex === 3) {
    startMission("scout");
    return;
  }
  saveGame();
  if (chapterIndex < chapters.length) {
    hidePanel();
    return;
  }
  document.dispatchEvent(new Event("dala:story-complete"));
  stage = "complete";
  if (episode) {
    const [title, body] = episode.finale;
    showPanel("САПАР АЯҚТАЛДЫ · 6 / 6 ТАРАУ",title,[body,episode.branches[decision],defense?.summary()].filter(Boolean).join(" "));
  } else showPanel("САПАР АЯҚТАЛДЫ · 6 / 6 ТАРАУ", "Көш қонысқа жетті", "Адамдар мен жүк аты қонысқа аман жетті. Сен өткелді барлап, Керей мен Жәнібекке хабар жеткізіп, көшті жол бойы бастап келдің.");
  advance.textContent = "Қонысқа оралу";
  const challenge = document.createElement("button");
  challenge.type = "button";
  challenge.textContent = "Сынаққа өту";
  challenge.addEventListener("click", () => {
    hidePanel();
    dialog.close();
    document.addEventListener("dala:game-closed", () => {
      get("challenge").scrollIntoView({block:"start"});
      get("quiz-start").focus({preventScroll:true});
    }, {once:true});
  });
  get("choices").append(challenge);
}
advance.addEventListener("click", () => {
  const chapter = chapters[chapterIndex];
  if (stage === "dialogue") {
    if (++lineIndex < chapter.lines.length) showLine();
    else if (chapter.question) showQuestion(chapter);
    else nextChapter();
  } else if (stage === "after") {
    if (chapterIndex === chapters.length - 1) startMission("escort");
    else nextChapter();
  } else {
    if (stage === "practice-complete") dialog.close();
    if (stage === "intro") {
      started = true;
      saveGame();
    }
    hidePanel();
  }
});
restart.addEventListener("click", () => {
  if (!panel.hidden) return;
  stage = "restart";
  showPanel("ЖАҢА САПАР", "Ойынды басынан бастайсың ба?", "Жаңа сапар басталса, осы браузерде сақталған ойын барысы өшеді.");
  advance.textContent = "Осы сапарды жалғастыру";
  const confirm = document.createElement("button");
  confirm.type = "button";
  confirm.textContent = "Жаңа сапарды бастау";
  confirm.addEventListener("click", () => {
    chapterIndex = 0;
    mission = "";
    milestone = 0;
    leading = false;
    if (inside) leaveDwelling();
    discoveries.clear();
    decision = null;
    yaw = 0;
    pitch = 0;
    Object.assign(position, {x:0,z:7});
    Object.assign(caravan, campStart);
    heading = Math.PI;
    near = false;
    restart.hidden = true;
    saveGame();
    intro();
  });
  get("choices").append(confirm);
});
function useAction() {
  if (!panel.hidden) return;
  if (!near || inside) {
    useDiscovery();
    return;
  }
  if (mission === "scout") {
    const note = episode?.scoutNotes[milestone];
    if (note) {
      stage = "trail-note";
      showPanel("БАРЛАУ ЖАЗБАСЫ",`${milestone+1} / ${scoutRoute.length} белгі`,note);
      advance.textContent = "Жолды жалғастыру";
    }
    milestone++;
    if (milestone === scoutRoute.length) {
      milestone = 0;
      mission = "";
    }
    near = false;
    saveGame();
  } else if (mission === "defense") {
    if (defense.action(position) === "shot") atmosphere?.volley();
  } else if (mission === "escort") {
    if (!leading) {
      leading = true;
      near = false;
      saveGame();
    }
  } else {
    openConversation();
  }
}
function updateEscort(elapsed) {
  if (inside || mission !== "escort" || !leading || !panel.hidden) return false;
  const [x,z] = escortRoute()[milestone];
  const dx = x-caravan.x, dz = z-caravan.z;
  const routeDistance = Math.hypot(dx,dz);
  if (routeDistance < .08) {
    milestone++;
    if (milestone === escortRoute().length) {
      mission = "";
      leading = false;
      if (defense) startDefense();
      else nextChapter();
    } else saveGame();
    return false;
  }
  const px = position.x-caravan.x, pz = position.z-caravan.z;
  const playerDistance = Math.hypot(px,pz);
  const ahead = (px*dx+pz*dz)/routeDistance;
  if (playerDistance > 5.4 || ahead < Math.min(1.05,routeDistance*.55)) return false;
  const step = Math.min(routeDistance, elapsed * 2.65);
  caravan.x += dx/routeDistance*step;
  caravan.z += dz/routeDistance*step;
  caravan.heading = Math.atan2(dx,dz);
  return true;
}
function currentGoal() {
  if (mission === "defense") return defense.goal(position);
  if (mission === "scout") {
    const [x,z] = scoutRoute[milestone];
    return { x,z, person:"Жол белгісі", role:"Барлау", task:`${episode?.scoutTask ?? "Өткел жолын барла"} · ${milestone} / ${scoutRoute.length}`,
      action:"Белгіні тексеру", symbol:"◆", radius:1.55, height:1.12 };
  }
  if (mission === "escort" && !leading) {
    return { ...caravan, person:episode?.escortLabel ?? "Көш", role:"Өзен жағасында", task:episode ? "Топқа жақындап, жолға баста" : "Көшке жақындап, оны бастап жүр",
      action:episode ? "Топты бастау" : "Көшті бастау", symbol:"◆", radius:2.4, height:2.75 };
  }
  if (mission === "escort") {
    const [x,z] = escortRoute()[milestone];
    return { x,z, person:"Бағыт белгісі", role:episode?.escortRole ?? "Қозыбасыға қарай", task:`${episode?.escortTask ?? "Көшті қонысқа баста"} · ${milestone} / ${escortRoute().length}`,
      action:"Көшті бастап жүр", symbol:"➜", radius:0, height:1.15 };
  }
  const chapter = chapters[chapterIndex];
  return chapter && { ...chapter, action:"Сөйлесу", symbol:String(chapterIndex+1), radius:2.35, height:2.38 };
}
function updateMapVisibility() {
  get("camp-map").hidden = inside || !mapVisible;
  get("map-toggle").disabled = inside;
  get("map-toggle").setAttribute("aria-pressed",String(!inside && mapVisible));
}
function toggleMap() {
  if (inside) return;
  mapVisible = !mapVisible;
  updateMapVisibility();
}
get("map-toggle").addEventListener("click",toggleMap);
function leaveDwelling() {
  if (!inside) return;
  Object.assign(position,returnPosition);
  inside = false;
  yaw = outsideYaw;
  pitch = 0;
  discoveryTarget = null;
  get("leave-yurt").hidden = true;
  updateMapVisibility();
  get("close").focus();
}
get("leave-yurt").addEventListener("click",leaveDwelling);
function useDiscovery() {
  if (!panel.hidden || !discoveryTarget) return;
  if (!inside) {
    returnPosition = { ...dwelling.entrance };
    outsideYaw = yaw;
    inside = true;
    yaw = 0;
    pitch = .19;
    near = false;
    keys.clear();
    Object.assign(position,dwelling.spawn);
    discoveryTarget = null;
    get("leave-yurt").hidden = false;
    updateMapVisibility();
    get("close").focus();
    return;
  }
  const item = discoveryTarget;
  discoveries.add(item.id);
  saveGame();
  stage = "discovery";
  showPanel(`ТҰРМЫС БҰЙЫМЫ · ${discoveries.size} / ${dwelling.objects.length}`,item.name,item.text);
  const source = document.createElement("a");
  source.href = "https://e-history.kz/media/scorm/333/400/text/text.htm";
  source.target = "_blank";
  source.rel = "noopener";
  source.textContent = "Тұрмыс бұйымдары туралы дерек ↗";
  get("choices").append(source);
  advance.textContent = "Қарауды жалғастыру";
}
function openJournal() {
  if (!panel.hidden || !loading.hidden) return;
  stage = "journal";
  showPanel("ШАБАРМАННЫҢ ЖАЗБАЛАРЫ","Далалық дәптер",
    discoveries.size === dwelling.objects.length ? "Үш бұйымды зерттедің. Олардың қолданылуын төмендегі жазбалардан қайтала." :
    `Ашылған бұйымдар · ${discoveries.size} / ${dwelling.objects.length}. Қоныстағы есігі ашық киіз үйден ізде.`);
  for (const item of dwelling.objects) {
    const entry = document.createElement("div");
    const name = document.createElement("strong");
    entry.className = "journal-entry";
    name.textContent = discoveries.has(item.id) ? item.name : "Әлі зерттелмеген бұйым";
    entry.append(name);
    if (discoveries.has(item.id)) {
      const note = document.createElement("p");
      note.textContent = item.text;
      entry.append(note);
    }
    get("choices").append(entry);
  }
  if (window.DALA_MUSEUM) {
    const challenge = document.createElement("button");
    challenge.type = "button";
    challenge.className = "museum-quiz-open";
    challenge.disabled = discoveries.size !== dwelling.objects.length;
    challenge.textContent = challenge.disabled ? "Сынақ үшін үш бұйымды зертте" : "Айшаның қорытынды сынағы";
    challenge.addEventListener("click",window.DALA_MUSEUM.open);
    get("choices").append(challenge);
    const result = document.createElement("p");
    const best = window.DALA_MUSEUM.best();
    result.textContent = best === null ? "Үш бұйымды қолданылуына қарай танып көр." : `Үздік нәтиже · ${best} / 3${best === 3 ? " · Мұра білгірі" : ""}`;
    get("choices").append(result);
  }
  advance.textContent = "Ойынға оралу";
}
get("journal").addEventListener("click",openJournal);
function placePin(element, goal, matrix, w, h, base = ground(goal.x,goal.z)) {
  const py = base + goal.height;
  const vx = matrix[0]*goal.x + matrix[4]*py + matrix[8]*goal.z + matrix[12];
  const vy = matrix[1]*goal.x + matrix[5]*py + matrix[9]*goal.z + matrix[13];
  const vw = matrix[3]*goal.x + matrix[7]*py + matrix[11]*goal.z + matrix[15];
  const u = vx/vw, v = vy/vw;
  element.hidden = vw <= 0 || Math.abs(u) > .93 || Math.abs(v) > .89;
  if (!element.hidden) {
    element.style.left = `${(u*.5+.5)*w}px`;
    element.style.top = `${(.5-v*.5)*h}px`;
  }
}
function updateExploration(matrix, w, h) {
  discoveryTarget = null;
  if (episode?.dwelling === false) return;
  if (inside) {
    let closest = Infinity;
    for (const item of dwelling.objects) {
      const distance = Math.hypot(item.x-position.x,item.z-position.z);
      if (distance < item.reach && distance < closest) {
        discoveryTarget = item;
        closest = distance;
      }
    }
    if (!discoveryTarget && !(guideActive && dwelling.objects.some((item) => !discoveries.has(item.id)))) {
      explorePin.hidden = true;
      return;
    }
  } else {
    const {entrance} = dwelling;
    const distance = Math.hypot(entrance.x-position.x,entrance.z-position.z);
    if (distance < 1.47) discoveryTarget = entrance;
  }
  const target = inside ? discoveryTarget ?? dwelling.objects.find((item) => !discoveries.has(item.id)) : dwelling.entrance;
  const label = inside ? target.name : "Киіз үйге кіру";
  if (explorePin.getAttribute("aria-label") !== label) explorePin.setAttribute("aria-label",label);
  const symbol = inside && discoveries.has(target.id) ? "✓" : inside ? "✦" : "⌂";
  if (explorePin.textContent !== symbol) explorePin.textContent = symbol;
  explorePin.classList.toggle("near",Boolean(discoveryTarget));
  explorePin.disabled = !discoveryTarget || !panel.hidden;
  placePin(explorePin,target,matrix,w,h,inside ? ground(dwelling.x,dwelling.z) : undefined);
}
function screenDirection(dx,dz) {
  const angle = Math.atan2(dx*Math.sin(yaw)+dz*Math.cos(yaw),dx*Math.cos(yaw)-dz*Math.sin(yaw));
  return ["→","↘","↓","↙","←","↖","↑","↗"][(Math.round(angle*4/Math.PI)+8)%8];
}
function updateObjective(matrix, w, h) {
  const goal = currentGoal();
  if (expeditionButton) {
    expeditionButton.setAttribute("aria-pressed",String(guideActive));
    dialog.classList.toggle("expedition-on",guideActive);
    const item = discoveries.size === dwelling.objects.length ? null : inside ? dwelling.objects.find((entry) => !discoveries.has(entry.id)) : dwelling.entrance;
    const guide = get("expedition-status");
    guide.hidden = !guideActive;
    if (guideActive) {
      const name = inside ? item?.name : "Ашық киіз үй";
      const distance = item ? Math.hypot(item.x-position.x,item.z-position.z) : 0;
      const direction = item ? screenDirection(item.x-position.x,item.z-position.z) : "✓";
      const label = item ? `${direction} ${name} · ${distance.toFixed(1)} м · ${discoveries.size} / 3` : "✓ Үш бұйым зерттелді · Дәптердегі жазбаларды қара";
      if (guide.textContent !== label) guide.textContent = label;
    }
  }
  const battleHud = get("battle-hud");
  if (battleHud) {
    const defending = mission === "defense";
    battleHud.hidden = !defending || !panel.hidden;
    if(get("battle-pause"))get("battle-pause").hidden=!defending || !panel.hidden;
    battleTargetLayer.hidden = !defending || !panel.hidden;
    if (!battleHud.hidden) {
      const label = goal.ready ? "Атуға дайын · E немесе бос орын" : goal.hint || (goal.state==="position" ? "Ту белгісіне жақындап, шепке бекін." : goal.state==="failed" ? "E · Шепті қайталау" : goal.reload ? "R · Жылдам оқтауға дайындал" : "Q · Келесі нысананы таңда");
      const set = (id,value) => {
        if (get(id).textContent !== value) get(id).textContent = value;
      };
      set("battle-signal",label);
      if(get("battle-score")) {
        set("battle-score",`${goal.score} ұпай · қатар ${goal.combo}`);
        set("battle-pattern",goal.pattern);
        get("battle-reload-meter").value=goal.reload>0?1-goal.reload/goal.reloadDuration:0;
        if(get("battle-tactics")) {
          const choosing=goal.state==="position"||goal.state==="failed";
          get("battle-tactics").hidden=!choosing;
          battleHud.classList.toggle("planning",choosing);
          if(get("battle-tactic").value!==goal.tactic)get("battle-tactic").value=goal.tactic;
          set("battle-tactic-info",goal.tacticInfo.description);
          get("battle-nearest").disabled=goal.state!=="fight";
          get("battle-danger").hidden=!goal.danger;
          if(goal.danger)set("battle-danger",`⚠ Шепке қауіп! Ең жақын атты · ${Math.ceil(goal.closest)} м`);
          battleHud.classList.toggle("danger",goal.danger);
        }
        get("battle-reload-wrap").hidden=goal.reload<=0;
        get("battle-support").disabled=goal.state!=="fight" || !goal.support;
        get("battle-reload-button").disabled=goal.state!=="fight" || goal.loaded;
        set("battle-support",goal.slow>0?`Көмек · ${Math.ceil(goal.slow)} с`:goal.support?"Жасақ көмегі · H":"Көмек қолданылды");
        set("battle-feedback",goal.message);
        if(get("battle-objective")) {
          set("battle-objective",`★ ${goal.objective.title}`);
          set("battle-objective-detail",`${goal.objective.hint} ${goal.objectiveProgress}`);
        }
      }
      set("battle-hits",`${goal.repelled} / ${goal.required}`);
      set("battle-ammo",`${goal.loaded ? 1 : 0} + ${goal.powder}`);
      set("battle-health",`${Math.max(0,goal.integrity)} / 3`);
      set("battle-distance",goal.distance===null ? "—" : `${Math.round(goal.distance)} м`);
      battleHud.classList.toggle("ready",goal.ready);
      const actors=goal.state==="fight" ? defense.actors() : [];
      for (const [id,button] of battleTargets.entries()) {
        const actor=actors.find((item)=>item.id===id && item.status==="advance");
        button.hidden=!actor;
        if (!actor) continue;
        const active=goal.selected===id;
        button.classList.toggle("aimed",active);
        button.classList.toggle("fast",Boolean(actor.fast));
        button.setAttribute("aria-label",`${actor.fast?"Жүйрік атты":"Атты"} ${id+1} · көздеу`);
        button.classList.toggle("in-range",active && goal.ready);
        const pressed=String(active);
        if (button.getAttribute("aria-pressed")!==pressed) button.setAttribute("aria-pressed",pressed);
        placePin(button,{x:actor.x,z:actor.z,height:2.35},matrix,w,h);
      }
    }
  }
  if (!inside && mapVisible) redrawMap(position,yaw,goal,mission === "escort" ? caravan : null,escortRoute());
  const progress = mission === "defense" ? "Шатқал қорғанысы" : inside ? "Киіз үйдің іші" : goal ? `${chapterIndex + 1} / ${chapters.length} тарау` : "Сапар аяқталды";
  const objective = inside ? `Ашылған бұйымдар · ${discoveries.size} / ${dwelling.objects.length}` :
    goal ? goal.task + "." : "Қонысты еркін арала.";
  if (get("progress").textContent !== progress) get("progress").textContent = progress;
  if (get("objective").textContent !== objective) get("objective").textContent = objective;
  const setDirection = (message) => {
    if (get("direction").textContent !== message) get("direction").textContent = message;
  };
  if (!goal || inside) {
    near = false;
    pin.hidden = true;
    interact.disabled = !discoveryTarget || !panel.hidden;
    const action = inside ? "Бұйымды қарау" : "Киіз үйге кіру";
    if (interact.textContent !== action) interact.textContent = action;
    setDirection(discoveryTarget ? (inside ? discoveryTarget.name : "Киіз үйге кіру") :
      inside ? "Бұйымға жақындап, E пернесін бас" : "");
    return;
  }
  const dx = goal.x - position.x, dz = goal.z - position.z;
  const distance = Math.hypot(dx, dz);
  near = distance < goal.radius;
  const action = !near && discoveryTarget ? "Киіз үйге кіру" : goal.action;
  if (interact.textContent !== action) interact.textContent = action;
  const accessible = near && panel.hidden && !goal.blocked;
  interact.disabled = !accessible && (!discoveryTarget || !panel.hidden);
  pin.disabled = !accessible;
  pin.classList.toggle("near", near);
  const pinName = `${goal.person} · ${goal.role}`;
  if (pin.getAttribute("aria-label") !== pinName) {
    pin.textContent = goal.symbol;
    pin.setAttribute("aria-label", pinName);
  }
  placePin(pin,goal,matrix,w,h);
  const caravanDistance = Math.hypot(position.x-caravan.x,position.z-caravan.z);
  if (near || discoveryTarget) {
    setDirection(goal.blocked ? "Шептің күйін бақыла" : "E · " + action);
  } else if (mission === "escort" && leading && caravanDistance > 5.4) {
    const back = screenDirection(caravan.x-position.x,caravan.z-position.z);
    setDirection(`${back}  ${episode ? "Топқа қайт" : "Көшке қайт"} · ${Math.round(caravanDistance)} м`);
  } else {
    setDirection(`${screenDirection(dx,dz)}  ${goal.person} · ${Math.round(distance)} м`);
  }
}
interact.addEventListener("click", useAction);
get("battle-pause")?.addEventListener("click",pauseDefense);
get("battle-tactic")?.addEventListener("change",event=>defense?.setTactic(event.target.value));
get("battle-nearest")?.addEventListener("click",()=>{if(panel.hidden)defense?.aimNearest();});
document.addEventListener("visibilitychange",()=>{if(document.hidden)pauseDefense();});
get("battle-support")?.addEventListener("click",()=>{if(panel.hidden)defense?.callSupport();});
get("battle-reload-button")?.addEventListener("click",()=>{if(panel.hidden)defense?.reloadWeapon();});
sprintButton?.addEventListener("click",() => {
  if (!panel.hidden || inside || exhausted) return;
  sprintToggle = !sprintToggle;
});
expeditionButton?.addEventListener("click",() => {guideActive = !guideActive;});
document.addEventListener("keydown", (event) => {
  if(dialog.open && mission==="defense" && event.code==="KeyP" && !event.repeat && !["SELECT","INPUT","TEXTAREA"].includes(event.target.tagName)) {
    event.preventDefault();
    if(stage==="defense-pause" && !panel.hidden) {hidePanel();stage="defense";} else pauseDefense();
    return;
  }
  if(event.target.tagName==="SELECT")return;
  if (!dialog.open || !panel.hidden || !loading.hidden) return;
  const direction = keyMap.get(event.code);
  if (direction) {
    event.preventDefault();
    keys.add(direction);
  }
  if (event.repeat) return;
  if (mission === "defense" && ["KeyQ","KeyR","KeyH","KeyB","Space"].includes(event.code)) {
    event.preventDefault();
    if (event.code === "KeyQ") defense.cycleTarget();
    if (event.code === "KeyR") defense.reloadWeapon();
    if (event.code === "KeyH") defense.callSupport();
    if (event.code === "KeyB") defense.aimNearest();
    if (event.code === "Space") useAction();
    return;
  }
  if (event.code === "KeyE") useAction();
  if (event.code === "KeyM") toggleMap();
  if (event.code === "KeyJ" && episode?.dwelling !== false) openJournal();
});
document.addEventListener("keyup", (event) => keys.delete(keyMap.get(event.code)));
window.addEventListener("blur", () => {keys.clear();sprintToggle = false;});
get("pad").querySelectorAll("button").forEach((button) => {
  const direction = button.dataset.key;
  button.addEventListener("pointerdown", (event) => {
    button.setPointerCapture(event.pointerId);
    keys.add(direction);
  });
  for (const name of ["pointerup", "pointercancel", "lostpointercapture"]) {
    button.addEventListener(name, () => keys.delete(direction));
  }
});

function turnCamera(angle) {
  if (!panel.hidden || !loading.hidden) return;
  yaw = (yaw+angle)%(Math.PI*2);
}
get("turn-left").addEventListener("click",() => turnCamera(Math.PI/4));
get("turn-right").addEventListener("click",() => turnCamera(-Math.PI/4));
get("look-reset").addEventListener("click",() => {
  yaw = 0;
  pitch = inside ? .19 : 0;
});
let drag;
canvas.addEventListener("pointerdown",(event) => {
  if (!panel.hidden || !loading.hidden || drag || event.button !== 0) return;
  canvas.setPointerCapture(event.pointerId);
  drag = {id:event.pointerId,x:event.clientX,y:event.clientY};
});
canvas.addEventListener("pointermove",(event) => {
  if (drag?.id !== event.pointerId) return;
  turnCamera((event.clientX-drag.x)*.009);
  const vertical = (event.clientY-drag.y)*.005;
  pitch = Math.max(inside ? -.42 : -.30,Math.min(inside ? .62 : .45,pitch+vertical));
  drag.x = event.clientX;
  drag.y = event.clientY;
});
for (const name of ["pointerup","pointercancel","lostpointercapture"]) {
  canvas.addEventListener(name,(event) => {
    if (drag?.id === event.pointerId) drag = null;
  });
}

const dot = (a, b) => a.reduce((sum, value, i) => sum + value * b[i], 0);
const unit = (a) => {
  const length = Math.hypot(...a);
  return a.map((value) => value / length);
};
const cross = (a, b) => [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]];
const cameraBasis = {eye:[0,0,0], forward:[0,0,-1], right:[1,0,0], up:[0,1,0], tanX:1, tanY:Math.tan(53 * Math.PI / 360)};
function viewProjection(eye, target, aspect) {
  const back = unit(eye.map((value, i) => value - target[i]));
  const right = unit(cross([0,1,0], back));
  const up = cross(back, right);
  cameraBasis.eye = eye; cameraBasis.forward = back.map((v) => -v); cameraBasis.right = right; cameraBasis.up = up;
  cameraBasis.tanX = cameraBasis.tanY * aspect;
  const view = [
    right[0], up[0], back[0], 0,
    right[1], up[1], back[1], 0,
    right[2], up[2], back[2], 0,
    -dot(right,eye), -dot(up,eye), -dot(back,eye), 1,
  ];
  const f = 1 / Math.tan(53 * Math.PI / 360);
  const result = new Float32Array(16);
  for (let i = 0; i < 16; i += 4) {
    result[i] = f * view[i] / aspect;
    result[i + 1] = f * view[i + 1];
    result[i + 2] = -1.0025 * view[i + 2] - .3004 * view[i + 3];
    result[i + 3] = -view[i + 2];
  }
  return result;
}
function ground(x, z) {
  const y = -z;
  const rise = Math.max(0, Math.min(1, (Math.abs(x)-13)/25 + Math.max(0,(y-9)/26)));
  const base = .12*Math.sin(x*.33)*Math.cos(y*.25) + rise*(.3+1.9*Math.sin(x*.25+y*.19)**2);
  const trench = episode?.id === "1643" ? .82*Math.exp(-(((y-(10.2+.18*x))/.73)**4))*Math.max(0,Math.min(1,(9-Math.abs(x))/2)) : 0;
  return base-trench;
}
function createRenderer(vertices, playerVertices, horseVertices, travelerVertices) {
  const gl = canvas.getContext("webgl", { alpha: false, antialias: true, powerPreference: "high-performance" });
  if (!gl) throw Error("webgl");
  const derivatives = Boolean(gl.getExtension("OES_standard_derivatives"));
  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw Error(gl.getShaderInfoLog(shader));
    return shader;
  };
  function link(vertex, fragment) {
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertex));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragment));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw Error(gl.getProgramInfoLog(program));
    return program;
  }
  const noise = `
    float hash(vec2 p) {
      vec3 a = fract(p.xyx * .1031);
      a += dot(a, a.yzx + 33.33);
      return fract((a.x + a.y) * a.z);
    }
    float noise(vec2 p) {
      vec2 i = floor(p), f = fract(p);
      f = f*f*(3.0-2.0*f);
      return mix(mix(hash(i), hash(i+vec2(1.,0.)), f.x),
                 mix(hash(i+vec2(0.,1.)), hash(i+1.), f.x), f.y);
    }
  `;
  const skyColor = episode?.id === "1643" ? ".44,.55,.64" : episode?.id === "1723" ? ".48,.48,.53" : ".28,.46,.60";
  const fogColor = episode?.id === "1643" ? ".62,.69,.70" : episode?.id === "1723" ? ".80,.68,.50" : ".73,.73,.66";
  const shadowCasters = obstacles.map(([x,z,r]) => `shadow=max(shadow,longShadow(xz,vec2(${x.toFixed(2)},${z.toFixed(2)}),${r.toFixed(2)}));`).join("\n");
  const skyProgram = link(`
    attribute vec2 point;
    varying vec2 ndc;
    void main() { ndc = point; gl_Position=vec4(point,0.,1.); }
  `, `
    precision mediump float;
    varying vec2 ndc;
    uniform float t;
    uniform vec3 camForward, camRight, camUp;
    uniform vec2 tanHalf;
    ${noise}
    float fbm(vec2 p) { return noise(p)*.55+noise(p*2.03+7.1)*.28+noise(p*4.11+3.7)*.17; }
    void main() {
      // Әр пиксельдің көру сәулесі: аспан камерамен бірге бұрылады
      vec3 ray = normalize(camForward + camRight*ndc.x*tanHalf.x + camUp*ndc.y*tanHalf.y);
      vec3 sun = normalize(vec3(-.72,.34,.694));
      float altitude = pow(smoothstep(-.015,.12,ray.y),.8);
      vec3 sky = mix(vec3(.86,.78,.64),vec3(${skyColor}),altitude);
      float toSun = max(dot(ray,sun),0.);
      // бұлттар: аспандағы жазықтыққа проекция
      vec2 cloudUV = ray.xz/max(ray.y+.10,.06)*.35 + vec2(t*.006,t*.002);
      float haze = fbm(cloudUV*1.6);
      float cloud = smoothstep(.46,.74,haze)*smoothstep(.005,.05,ray.y);
      vec3 cloudColor = mix(vec3(.80,.77,.74),vec3(1.,.93,.82),pow(toSun,3.)*.8+.2);
      sky = mix(sky,cloudColor,cloud*.55);
      sky += vec3(1.,.80,.55)*pow(toSun,6.)*.30;            // күн маңындағы жарқыл
      sky += vec3(1.,.93,.78)*smoothstep(.9985,.9993,toSun)*(1.-cloud*.7); // күн дискі
      sky += (hash(gl_FragCoord.xy+fract(t))-.5)/200.;          // градиент жолақтарына қарсы
      gl_FragColor = vec4(sky,1.);
    }
  `);
  const program = link(`
    attribute vec3 p, color;
    attribute float kind;
    uniform mat4 camera;
    uniform vec3 offset;
    uniform vec2 turn;
    uniform float gait, objectScale;
    varying vec3 shade, worldPos;
    varying vec2 faceUV;
    varying float faceMask;
    varying float distanceFromCamera, surface;
    void main() {
      vec3 model = p;
      float limb = abs(kind);
      if (limb > 9.0 && limb < 100.0) {
        float pivot = limb < 10.5 ? .62 : limb < 11.5 ? 1.21 : 1.01;
        float angle = gait*sign(kind)*(limb < 10.5 ? .54 : limb < 11.5 ? -.34 : .33);
        float y = model.y-pivot;
        model.y = pivot+cos(angle)*y-sin(angle)*model.z;
        model.z = sin(angle)*y+cos(angle)*model.z;
      }
      vec3 rotated = vec3(turn.x*model.x + turn.y*model.z, model.y, -turn.y*model.x + turn.x*model.z);
      worldPos = rotated*objectScale + offset;
      gl_Position = camera * vec4(worldPos,1.0);
      shade = color;
      distanceFromCamera = gl_Position.w;
      surface = kind;
      faceMask=kind>=1000.?1.:0.;
      faceUV=vec2(0.);
      if(kind>=1000.) {
        float code=kind-1000.;
        float person=floor(code/262144.);
        code=mod(code,262144.);
        float u=floor(code/512.)/511.;
        float v=mod(code,512.)/511.;
        faceUV=vec2((mod(person,3.)+.36+u*.32)/3.,(floor(person/3.)+.10+(1.-v)*.50)/2.);
      }
    }
  `, `${derivatives ? "#extension GL_OES_standard_derivatives : enable\n#define DALA_LIGHT 1" : ""}
    precision highp float;
    varying vec3 shade, worldPos;
    varying vec2 faceUV;
    varying float faceMask;
    varying float distanceFromCamera, surface;
    uniform float t;
    uniform vec2 playerAt, horseAt, travelerAt;
    uniform float opacity;
    uniform vec3 eyeAt;
    uniform vec2 resolution;
    uniform sampler2D faceAtlas;
    uniform float faceReady;
    ${noise}
    float contact(vec2 p, vec2 center, float radius) {
      vec2 q = (p-center)/radius;
      return 1.-smoothstep(.43,1.,dot(q,q));
    }
    float longShadow(vec2 p, vec2 center, float radius) {
      vec2 q=p-center;
      vec2 ray=vec2(.72,-.694);
      float along = clamp(dot(q,ray),0.,1.65);
      vec2 delta = q-along*ray;
      return (1.-smoothstep(radius*.72,radius+.28,length(delta)))*(1.-along*.19);
    }
    void main() {
      vec2 xz=worldPos.xz;
      vec3 rgb=pow(shade,vec3(.88))*vec3(1.03,1.01,.97);
      float detail=1.-smoothstep(14.,38.,distanceFromCamera);
      if (surface > .5 && surface < 1.5) {
        float flecks = noise(xz*29.);
        float gravel = noise(xz*6.4);
        float field = noise(xz*.47);
        float dust=noise(xz*1.7+vec2(3.,8.));
        rgb=mix(rgb,rgb*vec3(1.10,1.04,.89),smoothstep(.3,.7,dust)*.30);
        rgb *= .90+.12*field+detail*(.13*gravel+.10*flecks-.10);
        float shadow=0.;
        ${shadowCasters}
        shadow=max(shadow,contact(xz,playerAt+vec2(.18,-.13),.61)*.70);
        shadow=max(shadow,contact(xz,horseAt,.96)*.74);
        shadow=max(shadow,contact(xz,travelerAt,.56)*.70);
        shadow=max(shadow,contact(xz,vec2(-1.6,3.),.61)*.65);
        shadow=max(shadow,contact(xz,vec2(-6.1,-1.7),.61)*.65);
        shadow=max(shadow,contact(xz,vec2(2.6,-4.3),.61)*.65);
        shadow=max(shadow,contact(xz,vec2(10.,-8.2),.61)*.65);
        rgb *= 1.-shadow*.41;
      } else if (surface > 1.5 && surface < 2.5) {
        float river = 15.-3.*sin(xz.y*.11);
        float edge = abs(xz.x-river);
        float ripple = sin(xz.y*10.4+xz.x*3.5+t*2.4+noise(xz*1.9)*5.1);
        float small = sin(xz.y*20.-xz.x*2.3+t*3.7);
        float wave = noise(vec2(xz.x*.66,xz.y*1.1+t*.18));
        float bank = smoothstep(1.45,2.38,edge);
        float shimmer = pow(max(0.,ripple*.63+small*.37),6.)*.17;
        rgb = mix(vec3(.145,.30,.30),vec3(.36,.38,.26),bank*.72);
        rgb += wave*.05 + shimmer*vec3(1.,.9,.74);
        rgb += smoothstep(2.25,2.4,edge)*(.055+.035*ripple);
      } else if (surface > 2.5 && surface < 3.5) {
        float textile = noise(worldPos.xz*34.+worldPos.y*vec2(13.,21.));
        float seams=pow(abs(sin(worldPos.y*18.)),18.);
        rgb *= .95+(textile-.5)*detail*.15-seams*.025*detail;
        rgb *= .71+.29*smoothstep(.02,1.13,worldPos.y);
      }
      if(faceMask>.99 && faceReady>.5) {
        vec3 photo=texture2D(faceAtlas,faceUV).rgb;
        float illumination=clamp(dot(shade,vec3(.299,.587,.114))*1.8,.60,1.06);
        rgb=photo*illumination;
      }
      #ifdef DALA_LIGHT
      // Жалпақ қырлардың нормалі: күн мен аспаннан түсетін жарық
      if (surface < 1.5 || surface > 2.5) {
        if (faceMask < .5) {
          vec3 n = normalize(cross(dFdx(worldPos), dFdy(worldPos)));
          vec3 toEye = normalize(eyeAt-worldPos);
          if (dot(n,toEye) < 0.) n = -n;
          vec3 sunDir = normalize(vec3(-.72,.62,.694));
          float diffuse = max(dot(n,sunDir),0.);
          vec3 hemi = mix(vec3(.80,.74,.66),vec3(.90,.95,1.04),n.y*.5+.5);
          float strength = surface > .5 && surface < 1.5 ? .55 : .80;
          vec3 lit = hemi*.80 + vec3(1.,.93,.80)*diffuse*.46;
          rgb *= mix(vec3(1.),lit,strength);
          float rim = pow(1.-max(dot(n,toEye),0.),3.);
          rgb += vec3(.95,.88,.74)*rim*.07*detail;
        }
      }
      #endif
      float fog = 1.-exp(-max(0.,distanceFromCamera-22.)*.012);
      vec3 aerial=vec3(${fogColor});
      // аңғарлардағы жеңіл тұман
      float valley = exp(-max(worldPos.y+.4,0.)*.55)*smoothstep(12.,55.,distanceFromCamera)*.30;
      vec3 col = mix(rgb,aerial,clamp(fog*.86+valley,0.,1.));
      // түс түзету: жұмсақ контраст, қанықтық, жылы жарық пен салқын көлеңке
      float luma = dot(col,vec3(.299,.587,.114));
      col = mix(vec3(luma),col,1.10);
      col = mix(col,col*vec3(1.035,1.0,.95),smoothstep(.35,.85,luma));
      col = mix(col,col*vec3(.95,.985,1.05),1.-smoothstep(.06,.38,luma));
      col = clamp((col-.5)*1.07+.5+.012,0.,1.);
      vec2 q = gl_FragCoord.xy/resolution-.5;
      col *= 1.-dot(q,q)*.38;
      col += (hash(gl_FragCoord.xy)-.5)/255.;
      gl_FragColor = vec4(col,opacity);
    }
  `);
  const skyPoint = gl.getAttribLocation(skyProgram, "point");
  const skyTime = gl.getUniformLocation(skyProgram, "t");
  const skyForward = gl.getUniformLocation(skyProgram, "camForward");
  const skyRight = gl.getUniformLocation(skyProgram, "camRight");
  const skyUp = gl.getUniformLocation(skyProgram, "camUp");
  const skyTan = gl.getUniformLocation(skyProgram, "tanHalf");
  const skyBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, skyBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,3,-1,-1,3]), gl.STATIC_DRAW);
  const faceAtlas=gl.createTexture();
  gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,faceAtlas);
  gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([170,130,100,255]));
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  let facesReady=0;
  const faceImage=new Image();
  faceImage.onload=()=>{gl.bindTexture(gl.TEXTURE_2D,faceAtlas);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,faceImage);facesReady=1;};
  faceImage.src=new URL('assets/cinema/portraits.jpg',document.querySelector('script[src*="app.js"]')?.src||location.href).href;
  const faceReadyUniform=gl.getUniformLocation(program,"faceReady");
  const faceAtlasUniform=gl.getUniformLocation(program,"faceAtlas");
  const p = gl.getAttribLocation(program, "p");
  const color = gl.getAttribLocation(program, "color");
  const kind = gl.getAttribLocation(program, "kind");
  const gait = gl.getUniformLocation(program, "gait");
  const time = gl.getUniformLocation(program, "t");
  const playerAt = gl.getUniformLocation(program, "playerAt");
  const horseAt = gl.getUniformLocation(program, "horseAt");
  const travelerAt = gl.getUniformLocation(program, "travelerAt");
  const camera = gl.getUniformLocation(program, "camera");
  const offset = gl.getUniformLocation(program, "offset");
  const turn = gl.getUniformLocation(program, "turn");
  const scale = gl.getUniformLocation(program, "objectScale");
  const opacity = gl.getUniformLocation(program, "opacity");
  const eyeAt = gl.getUniformLocation(program, "eyeAt");
  const resolution = gl.getUniformLocation(program, "resolution");
  const buffer = (values) => {
    const handle = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, handle);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(values), gl.STATIC_DRAW);
    return { handle, size: values.length / 7 };
  };
  const draw = (mesh, x, y, z, angle = 0, swing = 0, size = 1, alpha = 1) => {
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh.handle);
    gl.vertexAttribPointer(p, 3, gl.FLOAT, false, 28, 0);
    gl.vertexAttribPointer(color, 3, gl.FLOAT, false, 28, 12);
    gl.vertexAttribPointer(kind, 1, gl.FLOAT, false, 28, 24);
    gl.uniform1f(gait, swing);
    gl.uniform1f(scale,size);
    gl.uniform1f(opacity,alpha);
    gl.uniform3f(offset, x, y, z);
    gl.uniform2f(turn, Math.cos(angle), Math.sin(angle));
    gl.drawArrays(gl.TRIANGLES, 0, mesh.size);
  };
  const world = buffer(vertices);
  const player = buffer(playerVertices);
  const horse = buffer(horseVertices);
  const traveler = buffer(travelerVertices);
  const battleMeshes = defense ? Object.fromEntries(Object.entries(defenseMeshes(playerVertices,travelerVertices))
    .map(([name,mesh])=>[name,buffer(mesh)])) : null;
  return (matrix, x, z, swing, caravanMoving, now) => {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.DEPTH_BUFFER_BIT);
    gl.disable(gl.DEPTH_TEST);
    gl.useProgram(skyProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, skyBuffer);
    gl.enableVertexAttribArray(skyPoint);
    gl.vertexAttribPointer(skyPoint, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1f(skyTime, now*.001);
    gl.uniform3fv(skyForward, cameraBasis.forward);
    gl.uniform3fv(skyRight, cameraBasis.right);
    gl.uniform3fv(skyUp, cameraBasis.up);
    gl.uniform2f(skyTan, cameraBasis.tanX, cameraBasis.tanY);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.disableVertexAttribArray(skyPoint);

    gl.enable(gl.DEPTH_TEST);
    gl.useProgram(program);
    for (const attribute of [p,color,kind]) gl.enableVertexAttribArray(attribute);
    gl.uniformMatrix4fv(camera, false, matrix);
    gl.uniform1f(time, now*.001);
    gl.uniform3fv(eyeAt, cameraBasis.eye);
    gl.uniform2f(resolution, canvas.width, canvas.height);
    gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,faceAtlas);
    gl.uniform1i(faceAtlasUniform,0);gl.uniform1f(faceReadyUniform,facesReady);
    const cx = caravan.x, cz = caravan.z, angle = caravan.heading;
    const walk = caravanMoving ? Math.sin(now*.009) : 0;
    const tx = cx - Math.sin(angle)*1.65 + Math.cos(angle)*.75;
    const tz = cz - Math.cos(angle)*1.65 - Math.sin(angle)*.75;
    gl.uniform2f(playerAt,x,z);
    gl.uniform2f(horseAt,cx,cz);
    gl.uniform2f(travelerAt,tx,tz);
    draw(world, 0, 0, 0);
    const defending = mission === "defense";
    const target = defending ? defense.goal(position).target : null;
    const aimHeading = target ? Math.atan2(target.x-x,target.z-z) : heading;
    if (!inside) draw(defending ? battleMeshes.defender : player, x, ground(x,z) + Math.abs(swing)*.022, z, aimHeading, swing);
    if (defending) {
      for (const point of defense.positions) {
        for (const spacing of [-.68,.68]) {
          const guardX = point.x+spacing;
          draw(battleMeshes.defender,guardX,ground(guardX,point.z),point.z,Math.PI,0,.88);
        }
      }
      for (const actor of defense.actors()) {
        const elevation = ground(actor.x,actor.z)+Math.abs(actor.gait)*.065;
        draw(horse,actor.x,elevation,actor.z,actor.heading,actor.gait,.92);
        draw(battleMeshes.rider,actor.x,elevation+.91,actor.z,actor.heading,0,.82);
      }
      const puffs = defense.puffs();
      if (puffs.length) {
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
        gl.depthMask(false);
        for (const puff of puffs) draw(puff.flash ? battleMeshes.flash : battleMeshes.smoke,puff.x,puff.y,puff.z,now*.001,0,puff.size,puff.opacity);
        gl.depthMask(true);
        gl.disable(gl.BLEND);
      }
    }
    if (!defending) draw(horse, cx, ground(cx,cz)+Math.abs(walk)*.014, cz, angle, walk);
    if (!defending) draw(traveler, tx, ground(tx,tz)+Math.abs(walk)*.016, tz, angle, walk);
    for (const attribute of [p,color,kind]) gl.disableVertexAttribArray(attribute);
  };
}
function canWalk(x, z) {
  if (inside) {
    return Math.hypot(x-dwelling.x,z-dwelling.z) < dwelling.radius &&
      dwelling.objects.every((item) => !item.solid || Math.hypot(x-item.x,z-item.z) > item.solid);
  }
  return x > -20 && x < 12.2 && z > -20 && z < 16 &&
    Math.abs(x - 15 + 3*Math.sin(z*.11)) > 2.75 &&
    obstacles.every(([cx,cz,radius]) => Math.hypot(x-cx,z-cz) > radius + .26);
}
if (episode?.dwelling === false) get("journal").hidden = true;
const soundButton = get("sound");
const AudioEngine = window.AudioContext || window.webkitAudioContext;
soundButton.hidden = !AudioEngine;
let atmosphere;
function createAtmosphere() {
  const context = new AudioEngine();
  const master = context.createGain();
  master.gain.value = .25;
  master.connect(context.destination);
  const noise = context.createBuffer(1, context.sampleRate*3, context.sampleRate);
  const samples = noise.getChannelData(0);
  for (let i=0; i<samples.length; i++) samples[i]=Math.random()*2-1;
  const loop = context.createBufferSource();
  loop.buffer = noise;
  loop.loop = true;
  function layer(type, frequency, volume) {
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    filter.type = type;
    filter.frequency.value = frequency;
    gain.gain.value = volume;
    loop.connect(filter).connect(gain).connect(master);
    return gain.gain;
  }
  const wind = layer("lowpass", 280, .21);
  const water = layer("bandpass", 980, .03);
  loop.start();
  return {
    context,
    ambience(now,x,z) {
      const time = context.currentTime;
      if (context.state !== "running") return;
      const river = 15-3*Math.sin(z*.11);
      wind.setTargetAtTime((.20+Math.sin(now*.0007)*.075)*(inside ? .30 : 1),time,.18);
      water.setTargetAtTime(inside ? .009 : .022+.23*Math.exp(-Math.abs(x-river)*.22),time,.22);
    },
    volley() {
      if (context.state !== "running") return;
      const time = context.currentTime;
      const shot = context.createBufferSource();
      const filter = context.createBiquadFilter();
      const gain = context.createGain();
      shot.buffer = noise;
      filter.type = "lowpass";
      filter.frequency.value = 820;
      gain.gain.setValueAtTime(.95,time);
      gain.gain.exponentialRampToValueAtTime(.002,time+.44);
      shot.connect(filter).connect(gain).connect(master);
      shot.start(time,Math.random()*2,.46);
    },
    footstep() {
      if (context.state !== "running") return;
      const time = context.currentTime;
      const step = context.createBufferSource();
      const filter = context.createBiquadFilter();
      const gain = context.createGain();
      step.buffer = noise;
      filter.type = "bandpass";
      filter.frequency.value = 340+Math.random()*220;
      gain.gain.setValueAtTime(.001,time);
      gain.gain.exponentialRampToValueAtTime(.62,time+.024);
      gain.gain.exponentialRampToValueAtTime(.001,time+.14);
      step.connect(filter).connect(gain).connect(master);
      step.start(time,Math.random()*2,.15);
    }
  };
}
function soundLabel(enabled) {
  soundButton.textContent = enabled ? "Дыбысты өшіру" : "Дыбысты қосу";
  soundButton.setAttribute("aria-pressed",String(enabled));
}
soundButton.addEventListener("click",async () => {
  try {
    atmosphere ??= createAtmosphere();
    const { context } = atmosphere;
    if (soundButton.getAttribute("aria-pressed") === "true") await context.suspend();
    else await context.resume();
    if (!dialog.open && context.state === "running") await context.suspend();
    soundLabel(context.state === "running");
  } catch {
    soundLabel(false);
  }
});

function frame(now) {
  if (!dialog.open || !renderer) return;
  const elapsed = document.querySelector(".photo-reference[open],.cine-gallery[open]") ? 0 : Math.min(.05, (now - lastFrame) / 1000 || 0);
  lastFrame = now;
  const horizontal = Number(keys.has("right")) - Number(keys.has("left"));
  const vertical = Number(keys.has("down")) - Number(keys.has("up"));
  const side = Math.sin(yaw), forward = Math.cos(yaw);
  const dx = horizontal*forward+vertical*side;
  const dz = -horizontal*side+vertical*forward;
  let swing = 0;
  let moved = false;
  const running = Boolean(sprintButton && !inside && !exhausted && (keys.has("run") || sprintToggle) && panel.hidden);
  if ((dx || dz) && panel.hidden) {
    heading = Math.atan2(dx,dz);
    const previousX = position.x, previousZ = position.z;
    const speed = elapsed * (inside ? 2.15 : running ? 9.4 : 5.8) / Math.hypot(dx, dz);
    const nextX = position.x + dx * speed;
    const nextZ = position.z + dz * speed;
    if (canWalk(nextX, position.z)) position.x = nextX;
    if (canWalk(position.x, nextZ)) position.z = nextZ;
    if (previousX !== position.x || previousZ !== position.z) {
      moved = true;
      const previousStep = Math.floor(stepTime/Math.PI);
      stepTime += elapsed * (running ? 19 : 12);
      if (Math.floor(stepTime/Math.PI) !== previousStep) atmosphere?.footstep();
      swing = Math.sin(stepTime);
    }
  }
  if (sprintButton) {
    energy = Math.max(0,Math.min(100,energy+elapsed*(running && moved ? -22 : 16)));
    if (energy === 0) {exhausted = true;sprintToggle = false;}
    if (energy >= 30) exhausted = false;
    const meter = get("energy");
    const value = Math.round(energy);
    if (meter.value !== value) meter.value = value;
    sprintButton.disabled = inside || exhausted || !panel.hidden;
    sprintButton.setAttribute("aria-pressed",String(running));
    const status = inside ? "Киіз үйде баяу жүру" : exhausted ? "Тыныс ал · қуат жиналуда" : running && moved ? "Жүгіріп келесің" : "Жаяу жүріс · Shift арқылы жүгір";
    if (get("travel-status").textContent !== status) get("travel-status").textContent = status;
  }
  if (moved && started) {
    movementSaveTime += elapsed;
    if (movementSaveTime >= 2) {saveGame();movementSaveTime = 0;}
  }
  const w = canvas.clientWidth, h = canvas.clientHeight;
  const dpr = renderScale(elapsed);
  if (canvas.width !== Math.round(w*dpr) || canvas.height !== Math.round(h*dpr)) {
    canvas.width = Math.round(w*dpr);
    canvas.height = Math.round(h*dpr);
  }
  const { x, z } = position;
  atmosphere?.ambience(now,x,z);
  const floor = ground(dwelling.x,dwelling.z);
  const defending = mission === "defense";
  const closeCamera=dialog.dataset.closeCamera==="true";
  const distance = defending ? 3.15 : closeCamera ? 3.0 : 8.25;
  const eye = inside ? [x,floor+1.05,z] : [x+side*distance,(defending ? 4.5 : closeCamera ? 2.25 : 6.35)+pitch*6,z+forward*distance];
  const target = inside ? [x-side,floor+1.05-pitch,z-forward] : [x-side*(closeCamera?1.0:5.6),1.25,z-forward*(closeCamera?1.0:5.6)];
  const matrix = viewProjection(eye,target,w / Math.max(h,1));
  const caravanMoving = updateEscort(elapsed);
  if (defending && panel.hidden) defense.update(elapsed,position,finishDefense);
  renderer(matrix, x, z, swing, caravanMoving, now);
  updateExploration(matrix,w,h);
  updateObjective(matrix, w, h);
  animation = requestAnimationFrame(frame);
}
async function decodeMesh(buffer) {
  // dala-mesh.bin: gzip(indexed, byte-shuffled Float32 planes + delta/zigzag Uint32 indices). See tools/pack-mesh.js.
  const head = new DataView(buffer);
  const tag = String.fromCharCode(...new Uint8Array(buffer, 0, 4));
  if (tag !== "DALA" || head.getUint32(4, true) !== 1) throw Error("mesh");
  const count = head.getUint32(8, true);
  let at = 12 + count * 8;
  const models = [];
  for (let m = 0; m < count; m++) {
    const unique = head.getUint32(12 + m * 8, true), total = head.getUint32(16 + m * 8, true);
    const floats = unique * 7, shuffled = new Uint8Array(buffer, at, floats * 4);
    at += floats * 4;
    const bytes = new Uint8Array(floats * 4);
    for (let b = 0; b < 4; b++) for (let i = 0; i < floats; i++) bytes[i * 4 + b] = shuffled[b * floats + i];
    const planes = new Float32Array(bytes.buffer);
    const deltas = new Uint32Array(buffer.slice(at, at + total * 4));
    at += total * 4;
    const out = new Float32Array(total * 7);
    let index = 0;
    for (let i = 0; i < total; i++) {
      const z = deltas[i];
      index += (z >>> 1) ^ -(z & 1);
      for (let j = 0; j < 7; j++) out[i * 7 + j] = planes[j * unique + index];
    }
    models.push(out);
  }
  return models;
}
function meshFromScript() {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "dala-mesh.js?v=1";
    s.onload = () => {
      const b64 = window.DALA_MESH_B64; delete window.DALA_MESH_B64;
      if (!b64) return reject(Error("mesh"));
      const bin = atob(b64), bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      resolve(new Response(bytes, {headers: {"content-length": String(bytes.length)}}));
    };
    s.onerror = () => reject(Error("mesh"));
    document.head.append(s);
  });
}
async function fetchMesh() {
  if (!("DecompressionStream" in window)) throw Error("old");
  // Сайт файлды екі рет басып ашылса (file://), браузер fetch-ке рұқсат бермейді: модельді скрипт арқылы жүктейміз
  const response = location.protocol === "file:" ? await meshFromScript() : await fetch("dala-mesh.bin?v=1");
  if (!response.ok || !response.body) throw Error("mesh");
  const total = Number(response.headers.get("content-length")) || 0;
  let loaded = 0;
  const progress = new TransformStream({transform(chunk, controller) {
    loaded += chunk.byteLength;
    if (total) get("loading-text").textContent = `Қоныс жүктелуде… ${Math.min(99, Math.round(loaded / total * 100))}%`;
    controller.enqueue(chunk);
  }});
  const stream = response.body.pipeThrough(progress).pipeThrough(new DecompressionStream("gzip"));
  return decodeMesh(await new Response(stream).arrayBuffer());
}
// Бейімделгіш рұқсат: әлсіз компьютерде кадр жиілігі төмендесе, сурет рұқсатын азайтамыз
const QUALITY_KEY = "dala-murasy-quality-v1";
const QUALITY = {high:2, auto:2, balanced:1.25, fast:.8};
let qualityMode = (() => { try { return localStorage.getItem(QUALITY_KEY) || "auto"; } catch { return "auto"; } })();
if (!(qualityMode in QUALITY)) qualityMode = "auto";
let dynamicScale = 1, frameAverage = 1/60, scaleCooldown = 0;
function renderScale(elapsed) {
  const device = Math.min(QUALITY[qualityMode], window.devicePixelRatio || 1);
  if (qualityMode !== "auto") return device;
  if (elapsed > 0 && elapsed < .5) frameAverage += (elapsed - frameAverage) * .05;
  scaleCooldown -= elapsed;
  if (scaleCooldown <= 0) {
    if (frameAverage > 1/38 && dynamicScale > .5) { dynamicScale = Math.max(.5, dynamicScale * .85); scaleCooldown = 1.5; }
    else if (frameAverage < 1/57 && dynamicScale < 1) { dynamicScale = Math.min(1, dynamicScale * 1.1); scaleCooldown = 3; }
  }
  return Math.max(.5, device * dynamicScale);
}
window.DALA_QUALITY = {
  get mode() { return qualityMode; },
  set mode(value) { if (value in QUALITY) { qualityMode = value; dynamicScale = 1; try { localStorage.setItem(QUALITY_KEY, value); } catch {} } },
  get scale() { return Math.round(renderScale(0) * 100) / 100; }
};
function loadMesh() {
  const models = () => [window.DALA_MESH, window.DALA_PLAYER, window.DALA_HORSE, window.DALA_TRAVELER];
  if (models().every(Boolean)) return Promise.resolve(models());
  if (!meshLoad) meshLoad = fetchMesh().then((loaded) => {
    [window.DALA_MESH, window.DALA_PLAYER, window.DALA_HORSE, window.DALA_TRAVELER] = loaded;
    return loaded;
  }).catch((error) => { meshLoad = null; throw error; });
  return meshLoad;
}
async function begin() {
  loading.hidden = false;
  get("retry").hidden = true;
  get("loading-text").textContent = "Қоныс жүктелуде…";
  try {
    const models = await loadMesh();
    if (!dialog.open) return;
    renderer ??= createRenderer(...models);
    loading.hidden = true;
    if (!started && panel.hidden) intro();
    cancelAnimationFrame(animation);
    lastFrame = performance.now();
    animation = requestAnimationFrame(frame);
  } catch (error) {
    get("loading-text").textContent = error.message === "webgl"
      ? "Бұл браузерде 3D көріністі іске қосу мүмкін болмады. WebGL қолдайтын браузерде ашып көр."
      : error.message === "old"
        ? "Браузер ескі. Chrome, Edge, Firefox немесе Safari-дің жаңа нұсқасын ашып көр."
        : "Қонысты жүктеу мүмкін болмады. Интернетті тексеріп, қайта жүкте.";
    get("retry").hidden = false;
  }
}
document.querySelectorAll("[data-play]").forEach((button) => button.addEventListener("click", () => {
  origin = button;
  dialog.showModal();
  if (expeditionButton) {
    guideActive = button.hasAttribute("data-expedition");
    if (guideActive) {hidePanel();started = true;}
  }
  get("close").focus();
  if (button.hasAttribute("data-defense") && defense) {
    practiceSnapshot = {mission,milestone,leading,stage,position:{...position},yaw,pitch,heading,
      restartHidden:restart.hidden,step:defense.step(),panelOpen:!panel.hidden};
    restart.hidden = true;
    startDefense();
  }
  begin();
}));
get("retry").addEventListener("click", begin);
get("close").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  if (started) saveGame();
  sprintToggle = false;
  cancelAnimationFrame(animation);
  keys.clear();
  if (atmosphere?.context.state === "running") atmosphere.context.suspend().catch(() => {});
  soundLabel(false);
  if (practiceSnapshot) {
    const saved = practiceSnapshot;
    practiceSnapshot = null;
    hidePanel();
    ({mission,milestone,leading,yaw,pitch,heading} = saved);
    if (saved.panelOpen && saved.stage === "intro") intro();
    Object.assign(position,saved.position);
    restart.hidden = saved.restartHidden;
    defense.reset(saved.step);
  }
  origin?.focus();
  document.dispatchEvent(new Event("dala:game-closed"));
});
