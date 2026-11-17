"use strict";
(() => {
  const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n;};
  const btn=(text,fn)=>{const b=el('button',text,'trial-button');b.type='button';b.onclick=fn;return b;};
  const main=document.querySelector('main');
  // Keep every existing section and its event listeners; collapse only presentation.
  const groups=[['periods','02 · Тарихи кезеңдер'],['facts','03 · Деректер мен оқиғалар шежіресі'],['tasks','05 · Тапсырмалар мен сынақтар'],['assistant','06 · Тарих көмекшісі'],['results','07 · Нәтиже және кері байланыс'],['teachers','Мұғалімге арналған нұсқаулық'],['about','Жоба және дереккөздер']];
  groups.forEach(([id,title])=>{const s=document.getElementById(id);const d=el('details',null,'compact-section');const h=el('summary',title);s.before(d);d.append(h,s);});
  const reveal=(id)=>{const n=document.getElementById(id);if(!n)return;let p=n.parentElement;while(p){if(p.tagName==='DETAILS')p.open=true;p=p.parentElement;}};
  const revealHash=()=>{const id=decodeURIComponent(location.hash.slice(1));reveal(id.startsWith('history-')?'atlas':id);};
  document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(a)reveal(a.getAttribute('href').slice(1));});
  window.addEventListener('hashchange',revealHash);
  document.addEventListener('dala:history-search',()=>reveal('atlas'));
  revealHash();
  const games=document.getElementById('games');document.getElementById('campaign').after(games);
  const help=document.querySelector('[data-help]')||btn('Сайтты қалай қолданамын?',()=>{});help.addEventListener('click',()=>welcome.showModal());if(!help.isConnected){help.classList.add('help-button');document.querySelector('.intro').append(help);}
  const welcome=el('dialog',null,'welcome-dialog');welcome.setAttribute('aria-labelledby','welcome-title');
  const body=el('div',null,'welcome-body');const heading=el('h2','Дала мұрасына қош келдің!');heading.id='welcome-title';
  body.append(el('p','ТАРИХТЫ ОЙНАП ҮЙРЕН','eyebrow'),heading,el('p','Сен — тарих зерттеушісісің. Дәуірді таңдап, кейіпкерлермен сөйлес, деректерді зертте және шешім қабылда.'));
  const steps=el('ol');['3D ойынның бірін таңда: Қозыбасы, Орбұлақ немесе Қаратау.','Компьютерде W A S D арқылы жүр, E арқылы әрекет ет. Телефонда экрандағы басқаруды қолдан.','Қалған дәуірлерді шежіре мен интерактивті тапсырмалардан зертте. Нәтиже осы браузерде сақталады.'].forEach(t=>steps.append(el('li',t)));body.append(steps,el('p','Қазір: 3 ойналатын 3D оқиға, 26 тарихи тақырып. Бұл — негізгі кезеңдер жинағы; барлық тарихи оқиға әлі қамтылмаған.','coverage-note'));
  const label=el('label',null,'welcome-check');const check=el('input');check.type='checkbox';label.append(check,document.createTextNode(' Келесі кіргенде көрсетпе'));body.append(label);
  const dismiss=()=>{try{if(check.checked)localStorage.setItem('dala-welcome-v1','seen');else localStorage.removeItem('dala-welcome-v1');}catch{}welcome.close();};
  body.append(btn('Саяхатты бастау',()=>{dismiss();games.scrollIntoView({block:'start'});}),btn('Сайтты қарау',dismiss));welcome.append(body);document.body.append(welcome);
  let seen=false;try{seen=localStorage.getItem('dala-welcome-v1')==='seen';}catch{}if(!seen&&!location.hash)welcome.showModal();
  // A manual, animated narrative opening leads into the existing playable missions.
  const prologues={qozybasy:['1465–1466 · Жас шабарман','Тау етегіндегі қонысқа хабар жеткізуің керек. Алдымен ауыл адамдарымен таныс.','Әр әңгіме жаңа міндет ашады. Көштің жолын барлап, адамдарға көмектес.'],orbulak:['1643 · Қорғаныс шебі','Шатқалға келген сарбаздың міндетін қабылда. Қорғаныс шебін танып ал.','Қаруды көздеп, қайта оқта. Шептің жағдайын бақылап, тапсырмаларды орында.'],karatau:['1723 · Көш жолы','Ел ауыр кезеңді бастан өткеріп жатыр. Сенің міндетің — көшке көмектесу.','Жолды барла, адамдарды бірге ұста және оларды қауіпсіз бағытпен алып өт.']};
  const cinema=el('dialog',null,'cinema-dialog');cinema.setAttribute('aria-labelledby','cinema-title');const scene=el('div',null,'cinema-scene');const cinematicTitle=el('h2');cinematicTitle.id='cinema-title';const caption=el('p');const page=el('small');const actions=el('div',null,'cinema-actions');cinema.append(scene,page,cinematicTitle,caption,el('p','Сюжет пен диалог — көркем үлгі. Тарихи деректер ойында бөлек көрсетіледі.','coverage-note'),actions);document.body.append(cinema);
  let current='qozybasy',frame=0;
  const launch=()=>{cinema.close();if(current==='qozybasy')document.querySelector('#entry [data-play]').click();else location.href=HISTORY_CHAPTERS.find(c=>c.id===current).href;};
  const render=()=>{const lines=prologues[current];page.textContent=`СЮЖЕТТІК КІРІСПЕ · ${frame+1} / 2`;cinematicTitle.textContent=lines[0];caption.textContent=lines[frame+1];scene.style.backgroundImage=`linear-gradient(0deg,#122e28aa,transparent),url('${current==='qozybasy'?'assets/steppe-reconstruction.jpg':'assets/cinema/'+current+'.jpg'}')`;actions.replaceChildren(btn('Жабу',()=>cinema.close()),btn('Кіріспені өткізу',launch),btn(frame===0?'Әрі қарай →':'Ойынға кіру →',()=>{if(frame===0){frame=1;render();}else launch();}));};
  const shelf=el('div',null,'story-launchers');Object.entries(prologues).forEach(([id,lines])=>{const card=el('div');card.append(el('small','СЮЖЕТТІК САПАР'),el('h3',lines[0]),btn('Оқиғаны бастау →',()=>{current=id;frame=0;render();cinema.showModal();}));shelf.append(card);});games.querySelector('.catalog-head').after(shelf);
  // Catalogue reuses verified lesson records, with original source links.
  const chronicle=el('section',null,'chronicle');chronicle.id='chronicle';chronicle.append(el('h3','Оқиғалар шежіресі'),el('p','Тас дәуірінен тәуелсіздік кезеңіне дейінгі оқу деректері. Жылмен, оқиғамен немесе тақырыппен ізде.'));
  const filters=el('div',null,'chronicle-filters');const search=el('input');search.type='search';search.placeholder='Жыл немесе оқиға';search.setAttribute('aria-label','Шежіреден іздеу');const select=el('select');select.setAttribute('aria-label','Шежіре дәуірі');const all=el('option','Барлық дәуір');all.value='all';select.append(all);HISTORY_ERAS.forEach(([id,title])=>{const o=el('option',title);o.value=id;select.append(o);});filters.append(search,select);const count=el('p');count.setAttribute('aria-live','polite');const list=el('div',null,'chronicle-list');const more=btn('Тағы көрсету',()=>{limit+=8;draw();});chronicle.append(filters,count,list,more);document.getElementById('facts').append(chronicle);
  const records=HISTORY_CHAPTERS.flatMap(c=>(c.records?.length?c.records:[[c.date,c.title,c.brief]]).map(r=>({c,r})));let limit=8;
  const additions=[
    ['1710','Қарақұмдағы басқосу','Қазақ жүздерінің өкілдері жоңғар шабуылына қарсы күш біріктіруді талқылады.','https://e-history.kz/storage/upload/library_kk_files/iblock/ff1/ff17272712677ecef88b095a33405d40.pdf'],
    ['1726','Ордабасыдағы кеңес','Үш жүздің жасақтарын біріктіру және ортақ қолбасшылық мәселесі қаралды.','https://e-history.kz/media/scorm/285/358/text/text.htm'],
    ['1726 / 1728','Бұланты шайқасы','Қазақ жасақтары Бұланты маңында жоңғар әскерін жеңді. Дереккөздерде мерзімі 1726 және 1728 жылдар деп әртүрлі беріледі.','https://e-history.kz/kz/history-of-kazakhstan/show/8634'],
    ['1729 / 1730','Аңырақай шайқасы','Қазақ жасақтарының жеңісі жоңғар шапқыншылығына қарсы күрестегі маңызды оқиға болды. Мерзімдеуде екі жыл қатар көрсетіледі.','https://e-history.kz/storage/upload/library_kk_files/iblock/ff1/ff17272712677ecef88b095a33405d40.pdf']
  ];
  additions.forEach(([date,title,description,url])=>records.push({c:{id:'karatau',era:'khanate',title,source:null},r:[date,title,description],url}));
  records.sort((a,b)=>HISTORY_ERAS.findIndex(e=>e[0]===a.c.era)-HISTORY_ERAS.findIndex(e=>e[0]===b.c.era));

  const draw=()=>{const q=search.value.toLocaleLowerCase('kk').trim();const items=records.filter(({c,r})=>(select.value==='all'||select.value===c.era)&&[c.title,...r].join(' ').toLocaleLowerCase('kk').includes(q));count.textContent=`${items.length} дерек · ${Math.min(limit,items.length)} көрсетілді`;list.replaceChildren();items.slice(0,limit).forEach(({c,r,url})=>{const a=el('article');a.append(el('small',r[0]),el('h4',r[1]),el('p',r[2]));const link=el('a',url?'Осы кезеңнің ойыны →':'Тақырыпты зерттеу →');link.href='#history-'+c.id;const source=url?['Дереккөз',url]:HISTORY_SOURCES[c.source];if(source){const s=el('a','Дереккөз ↗');s.href=source[1];s.target='_blank';s.rel='noopener';a.append(s);}a.append(link);list.append(a);});if(!items.length)list.append(el('p','Сәйкес дерек табылмады. Басқа сөзді немесе дәуірді таңда.'));more.hidden=limit>=items.length;};
  search.oninput=select.onchange=()=>{limit=8;draw();};draw();
})();
