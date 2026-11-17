"use strict";
(() => {
  const root=document.currentScript?.src || [...document.scripts].find(s=>s.src.includes('cinematic.js'))?.src;
  const asset=name=>new URL('assets/cinema/'+name,root).href;
  const episodeId=window.DALA_EPISODE?.id || '1465';
  const scene=asset(episodeId==='1643'?'orbulak.jpg':episodeId==='1723'?'karatau.jpg':'camp.jpg');
  const make=(tag,text,cls)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(cls)e.className=cls;return e;};
  const portraits=[['Шабарман','Жас хабаршы'],['Айша','Қоныс тұрғыны'],['Мерген','Жол бастаушы'],['Ел басшысы','Көркем кейіпкер бейнесі'],['Қарауыл','Шептегі сарбаз'],['Күләй','Көшке көмектесуші']];
  const objects=[['Текемет','Өрнекті киіз'],['Ағаш сандық','Киім мен бұйым сақтайтын жиһаз'],['Торсық','Жолға арналған тері ыдыс'],['Кереге','Киіз үйдің ағаш қаңқасы'],['Арба дөңгелегі','Көштің көлігі'],['Жол жабдығы','Көрпе және ыдыс']];
  const sprite=(sheet,index,cls)=>{const n=make('div',null,'cine-sprite '+cls);n.style.backgroundImage=`url("${asset(sheet)}")`;n.style.backgroundPosition=`${index%3*50}% ${Math.floor(index/3)*100}%`;n.setAttribute('role','img');return n;};
  const story=document.querySelector('#panel .story');
  const visual=make('div',null,'cine-dialogue-visual');visual.hidden=true;
  const credit=make('small','Көркем бейне · ЖИ реконструкциясы','cine-credit');
  story?.prepend(visual,credit);
  const people=new Map([['Шабарман',0],['Айша',1],['Сәуле',1],['Мерген',2],['Жолбасшы',2],['Керей',3],['Жәнібек',3],['Жәңгір',3],['Күләй',5],['Зере',5],['Жолаушы',5],['Жасақ басы',4],['Бақылаушы',4],['Ержан',4],['Су қараушы',4],['Шебер',2],['Қарауыл',4]]);
  window.DALA_CINEMA={panel(label,speaker){
    const object=objects.findIndex(o=>speaker.includes(o[0]));
    const person=[...people].find(([name])=>speaker.includes(name));
    visual.replaceChildren();visual.hidden=false;credit.hidden=false;
    if(object>=0){const n=sprite('objects.jpg',object,'cine-object');n.setAttribute('aria-label',objects[object][0]+' · көркем бейне');visual.append(n);}
    else if(person){const n=sprite('portraits.jpg',person[1],'cine-person');n.setAttribute('aria-label',speaker+' · ойдан жасалған бейне');visual.append(n);}
    else {visual.hidden=true;credit.hidden=true;}
    story?.classList.toggle('cine-has-visual',!visual.hidden);
  }};
  const loading=document.getElementById('loading');if(loading){loading.classList.add('cine-loading');loading.style.setProperty('--cine-scene',`url("${scene}")`);}
  document.querySelectorAll('.feature img').forEach(img=>{if(episodeId!=='1465'){img.src=scene;img.alt='Кезеңнің кино стиліндегі көркем реконструкциясы';}});
  document.querySelectorAll('.feature-tag').forEach(n=>{n.textContent='КИНО СТИЛІ · КӨРКЕМ БЕЙНЕ';});
  document.querySelector('#game')?.classList.add('cine-game');
  const gallery=make('dialog',null,'cine-gallery');gallery.setAttribute('aria-labelledby','cine-gallery-title');
  const header=make('header'),title=make('h2','Дала әлемі · көркем бейнелер');title.id='cine-gallery-title';
  const close=make('button','Жабу ×');close.type='button';close.onclick=()=>gallery.close();header.append(title,close);
  const intro=make('p','Адамдар, жер көріністері мен тұрмыс бұйымдары — жасанды интеллектпен жасалған көркем реконструкциялар. Тарихи тұлғалардың нақты кескіні ретінде ұсынылмайды. 3D ойында Blender модельдері қолданылады.','cine-explanation');
  const tabs=make('div',null,'cine-tabs'),content=make('div',null,'cine-gallery-grid');tabs.setAttribute('aria-label','Көркем бейне түрлері');
  const render=type=>{
    for(const b of tabs.children)b.setAttribute('aria-pressed',String(b.dataset.type===type));content.replaceChildren();
    if(type==='places'){
      for(const [file,name] of [['camp.jpg','Қозыбасы · қоныс'],['orbulak.jpg','Орбұлақ · шатқал'],['karatau.jpg','Қаратау · көш жолы']]){const f=make('figure'),img=make('img');img.src=asset(file);img.alt=name+' · көркем реконструкция';img.loading='lazy';f.append(img,make('figcaption',name));content.append(f);}
    }else{const data=type==='people'?portraits:objects;data.forEach(([name,desc],index)=>{const f=make('figure'),image=sprite(type==='people'?'portraits.jpg':'objects.jpg',index,type==='people'?'cine-cast':'cine-prop');image.setAttribute('aria-label',name+' · көркем бейне');f.append(image,make('figcaption',name),make('small',desc));content.append(f);});}
  };
  for(const [type,label] of [['places','Дала мен қоныс'],['people','Кейіпкерлер'],['objects','Тұрмыс бұйымдары']]){const b=make('button',label);b.type='button';b.dataset.type=type;b.onclick=()=>render(type);tabs.append(b);}
  gallery.append(header,intro,tabs,content);document.body.append(gallery);
  const open=()=>{render('places');gallery.showModal();};
  const tools=document.querySelector('.game-tools');if(tools && episodeId!=='1465'){const camera=make('button','Жақын камера');camera.type='button';camera.setAttribute('aria-pressed','false');camera.onclick=()=>{const game=document.getElementById('game'),on=game.dataset.closeCamera!=='true';game.dataset.closeCamera=String(on);camera.setAttribute('aria-pressed',String(on));camera.textContent=on?'Алыс камера':'Жақын камера';};tools.prepend(camera);}
  if(tools){const b=make('button','Дала әлемі');b.type='button';b.onclick=open;tools.prepend(b);}
  const games=document.getElementById('games');if(games){
    const card=make('section',null,'cine-world-card');const copy=make('div');copy.append(make('small','КИНО СТИЛІНДЕГІ КӨРКЕМ ӘЛЕМ'),make('h3','Даланы жақыннан таны'),make('p','3 жер көрінісі · 6 кейіпкер бейнесі · 6 тұрмыс бөлшегі'));const b=make('button','Бейнелерді қарау →');b.type='button';b.onclick=open;copy.append(b);card.append(copy);(games.querySelector('.catalog-head') || games.firstElementChild)?.after(card);
    for(const entry of games.querySelectorAll('.featured-game')){if(entry.textContent.includes('1643'))entry.style.setProperty('--scene',`url("${asset('small/orbulak.jpg')}")`);if(entry.textContent.includes('1723'))entry.style.setProperty('--scene',`url("${asset('small/karatau.jpg')}")`);}
  }
  gallery.addEventListener('close',()=>{document.querySelector('#game[open] #close')?.focus();});
})();
