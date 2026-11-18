// Дала мұрасы · 3D: басты беттегі шаңырақ көрінісі және 3D мұражай экспонаттары (three.js).
// Барлық модель кодпен құрылады: сыртқы 3D файл қажет емес.
import * as THREE from "three";
import {OrbitControls} from "./vendor/OrbitControls.js";
import {RoomEnvironment} from "./vendor/RoomEnvironment.js";

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.classList.contains("reduce-motion");
const COLORS = {wood: 0x8a5a33, woodLight: 0xb98552, red: 0xa2322b, felt: 0xe7dcc6, feltDark: 0x5b4636, gold: 0xd9a136, blue: 0x1d4566, ink: 0x14324c};

/* ---------- Ортақ құралдар ---------- */
function makeRenderer(canvas) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({canvas, antialias: true, powerPreference: "high-performance"}); }
  catch { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  return renderer;
}
// Видеокартасыз (бағдарламалық) рендерді анықтау: мұндай құрылғыда тұрақты анимацияны өшіреміз
function softwareGL(renderer) {
  try {
    const gl = renderer.getContext(), ext = gl.getExtension("WEBGL_debug_renderer_info");
    const name = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    return /swiftshader|llvmpipe|software|basic render/i.test(String(name));
  } catch { return false; }
}
function fit(renderer, camera) {
  const c = renderer.domElement, w = c.clientWidth, h = c.clientHeight;
  if (!w || !h) return;
  if (c.width !== Math.floor(w * renderer.getPixelRatio()) || c.height !== Math.floor(h * renderer.getPixelRatio())) {
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
}
// Кенепте салынған текстуралар: ою-өрнек жолағы, киіз, ағаш, кереге торы
function canvasTexture(w, h, draw, repeat) {
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...repeat); }
  return t;
}
function ramHorn(ctx, x, y, s, color, width) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ctx.strokeStyle = color; ctx.lineWidth = width / s; ctx.lineCap = "round";
  for (const d of [-1, 1]) {
    ctx.beginPath(); ctx.moveTo(0, 10);
    ctx.bezierCurveTo(d * 3, -2, d * 16, -8, d * 22, 2);
    ctx.bezierCurveTo(d * 26, 10, d * 18, 17, d * 13, 12);
    ctx.bezierCurveTo(d * 9, 8, d * 13, 4, d * 16, 7);
    ctx.stroke();
  }
  ctx.beginPath(); ctx.moveTo(0, 10); ctx.lineTo(0, 22); ctx.stroke();
  ctx.restore();
}
const bandTexture = () => canvasTexture(512, 64, (g, w, h) => {
  g.fillStyle = "#a2322b"; g.fillRect(0, 0, w, h);
  g.fillStyle = "#14324c"; g.fillRect(0, 0, w, 8); g.fillRect(0, h - 8, w, 8);
  for (let x = 32; x < w; x += 64) ramHorn(g, x, 18, 1.15, "#f1d9a6", 3.2);
}, [8, 1]);
const feltTexture = (base, spots) => canvasTexture(256, 256, (g, w, h) => {
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 2600; i++) { g.fillStyle = spots[i % spots.length]; g.globalAlpha = .08 + Math.random() * .1; g.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 1 + Math.random() * 2); }
  g.globalAlpha = 1;
}, [4, 2]);
const woodTexture = () => canvasTexture(256, 64, (g, w, h) => {
  const grad = g.createLinearGradient(0, 0, 0, h); grad.addColorStop(0, "#9b6738"); grad.addColorStop(1, "#7a4c2a");
  g.fillStyle = grad; g.fillRect(0, 0, w, h);
  g.strokeStyle = "#5e3a1f"; g.globalAlpha = .35;
  for (let i = 0; i < 18; i++) { g.beginPath(); const y = Math.random() * h; g.moveTo(0, y); g.bezierCurveTo(w * .3, y + 6 * Math.random() - 3, w * .6, y + 6 * Math.random() - 3, w, y + 4 * Math.random() - 2); g.stroke(); }
  g.globalAlpha = 1;
}, [2, 1]);
const latticeTexture = () => canvasTexture(256, 128, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  g.strokeStyle = "#b07a45"; g.lineWidth = 7; g.lineCap = "round";
  for (let x = -h; x < w + h; x += 32) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x + h, h); g.stroke(); g.beginPath(); g.moveTo(x + h, 0); g.lineTo(x, h); g.stroke(); }
  g.fillStyle = "#6b3f20";
  for (let x = 0; x < w + h; x += 32) for (let y = 0; y <= h; y += 32) { g.beginPath(); g.arc((x + y) % (w + 32), y, 2.6, 0, 7); g.fill(); }
}, [10, 1]);

// Шаңырақ: шеңбер және екі бағыттағы иілген күлдіреуіштер
function buildShanyrak(radius = .62, mat) {
  const g = new THREE.Group();
  const wood = mat || new THREE.MeshStandardMaterial({color: COLORS.woodLight, roughness: .6, map: woodTexture()});
  const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, radius * .085, 14, 80), wood);
  ring.rotation.x = Math.PI / 2; ring.castShadow = true;
  g.add(ring);
  const outer = new THREE.Mesh(new THREE.TorusGeometry(radius * 1.12, radius * .05, 10, 80), wood);
  outer.rotation.x = Math.PI / 2; g.add(outer);
  for (const axis of [0, Math.PI / 2]) {
    for (const off of [-.42, 0, .42]) {
      const half = Math.sqrt(Math.max(.01, 1 - off * off)) * radius;
      const pts = [];
      for (let i = 0; i <= 24; i++) {
        const t = i / 24, x = -half + t * half * 2;
        pts.push(new THREE.Vector3(x, Math.sin(t * Math.PI) * radius * .55, off * radius));
      }
      const bar = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 30, radius * .04, 8), wood);
      bar.rotation.y = axis; bar.castShadow = true;
      g.add(bar);
    }
  }
  return g;
}
// Уық: шаңырақтан керегеге дейін, төменгі ұшы сәл иілген
function uykCurve(r0, h0, r1, h1, a) {
  const c = Math.cos(a), s = Math.sin(a);
  const p = (r, y) => new THREE.Vector3(c * r, y, s * r);
  return new THREE.CatmullRomCurve3([p(r0, h0), p(r0 + (r1 - r0) * .55, h0 - (h0 - h1) * .5), p(r1 - .05, h1 + .18), p(r1, h1)]);
}

/* ---------- 1. Басты бет: шаңырақтың астынан аспанға ---------- */
function heroScene(canvas) {
  const renderer = makeRenderer(canvas);
  if (!renderer) return; // алдын ала салынған сурет (hero-poster) қалады
  // Видеокартасыз құрылғыда 3D көріністі құрмаймыз: сурет жеткілікті әрі бет баяуламайды
  if (softwareGL(renderer)) { renderer.dispose(); return; }
  renderer.shadowMap.enabled = false;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(62, 1, .05, 200);
  const H = 3.1, R = 3.2, KH = 1.45, r0 = .66;
  // Аспан: градиент, бұлттар, күн
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: {t: {value: 0}},
    vertexShader: "varying vec3 v; void main(){ v = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",
    fragmentShader: `varying vec3 v; uniform float t;
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
      float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n(p);p*=2.03;a*=.5;}return s;}
      void main(){
        vec3 d=normalize(v); float up=clamp(d.y,0.,1.);
        vec3 col=mix(vec3(.62,.80,.93),vec3(.13,.42,.72),pow(up,.8));
        vec2 uv=d.xz/max(d.y,.12)*1.3+vec2(t*.02,t*.008);
        float c=smoothstep(.48,.78,fbm(uv*1.4));
        col=mix(col,vec3(1.,.98,.95),c*.85);
        vec3 sun=normalize(vec3(.25,.95,.15)); float s=max(dot(d,sun),0.);
        col+=vec3(1.,.9,.7)*pow(s,40.)*.8+vec3(1.,.95,.85)*smoothstep(.997,.999,s);
        gl_FragColor=vec4(col,1.);
      }`
  });
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(80, 32, 16), skyMat));
  // Киіздің ішкі беті (шаңырақтың тесігінен басқа жер)
  const roofProfile = [];
  for (let i = 0; i <= 16; i++) { const t = i / 16; roofProfile.push(new THREE.Vector2(r0 * 1.16 + (R - r0 * 1.16) * t, H + .03 - (H - KH) * Math.pow(t, 1.15) + .04)); }
  const felt = new THREE.Mesh(new THREE.LatheGeometry(roofProfile, 96), new THREE.MeshStandardMaterial({color: 0xd9cbb0, map: feltTexture("#d2c3a6", ["#8e7f63", "#eadfca"]), side: THREE.DoubleSide, roughness: 1, emissive: 0x140d06}));
  scene.add(felt);
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(R + .02, R + .02, KH, 96, 1, true), new THREE.MeshStandardMaterial({color: 0x7b5a3d, side: THREE.BackSide, roughness: 1, map: feltTexture("#6d4c33", ["#3f2a1b", "#8b6a4a"])}));
  wall.position.y = KH / 2; scene.add(wall);
  const lattice = new THREE.Mesh(new THREE.CylinderGeometry(R - .03, R - .03, KH, 96, 1, true), new THREE.MeshStandardMaterial({map: latticeTexture(), transparent: true, alphaTest: .4, side: THREE.DoubleSide, roughness: .8}));
  lattice.position.y = KH / 2; scene.add(lattice);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(R - .06, R - .06, .26, 96, 1, true), new THREE.MeshStandardMaterial({map: bandTexture(), side: THREE.BackSide, roughness: .9}));
  band.position.y = KH - .05; scene.add(band);
  // Уықтар: қызыл және табиғи ағаш кезектеседі
  const red = new THREE.MeshStandardMaterial({color: COLORS.red, roughness: .55}), wood = new THREE.MeshStandardMaterial({color: COLORS.woodLight, roughness: .6, map: woodTexture()});
  const N = 72;
  for (let i = 0; i < N; i++) {
    const a = i / N * Math.PI * 2;
    scene.add(new THREE.Mesh(new THREE.TubeGeometry(uykCurve(r0 * 1.12, H - .02, R - .05, KH, a), 10, .028, 6), i % 2 ? wood : red));
  }
  const shan = buildShanyrak(r0);
  shan.position.y = H; scene.add(shan);
  // Шаңырақтан түскен жарық бағаны және ондағы шаң
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(r0 * .95, r0 * 1.6, H + 1, 48, 1, true), new THREE.MeshBasicMaterial({color: 0xfff1cf, transparent: true, opacity: .07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide}));
  beam.position.set(.18, (H - 1) / 2, .08); beam.rotation.z = -.06; scene.add(beam);
  const dustGeo = new THREE.BufferGeometry(), dustN = 380, pos = new Float32Array(dustN * 3);
  for (let i = 0; i < dustN; i++) { const a = Math.random() * 6.28, r = Math.random() * r0 * 1.2; pos.set([Math.cos(a) * r, 1.5 + Math.random() * (H - 1.5), Math.sin(a) * r], i * 3); }
  dustGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const dotTex = canvasTexture(32, 32, (g) => { const r = g.createRadialGradient(16, 16, 0, 16, 16, 16); r.addColorStop(0, "#fff"); r.addColorStop(1, "rgba(255,255,255,0)"); g.fillStyle = r; g.fillRect(0, 0, 32, 32); });
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({color: 0xfff3d6, map: dotTex, size: .03, transparent: true, opacity: .8, blending: THREE.AdditiveBlending, depthWrite: false}));
  scene.add(dust);
  scene.add(new THREE.HemisphereLight(0xdcecff, 0x8a6440, 1.25));
  const sunLight = new THREE.DirectionalLight(0xfff0d0, 1.6); sunLight.position.set(.6, 10, .4); scene.add(sunLight);
  const fill = new THREE.PointLight(0xffc98a, 12, 9, 1.4); fill.position.set(0, .9, 0); scene.add(fill);

  let running = false, last = 0, angle = 0, mx = 0, my = 0, frames = 0, slow = 0, still = false;
  // Кадр тым баяу болса, анимацияны тоқтатып, соңғы кадрды қалдырамыз
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, matchMedia("(max-width: 700px)").matches ? 1.5 : 1.75));
  canvas.parentElement.addEventListener("pointermove", (e) => { const r = canvas.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - .5; my = (e.clientY - r.top) / r.height - .5; });
  function frame(now) {
    if (!running) return;
    const spent = performance.now();
    const dt = Math.min(.05, (now - last) / 1000 || 0); last = now;
    fit(renderer, camera);
    angle += dt * (reduceMotion ? 0 : .045);
    skyMat.uniforms.t.value = now / 1000;
    const p = dust.geometry.attributes.position;
    if (!reduceMotion) { for (let i = 0; i < dustN; i++) { let y = p.getY(i) + dt * .05; if (y > H) y = 1.5; p.setY(i, y); } p.needsUpdate = true; }
    camera.position.set(Math.sin(angle) * .35, .55, Math.cos(angle) * .35);
    camera.lookAt(mx * .9 + Math.sin(angle * .6) * .15, H, -my * .9);
    renderer.render(scene, camera);
    if (frames === 1) canvas.closest(".hero")?.classList.add("live");
    const interval = now - (frame.prev || now); frame.prev = now;
    if (++frames > 2 && frames < 60 && (interval > 70 || performance.now() - spent > 45)) slow += interval > 250 ? 3 : 1;
    if (slow >= 3 && !still) { still = true; running = false; canvas.closest(".hero")?.classList.add("still"); return; }
    requestAnimationFrame(frame);
  }
  const vis = new IntersectionObserver(([e]) => { if (still) return; const was = running; running = e.isIntersecting && !document.hidden; if (running && !was) requestAnimationFrame(frame); });
  document.addEventListener("visibilitychange", () => { if (still) return; const was = running; running = !document.hidden && canvas.getBoundingClientRect().bottom > 0; if (running && !was) requestAnimationFrame(frame); });
  // Бет толық жүктелгеннен кейін ғана бастаймыз: алғашқы көрініс тезірек шығады
  const start = () => vis.observe(canvas);
  if (document.readyState === "complete") window.requestIdleCallback ? requestIdleCallback(start, {timeout: 800}) : setTimeout(start, 200);
  else addEventListener("load", () => (window.requestIdleCallback ? requestIdleCallback(start, {timeout: 800}) : setTimeout(start, 200)));
}

/* ---------- 2. 3D мұражай ---------- */
function museum(canvas) {
  const renderer = makeRenderer(canvas);
  const fallback = document.getElementById("stage-fallback");
  if (!renderer) { if (fallback) fallback.hidden = false; return; }
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0e2232);
  scene.fog = new THREE.Fog(0x0e2232, 9, 20);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture;
  const camera = new THREE.PerspectiveCamera(40, 1, .05, 100);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = .07; controls.minDistance = 1.2; controls.maxDistance = 14; controls.maxPolarAngle = Math.PI * .52;
  const software = softwareGL(renderer);
  controls.autoRotate = !reduceMotion && !software; controls.autoRotateSpeed = .8;
  let dirty = true;
  controls.addEventListener("change", () => { dirty = true; });
  const key = new THREE.DirectionalLight(0xfff1dc, 2.4); key.position.set(4, 7, 5); key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024); Object.assign(key.shadow.camera, {left: -5, right: 5, top: 5, bottom: -5}); scene.add(key);
  scene.add(new THREE.HemisphereLight(0xbfd8f0, 0x3a2a1c, .7));
  const floor = new THREE.Mesh(new THREE.CircleGeometry(7, 64), new THREE.MeshStandardMaterial({color: 0x1d3a52, roughness: .95}));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  const rug = new THREE.Mesh(new THREE.CircleGeometry(2.9, 64), new THREE.MeshStandardMaterial({map: canvasTexture(512, 512, (g, w) => {
    g.fillStyle = "#7a2621"; g.fillRect(0, 0, w, w);
    g.strokeStyle = "#e7c27a"; g.lineWidth = 10; g.beginPath(); g.arc(w / 2, w / 2, w * .46, 0, 7); g.stroke();
    g.lineWidth = 4; g.beginPath(); g.arc(w / 2, w / 2, w * .41, 0, 7); g.stroke();
    for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2; ramHorn(g, w / 2 + Math.cos(a) * w * .435, w / 2 + Math.sin(a) * w * .435, 1.2, "#f1d9a6", 3); }
    for (let i = 0; i < 4; i++) { const a = i / 4 * Math.PI * 2 + Math.PI / 4; ramHorn(g, w / 2 + Math.cos(a) * w * .2, w / 2 + Math.sin(a) * w * .2, 3.4, "#14324c", 5); }
  }), roughness: 1}));
  rug.rotation.x = -Math.PI / 2; rug.position.y = .002; rug.receiveShadow = true; scene.add(rug);

  let current = null, anim = null, playing = false, clock = new THREE.Clock(), running = false, built = {};
  const views = {yurt: [5.2, 3.1, 5.8, 1.1], shanyrak: [2.2, 2.4, 2.4, .9], dombyra: [1.5, 1.2, 2.05, .85], toguz: [2.6, 2.6, 2.8, .2], ornament: [0, 1.5, 5, 1.45]};
  function setView(id) {
    const [x, y, z, ty] = views[id] || [4, 3, 5, 1];
    camera.position.set(x, y, z); controls.target.set(0, ty, 0); controls.update();
  }
  function show(id) {
    if (!builders[id]) return;
    if (current) scene.remove(current.group);
    if (!built[id]) built[id] = builders[id]();
    current = built[id];
    scene.add(current.group);
    current.reset?.();
    playing = false; anim = null;
    setView(id);
    document.getElementById("museum-play").textContent = window.DALA_I18N?.t("museum.play") || "Анимацияны қосу";
  }
  document.getElementById("museum-play").addEventListener("click", () => {
    if (!current?.play) return;
    playing = true; anim = 0; current.play(); wake();
  });
  document.getElementById("museum-reset").addEventListener("click", () => { if (current) { setView(Object.keys(built).find((k) => built[k] === current)); wake(); } });

  /* --- Экспонаттар --- */
  const builders = {
    yurt() {
      const group = new THREE.Group(), R = 2.2, KH = 1.15, H = 2.45, r0 = .5;
      const parts = [];
      const latticeMat = new THREE.MeshStandardMaterial({map: latticeTexture(), transparent: true, alphaTest: .4, side: THREE.DoubleSide, roughness: .8});
      const kerege = new THREE.Mesh(new THREE.CylinderGeometry(R, R, KH, 96, 1, true, .35, Math.PI * 2 - .7), latticeMat);
      kerege.position.y = KH / 2; kerege.castShadow = true; group.add(kerege); parts.push([kerege, 0, "grow"]);
      const doorMat = new THREE.MeshStandardMaterial({map: canvasTexture(128, 192, (g, w, h) => {
        g.fillStyle = "#a2322b"; g.fillRect(0, 0, w, h); g.strokeStyle = "#e7c27a"; g.lineWidth = 6; g.strokeRect(10, 10, w - 20, h - 20);
        ramHorn(g, w / 2, h * .32, 2, "#f1d9a6", 4); ramHorn(g, w / 2, h * .68, 2, "#f1d9a6", 4);
      }), roughness: .7});
      const door = new THREE.Mesh(new THREE.BoxGeometry(.7, KH * .95, .06), doorMat);
      door.position.set(R * Math.cos(0) - .02, KH * .475, 0); door.rotation.y = Math.PI / 2; door.castShadow = true; group.add(door); parts.push([door, .12, "grow"]);
      const uyks = new THREE.Group(), red = new THREE.MeshStandardMaterial({color: COLORS.red, roughness: .55});
      const N = 48;
      for (let i = 0; i < N; i++) { const m = new THREE.Mesh(new THREE.TubeGeometry(uykCurve(r0 * 1.12, H, R - .03, KH, i / N * Math.PI * 2), 8, .024, 5), red); m.castShadow = true; uyks.add(m); }
      group.add(uyks); parts.push([uyks, .32, "uyk"]);
      const shan = buildShanyrak(r0); shan.position.y = H; group.add(shan); parts.push([shan, .25, "lift"]);
      const feltMat = new THREE.MeshStandardMaterial({map: feltTexture("#ece3d0", ["#b9ab8f", "#fff8ea"]), roughness: 1, side: THREE.DoubleSide, transparent: true});
      const wallCover = new THREE.Mesh(new THREE.CylinderGeometry(R + .03, R + .03, KH, 96, 1, true, .35, Math.PI * 2 - .7), feltMat);
      wallCover.position.y = KH / 2; wallCover.castShadow = true; group.add(wallCover); parts.push([wallCover, .62, "fade"]);
      const prof = []; for (let i = 0; i <= 12; i++) { const t = i / 12; prof.push(new THREE.Vector2(R + .05 - (R + .05 - r0 * 1.2) * t, KH + (H - KH + .06) * Math.pow(t, .85))); }
      const roof = new THREE.Mesh(new THREE.LatheGeometry(prof, 96), feltMat.clone()); roof.castShadow = true; group.add(roof); parts.push([roof, .74, "fade"]);
      const bandMesh = new THREE.Mesh(new THREE.CylinderGeometry(R + .045, R + .045, .16, 96, 1, true), new THREE.MeshStandardMaterial({map: bandTexture(), roughness: .9, transparent: true}));
      bandMesh.position.y = KH * .72; group.add(bandMesh); parts.push([bandMesh, .86, "fade"]);
      const bandTop = bandMesh.clone(); bandTop.position.y = KH + .1; bandTop.scale.set(.93, 1, .93); bandTop.material = bandMesh.material.clone(); group.add(bandTop); parts.push([bandTop, .9, "fade"]);
      const state = (p) => {
        for (const [obj, start, kind] of parts) {
          const k = THREE.MathUtils.smoothstep(p, start, start + .14);
          obj.visible = k > 0.001;
          if (kind === "grow") obj.scale.y = Math.max(.001, k);
          if (kind === "lift") obj.position.y = .2 + (H - .2) * k;
          if (kind === "uyk") uyks.children.forEach((m, i) => { m.visible = p > start + i / N * .14; });
          if (kind === "fade") { obj.material.opacity = k; obj.userData.y ??= obj.position.y; obj.position.y = obj.userData.y + (1 - k) * .5; }
        }
      };
      return {group, reset: () => state(1), play: () => {}, update: (t) => { state(Math.min(1, t / 11)); return t < 12.5; }};
    },
    shanyrak() {
      const group = new THREE.Group();
      const s = buildShanyrak(.9); s.position.y = .9; group.add(s);
      const red = new THREE.MeshStandardMaterial({color: COLORS.red, roughness: .5});
      for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2; const m = new THREE.Mesh(new THREE.CylinderGeometry(.025, .025, .5, 6), red); m.position.set(Math.cos(a) * 1.15, .78, Math.sin(a) * 1.15); m.rotation.z = Math.cos(a) * -1.1; m.rotation.x = Math.sin(a) * 1.1; m.castShadow = true; group.add(m); }
      return {group, play: () => {}, update: (t) => { s.rotation.y = t * .9; s.position.y = .9 + Math.sin(t * 2) * .05; return t < 7; }, reset: () => { s.rotation.y = 0; s.position.y = .9; }};
    },
    dombyra() {
      const group = new THREE.Group();
      const woodMat = new THREE.MeshStandardMaterial({color: 0x9a6034, roughness: .42, map: woodTexture()});
      const topMat = new THREE.MeshStandardMaterial({color: 0xc99460, roughness: .5, map: woodTexture()});
      // Шанақ: алмұрт пішінді, жалпақтау
      const prof = []; for (let i = 0; i <= 30; i++) { const t = i / 30; const y = t * .62; const r = Math.sin(Math.PI * Math.pow(t, .82)) * (.24 - .1 * t) + .012; prof.push(new THREE.Vector2(r, y)); }
      const body = new THREE.Mesh(new THREE.LatheGeometry(prof, 64), woodMat); body.scale.z = .5; body.castShadow = true;
      const deck = new THREE.Shape(); prof.forEach((p, i) => i ? deck.lineTo(p.x, p.y) : deck.moveTo(p.x, p.y)); [...prof].reverse().forEach((p) => deck.lineTo(-p.x, p.y));
      const top = new THREE.Mesh(new THREE.ExtrudeGeometry(deck, {depth: .008, bevelEnabled: false}), topMat); top.position.z = .0; top.castShadow = true;
      const neck = new THREE.Mesh(new THREE.BoxGeometry(.05, .78, .035), woodMat); neck.position.set(0, .62 + .39, .0); neck.castShadow = true;
      const head = new THREE.Mesh(new THREE.BoxGeometry(.06, .16, .045), woodMat); head.position.set(0, 1.47, -.01); head.rotation.x = -.18;
      const pegMat = new THREE.MeshStandardMaterial({color: 0x5a3820, roughness: .5});
      for (const y of [1.43, 1.5]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(.012, .012, .14, 8), pegMat); p.rotation.z = Math.PI / 2; p.position.set(0, y, -.01); group.add(p); }
      const fretMat = new THREE.MeshStandardMaterial({color: 0xd8c7a5, roughness: .8});
      for (let i = 0; i < 12; i++) { const y = .66 + .74 * (1 - Math.pow(.86, i + 1)) / (1 - Math.pow(.86, 12)); const f = new THREE.Mesh(new THREE.TorusGeometry(.034, .004, 6, 16), fretMat); f.scale.set(1, 1, .6); f.position.set(0, y, 0); f.rotation.x = Math.PI / 2; group.add(f); }
      const bridge = new THREE.Mesh(new THREE.BoxGeometry(.07, .015, .02), pegMat); bridge.position.set(0, .14, .018); group.add(bridge);
      // Ою: шанақтағы алтын өрнек
      const inlay = new THREE.Mesh(new THREE.CircleGeometry(.05, 32), new THREE.MeshStandardMaterial({color: COLORS.gold, metalness: .8, roughness: .3}));
      inlay.position.set(0, .4, .0095); group.add(inlay);
      // Ішектер
      const strings = [-.012, .012].map((x, i) => {
        const pts = new Float32Array(3 * 40);
        const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.BufferAttribute(pts, 3));
        const line = new THREE.Line(geo, new THREE.LineBasicMaterial({color: 0xf6efe0}));
        line.userData = {x, amp: 0, freq: i ? 196 : 146.8};
        group.add(line);
        return line;
      });
      const placeStrings = (t) => strings.forEach((l) => {
        const a = l.userData.amp, p = l.geometry.attributes.position;
        for (let k = 0; k < 40; k++) { const u = k / 39, y = .14 + u * 1.26; const d = Math.sin(u * Math.PI) * a * Math.sin(t * 90 + k * .2); p.setXYZ(k, l.userData.x + d, y, .032 + (u > .38 ? .0 : (.38 - u) * .01)); }
        p.needsUpdate = true; l.userData.amp *= .965;
      });
      placeStrings(0);
      const inst = new THREE.Group(); inst.add(body, top, neck, head); group.add(inst);
      group.rotation.z = -.32; group.position.y = .35;
      // Дыбыс: Karplus–Strong тәсілімен шертпе
      let ac;
      const pluck = (freq, when = 0) => {
        ac ||= new (window.AudioContext || window.webkitAudioContext)();
        ac.resume();
        const len = Math.floor(ac.sampleRate * 1.6), buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
        const period = Math.round(ac.sampleRate / freq), ring = new Float32Array(period);
        for (let i = 0; i < period; i++) ring[i] = Math.random() * 2 - 1;
        for (let i = 0, p = 0; i < len; i++) { const n = (p + 1) % period; d[i] = ring[p]; ring[p] = .996 * .5 * (ring[p] + ring[n]); p = n; }
        const src = ac.createBufferSource(), g = ac.createGain(); g.gain.value = .35; src.buffer = buf; src.connect(g).connect(ac.destination); src.start(ac.currentTime + when);
      };
      const ray = new THREE.Raycaster(); ray.params.Line.threshold = .03;
      canvas.addEventListener("click", (e) => {
        if (current?.group !== group) return;
        const r = canvas.getBoundingClientRect();
        ray.setFromCamera({x: (e.clientX - r.left) / r.width * 2 - 1, y: -(e.clientY - r.top) / r.height * 2 + 1}, camera);
        const hit = ray.intersectObjects([...strings, body, top, neck])[0];
        if (!hit) return;
        const s = strings.includes(hit.object) ? hit.object : strings[hit.point.x > 0 ? 1 : 0];
        s.userData.amp = .012; pluck(s.userData.freq);
      });
      const tune = [[0, 0], [.18, 1], [.36, 0], [.54, 1], [.72, 0], [.9, 0], [1.08, 1], [1.26, 1]];
      let played = [];
      return {group, reset: () => { played = []; }, play: () => { played = []; },
        update: (t) => {
          for (let i = 0; i < tune.length; i++) if (!played[i] && t >= tune[i][0]) { played[i] = 1; const s = strings[tune[i][1]]; s.userData.amp = .01; pluck(s.userData.freq * (i === 5 ? 1.335 : 1)); }
          return t < 3;
        }, tick: (t) => placeStrings(t)};
    },
    toguz() {
      const group = new THREE.Group();
      const woodMat = new THREE.MeshStandardMaterial({color: 0x7b4a26, roughness: .55, map: woodTexture()});
      const board = new THREE.Mesh(new THREE.BoxGeometry(3.6, .18, 1.9), woodMat); board.position.y = .09; board.castShadow = true; board.receiveShadow = true; group.add(board);
      const pitMat = new THREE.MeshStandardMaterial({color: 0x3a2213, roughness: .9});
      const pit = (x, z) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(.15, .13, .02, 24), pitMat); m.position.set(x, .181, z); group.add(m); };
      const pitX = (i) => -1.6 + i * .4;
      for (let i = 0; i < 9; i++) { pit(pitX(i), .65); pit(pitX(i), -.65); }
      const kazan = (z) => { const m = new THREE.Mesh(new THREE.BoxGeometry(3.2, .02, .28), pitMat); m.position.set(0, .181, z); group.add(m); };
      kazan(.2); kazan(-.2);
      const stone = new THREE.InstancedMesh(new THREE.SphereGeometry(.035, 12, 8), new THREE.MeshStandardMaterial({color: 0xe8e0cf, roughness: .5}), 162);
      stone.castShadow = true; group.add(stone);
      // Ұяшықтар: 0..8 — төменгі қатар (солдан оңға), 9..17 — жоғарғы қатар (оңнан солға)
      const pitPos = (k) => k < 9 ? [pitX(k), .65] : [pitX(17 - k), -.65];
      const m4 = new THREE.Matrix4();
      const slot = (k, n) => { const [x, z] = pitPos(k); const a = n * 2.39996, r = .022 * Math.sqrt(n) + (n ? .02 : 0); return new THREE.Vector3(x + Math.cos(a) * r, .22 + Math.floor(n / 9) * .04, z + Math.sin(a) * r); };
      let counts, owners;
      const layout = () => { let id = 0; for (let k = 0; k < 18; k++) for (let n = 0; n < counts[k]; n++) { stone.setMatrixAt(id++, m4.makeTranslation(slot(k, n))); } stone.count = id; stone.instanceMatrix.needsUpdate = true; };
      const reset = () => { counts = Array(18).fill(9); layout(); };
      reset();
      // Жүріс: 3-ұяшықтағы барлық құмалақты алып, біріншісін өз орнына, қалғанын кезекпен келесі ұяшықтарға салу
      let move;
      return {group, reset, play: () => {
        reset();
        const from = 2, n = counts[from];
        move = {from, n, targets: Array.from({length: n}, (_, i) => (from + i) % 18)};
        counts[from] = 0; layout();
      }, update: (t) => {
        if (!move) return false;
        const per = .45, i = Math.floor(t / per), f = (t % per) / per;
        const done = Math.min(i, move.n);
        const tmp = counts.slice(); for (let j = 0; j < done; j++) tmp[move.targets[j]]++;
        let id = 0; for (let k = 0; k < 18; k++) for (let q = 0; q < tmp[k]; q++) stone.setMatrixAt(id++, m4.makeTranslation(slot(k, q)));
        // қолдағы құмалақтар
        const handFrom = slot(move.from, 0);
        for (let j = done; j < move.n; j++) {
          let p = handFrom.clone().add(new THREE.Vector3(0, .55, 0));
          if (j === done && i < move.n) { const to = slot(move.targets[j], tmp[move.targets[j]]); const prev = j ? slot(move.targets[j - 1], 0).add(new THREE.Vector3(0, .55, 0)) : p; p = prev.clone().lerp(to, f); p.y += Math.sin(f * Math.PI) * .25 * (1 - f) + (1 - f) * .35; }
          else p.add(new THREE.Vector3((j - done) * .02, (j - done) * .04, 0));
          stone.setMatrixAt(id++, m4.makeTranslation(p));
        }
        stone.count = id; stone.instanceMatrix.needsUpdate = true;
        if (i >= move.n) { counts = tmp; move = null; return false; }
        return true;
      }};
    },
    ornament() {
      const group = new THREE.Group();
      const shape = new THREE.Shape();
      // Қошқар мүйіз: екі жаққа ширатылған мүйіз және ортаңғы сабақ (жолақтың сыртқы контуры)
      const horn = (d) => {
        const path = new THREE.Path();
        const pts = [];
        for (let i = 0; i <= 80; i++) { const t = i / 80, a = t * Math.PI * 2.3, r = .62 * (1 - t * .78); pts.push([d * (.18 + r * Math.cos(a) + .55 - t * .2), .2 + r * Math.sin(a) * .95 + t * .1]); }
        return pts;
      };
      const strokeShape = (pts, w) => {
        const left = [], right = [];
        for (let i = 0; i < pts.length; i++) {
          const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
          const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1, k = w * (1 - i / pts.length * .55);
          left.push([pts[i][0] - dy / l * k, pts[i][1] + dx / l * k]); right.push([pts[i][0] + dy / l * k, pts[i][1] - dx / l * k]);
        }
        const s = new THREE.Shape(); left.forEach((p, i) => i ? s.lineTo(...p) : s.moveTo(...p)); right.reverse().forEach((p) => s.lineTo(...p)); s.closePath();
        return s;
      };
      const gold = new THREE.MeshStandardMaterial({color: COLORS.gold, metalness: 1, roughness: .28});
      const extrude = {depth: .08, bevelEnabled: true, bevelThickness: .03, bevelSize: .02, bevelSegments: 3, curveSegments: 6};
      const relief = new THREE.Group();
      for (const d of [-1, 1]) relief.add(new THREE.Mesh(new THREE.ExtrudeGeometry(strokeShape(horn(d), .07), extrude), gold));
      const stem = new THREE.Shape(); stem.moveTo(-.07, -.9); stem.lineTo(.07, -.9); stem.lineTo(.07, .25); stem.lineTo(0, .38); stem.lineTo(-.07, .25); stem.closePath();
      relief.add(new THREE.Mesh(new THREE.ExtrudeGeometry(stem, extrude), gold));
      for (const d of [-1, 1]) { const leaf = new THREE.Shape(); leaf.moveTo(0, -.55); leaf.quadraticCurveTo(d * .5, -.6, d * .55, -.95); leaf.quadraticCurveTo(d * .25, -.8, 0, -.7); relief.add(new THREE.Mesh(new THREE.ExtrudeGeometry(leaf, extrude), gold)); }
      relief.children.forEach((m) => { m.castShadow = true; });
      relief.position.set(0, 1.5, .1);
      const disk = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.45, .1, 80), new THREE.MeshStandardMaterial({color: COLORS.red, roughness: .8, map: feltTexture("#9e2f28", ["#6d1d18", "#c24c40"])}));
      disk.rotation.x = Math.PI / 2; disk.position.set(0, 1.5, -.02); disk.receiveShadow = true;
      const rim = new THREE.Mesh(new THREE.TorusGeometry(1.45, .05, 12, 96), gold); rim.position.set(0, 1.5, .03);
      const holder = new THREE.Mesh(new THREE.BoxGeometry(.4, .1, .3), new THREE.MeshStandardMaterial({color: 0x3a2213})); holder.position.set(0, .05, 0);
      group.add(disk, rim, relief, holder);
      return {group, reset: () => { relief.rotation.y = 0; }, play: () => {}, update: (t) => { relief.rotation.y = Math.sin(t * 1.4) * .6 * Math.max(0, 1 - t / 6); relief.position.z = .1 + Math.sin(t * 3) * .03; return t < 6; }};
    }
  };

  function frame() {
    if (!running) return;
    fit(renderer, camera);
    const raw = clock.getDelta(), dt = Math.min(.05, raw);
    controls.update(dt);
    if (current) {
      if (playing) { anim += Math.min(.25, raw); if (!current.update(anim)) { playing = false; current.reset?.(); if (current === built.toguz) current.update(0); } }
      current.tick?.(clock.elapsedTime);
    }
    // Бағдарламалық рендерде тек өзгеріс болғанда саламыз
    if (!software || dirty || playing || controls.autoRotate) { renderer.render(scene, camera); dirty = false; }
    if (software && !playing) { running = false; return; }
    requestAnimationFrame(frame);
  }
  const wake = () => { dirty = true; if (!running && visible) { running = true; clock.getDelta(); requestAnimationFrame(frame); } };
  if (software) { canvas.addEventListener("pointermove", (e) => { if (e.buttons) wake(); }); canvas.addEventListener("wheel", wake, {passive: true}); canvas.addEventListener("pointerdown", wake); canvas.addEventListener("pointerup", wake); }
  let visible = false;
  const stage = canvas.parentElement;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; const was = running; running = visible; if (running && !was) { clock.getDelta(); requestAnimationFrame(frame); } }, {rootMargin: "200px"}).observe(stage);
  document.addEventListener("dala:exhibit", (e) => { show(e.detail); wake(); });
  show(window.DALA_PENDING_EXHIBIT || "yurt");
  // Киіз үйді алғаш ашқанда жиналу анимациясын бірден көрсету
  if (!reduceMotion && !software && (window.DALA_PENDING_EXHIBIT || "yurt") === "yurt") { playing = true; anim = 0; }
  window.DALA_MUSEUM3D = {show, play: () => document.getElementById("museum-play").click()};
}

const heroCanvas = document.getElementById("hero-canvas");
if (heroCanvas) heroScene(heroCanvas);
const museumCanvas = document.getElementById("museum-canvas");
if (museumCanvas) {
  // Мұражай сахнасы бетке жақындағанда ғана құрылады
  const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { ob.disconnect(); museum(museumCanvas); } }, {rootMargin: "400px"});
  ob.observe(museumCanvas);
}
