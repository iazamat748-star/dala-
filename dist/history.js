"use strict";

(() => {
  const find=(id)=>document.getElementById(id);
  const atlas=find("atlas");
  const dialog=find("history-mission");
  const content=find("mission-work");
  const actions=find("mission-actions");
  const feedback=find("mission-feedback");
  const key="dala-murasy-history-v1";
  const byId=new Map(HISTORY_CHAPTERS.map((chapter)=>[chapter.id,chapter]));
  const eraById=new Map(HISTORY_ERAS.map((era)=>[era[0],era]));
  const chapters=HISTORY_ERAS.flatMap(([id])=>HISTORY_CHAPTERS.filter((chapter)=>chapter.era===id));
  const storage=(name)=>{
    try {return JSON.parse(localStorage.getItem(name));}
    catch {return null;}
  };
  const saved=storage(key);
  const progress={};
  for(const chapter of chapters) {
    const value=saved?.[chapter.id];
    if(!chapter.href && Number.isInteger(value) && value>=1 && value<=3) progress[chapter.id]=value;
  }
  const gameKeys={qozybasy:"dala-murasy-qozybasy-v2",orbulak:"dala-murasy-1643-v1",karatau:"dala-murasy-1723-v1"};
  const played=new Set();
  let eraFilter="all", query="", current, origin, fromHash=false;
  let opened=new Set(), order=[], result="";
  const make=(tag,text,classes)=>{
    const node=document.createElement(tag);
    if(text) node.textContent=text;
    if(classes) node.className=classes;
    return node;
  };
  const button=(text,handler,classes="atlas-button")=>{
    const node=make("button",text,classes);
    node.type="button";
    node.addEventListener("click",handler);
    return node;
  };
  const completed=(chapter)=>progress[chapter.id]===3 || played.has(chapter.id);
  const refreshPlayed=()=>{
    for(const [id,name] of Object.entries(gameKeys)) {
      if(storage(name)?.chapterIndex===6) played.add(id);
    }
  };
  const checkpoint=(stage)=>{
    progress[current.id]=stage;
    try {localStorage.setItem(key,JSON.stringify(progress));} catch {}
    renderAtlas();
  };
  const normalize=(text)=>text.toLocaleLowerCase("kk").replace(/[–—.,·:]+/g," ").trim();

  function renderAtlas() {
    const eras=find("atlas-eras");
    const count=chapters.filter(completed).length;
    document.dispatchEvent(new Event("dala:progress"));
    find("atlas-progress-count").textContent=`${count} / ${chapters.length}`;
    find("atlas-progress").max=chapters.length;
    find("atlas-progress").value=count;
    const terms=normalize(query).split(/\s+/).filter(Boolean);
    const visible=chapters.filter((chapter)=>{
      if(eraFilter!=="all" && chapter.era!==eraFilter) return false;
      const text=normalize([chapter.date,chapter.title,chapter.brief,chapter.role,eraById.get(chapter.era)[1],
        ...(chapter.records?.flat() ?? [])].join(" "));
      return terms.every((term)=>text.includes(term));
    });
    find("atlas-results").textContent=visible.length ? `${visible.length} бөлім` : "Бөлім табылмады. Басқа жылды не атауды ізде.";
    eras.replaceChildren();
    for(const [id,title,detail,symbol] of HISTORY_ERAS) {
      const group=visible.filter((chapter)=>chapter.era===id);
      if(!group.length) continue;
      const section=make("section","","atlas-era");
      section.dataset.era=id;
      section.setAttribute("aria-label",title);
      const caption=make("div","","era-caption");
      caption.append(make("span",symbol,"era-emblem"),make("h3",title),make("p",detail));
      section.append(caption);
      const grid=make("div","","atlas-grid");
      for(const chapter of group) {
        const card=make("article","","atlas-card");
        const date=make("span",chapter.date,"atlas-date");
        const tag=make("span",completed(chapter) ? "✓ Аяқталды" : chapter.href ? "3D оқиға" : progress[chapter.id] ? "Жалғастыру" : "Тарихи тапсырма","atlas-tag");
        const meta=make("div","","atlas-card-meta");
        meta.append(date,tag);
        const heading=make("h4",chapter.title);
        const open=button(chapter.href ? "Оқиғаны ашу →" : "Тапсырманы ашу →",()=>openMission(chapter,open));
        open.setAttribute("aria-label",`${chapter.title} · ${chapter.href ? "оқиғаны ашу" : "тапсырманы ашу"}`);
        card.append(meta,heading,make("p",chapter.brief),open);
        grid.append(card);
      }
      section.append(grid);
      eras.append(section);
    }
  }
  for(const [id,title] of [["all","Барлығы"],...HISTORY_ERAS]) {
    const filter=button(title,()=>{
      eraFilter=id;
      for(const child of find("atlas-filters").children) child.setAttribute("aria-pressed",String(child===filter));
      renderAtlas();
    },"atlas-filter");
    filter.setAttribute("aria-pressed",String(id==="all"));
    filter.dataset.era=id;
    find("atlas-filters").append(filter);
  }
  document.addEventListener("dala:history-search",(event)=>{
    query=event.detail;
    find("atlas-query").value=query;
    eraFilter="all";
    for(const child of find("atlas-filters").children) child.setAttribute("aria-pressed",String(child.dataset.era==="all"));
    renderAtlas();
  });
  find("atlas-query").addEventListener("input",(event)=>{
    query=event.target.value;
    renderAtlas();
  });
  document.addEventListener("dala:story-complete",()=>{
    played.add("qozybasy");
    renderAtlas();
  });
  window.addEventListener("pageshow",()=>{refreshPlayed();renderAtlas();});

  function showFeedback(text="",good=false) {
    feedback.hidden=!text;
    feedback.textContent=text;
    feedback.classList.toggle("good",good);
  }
  function missionHash(chapter) {return "#history-"+chapter.id;}
  function openMission(chapter,trigger) {
    if(!chapter) return;
    current=chapter;
    try {localStorage.setItem("dala-murasy-last-chapter",chapter.id);} catch {}
    document.dispatchEvent(new CustomEvent("dala:chapter-open",{detail:chapter.id}));
    origin=trigger ?? origin;
    opened=new Set();
    order=[];
    result="";
    if(!dialog.open) dialog.showModal();
    history.replaceState(null,"",missionHash(chapter));
    showMission();
    find("mission-title").focus();
  }
  function showMission() {
    const chapter=current;
    dialog.dataset.era=chapter.era;
    find("mission-date").textContent=`${chapter.date} · ${eraById.get(chapter.era)[1]}`;
    find("mission-role").textContent=chapter.role;
    find("mission-title").textContent=chapter.title;
    find("mission-brief").textContent=chapter.brief;
    const links=find("mission-sources");
    links.replaceChildren();
    for(const source of [chapter.source,...(chapter.extra ?? [])]) {
      const [label,href]=HISTORY_SOURCES[source];
      const item=make("li");
      const link=make("a",label+" ↗");
      link.href=href;
      link.target="_blank";
      link.rel="noopener";
      item.append(link);
      links.append(item);
    }
    content.replaceChildren();
    actions.replaceChildren();
    showFeedback();
    if(chapter.href) {
      find("mission-stage").textContent="3D ОҚИҒА";
      if(chapter.id==="qozybasy") {
        actions.append(button("3D ойынды бастау",()=>{
          dialog.addEventListener("close",()=>document.querySelector("#entry [data-play]").click(),{once:true});
          dialog.close();
        },"atlas-primary"));
      } else {
        const link=make("a","3D ойынды ашу →","atlas-primary");
        link.href=chapter.href;
        actions.append(link);
      }
      return;
    }
    const stage=progress[chapter.id] ?? 0;
    find("mission-stage").textContent=[
      "01 / 03 · ДЕРЕКТЕРДІ АШ",
      "02 / 03 · ОҚИҒАЛАРДЫ РЕТТЕ",
      "03 / 03 · ШЕШІМ ҚАБЫЛДА",
      "✓ ТАПСЫРМА АЯҚТАЛДЫ"
    ][stage];
    if(stage===0) renderEvidence();
    if(stage===1) renderOrder();
    if(stage===2) renderDecision();
    if(stage===3) renderComplete();
  }
  function renderEvidence() {
    const list=make("div","","evidence-list");
    current.records.forEach(([date,title,fact],index)=>{
      const item=make("details","","evidence");
      const summary=make("summary",title);
      const details=make("div","","evidence-body");
      details.append(make("b",date),make("p",fact));
      item.append(summary,details);
      item.open=opened.has(index);
      item.addEventListener("toggle",()=>{
        if(item.open) opened.add(index);
        proceed.disabled=opened.size!==current.records.length;
        proceed.textContent=`Деректер ${opened.size} / ${current.records.length} · Жалғастыру`;
      });
      list.append(item);
    });
    content.append(list);
    const proceed=button(`Деректер ${opened.size} / ${current.records.length} · Жалғастыру`,()=>{
      if(opened.size!==current.records.length) return;
      checkpoint(1);
      showMission();
      find("mission-title").focus();
    },"atlas-primary");
    proceed.disabled=opened.size!==current.records.length;
    actions.append(proceed);
  }
  function renderOrder() {
    const note=current.overlap ? "Алғашқы деректі таңда. Үйсін мен Қаңлы туралы жазбалардың мерзімі қабаттасады, сондықтан оларды екі ретпен де қоюға болады." :
      "Үш жазбаны ертеректен кейінгіге қарай таңда.";
    content.append(make("p",note));
    const list=make("div","","order-list");
    const update=()=>{
      list.replaceChildren();
      for(const index of [2,0,1]) {
        const rank=order.indexOf(index);
        const choice=button((rank>=0 ? `${rank+1}. ` : "")+current.records[index][1],()=>{
          order.push(index);
          showFeedback();
          update();
          (list.querySelector("button:not(:disabled)") ?? check).focus();
        },"atlas-option");
        choice.disabled=rank>=0;
        choice.setAttribute("aria-pressed",String(rank>=0));
        list.append(choice);
      }
      check.disabled=order.length!==current.records.length;
      undo.disabled=!order.length;
    };
    const check=button("Ретін тексеру",()=>{
      const correct=current.overlap ? order[0]===0 : order.every((item,index)=>item===index);
      if(!correct) {
        showFeedback("Реті сәйкес келмеді. Мерзімдерді қайта қара немесе соңғы таңдауды алып таста.");
        return;
      }
      checkpoint(2);
      showMission();
      find("mission-title").focus();
    },"atlas-primary");
    const undo=button("Соңғысын алып тастау",()=>{order.pop();showFeedback();update();});
    const review=make("details","","evidence review");
    review.append(make("summary","Мерзімдерді еске түсіру"));
    const dates=make("ul");
    for(const [date,title] of current.records) dates.append(make("li",`${date} · ${title}`));
    review.append(dates);
    content.append(list,review);
    actions.append(undo,check);
    update();
  }
  function renderDecision() {
    content.append(make("h3",current.prompt));
    current.choices.forEach(([label,explanation],index)=>{
      const choice=button(label,()=>{
        if(index!==current.answer) {
          showFeedback(explanation+" Тағы бір рет таңда.");
          return;
        }
        result=explanation;
        checkpoint(3);
        showMission();
        find("mission-title").focus();
      },"atlas-option");
      content.append(choice);
    });
  }
  function renderComplete() {
    content.append(make("div",result || "Бұл тапсырма бұрын аяқталған.","mission-success"));
    const next=chapters[chapters.indexOf(current)+1];
    if(next) actions.append(button("Келесі бөлім →",()=>openMission(next),"atlas-primary"));
    actions.append(button("Картаға қайту",()=>dialog.close()));
  }

  find("mission-close").addEventListener("click",()=>dialog.close());
  dialog.addEventListener("close",()=>{
    if(location.hash!==missionHash(current) && location.hash!=="#atlas") {
      origin=null;
      return;
    }
    if(location.hash===missionHash(current)) history.replaceState(null,"","#atlas");
    if(origin?.isConnected) origin.focus();
    else atlas.scrollIntoView({block:"start"});
    origin=null;
  });
  const openFromHash=()=>{
    if(!location.hash.startsWith("#history-")) {
      if(dialog.open) dialog.close();
      return;
    }
    const chapter=byId.get(location.hash.slice(9));
    if(chapter) openMission(chapter);
    else if(dialog.open) dialog.close();
  };
  window.addEventListener("hashchange",openFromHash);
  refreshPlayed();
  renderAtlas();
  openFromHash();
})();
