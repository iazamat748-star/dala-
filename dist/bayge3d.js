// Дала мұрасы · бәйге: даладағы 3D ат жарысы. Аттар мен шабандоздар кодпен құрылады.
import * as THREE from "three";

const LENGTH = 320;           // жарыс қашықтығы
const LANES = 6, LANE_W = 2.4;
const HORSES = [
  ["Тайбурыл", 0x6b3d1f, "Қобыланды батырдың тұлпары"],
  ["Байшұбар", 0xb08a64, "Алпамыс батырдың аты"],
  ["Тарлан", 0x8f8f8f, ""],
  ["Ақбоз", 0xe8e2d6, ""],
  ["Көкбесті", 0x4a4f57, ""],
  ["Күреңше", 0x8a3b1c, ""]
];
const SHIRTS = [0xa2322b, 0x1d6f82, 0xd9a136, 0x2f6d58, 0x7a5aa6, 0x14324c];

function softwareGL() {
  try {
    const gl = document.createElement("canvas").getContext("webgl");
    const ext = gl && gl.getExtension("WEBGL_debug_renderer_info");
    return !gl || /swiftshader|llvmpipe|software/i.test(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "");
  } catch { return true; }
}
function tex(w, h, draw, repeat) {
  const c = document.createElement("canvas"); c.width = w; c.height = h; draw(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...repeat); }
  return t;
}

// Ат: дене, мойын, бас, төрт аяқ (жамбастан бүгіледі), құйрық, жал және шабандоз
function makeHorse(color, shirt) {
  const g = new THREE.Group();
  const coat = new THREE.MeshStandardMaterial({color, roughness: .55});
  const dark = new THREE.MeshStandardMaterial({color: 0x1d140e, roughness: .8});
  const body = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), coat);
  body.scale.set(1.05, .5, .42); body.position.y = 1.55; g.add(body);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(.2, .32, 1.05, 12), coat);
  neck.position.set(.95, 2.05, 0); neck.rotation.z = -.75; g.add(neck);
  const head = new THREE.Mesh(new THREE.BoxGeometry(.72, .28, .26), coat);
  head.position.set(1.42, 2.42, 0); head.rotation.z = -.55; g.add(head);
  const mane = new THREE.Mesh(new THREE.BoxGeometry(.9, .14, .06), dark);
  mane.position.set(.86, 2.25, 0); mane.rotation.z = -.75; g.add(mane);
  const tail = new THREE.Mesh(new THREE.CylinderGeometry(.03, .12, .9, 8), dark);
  tail.position.set(-1.2, 1.35, 0); tail.rotation.z = -.5; g.add(tail);
  const legs = [];
  [[.7, .2], [.7, -.2], [-.7, .2], [-.7, -.2]].forEach(([x, z], i) => {
    const hip = new THREE.Group(); hip.position.set(x, 1.4, z);
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(.09, .07, 1.25, 8), coat); leg.position.y = -.62;
    const hoof = new THREE.Mesh(new THREE.CylinderGeometry(.09, .11, .12, 8), dark); hoof.position.y = -1.25;
    hip.add(leg, hoof); g.add(hip); legs.push({hip, phase: [0, .5, .25, .75][i]});
  });
  // шабандоз
  const rider = new THREE.Group();
  const shirtMat = new THREE.MeshStandardMaterial({color: shirt, roughness: .7});
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(.2, .26, .7, 10), shirtMat); torso.position.y = .35; torso.rotation.z = -.5;
  const headR = new THREE.Mesh(new THREE.SphereGeometry(.16, 12, 10), new THREE.MeshStandardMaterial({color: 0xc99872, roughness: .7})); headR.position.set(.25, .78, 0);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(.17, .22, 10), shirtMat); cap.position.set(.25, .95, 0);
  const thigh = new THREE.Mesh(new THREE.CylinderGeometry(.08, .08, .5, 8), new THREE.MeshStandardMaterial({color: 0x2a2a2a})); thigh.position.set(.05, .05, .3); thigh.rotation.x = .5;
  const thigh2 = thigh.clone(); thigh2.position.z = -.3; thigh2.rotation.x = -.5;
  rider.add(torso, headR, cap, thigh, thigh2); rider.position.set(.05, 2.0, 0); g.add(rider);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return {group: g, legs, rider, body, neck, head};
}

export function start({canvas, hud, msg, tools, btn, finish, unlock, toast, rhythm}) {
  const soft = softwareGL();
  const renderer = new THREE.WebGLRenderer({canvas, antialias: !soft});
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, soft ? 1 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = !soft;
  const scene = new THREE.Scene();
  scene.background = tex(4, 256, (g) => { const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, "#4f8db5"); gr.addColorStop(.6, "#a8cfe0"); gr.addColorStop(1, "#efe2c4"); g.fillStyle = gr; g.fillRect(0, 0, 4, 256); });
  scene.fog = new THREE.Fog(0xd8d6c0, 60, 230);
  const camera = new THREE.PerspectiveCamera(50, 1, .1, 500);
  scene.add(new THREE.HemisphereLight(0xe6f2ff, 0x7d6a43, 1.1));
  const sun = new THREE.DirectionalLight(0xfff1d8, 2.1); sun.position.set(30, 50, 20); sun.castShadow = !soft;
  sun.shadow.mapSize.set(1024, 1024); Object.assign(sun.shadow.camera, {left: -20, right: 20, top: 20, bottom: -20, far: 120});
  scene.add(sun, sun.target);

  // Дала: шөп, жол, белгі бағаналар, мәре қақпасы, алыстағы таулар мен киіз үйлер
  const grass = tex(512, 512, (g) => {
    g.fillStyle = "#a6a35f"; g.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 14000; i++) { g.fillStyle = `hsla(${50 + Math.random() * 30},${30 + Math.random() * 25}%,${35 + Math.random() * 25}%,.5)`; g.fillRect(Math.random() * 512, Math.random() * 512, 1.5, 3 + Math.random() * 3); }
  }, [60, 60]);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(800, 800), new THREE.MeshStandardMaterial({map: grass, roughness: 1}));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
  const dirt = tex(256, 256, (g) => { g.fillStyle = "#b8986c"; g.fillRect(0, 0, 256, 256); for (let i = 0; i < 4000; i++) { g.fillStyle = `rgba(${90 + Math.random() * 60},${70 + Math.random() * 40},40,.35)`; g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2); } }, [3, 80]);
  const track = new THREE.Mesh(new THREE.PlaneGeometry(LANES * LANE_W + 2, LENGTH + 60), new THREE.MeshStandardMaterial({map: dirt, roughness: 1}));
  track.rotation.x = -Math.PI / 2; track.position.set(0, .01, -(LENGTH / 2)); track.receiveShadow = true; scene.add(track);
  const postMat = new THREE.MeshStandardMaterial({color: 0xf3ead8}), redMat = new THREE.MeshStandardMaterial({color: 0xa2322b});
  for (let z = 0; z <= LENGTH; z += 20) for (const side of [-1, 1]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(.08, .08, 1.3, 6), z % 100 === 0 ? redMat : postMat);
    p.position.set(side * (LANES * LANE_W / 2 + 1.4), .65, -z); scene.add(p);
  }
  const gate = new THREE.Group();
  const pillarL = new THREE.Mesh(new THREE.BoxGeometry(.5, 6, .5), redMat), pillarR = pillarL.clone();
  pillarL.position.set(-(LANES * LANE_W / 2 + 1.5), 3, 0); pillarR.position.x = -pillarL.position.x;
  const banner = new THREE.Mesh(new THREE.BoxGeometry(LANES * LANE_W + 3.5, 1.1, .2), new THREE.MeshStandardMaterial({map: tex(1024, 96, (g, w, h) => {
    g.fillStyle = "#14324c"; g.fillRect(0, 0, w, h); g.fillStyle = "#d9a136"; g.font = "bold 58px Philosopher, sans-serif"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("МӘРЕ", w / 2, h / 2 + 3);
    g.strokeStyle = "#d9a136"; g.lineWidth = 4; g.strokeRect(8, 8, w - 16, h - 16);
  })}));
  banner.position.y = 5.6; gate.add(pillarL, pillarR, banner); gate.position.z = -LENGTH; scene.add(gate);
  const finishLine = new THREE.Mesh(new THREE.PlaneGeometry(LANES * LANE_W + 2, .5), new THREE.MeshBasicMaterial({color: 0xffffff}));
  finishLine.rotation.x = -Math.PI / 2; finishLine.position.set(0, .02, -LENGTH); scene.add(finishLine);
  const hillMat = new THREE.MeshStandardMaterial({color: 0x8b8a6e, roughness: 1, flatShading: true});
  for (let i = 0; i < 18; i++) {
    const h = new THREE.Mesh(new THREE.ConeGeometry(30 + Math.random() * 40, 12 + Math.random() * 20, 7), hillMat);
    h.position.set((Math.random() - .5) * 500, 0, -LENGTH - 80 - Math.random() * 120); scene.add(h);
  }
  const yurtMat = new THREE.MeshStandardMaterial({color: 0xefe6d6, roughness: .95});
  for (let i = 0; i < 8; i++) {
    const side = i % 2 ? 1 : -1, y = new THREE.Group();
    const w = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 1.8, 20), yurtMat); w.position.y = .9;
    const r = new THREE.Mesh(new THREE.ConeGeometry(2.4, 1.5, 20), yurtMat); r.position.y = 2.55;
    y.add(w, r); y.position.set(side * (14 + Math.random() * 10), 0, -40 * i - 30); scene.add(y);
  }

  // Аттар
  const horses = HORSES.map(([name, color], i) => {
    const h = makeHorse(color, SHIRTS[i]);
    h.group.rotation.y = Math.PI / 2;                 // тұмсығы −z бағытына қарайды
    h.group.position.x = (i - (LANES - 1) / 2) * LANE_W;
    scene.add(h.group);
    return {...h, name, i, z: 0, v: 0, stamina: 100, gait: 0, done: false, time: 0, target: 0, kick: .6 + Math.random() * .3};
  });
  const me = horses[0];

  let state = "ready", t0 = 0, countdown = 0, lastFrame = 0, place = 0, order = [];
  function reset() {
    horses.forEach((h) => { h.z = 0; h.v = 0; h.stamina = 100; h.done = false; h.time = 0; h.target = 16.2 + Math.random() * 3; h.kick = .55 + Math.random() * .3; });
    order = []; place = 0; state = "ready";
    msg.textContent = "«Бастау» бас, сосын белгі жасыл аймаққа жеткенде қамшыла!";
    pose(0); render();
  }
  function begin() {
    if (state === "count" || state === "run") return;
    reset(); state = "count"; countdown = 3; msg.textContent = "3";
    const iv = setInterval(() => {
      countdown--;
      if (countdown > 0) { msg.textContent = String(countdown); return; }
      clearInterval(iv); msg.textContent = "Шап!"; state = "run"; t0 = performance.now(); lastFrame = 0;
      setTimeout(() => { if (state === "run") msg.textContent = ""; }, 900);
      requestAnimationFrame(loop);
    }, 800);
  }
  // Ырғақ: шабыс фазасы 0..1; 0.75–1 аралығы — «жасыл аймақ»
  function whip() {
    if (state !== "run" || me.done) return;
    const perfect = me.gait % 1 > .72;
    const tired = me.stamina < 15;
    me.v = Math.min(25, me.v + (perfect ? 3.3 : 2) * (tired ? .4 : 1));
    me.stamina = Math.max(0, me.stamina - 9);
    rhythm.flash(perfect);
  }
  function step(dt, now) {
    for (const h of horses) {
      if (h.done) { h.v = Math.max(0, h.v - 8 * dt); h.z += h.v * dt; continue; }
      if (h === me) {
        h.v += (10 - h.v) * .6 * dt;
        h.stamina = Math.min(100, h.stamina + 18 * dt);
      } else {
        const left = 1 - h.z / LENGTH;
        const tgt = h.target + (left < .3 ? h.kick * 4 : 0) + Math.sin(now / 900 + h.i * 2) * .6;
        h.v += (Math.min(tgt, h.v + 9 * dt * 4) - h.v) * 1.4 * dt;
      }
      h.z += h.v * dt;
      h.gait += h.v * dt * .085;
      if (h.z >= LENGTH) {
        h.done = true; h.time = (now - t0) / 1000; order.push(h);
        if (h === me) place = order.length;
      }
    }
    if (me.done && state === "run") end();
  }
  function end() {
    state = "end";
    const pts = [60, 40, 25, 15, 10, 5][place - 1];
    const record = finish("bayge", +me.time.toFixed(2), false, {place, points: pts});
    if (place === 1) unlock("bayge-win");
    msg.textContent = `${place}-орын! Уақыт: ${me.time.toFixed(2)} с. +${pts} ұпай.${record ? " Жаңа рекорд!" : ""}`;
    if (place === 1) toast("Бәйгенің бас жүлдесі!", "Тайбурыл бірінші келді.");
  }
  function pose(now) {
    for (const h of horses) {
      const sp = Math.min(1, h.v / 18);
      h.group.position.z = -h.z;
      h.legs.forEach(({hip, phase}) => { hip.rotation.z = Math.sin((h.gait + phase) * Math.PI * 2) * .75 * sp; });
      const bob = Math.abs(Math.sin(h.gait * Math.PI * 2)) * .16 * sp;
      h.body.position.y = 1.55 + bob; h.rider.position.y = 2.0 + bob * 1.4;
      h.neck.rotation.z = -.75 + Math.sin(h.gait * Math.PI * 2) * .08 * sp;
    }
    // камера жүйрікті артынан және сәл жоғарыдан қуады
    const cz = -me.z + 9.5;
    camera.position.set(me.group.position.x + 4.2, 4.2, cz);
    camera.lookAt(me.group.position.x - 1.2, 1.6, -me.z - 6);
    sun.position.set(me.group.position.x + 30, 50, -me.z + 20); sun.target.position.set(me.group.position.x, 0, -me.z);
  }
  function updateHud() {
    const ahead = horses.filter((h) => h !== me && h.z > me.z).length + 1;
    hud.textContent = state === "run" || state === "end"
      ? `Орын: ${me.done ? place : ahead}/${LANES} · Қашықтық: ${Math.min(LENGTH, Math.round(me.z))}/${LENGTH} м · Жылдамдық: ${Math.round(me.v * 3.6)} км/сағ`
      : `Сенің атың — Тайбурыл (қызыл шапан) · Қашықтық ${LENGTH} м`;
    rhythm.set(me.gait % 1, me.stamina / 100);
  }
  function loop(now) {
    const dt = Math.min(.05, (now - (lastFrame || now)) / 1000); lastFrame = now;
    step(dt, now); pose(now); updateHud(); renderer.render(scene, camera);
    if (state === "run" || horses.some((h) => h.v > .2)) requestAnimationFrame(loop);
  }
  function render() { updateHud(); renderer.render(scene, camera); }

  canvas.addEventListener("pointerdown", (e) => { e.preventDefault(); if (state === "run") whip(); else if (state !== "count") begin(); });
  canvas.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "ArrowUp" || e.key === "Enter") { e.preventDefault(); if (state === "run") whip(); else if (state !== "count") begin(); }
  });
  tools.append(btn("Бастау", () => { begin(); canvas.focus(); }, "btn btn-line"), btn("Қамшы", whip, "btn btn-gold bayge-whip"));

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w / h < .9 ? 66 : 50; camera.updateProjectionMatrix();
    if (state !== "run") render();
  }
  new ResizeObserver(resize).observe(canvas);
  reset(); resize();
  return {begin, whip};
}
