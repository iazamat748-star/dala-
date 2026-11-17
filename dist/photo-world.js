"use strict";
(() => {
 const game=document.getElementById('game'),loading=document.getElementById('loading');
 loading.classList.add('photo-loading');
 const note=document.createElement('small');note.textContent='Көркем реконструкция · Blender 3D қонысы жүктелуде';loading.append(note);
 const camera=document.createElement('button');camera.type='button';camera.textContent='Artima kamera';camera.textContent='Жақын камера';camera.setAttribute('aria-pressed','false');camera.onclick=()=>{const on=game.dataset.closeCamera!=='true';game.dataset.closeCamera=String(on);camera.setAttribute('aria-pressed',String(on));camera.textContent=on?'Алыс камера':'Жақын камера';};document.querySelector('.game-tools').prepend(camera);
 const button=document.createElement('button');button.type='button';button.textContent='Қоныс бейнесі';document.querySelector('.game-tools').prepend(button);
 const dialog=document.createElement('dialog');dialog.className='photo-reference';dialog.setAttribute('aria-labelledby','photo-reference-title');
 const title=document.createElement('h2');title.id='photo-reference-title';title.textContent='Дала қонысын елестет';
 const image=document.createElement('img');image.loading='lazy';image.decoding='async';image.src='assets/steppe-reconstruction.jpg';image.alt='Киіз үйлер, жылқылар және таулы даладағы адамдар бейнеленген көркем реконструкция';
 const text=document.createElement('p');text.textContent='Бұл сурет жасанды интеллектпен жасалған көркем реконструкция. Ойналатын қоныс Blender модельдерінен құрастырылған. Суреттегі адамдар мен заттар тарихи құжаттың көшірмесі емес.';
 const close=document.createElement('button');close.type='button';close.textContent='3D ойынға оралу';close.onclick=()=>dialog.close();dialog.append(title,image,text,close);document.body.append(dialog);
 button.onclick=()=>{if(game.open)dialog.showModal();};
 if(!document.querySelector('#home .photo-caption')){const caption=document.createElement('p');caption.className='photo-caption';caption.textContent='Мұқаба — көркем реконструкция. Ішінде — ойналатын Blender 3D қонысы.';document.querySelector('#home .feature').after(caption);}
})();
