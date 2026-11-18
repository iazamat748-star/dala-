// Дала мұрасы · асық ату: three.js көрінісі мен қарапайым 2D физика (дискілер, үйкеліс, серпімді соқтығыс)
import * as THREE from "three";

const R = 3.0;          // асықтар шығуы керек шеңбер
const LINE_Z = 5.4;     // ату сызығы
const ASYK_R = .27, SAKA_R = .34;

function softwareGL() {
  try {
    const gl = document.createElement("canvas").getContext("webgl");
    const ext = gl && gl.getExtension("WEBGL_debug_renderer_info");
    return !gl || /swiftshader|llvmpipe|software/i.test(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "");
  } catch { return true; }
}

// Асықтың пішіні: сфераны бүйірлері ойыс, ұштары жуан сүйекке айналдырамыз
function asykGeometry() {
  const g = new THREE.SphereGeometry(1, 40, 28);
  const p = g.attributes.position, v = new THREE.Vector3();
  const sg = (x, e) => Math.sign(x) * Math.pow(Math.abs(x), e);
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    let x = sg(v.x, .62) * .52, y = sg(v.y, .72) * .3, z = sg(v.z, .7) * .36;
    y *= 1 + .35 * Math.pow(Math.abs(v.x), 3);            // ұштары жуандау
    if (v.z > 0) z -= .13 * Math.exp(-(v.x * v.x * 5 + v.y * v.y * 7)); // «бүк» жағы ойыс
    if (v.z < 0) z += .06 * Math.exp(-(v.x * v.x * 9 + v.y * v.y * 4)); // «шік» жағындағы шұңқыр
    if (v.y > 0) y -= .05 * Math.exp(-(v.x * v.x * 20));   // ортасындағы ойық
    p.setXYZ(i, x, y, z);
  }
  g.computeVertexNormals();
  return g;
}

function groundTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 512;
  const g = c.getContext("2d");
  g.fillStyle = "#b99b74"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 9000; i++) {
    const l = 50 + Math.random() * 30;
    g.fillStyle = `hsla(${28 + Math.random() * 10},${25 + Math.random() * 15}%,${l}%,${.15 + Math.random() * .25})`;
    const s = Math.random() * 3 + .5; g.fillRect(Math.random() * 512, Math.random() * 512, s, s);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(10, 10); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function skyTexture() {
  const c = document.createElement("canvas"); c.width = 4; c.height = 256;
  const g = c.getContext("2d"), gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, "#5e95b8"); gr.addColorStop(.55, "#a9cbd9"); gr.addColorStop(1, "#ead9b9");
  g.fillStyle = gr; g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function start({canvas, hud, msg, tools, btn, finish, unlock, toast}) {
  const soft = softwareGL();
  const renderer = new THREE.WebGLRenderer({canvas, antialias: !soft, powerPreference: "high-performance"});
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, soft ? 1 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = !soft;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = skyTexture();
  scene.fog = new THREE.Fog(0xd9cdb4, 22, 60);
  const camera = new THREE.PerspectiveCamera(42, 1, .1, 100);
  camera.position.set(0, 3.3, 9.4); camera.lookAt(0, 0, -.6);

  scene.add(new THREE.HemisphereLight(0xe4f1ff, 0x8a6a48, 1.1));
  const sun = new THREE.DirectionalLight(0xfff0d6, 2.2);
  sun.position.set(-5, 9, 4); sun.castShadow = !soft;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, {left: -7, right: 7, top: 7, bottom: -7, near: 1, far: 30});
  scene.add(sun);

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), new THREE.MeshStandardMaterial({map: groundTexture(), roughness: 1}));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
  const ring = new THREE.Mesh(new THREE.RingGeometry(R - .05, R + .05, 128), new THREE.MeshBasicMaterial({color: 0xf6ead2}));
  ring.rotation.x = -Math.PI / 2; ring.position.y = .005; scene.add(ring);
  const line = new THREE.Mesh(new THREE.PlaneGeometry(7, .07), new THREE.MeshBasicMaterial({color: 0xf6ead2}));
  line.rotation.x = -Math.PI / 2; line.position.set(0, .005, LINE_Z + .55); scene.add(line);
  // Алыстағы киіз үйлер — атмосфера үшін
  const yurtMat = new THREE.MeshStandardMaterial({color: 0xefe6d6, roughness: .95});
  const roofMat = new THREE.MeshStandardMaterial({color: 0xd8c9ae, roughness: .95});
  [[-14, -24, 1.6], [-7, -28, 1.2], [9, -26, 1.7], [17, -21, 1.1]].forEach(([x, z, s]) => {
    const y = new THREE.Group();
    const wall = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 1.2, 24), yurtMat); wall.position.y = .6;
    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.75, 1, 24), roofMat); roof.position.y = 1.7;
    y.add(wall, roof); y.position.set(x, 0, z); y.scale.setScalar(s); scene.add(y);
  });

  const geo = asykGeometry();
  const boneMat = new THREE.MeshStandardMaterial({color: 0xeadcc0, roughness: .55});
  const sakaMat = new THREE.MeshStandardMaterial({color: 0xa52a24, roughness: .4, metalness: .05});
  const makeMesh = (mat, scale) => { const m = new THREE.Mesh(geo, mat); m.scale.setScalar(scale); m.castShadow = !soft; m.position.y = .3 * scale; return m; };

  // Бағыт көрсеткіші
  const arrowShape = new THREE.Shape();
  arrowShape.moveTo(-.06, 0); arrowShape.lineTo(.06, 0); arrowShape.lineTo(.06, .82); arrowShape.lineTo(.2, .82); arrowShape.lineTo(0, 1.1); arrowShape.lineTo(-.2, .82); arrowShape.lineTo(-.06, .82);
  const arrow = new THREE.Mesh(new THREE.ShapeGeometry(arrowShape), new THREE.MeshBasicMaterial({color: 0xd9a136, transparent: true, opacity: .9, depthWrite: false}));
  arrow.rotation.x = -Math.PI / 2; arrow.position.y = .02; scene.add(arrow);

  let bodies = [], saka, level = 1, shots = 0, score = 0, sakaX = 0, aim = 0, power = .55, moving = false, over = false, shotOut = 0;

  function body(kind, x, z) {
    const r = kind === "saka" ? SAKA_R : ASYK_R;
    const mesh = makeMesh(kind === "saka" ? sakaMat : boneMat, kind === "saka" ? .66 : .54);
    mesh.rotation.y = Math.random() * Math.PI;
    scene.add(mesh);
    return {kind, x, z, vx: 0, vz: 0, r, m: kind === "saka" ? 2.2 : 1, mesh, out: false, gone: false};
  }
  function setupLevel() {
    bodies.forEach((b) => scene.remove(b.mesh));
    bodies = [];
    const n = Math.min(4 + level * 2, 14);
    const rows = n > 8 ? 2 : 1, per = Math.ceil(n / rows);
    for (let i = 0; i < n; i++) {
      const row = Math.floor(i / per), col = i % per;
      const x = (col - (per - 1) / 2) * .62 + (Math.random() - .5) * .05;
      bodies.push(body("asyk", x, (row - (rows - 1) / 2) * .7));
    }
    saka = body("saka", sakaX, LINE_Z); bodies.push(saka);
    shots = 3 + level;
    update();
  }
  function newGame() { level = 1; score = 0; over = false; msg.textContent = ""; setupLevel(); }

  function update() {
    const left = bodies.filter((b) => b.kind === "asyk" && !b.out).length;
    hud.textContent = `Деңгей ${level} · Ату: ${shots} · Шеңберде: ${left} асық · Ұпай: ${score}`;
    arrow.visible = !moving && !over;
    arrow.position.x = saka.x; arrow.position.z = saka.z;
    arrow.rotation.z = -aim;
    arrow.scale.set(1, .6 + power * 2.2, 1);
    render();
  }

  // ---------- Дыбыс ----------
  let actx = null;
  function knock(strength) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const n = actx.sampleRate * .06, buf = actx.createBuffer(1, n, actx.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 6);
      const src = actx.createBufferSource(), f = actx.createBiquadFilter(), g = actx.createGain();
      f.type = "bandpass"; f.frequency.value = 1800 + Math.random() * 900; f.Q.value = 4;
      g.gain.value = Math.min(1, strength * .25);
      src.buffer = buf; src.connect(f).connect(g).connect(actx.destination); src.start();
    } catch {}
  }

  // ---------- Физика ----------
  const axis = new THREE.Vector3();
  function step(dt) {
    let anyMoving = false;
    for (const b of bodies) {
      if (b.gone) continue;
      const sp = Math.hypot(b.vx, b.vz);
      if (sp > 0) {
        const mu = b.kind === "saka" ? 2.3 : 3.1;
        const ns = Math.max(0, sp - mu * dt);
        b.vx *= ns / sp; b.vz *= ns / sp;
        b.x += b.vx * dt; b.z += b.vz * dt;
        if (Math.abs(b.x) > 14 || Math.abs(b.z) > 14) { b.vx = b.vz = 0; }
        if (ns > .01) anyMoving = true; else { b.vx = b.vz = 0; }
        axis.set(b.vz, 0, -b.vx).normalize();
        if (ns > .01) b.mesh.rotateOnWorldAxis(axis, ns * dt / b.r * .55);
      }
    }
    for (let i = 0; i < bodies.length; i++) for (let j = i + 1; j < bodies.length; j++) {
      const a = bodies[i], b = bodies[j];
      if (a.gone || b.gone) continue;
      const dx = b.x - a.x, dz = b.z - a.z, d = Math.hypot(dx, dz), min = a.r + b.r;
      if (d >= min || d === 0) continue;
      const nx = dx / d, nz = dz / d, ov = min - d, ia = 1 / a.m, ib = 1 / b.m;
      a.x -= nx * ov * ia / (ia + ib); a.z -= nz * ov * ia / (ia + ib);
      b.x += nx * ov * ib / (ia + ib); b.z += nz * ov * ib / (ia + ib);
      const rel = (b.vx - a.vx) * nx + (b.vz - a.vz) * nz;
      if (rel < 0) {
        const jimp = -(1 + .82) * rel / (ia + ib);
        a.vx -= jimp * ia * nx; a.vz -= jimp * ia * nz;
        b.vx += jimp * ib * nx; b.vz += jimp * ib * nz;
        // азғантай бүйірлік шашырау — асықтар бір түзу бойымен ғана ұшпасын
        const side = (Math.random() - .5) * .15 * Math.abs(rel);
        b.vx += -nz * side; b.vz += nx * side;
        if (Math.abs(rel) > .4) knock(Math.abs(rel));
        anyMoving = true;
      }
    }
    return anyMoving;
  }

  function settle() {
    moving = false;
    let outNow = 0;
    for (const b of bodies) {
      if (b.kind !== "asyk" || b.out) continue;
      if (Math.hypot(b.x, b.z) > R + .02) { b.out = true; outNow++; }
    }
    shotOut = outNow;
    score += outNow * 10 + (outNow >= 2 ? outNow * 5 : 0);
    if (outNow >= 2) unlock("asyk-double");
    shots--;
    // шыққан асықтар ақырындап жоғалады
    bodies.filter((b) => b.out && !b.gone).forEach((b) => { b.gone = true; fade(b.mesh); });
    const left = bodies.filter((b) => b.kind === "asyk" && !b.out).length;
    msg.textContent = outNow ? `${outNow} асық шықты! +${outNow * 10 + (outNow >= 2 ? outNow * 5 : 0)}` : "Бұл жолы ештеңе шықпады.";
    sakaX = Math.max(-2.6, Math.min(2.6, saka.x));
    if (!left) {
      score += shots * 15;
      level++;
      if (level >= 3) unlock("asyk-level3");
      msg.textContent = `Деңгей өтті! Қалған әр ату үшін +15. ${level}-деңгей басталды.`;
      setTimeout(setupLevel, 900);
    } else if (shots <= 0) {
      over = true;
      const record = finish("asyk", score);
      msg.textContent = `Ойын аяқталды: ${score} ұпай.${record ? " Жаңа рекорд!" : ""} «Жаңа ойын» батырмасын бас.`;
    } else {
      saka.x = sakaX; saka.z = LINE_Z; saka.vx = saka.vz = 0;
    }
    update();
  }
  function fade(mesh) {
    mesh.material = mesh.material.clone(); mesh.material.transparent = true;
    const t0 = performance.now();
    const f = () => { const k = (performance.now() - t0) / 600; mesh.material.opacity = 1 - k; mesh.position.y += .01; render(); if (k < 1) requestAnimationFrame(f); else scene.remove(mesh); };
    requestAnimationFrame(f);
  }

  let last = 0;
  function loop(t) {
    if (!moving) return;
    const dt = Math.min(.05, (t - (last || t)) / 1000); last = t;
    let any = false;
    const sub = 6;
    for (let i = 0; i < sub; i++) any = step(dt / sub) || any;
    for (const b of bodies) { b.mesh.position.x = b.x; b.mesh.position.z = b.z; }
    render();
    if (any) requestAnimationFrame(loop); else settle();
  }
  function shoot() {
    if (moving || over || shots <= 0) return;
    const sp = 5 + power * 11;
    saka.vx = Math.sin(aim) * sp; saka.vz = -Math.cos(aim) * sp;
    moving = true; last = 0; msg.textContent = "";
    update();
    requestAnimationFrame(loop);
  }

  // ---------- Басқару ----------
  let drag = null;
  canvas.addEventListener("pointerdown", (e) => {
    if (moving || over) return;
    drag = {x: e.clientX, y: e.clientY}; canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const px = e.clientX - drag.x, py = e.clientY - drag.y;
    const len = Math.hypot(px, py);
    if (len < 6 || py <= 0) return;
    aim = Math.max(-.9, Math.min(.9, Math.atan2(-px, py)));
    power = Math.min(1, len / (canvas.clientHeight * .4));
    update();
  });
  const release = (e) => {
    if (!drag) return;
    const moved = Math.hypot(e.clientX - drag.x, e.clientY - drag.y);
    drag = null;
    if (moved > 12 && e.clientY > 0) shoot();
  };
  canvas.addEventListener("pointerup", release);
  canvas.addEventListener("pointercancel", () => { drag = null; });
  canvas.addEventListener("keydown", (e) => {
    const k = e.key;
    if (k === "ArrowLeft") aim = Math.max(-.9, aim - .05);
    else if (k === "ArrowRight") aim = Math.min(.9, aim + .05);
    else if (k === "ArrowUp") power = Math.min(1, power + .05);
    else if (k === "ArrowDown") power = Math.max(.05, power - .05);
    else if (k === "a" || k === "A" || k === "ф" || k === "Ф") moveSaka(-.3);
    else if (k === "d" || k === "D" || k === "в" || k === "В") moveSaka(.3);
    else if (k === " " || k === "Enter") shoot();
    else return;
    e.preventDefault(); if (!moving) update();
  });
  function moveSaka(dx) { if (moving || over) return; sakaX = Math.max(-2.6, Math.min(2.6, sakaX + dx)); saka.x = sakaX; update(); }
  tools.append(btn("Жаңа ойын", newGame), btn("◀ Сақаны солға", () => moveSaka(-.4)), btn("Сақаны оңға ▶", () => moveSaka(.4)), btn("Ату", shoot, "btn btn-gold"));

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = w / h < .9 ? 62 : 46;
    camera.updateProjectionMatrix();
    render();
  }
  let pending = false;
  function render() { if (pending) return; pending = true; requestAnimationFrame(() => { pending = false; for (const b of bodies) if (!b.gone) { b.mesh.position.x = b.x; b.mesh.position.z = b.z; } renderer.render(scene, camera); }); }
  new ResizeObserver(resize).observe(canvas);
  newGame();
  resize();
  msg.textContent = "Сақаны артқа тартып жібер!";
  return {newGame};
}
