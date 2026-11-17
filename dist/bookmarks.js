"use strict";
(() => {
  const key='dala-bookmarks-v1', chapters=new Map(HISTORY_CHAPTERS.map(c=>[c.id,c]));
  const make=(tag,text)=>{const n=document.createElement(tag);if(text)n.textContent=text;return n;};
  const read=()=>{try{const v=JSON.parse(localStorage.getItem(key));return new Set(Array.isArray(v)?v.filter(id=>chapters.has(id)):[]);}catch{return new Set();}};
  let saved=read();
  const shelf=make('details');shelf.className='saved-topics';shelf.id='saved-topics';
  const heading=make('summary');const body=make('div');body.className='saved-topics-body';
  const list=make('ul');const note=make('p','Белгілер осы браузерде сақталады. Тақырыпты төмендегі «Тарихи деректер» бөлімінен таңда.');
  const status=make('p');status.setAttribute('role','status');
  body.append(note,list,status);shelf.append(heading,body);document.getElementById('campaign').after(shelf);
  const picker=document.getElementById('fact-topic');const toggle=make('button');toggle.type='button';toggle.className='trial-button bookmark-toggle';picker.after(toggle);
  const persist=()=>{try{localStorage.setItem(key,JSON.stringify([...saved]));return true;}catch{status.textContent='Браузер сақтауға рұқсат бермеді. Белгілер бет жабылғанша ғана қалады.';shelf.open=true;return false;}};
  const render=()=>{
    heading.textContent=`★ Сақталған тақырыптар · ${saved.size}`;
    list.replaceChildren();
    for(const id of saved){const c=chapters.get(id),li=make('li'),a=make('a',`${c.date} · ${c.title}`),remove=make('button','×');a.href='#history-'+id;remove.type='button';remove.setAttribute('aria-label',`${c.title} · сақталғаннан алып тастау`);remove.onclick=()=>{saved.delete(id);const ok=persist();render();if(ok)status.textContent='Тақырып сақталғандардан алынды.';heading.focus();};li.append(a,remove);list.append(li);}
    if(!saved.size)list.append(make('li','Әзірге сақталған тақырып жоқ.'));
    const active=saved.has(picker.value);toggle.textContent=active?'★ Сақталған · алып тастау':'☆ Осы тақырыпты сақтау';toggle.setAttribute('aria-pressed',String(active));
  };
  toggle.onclick=()=>{const id=picker.value;if(!chapters.has(id))return;if(saved.has(id))saved.delete(id);else saved.add(id);const ok=persist();render();if(ok)status.textContent='Сақталған тақырыптар жаңартылды.';};
  new MutationObserver(render).observe(document.getElementById('fact-panel'),{childList:true,subtree:true});
  picker.addEventListener('change',render);window.addEventListener('storage',e=>{if(e.key===key||e.key===null){saved=read();render();}});
  document.addEventListener('dala:chapter-open',render);render();
  const news=make('a','Жаңартылған Орбұлақ: тактика, қосымша мақсаттар және шайқас қорытындысы →');news.href='orbulak/?v=6';news.className='game-update-link';document.querySelector('#games .catalog-head').after(news);
})();
