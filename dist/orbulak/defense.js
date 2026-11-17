"use strict";

const orbulakDefense = (() => {
  const positions = [
    {x:.8,z:-9.86,name:"Ордың орта тұсы",count:4},
    {x:-3.3,z:-9.24,name:"Ордың сол қапталы",count:5},
    {x:4.5,z:-10.67,name:"Ордың оң қапталы",count:6}
  ];
  const tactics={
    balanced:{name:"Теңгерімді",range:14,reload:1.25,description:"14 м · оқтау 1,25 с. Қашықтық пен қарқын тең."},
    swift:{name:"Шапшаң атыс",range:11,reload:.9,description:"11 м · оқтау 0,9 с. Жақыннан жылдам ат, бірақ жауды жақын жібересің."},
    marksman:{name:"Алыстан көздеу",range:17,reload:1.7,description:"17 м · оқтау 1,7 с. Ерте ат, бірақ қайта оқтауға көбірек уақыт керек."}
  };
  const objectives=[
    {title:"Шепті бүтін сақта",hint:"Бірде-бір аттыны шепке жеткізбей жең. +200 ұпай."},
    {title:"Жүйрікті алдымен тоқтат",hint:"⚡ белгісі бар аттыны бірінші болып шегіндір. +200 ұпай."},
    {title:"Оқтау шебері",hint:"Осы шепте екі рет жасыл аралықта жылдам оқта. +200 ұпай."}
  ];
  let reports=[],perfects=0,firstHit=null;
  let tactic="balanced";
  const reloadTime=()=>tactics[tactic].reload;
  const range=()=>tactics[tactic].range;
  const required = () => positions[step].count - 1;
  const modes={easy:{name:"Үйренуші",speed:.72},normal:{name:"Сарбаз",speed:1},hard:{name:"Батыр",speed:1.27}};
  let mode="normal", score=0, hits=0, shots=0, combo=0, bestCombo=0, support=1, slow=0, precision=false, waveStart=null;
  const patterns=["Алдыңғы шеп · жақын нысананы тоқтат","Сол қаптал · айналып өтуді тоқтат","Соңғы шабуыл · жүйрік аттыларды көзде"];
  let step, elapsed, state, enemies, shot, reload, powder, loaded, integrity, selected, message, pause, repelled;
  const position = () => positions[step];
  function reset(savedStep = 0, keep = false) {
    if(!keep) {score=hits=shots=combo=bestCombo=0;waveStart=null;tactic="balanced";reports=[];}
    support=1;slow=0;precision=false;perfects=0;firstHit=null;
    step = Math.max(0,Math.min(positions.length-1,Number.isInteger(savedStep) ? savedStep : 0));
    elapsed = pause = reload = repelled = 0;
    state = "position";
    enemies = [];
    shot = null;
    powder = position().count;
    loaded = true;
    integrity = 3;
    selected = null;
    message = "";
  }
  function brace() {
    const point = position();
    enemies = Array.from({length:point.count},(_,id) => {
      const column = id%3-1, row = Math.floor(id/3);
      return {id,x:point.x*.75+column*1.42,z:-25.2-row*2.24-(id%3)*.55,
        fast:id===point.count-1,speed:(.91+id%3*.10+step*.12)*(id===point.count-1?1.35:1)*modes[mode].speed,status:"advance",heading:0,gait:0};
    });
    state = "fight";
    waveStart={score,hits,shots,bestCombo};
    message = patterns[step];
    selected = 0;
  }
  function fail(reason = "Шеп бұзылды. Қайта бекініп, алдыңғы аттыларды тоқтат.") {
    state = "failed";
    message = reason;
  }
  function update(delta, player, advanceStep) {
    if (shot) {
      shot.age += delta;
      if (shot.age > 1.32) shot = null;
    }
    if (state === "cleared") {
      pause -= delta;
      if (pause <= 0) {
        if (step === positions.length-1) {
          state = "done";
          try {const key="dala-orbulak-best-"+mode;const best=Number(localStorage.getItem(key))||0;if(score>best)localStorage.setItem(key,String(score));}catch{}
          advanceStep(true);
        } else {
          reset(step+1,true);
          advanceStep(false);
        }
      }
    }
    if (state !== "fight" && state !== "cleared") return;
    elapsed += delta;
    slow=Math.max(0,slow-delta);
    const point = position();
    if (state === "fight" && Math.hypot(player.x-point.x,player.z-point.z)>1.75) {
      fail();
      return;
    }
    if (reload > 0) {
      reload = Math.max(0,reload-delta);
      if (!reload) {
        loaded = true;
        message = "Мылтық оқталды.";
      }
    }
    for (const actor of enemies) {
      if (actor.status === "past") continue;
      actor.gait = Math.sin(elapsed*10+actor.id*1.65);
      if (actor.status === "retreat") {
        actor.z -= delta*2.5;
        actor.x += delta*(actor.id%2 ? .72 : -.72);
        actor.heading = Math.PI;
      } else {
        actor.z += delta*actor.speed*(slow>0?.35:1);
        actor.x += Math.sin(elapsed*1.35+actor.id)*delta*.22;
        if(step===1) actor.x+=(point.x-actor.x)*delta*.12;
        if (actor.z >= point.z-2.15) {
          actor.status = "past";
          integrity--;
          combo=0;
          message = "Бір атты шепке жетті!";
        }
      }
    }
    if (integrity <= 0 || (state === "fight" && repelled+enemies.filter((actor)=>actor.status==="advance").length < required())) {
      fail();
      return;
    }
    if (selected !== null && !enemies.some((actor)=>actor.id===selected && actor.status==="advance")) cycleTarget();
  }
  function aim(id) {
    if (state !== "fight" || !enemies.some((actor)=>actor.id===id && actor.status==="advance")) return;
    selected = id;
  }
  function cycleTarget() {
    const active = enemies.filter((actor)=>actor.status==="advance");
    if (!active.length) {
      selected = null;
      return;
    }
    const index = active.findIndex((actor)=>actor.id===selected);
    selected = active[(index+1)%active.length].id;
  }
  function reloadWeapon() {
    if(state!=="fight" || loaded) return;
    if(reload>0) {
      if(!precision) {
        precision=true;
        if(reload/reloadTime()>=.36 && reload/reloadTime()<=.64) {reload=.08;score+=25;perfects++;message="Дәл уақыт! Жылдам оқтау · +25";}
        else message="Асықпа: келесіде жасыл аралықта бас.";
      }
      return;
    }
    if(!powder)return;
    precision=false;
    powder--;
    reload = reloadTime();
    message = "Қайта оқтап жатырсың…";
  }
  function action(player) {
    if (state === "failed") {
      if(waveStart) {score=waveStart.score;hits=waveStart.hits;shots=waveStart.shots;bestCombo=waveStart.bestCombo;}
      combo=0;
      reset(step,true);
      brace();
      return;
    }
    if (state === "position") {
      brace();
      return;
    }
    if (state !== "fight" || reload) return;
    if (!loaded) {
      reloadWeapon();
      return;
    }
    const target = enemies.find((actor)=>actor.id===selected && actor.status==="advance");
    if (!target) return;
    const distance = Math.hypot(target.x-player.x,target.z-player.z);
    loaded = false;
    shots++;
    shot = {x:player.x,z:player.z,dx:(target.x-player.x)/distance,dz:(target.z-player.z)/distance,age:0};
    if (distance > range()) {
      combo=0;
      message = "Оқ жетпеді. Аттылар жақындағанша күт.";
      if (powder + repelled < required()) fail("Оқ қоры жетпейді. Шепті қайталап, атты жақындағанда ат.");
      return "shot";
    }
    target.status = "retreat";
    if(firstHit===null)firstHit=target.id;
    repelled++;
    hits++;combo++;bestCombo=Math.max(combo,bestCombo);score+=100+Math.min(combo-1,4)*25;
    if (repelled === required()) {
      state = "cleared";
      pause = 2.2;
      score+=integrity*50;
      const earned=step===0?integrity===3:step===1?firstHit===position().count-1:perfects>=2;
      if(earned)score+=200;
      reports.push({step,name:position().name,tactic:tactics[tactic].name,earned,objective:objectives[step].title,
        accuracy:Math.round((hits-waveStart.hits)/Math.max(1,shots-waveStart.shots)*100),
        integrity,perfects,score:score-waveStart.score});
      for (const actor of enemies) if (actor.status==="advance") actor.status="retreat";
      message = "Жасақ шегінді. Шеп ұсталды.";
    } else {
      message = `Дәл тиді! Қатарынан ${combo} · +${100+Math.min(combo-1,4)*25} ұпай`;
      cycleTarget();
    }
    return "shot";
  }
  function goal(player) {
    const point = position();
    const target = enemies.find((actor)=>actor.id===selected && actor.status==="advance");
    const distance = target ? Math.hypot(target.x-player.x,target.z-player.z) : null;
    const active=enemies.filter(a=>a.status==="advance");
    const closest=active.length?Math.min(...active.map(a=>Math.hypot(a.x-point.x,a.z-point.z))):null;
    const danger=state==="fight"&&closest!==null&&closest<7;
    const ready = state==="fight" && loaded && distance !== null && distance<=range();
    const action = state==="position" ? "Бекіну" : state==="failed" ? "Шепті қайталау" :
      reload ? "Оқталып жатыр" : loaded ? "Ату" : "Оқтау";
    const hint = ready ? "Нысана атыс қашықтығында" : distance!==null && loaded ? "Нысана жақындағанша күт" : "";
    return {...point,person:point.name,role:"Қорғаныс шебі",height:1.68,radius:1.75,symbol:"⚑",
      task:`Шепті қорға · ${step+1} / ${positions.length}`,action,ready,hint,message,state,
      objective:objectives[step],objectiveProgress:step===0?(integrity===3?"Әзірге шеп бүтін":"Бір атты өтті"):step===1?(firstHit===null?"Бірінші нысананы таңда":firstHit===position().count-1?"Шарт орындалды":"Бірінші нысана жүйрік болмады"):`${perfects} / 2 жылдам оқтау`,tactic,tacticInfo:tactics[tactic],reloadDuration:reloadTime(),closest,danger,integrity,powder,loaded,reload,selected,target,distance,repelled,score,combo,support,slow,precision,pattern:patterns[step],required:required(),
      blocked:state==="cleared" || state==="done" || reload>0};
  }
  function actors() {
    return enemies.filter((actor)=>actor.status!=="past" && actor.z>-32);
  }
  function puffs() {
    if (!shot) return [];
    const {x,z,dx,dz,age}=shot;
    const smoke = Array.from({length:8},(_,i)=>({
      x:x+dx*(1.2+age*(.7+i*.12))+(i-3.5)*.09+age*.28,
      y:1.03+age*(.50+i*.05),z:z+dz*(1.2+age*(.7+i*.12)),
      size:.13+age*(.36+i*.02),
      opacity:Math.max(0,(1-age/1.32)*(.53-i*.035))
    }));
    if (age<.11) smoke.unshift({x:x+dx*1.25,y:1.06,z:z+dz*1.25,size:.24+age,opacity:1-age*7,flash:true});
    return smoke;
  }
  function callSupport() {
    if(state!=="fight" || !support)return;
    support=0;slow=4;message="Жасақ көмегі! Аттылар 4 секундқа баяулады.";
  }
  function setTactic(value) {
    if((state==="position" || state==="failed") && tactics[value]) {tactic=value;message=tactics[value].description;}
  }
  function aimNearest() {
    if(state!=="fight")return;
    const point=position();
    const active=enemies.filter(a=>a.status==="advance").sort((a,b)=>Math.hypot(a.x-point.x,a.z-point.z)-Math.hypot(b.x-point.x,b.z-point.z));
    if(active.length)selected=active[0].id;
  }
  function setMode(value) {if(modes[value] && state!=="fight")mode=value;}
  function summary() {
    const medal=score>=2200?"Алтын белгі":score>=1600?"Күміс белгі":"Қола белгі";
    let record=score;try{record=Math.max(score,Number(localStorage.getItem("dala-orbulak-best-"+mode))||0);}catch{}
    return `Үздік нәтиже: ${record}. ${medal} · ${modes[mode].name} · ${score} ұпай. Дәлдік: ${shots?Math.round(hits/shots*100):0}%. Үздік қатар: ${bestCombo}.`;
  }
  reset();
  return {reports:()=>reports.map(r=>({...r})),setTactic,aimNearest,callSupport,setMode,summary,reset,update,action,goal,actors,puffs,aim,cycleTarget,reloadWeapon,positions,step:()=>step};
})();

function defenseMeshes(player, traveler) {
  function block(vertices,x,y,z,w,h,d,color) {
    const points=[
      [x-w/2,y-h/2,z-d/2],[x+w/2,y-h/2,z-d/2],[x+w/2,y+h/2,z-d/2],[x-w/2,y+h/2,z-d/2],
      [x-w/2,y-h/2,z+d/2],[x+w/2,y-h/2,z+d/2],[x+w/2,y+h/2,z+d/2],[x-w/2,y+h/2,z+d/2]
    ];
    const faces=[[0,1,2,3],[5,4,7,6],[4,0,3,7],[1,5,6,2],[3,2,6,7],[4,5,1,0]];
    for (const [face,[a,b,c,d]] of faces.entries()) {
      const light=[.68,.77,.83,.72,1,.51][face];
      for (const vertex of [a,b,c,a,c,d]) vertices.push(...points[vertex],...color.map((v)=>v*light),0);
    }
  }
  const defender=Array.from(player);
  const rider=Array.from(traveler);
  for(let i=0;i<rider.length;i+=7) {
    const kind=Math.abs(rider[i+6]);
    if(kind===10) {
      rider[i]*=2.2;
      rider[i+2]-=.14+(1-rider[i+1])*.16;
    }
    rider[i+1]=rider[i+1]*.81-.22;
    rider[i+3]*=.72;
    rider[i+4]*=.69;
    rider[i+5]*=.64;
    if(kind<1000)rider[i+6]=0;
  }
  for(let i=0;i<6;i++) {
    block(defender,0,.81+i*.075,.167,.405-i*.013,.066,.052,[.24,.245,.218]);
  }
  block(defender,.29,.91,.33,.085,.096,.60,[.26,.14,.058]);
  block(defender,.29,.977,.74,.040,.039,.88,[.17,.19,.175]);
  block(defender,.29,.95,.10,.108,.116,.22,[.22,.115,.044]);
  block(defender,.263,1.01,.37,.028,.086,.058,[.21,.203,.15]);
  block(defender,.266,1.054,.39,.024,.021,.031,[.70,.36,.12]);
  const smoke=[], flash=[];
  const faces=[[0,1,2],[0,2,3],[0,3,4],[0,4,1],[5,2,1],[5,3,2],[5,4,3],[5,1,4]];
  const points=[[0,.88,0],[.83,0,0],[0,0,.81],[-.83,0,0],[0,0,-.81],[0,-.88,0]];
  for (const face of faces) for (const i of face) {
    smoke.push(...points[i],.65,.65,.59,0);
    flash.push(...points[i],1,.75,.24,0);
  }
  return {defender,rider,smoke,flash};
}
