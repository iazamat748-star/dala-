"use strict";
// Дала мұрасы · офлайн жұмыс (service worker) және орнату
(() => {
  if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
  const base = new URL("./", document.currentScript.src);
  const swUrl = new URL("sw.js", base);
  let registration;
  navigator.serviceWorker.register(swUrl, {scope: base.pathname}).then((r) => { registration = r; refresh(); }).catch(() => {});

  // Футерге офлайн батырмасы
  const footer = document.querySelector("body > footer .footer-inner") || document.querySelector("body > footer .t-wrap") || document.querySelector("body > footer");
  if (!footer) return;
  const box = document.createElement("div");
  box.className = "offline-box";
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "offline-button";
  const note = document.createElement("small");
  note.setAttribute("role", "status");
  box.append(btn, note);
  footer.append(box);
  const style = document.createElement("style");
  style.textContent = `.offline-box{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.offline-button{font:inherit;font-size:13px;font-weight:700;border:1px solid #315d8c;color:#315d8c;background:#fff;border-radius:20px;padding:7px 14px;cursor:pointer}
.offline-button[disabled]{border-color:#2f6d58;color:#2f6d58;cursor:default}
.offline-box small{font-size:12px;color:#5d6a78}
.net-flag{position:fixed;left:50%;top:12px;transform:translateX(-50%);z-index:2147483000;background:#14271f;color:#f6efdc;border-radius:20px;padding:8px 16px;font:13px Arial,sans-serif;box-shadow:0 8px 22px #0005}`;
  document.head.append(style);
  async function refresh() {
    let ready = false;
    try {
      const keys = await caches.keys();
      for (const k of keys) {
        if (!k.startsWith("dala-")) continue;
        const c = await caches.open(k);
        if (await c.match(new URL("dala-mesh.bin", base), {ignoreSearch: true}) && await c.match(new URL("karatau/dala-mesh.bin", base), {ignoreSearch: true}) && await c.match(new URL("orbulak/dala-mesh.bin", base), {ignoreSearch: true})) ready = true;
      }
    } catch {}
    btn.disabled = ready;
    btn.textContent = ready ? "✓ Офлайн режим дайын" : "⬇ Офлайн жүктеу (≈8 МБ)";
    note.textContent = ready ? "Сайт пен үш 3D ойын интернетсіз ашылады." : "Барлық сабақ пен 3D ойынды интернетсіз пайдалану үшін.";
  }
  btn.addEventListener("click", async () => {
    const worker = registration?.active || (await navigator.serviceWorker.ready).active;
    if (!worker) { note.textContent = "Офлайн режимді қазір қосу мүмкін болмады. Бетті жаңартып көр."; return; }
    btn.disabled = true;
    note.textContent = "Жүктелуде…";
    worker.postMessage({type: "cache-all"});
  });
  navigator.serviceWorker.addEventListener("message", (e) => {
    const d = e.data || {};
    if (d.type === "cache-progress") note.textContent = `Жүктелуде… ${d.done} / ${d.total}`;
    if (d.type === "cache-done") { note.textContent = d.failed ? `${d.failed} файл жүктелмеді. Қайта байқап көр.` : "Дайын!"; btn.disabled = false; refresh(); }
  });
  const flag = (text) => {
    const n = document.createElement("div");
    n.className = "net-flag";
    n.textContent = text;
    ([...document.querySelectorAll("dialog[open]")].pop() || document.body).append(n);
    setTimeout(() => n.remove(), 3500);
  };
  addEventListener("offline", () => flag("Интернет жоқ · сақталған нұсқа ашылады"));
  addEventListener("online", () => flag("Интернет қайта қосылды"));
})();
