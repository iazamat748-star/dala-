"use strict";
// Дала мұрасы · «Бүгін тарихта»: нақты күні белгілі оқиғалар мен мерекелер.
// [ай, күн, жыл (жоқ болса null), атауы, түсініктеме, сілтеме]
window.DALA_CALENDAR = [
  [1, 28, 1993, "Тұңғыш Конституция", "Тәуелсіз Қазақстанның алғашқы Конституциясы қабылданды.", "#history-statehood"],
  [3, 1, 2016, "Алғыс айту күні", "Қазақстан халқының бірлігін және бір-біріне алғысын білдіретін мереке ретінде белгіленді.", "#culture-customs"],
  [3, 2, 1992, "БҰҰ-ға мүшелік", "Қазақстан Біріккен Ұлттар Ұйымының мүшесі болды.", "#history-statehood"],
  [3, 22, null, "Наурыз мейрамы", "Көктемгі күн мен түннің теңелуі, жыл басы. Қазақстанда 21–23 наурызда тойланады.", "#culture-holidays"],
  [4, 12, 1961, "Ғарышқа алғашқы ұшу", "Юрий Гагарин Байқоңыр ғарыш айлағынан ұшып, ғарышқа шыққан алғашқы адам болды.", "#place-baikonur"],
  [5, 1, null, "Қазақстан халқының бірлігі мерекесі", "Елдегі ұлттар мен этностардың татулығына арналған мереке.", "#culture-holidays"],
  [5, 7, 1992, "Отан қорғаушылар күні", "1992 жылы 7 мамырда Қазақстанның Қарулы Күштері құрылды.", "#history-statehood"],
  [5, 9, 1945, "Жеңіс күні", "Ұлы Отан соғысы аяқталды. Қазақстаннан майданға жүз мыңдаған адам аттанды.", "#history-wwii"],
  [5, 31, null, "Саяси қуғын-сүргін және ашаршылық құрбандарын еске алу күні", "1997 жылдан бері атап өтіледі.", "#history-repression"],
  [6, 4, 1992, "Мемлекеттік рәміздер күні", "Қазақстанның Мемлекеттік Туы мен Елтаңбасы қабылданды.", "#history-statehood"],
  [7, 6, null, "Астана күні", "Елорданың мерекесі. Астана 1997 жылдан бері Қазақстанның астанасы.", "#place-astana"],
  [8, 10, 1845, "Абайдың туған күні", "Ақын, ойшыл Абай Құнанбайұлы дүниеге келді.", "#people"],
  [8, 29, 1949, "Семей полигонындағы алғашқы сынақ", "Семей полигонында алғашқы ядролық бомба жарылды.", "#history-semey"],
  [8, 29, 1991, "Семей полигоны жабылды", "Семей ядролық сынақ полигонын жабу туралы жарлыққа қол қойылды.", "#history-semey"],
  [8, 30, 1995, "Конституция күні", "Республикалық референдумда қазіргі Конституция қабылданды.", "#history-statehood"],
  [9, 22, null, "Тілдер күні", "Қазақстан халқының тілдері күні.", "#culture-writing"],
  [10, 25, 1990, "Республика күні", "Қазақ КСР-інің мемлекеттік егемендігі туралы декларация қабылданды.", "#history-independence"],
  [11, 15, 1993, "Ұлттық валюта күні", "Қазақстанның ұлттық валютасы — теңге айналымға енгізілді.", "#history-statehood"],
  [12, 10, 1997, "Елорда Ақмолаға көшті", "Ақмола (кейін Астана) ресми түрде Қазақстанның астанасы болды.", "#place-astana"],
  [12, 16, 1991, "Тәуелсіздік күні", "«Қазақстан Республикасының мемлекеттік тәуелсіздігі туралы» Конституциялық заң қабылданды.", "#history-independence"],
  [12, 17, 1986, "Желтоқсан оқиғасы", "Алматыда жастар республика басшылығының ауыстырылуына наразылық білдіріп, алаңға шықты.", "#history-december"],
  [12, 21, 1991, "Алматы декларациясы", "Алматыда Тәуелсіз Мемлекеттер Достастығы туралы декларацияға қол қойылды.", "#history-independence"]
];

(() => {
  const box = document.getElementById("today");
  if (!box) return;
  const MONTHS = ["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"];
  const make = (tag, text, cls, attrs) => { const n = document.createElement(tag); if (text) n.textContent = text; if (cls) n.className = cls; if (attrs) for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v); return n; };
  const now = new Date(), year = now.getFullYear();
  const dayOfYear = (m, d) => Math.round((Date.UTC(2001, m - 1, d) - Date.UTC(2001, 0, 1)) / 864e5);
  const today = dayOfYear(now.getMonth() + 1, now.getDate());
  // Домбыра күні: шілденің бірінші жексенбісі
  const firstSunday = (() => { for (let d = 1; d <= 7; d++) if (new Date(year, 6, d).getDay() === 0) return d; return 1; })();
  const list = [...window.DALA_CALENDAR, [7, firstSunday, null, "Ұлттық домбыра күні", "Шілденің бірінші жексенбісі, 2018 жылдан бері.", "#culture-music"]]
    .map((e) => ({e, d: dayOfYear(e[0], e[1])})).sort((a, b) => a.d - b.d);
  const exact = list.filter((x) => x.d === today);
  const past = list.filter((x) => x.d < today).slice(-1)[0] || list[list.length - 1];
  const next = list.find((x) => x.d > today) || list[0];
  const shown = exact.length ? [...exact, next] : [past, next];
  const head = make("div", null, "today-head");
  head.append(make("strong", `Бүгін, ${now.getDate()} ${MONTHS[now.getMonth()]}`), make("span", exact.length ? "Осы күні тарихта" : "Жақын күндердегі тарихи даталар"));
  const items = make("div", null, "today-items");
  for (const {e: [m, d, y, title, text, href]} of shown) {
    const a = make("a", null, "today-item", {href});
    const when = `${d} ${MONTHS[m - 1]}${y ? ", " + y : ""}`;
    a.append(make("time", when), make("strong", title), make("span", text));
    if (y && m === now.getMonth() + 1 && d === now.getDate()) a.append(make("em", `${year - y} жыл бұрын`));
    items.append(a);
  }
  box.append(head, items);
  box.hidden = false;
})();
