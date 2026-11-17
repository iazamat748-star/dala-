"use strict";

const dwelling = {
  x: -4, z: -4, radius: 1.78,
  entrance: {x:-3.68,z:-1.39,height:1.34},
  spawn: {x:-3.86,z:-2.86},
  objects: [
    {id:"rug", name:"Текемет", x:-4, z:-3.78, height:.22, reach:.98,
      text:"Текемет — еденге төселетін өрнекті киіз. Оны қой жүнінен басқан. Шеберлер өрнекті түрлі түсті жүнмен салып, киізбен бірге нығыздаған."},
    {id:"chest", name:"Ағаш сандық", x:-4.92, z:-4.84, height:.86, reach:.96, solid:.45,
      text:"Ағаш сандыққа киім, мата және үйге қажет ұсақ бұйымдар салынған. Киіз үйде сандықты жерден көтеріп тұратын аласа жүкаяққа қойған."},
    {id:"flask", name:"Торсық", x:-2.85, z:-4.43, height:.74, reach:.87, solid:.35,
      text:"Торсық — иленген теріден жасалған ыдыс. Оған қымыз сияқты сусын құйып, бауымен іліп алып жолға шыққан."}
  ]
};

function createCampMap(map, yurts, scout, camp, showDwelling = true) {
  const namespace = "http://www.w3.org/2000/svg";
  const pin = (name, attrs) => {
    const element = document.createElementNS(namespace, name);
    for (const [attribute,value] of Object.entries(attrs)) element.setAttribute(attribute,value);
    return element;
  };
  const roads = pin("g", {class:"map-roads"});
  const escortLine = pin("polyline", {});
  roads.append(pin("polyline", {points:scout.map((point) => point.join(",")).join(" ")}),escortLine);
  const riverPoints = Array.from({length:49}, (_,i) => {
    const z = -24+i;
    return `${15-3*Math.sin(z*.11)},${z}`;
  }).join(" ");
  const river = pin("polyline",{class:"map-river",points:riverPoints});
  const tents = pin("g",{class:"map-tents"});
  for (const [x,z,radius] of yurts) tents.append(pin("circle",{cx:x,cy:z,r:radius}));
  const house = pin("circle",{class:"map-house",cx:dwelling.x,cy:dwelling.z,r:2.12});
  const caravan = pin("circle",{class:"map-caravan",r:1});
  const objective = pin("circle",{class:"map-objective",r:1.35});
  const player = pin("path",{class:"map-player",d:"M 0,-1.9 L 1.15,1.2 L 0,.68 L -1.15,1.2 Z"});
  map.append(river,roads,tents);
  if (showDwelling) map.append(house);
  map.append(caravan,objective,player);
  const locate = (element, target) => {
    element.setAttribute("cx",target.x);
    element.setAttribute("cy",target.z);
  };
  let previousRoute;
  return (position, yaw, goal, escortPosition, route) => {
    if (previousRoute !== route) {
      escortLine.setAttribute("points",[[camp.x,camp.z],...route].map((point) => point.join(",")).join(" "));
      previousRoute = route;
    }
    player.setAttribute("transform",`translate(${position.x} ${position.z}) rotate(${-yaw*180/Math.PI})`);
    objective.style.display = goal ? "" : "none";
    if (goal) locate(objective,goal);
    caravan.style.display = escortPosition ? "" : "none";
    if (escortPosition) locate(caravan,escortPosition);
  };
}
