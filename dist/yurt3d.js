// Дала мұрасы · «Киіз үйіңді безендір»: 3D киіз үйдің түсін, басқұр оюын, есігін таңдап, суретке сақтау.
import * as THREE from "three";
import {OrbitControls} from "./vendor/OrbitControls.js";

const FELT = [["Ақ киіз", "#efe6d4"], ["Сұр киіз", "#b9b0a2"], ["Сарғыш киіз", "#dcc39a"], ["Қоңыр киіз", "#8a6f55"]];
const BAND = [["Қызыл", "#a2322b"], ["Көк", "#1d4566"], ["Жасыл", "#2f6d58"], ["Қара", "#2a2522"]];
const DOOR = [["Қызыл", "#9c2f28"], ["Көк", "#1d4f73"], ["Сары", "#c58b22"], ["Ағаш", "#7a4b2a"]];
const PATTERNS = [["Қошқар мүйіз", "horn"], ["Сынық мүйіз", "zigzag"], ["Төрт құлақ", "cross"], ["Менің оюым", "mine"]];

function softwareGL() {
  try {
    const gl = document.createElement("canvas").getContext("webgl");
    const ext = gl && gl.getExtension("WEBGL_debug_renderer_info");
    return !gl || /swiftshader|llvmpipe|software/i.test(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "");
  } catch { return true; }
}
function horn(g, x, y, s, lw) {
  g.lineWidth = lw; g.lineCap = "round";
  g.beginPath(); g.moveTo(x, y + s * .9); g.lineTo(x, y);
  g.bezierCurveTo(x, y - s * .55, x + s * .75, y - s * .55, x + s * .7, y - s * .05);
  g.bezierCurveTo(x + s * .66, y + s * .3, x + s * .3, y + s * .25, x + s * .35, y);
  g.moveTo(x, y);
  g.bezierCurveTo(x, y - s * .55, x - s * .75, y - s * .55, x - s * .7, y - s * .05);
  g.bezierCurveTo(x - s * .66, y + s * .3, x - s * .3, y + s * .25, x - s * .35, y);
  g.stroke();
}
function patternCanvas(kind, bg, fg, mine) {
  const c = document.createElement("canvas"); c.width = 512; c.height = 128;
  const g = c.getContext("2d");
  g.fillStyle = bg; g.fillRect(0, 0, 512, 128);
  g.strokeStyle = fg; g.fillStyle = fg;
  g.fillRect(0, 6, 512, 6); g.fillRect(0, 116, 512, 6);
  if (kind === "mine" && mine) {
    for (let x = 0; x < 512; x += 112) g.drawImage(mine, x, 14, 100, 100);
  } else if (kind === "zigzag") {
    g.lineWidth = 9; g.lineJoin = "round";
    g.beginPath(); for (let x = -32, k = 0; x <= 544; x += 32, k++) g.lineTo(x, k % 2 ? 34 : 94); g.stroke();
    for (let x = 0; x < 512; x += 64) { g.beginPath(); g.arc(x + 16, 64, 7, 0, Math.PI * 2); g.fill(); }
  } else if (kind === "cross") {
    for (let x = 32; x < 512; x += 64) {
      g.save(); g.translate(x, 64);
      for (let k = 0; k < 4; k++) { g.rotate(Math.PI / 2); horn(g, 0, -10, 22, 5); }
      g.restore();
    }
  } else {
    for (let x = 32; x < 512; x += 64) horn(g, x, 70, 40, 7);
  }
  return c;
}
function feltCanvas(color) {
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = color; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 5000; i++) { g.fillStyle = `rgba(${Math.random() < .5 ? "255,255,255" : "0,0,0"},${Math.random() * .06})`; g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2); }
  return c;
}
const toTex = (c, rx = 1, ry = 1) => { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry); t.anisotropy = 4; return t; };

export function start({host, make, btn}) {
  const soft = softwareGL();
  const opts = {felt: 0, band: 0, door: 0, pattern: 0};
  const wrap = make("div", null, "yd");
  const stage = make("div", null, "yd-stage");
  const canvas = make("canvas", null, null, {role: "img", "aria-label": "Безендірілген киіз үйдің 3D көрінісі. Тышқанмен айналдыруға болады."});
  stage.append(canvas);
  const panel = make("div", null, "yd-panel");
  const group = (title, list, key, swatch) => {
    const f = make("fieldset", null, "yd-group"); f.append(make("legend", title));
    list.forEach(([label, val], i) => {
      const b = btn(label, () => { opts[key] = i; f.querySelectorAll("button").forEach((x, k) => x.setAttribute("aria-pressed", String(k === i))); apply(); }, "yd-opt", {"aria-pressed": String(i === opts[key])});
      if (swatch) { const sw = make("i", null, null, {"aria-hidden": "true"}); sw.style.background = val; b.prepend(sw); }
      f.append(b);
    });
    return f;
  };
  const note = make("p", "«Менің оюым» — жоғарыдағы ою құрастырғышта салған өрнегің.", "yd-note");
  panel.append(group("Киіз", FELT, "felt", true), group("Басқұр мен туырлық жиегі", BAND, "band", true), group("Ою", PATTERNS, "pattern", false), note, group("Есік", DOOR, "door", true));
  const save = btn("Суретке сақтау", () => {
    renderer.render(scene, camera);
    canvas.toBlob((b) => { const a = make("a", null, null, {href: URL.createObjectURL(b), download: "Dala-murasy-kiiz-ui.png"}); document.body.append(a); a.click(); a.remove(); });
  }, "btn btn-gold");
  panel.append(save);
  wrap.append(stage, panel);
  host.append(wrap);

  const renderer = new THREE.WebGLRenderer({canvas, antialias: !soft, preserveDrawingBuffer: true});
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, soft ? 1 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = !soft;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xc9dbe3);
  scene.fog = new THREE.Fog(0xc9dbe3, 30, 70);
  const camera = new THREE.PerspectiveCamera(40, 1, .1, 200);
  camera.position.set(8.5, 4.2, 9.5);
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 1.7, 0); controls.enableDamping = !soft; controls.minDistance = 6; controls.maxDistance = 22; controls.maxPolarAngle = Math.PI * .48; controls.enablePan = false;
  controls.update();
  scene.add(new THREE.HemisphereLight(0xeaf4ff, 0x8a7350, 1.15));
  const sun = new THREE.DirectionalLight(0xfff0d8, 2.2); sun.position.set(8, 12, 6); sun.castShadow = !soft;
  sun.shadow.mapSize.set(1024, 1024); Object.assign(sun.shadow.camera, {left: -8, right: 8, top: 8, bottom: -8});
  scene.add(sun);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(40, 48), new THREE.MeshStandardMaterial({color: 0x9da06a, roughness: 1}));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);

  // Киіз үй: туырлық (қабырға), басқұр жолағы, үзік (күмбез), түндік, шаңырақ, есік
  const R = 3, H = 1.9;
  const feltMat = new THREE.MeshStandardMaterial({roughness: .95, side: THREE.DoubleSide});
  const bandMat = new THREE.MeshStandardMaterial({roughness: .8});
  const doorMat = new THREE.MeshStandardMaterial({roughness: .6});
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(R, R, H, 64, 1, true), feltMat);
  wall.position.y = H / 2; wall.castShadow = wall.receiveShadow = true;
  const band = new THREE.Mesh(new THREE.CylinderGeometry(R + .02, R + .02, .42, 64, 1, true), bandMat);
  band.position.y = H - .32;
  const base = new THREE.Mesh(new THREE.CylinderGeometry(R + .025, R + .025, .26, 64, 1, true), bandMat);
  base.position.y = .14;
  const roofPts = [];
  for (let i = 0; i <= 16; i++) { const t = i / 16; roofPts.push(new THREE.Vector2(R + .05 - t * (R - .55), H + Math.sin(t * Math.PI / 2) * 1.55 - t * .05)); }
  const roof = new THREE.Mesh(new THREE.LatheGeometry(roofPts, 64), feltMat); roof.castShadow = true;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(.55, .07, 10, 40), new THREE.MeshStandardMaterial({color: 0x7a4b2a, roughness: .6}));
  ring.rotation.x = Math.PI / 2; ring.position.y = H + 1.52;
  const tundik = new THREE.Mesh(new THREE.CircleGeometry(.56, 32), feltMat); tundik.rotation.x = -Math.PI / 2; tundik.position.y = H + 1.5;
  // бау-шулар: үзікті белдеп тұратын арқандар
  const ropeMat = new THREE.MeshStandardMaterial({color: 0x6b4a2a});
  const ropes = new THREE.Group();
  for (let k = 0; k < 8; k++) {
    const a = k / 8 * Math.PI * 2;
    const curve = new THREE.CatmullRomCurve3(roofPts.filter((_, i) => i % 3 === 0).map((p) => new THREE.Vector3(Math.cos(a) * (p.x + .03), p.y + .03, Math.sin(a) * (p.x + .03))));
    ropes.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 20, .025, 5), ropeMat));
  }
  const doorG = new THREE.Group();
  const door = new THREE.Mesh(new THREE.BoxGeometry(1.05, 1.55, .08), doorMat); door.position.y = .78;
  const frame = new THREE.Mesh(new THREE.BoxGeometry(1.25, 1.7, .06), new THREE.MeshStandardMaterial({color: 0x5a341c})); frame.position.set(0, .85, -.02);
  doorG.add(frame, door); doorG.position.set(0, 0, R + .03);
  const yurt = new THREE.Group(); yurt.add(wall, band, base, roof, ring, tundik, ropes, doorG);
  scene.add(yurt);
  // айналада: ат байлау қазығы мен қазан
  const post = new THREE.Mesh(new THREE.CylinderGeometry(.07, .09, 1.6, 8), new THREE.MeshStandardMaterial({color: 0x6b4a2a})); post.position.set(4.6, .8, -2.2); post.castShadow = true;
  const kazan = new THREE.Mesh(new THREE.SphereGeometry(.45, 20, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), new THREE.MeshStandardMaterial({color: 0x2b2b2b, metalness: .6, roughness: .4, side: THREE.DoubleSide}));
  kazan.position.set(-4.2, .45, 3); kazan.rotation.x = Math.PI; scene.add(post, kazan);

  function mineImage() {
    const src = document.querySelector(".oyu-canvas");
    if (!src) return null;
    return src;
  }
  function apply() {
    const feltC = FELT[opts.felt][1], bandC = BAND[opts.band][1], doorC = DOOR[opts.door][1];
    const kind = PATTERNS[opts.pattern][1];
    const mine = kind === "mine" ? mineImage() : null;
    note.hidden = kind !== "mine";
    if (kind === "mine" && !mine) note.textContent = "Ою құрастырғыш әлі ашылмаған: алдымен жоғарыдағы «Ою-өрнек құрастырғышта» өрнек сал.";
    else note.textContent = "«Менің оюым» — жоғарыдағы ою құрастырғышта салған өрнегің.";
    feltMat.map?.dispose(); feltMat.map = toTex(feltCanvas(feltC), 6, 2); feltMat.needsUpdate = true;
    const pc = patternCanvas(kind, bandC, "#f1e3c6", mine);
    bandMat.map?.dispose(); bandMat.map = toTex(pc, 8, 1); bandMat.needsUpdate = true;
    const dc = document.createElement("canvas"); dc.width = 256; dc.height = 384;
    const g = dc.getContext("2d"); g.fillStyle = doorC; g.fillRect(0, 0, 256, 384);
    g.strokeStyle = "#f1d9a6"; g.lineWidth = 8; g.strokeRect(18, 18, 220, 348);
    if (mine) g.drawImage(mine, 48, 112, 160, 160); else { g.strokeStyle = "#f1d9a6"; horn(g, 128, 200, 90, 10); horn(g, 128, 90, 45, 6); horn(g, 128, 320, 45, 6); }
    doorMat.map?.dispose(); doorMat.map = toTex(dc); doorMat.needsUpdate = true;
    render();
  }
  let raf = 0;
  function render() { if (raf) return; raf = requestAnimationFrame(() => { raf = 0; renderer.render(scene, camera); }); }
  controls.addEventListener("change", render);
  if (controls.enableDamping) {
    let active = false;
    const tickDamp = () => { if (controls.update()) render(); if (active) requestAnimationFrame(tickDamp); };
    canvas.addEventListener("pointerdown", () => { if (!active) { active = true; requestAnimationFrame(tickDamp); } });
    canvas.addEventListener("pointerup", () => setTimeout(() => { active = false; }, 900));
  }
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); render();
  }
  new ResizeObserver(resize).observe(canvas);
  apply(); resize();
  return {apply, opts};
}
