"use strict";
(() => {
  const games=document.getElementById('games');
  const grid=document.createElement('div');grid.className='featured-games';
  const entries=[...games.querySelectorAll(':scope > .entry')];
  if(entries.length){entries[0].before(grid);entries.forEach((entry,i)=>{entry.classList.add('featured-game');entry.style.setProperty('--scene',`url("${['assets/steppe-reconstruction-640.jpg','orbulak/orbulak.jpg','karatau/karatau.jpg'][i]}")`);grid.append(entry);});}
  if(!document.querySelector('.portal-stats')){const stats=document.createElement('div');stats.className='portal-stats';for(const [number,label] of [['6','тарихи дәуір'],['26','оқу тақырыбы'],['3','3D ойын']]){const item=document.createElement('div'),strong=document.createElement('strong'),small=document.createElement('span');strong.textContent=number;small.textContent=label;item.append(strong,small);stats.append(item);}document.getElementById('home').after(stats);}
  if(!document.querySelector('.portal-start')){const jump=document.createElement('a');jump.href='#games';jump.className='portal-start';jump.textContent='Ойынды таңда →';document.querySelector('.intro .lead').after(jump);}
  const launches=document.querySelector('.story-launchers');if(launches){const details=document.createElement('details');details.className='story-intros';const summary=document.createElement('summary');summary.textContent='Сюжеттік кіріспелерді көру';launches.before(details);details.append(summary,launches);games.append(details);}
})();
