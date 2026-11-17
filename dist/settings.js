"use strict";
// Дала мұрасы · оқу баптаулары: тақырып (жарық/қараңғы), мәтін өлшемі, жоғары контраст, қозғалысты азайту, оқуға ыңғайлы мәтін
(() => {
  const KEY = "dala-murasy-settings-v1";
  const root = document.documentElement;
  const defaults = {theme: "auto", size: 1, contrast: false, motion: false, readable: false};
  let s;
  try { s = {...defaults, ...JSON.parse(localStorage.getItem(KEY))}; } catch { s = {...defaults}; }
  const media = matchMedia("(prefers-color-scheme: dark)");
  function apply() {
    const dark = s.theme === "dark" || (s.theme === "auto" && media.matches);
    root.classList.toggle("theme-dark", dark);
    root.classList.toggle("high-contrast", s.contrast);
    root.classList.toggle("reduce-motion", s.motion);
    root.classList.toggle("readable", s.readable);
    root.style.setProperty("--ui-zoom", String(s.size));
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#10181f" : "#f4f1e8");
  }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} apply(); };
  apply();
  media.addEventListener?.("change", apply);
  window.DALA_SETTINGS = {get: () => ({...s}), apply};

  const build = () => {
    const header = document.querySelector("header .top-inner, header .t-wrap");
    const existing = document.getElementById("settings-open");
    if ((!header && !existing) || existing?.dataset.ready) return;
    const make = (tag, text, cls, attrs) => {
      const n = document.createElement(tag);
      if (text) n.textContent = text;
      if (cls) n.className = cls;
      if (attrs) for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
      return n;
    };
    let open = existing;
    if (!open) {
      open = make("button", "Аа", "settings-open", {type: "button", id: "settings-open", "aria-haspopup": "dialog", title: "Оқу баптаулары"});
      open.append(make("span", " Баптаулар", "sr"));
      header.append(open);
    }
    open.dataset.ready = "1";
    const dialog = make("dialog", null, "settings-dialog", {"aria-labelledby": "settings-title"});
    const h = make("h2", "Оқу баптаулары", null, {id: "settings-title"});
    const group = (title, name, options) => {
      const f = make("fieldset");
      f.append(make("legend", title));
      const row = make("div", null, "settings-options");
      for (const [value, label] of options) {
        const id = `set-${name}-${value}`;
        const input = make("input", null, null, {type: "radio", name, id, value: String(value)});
        input.checked = String(s[name]) === String(value);
        input.addEventListener("change", () => { s[name] = name === "size" ? Number(value) : value; save(); });
        const lab = make("label", label, null, {for: id});
        row.append(input, lab);
      }
      f.append(row);
      return f;
    };
    const toggle = (name, label, hint) => {
      const wrap = make("label", null, "settings-toggle");
      const input = make("input", null, null, {type: "checkbox", role: "switch"});
      input.checked = Boolean(s[name]);
      input.addEventListener("change", () => { s[name] = input.checked; save(); });
      const text = make("span");
      text.append(make("strong", label), make("small", hint));
      wrap.append(input, text);
      return wrap;
    };
    const close = make("button", "Дайын", "play", {type: "button"});
    close.addEventListener("click", () => dialog.close());
    const reset = make("button", "Бастапқы қалпына келтіру", "trial-button", {type: "button"});
    reset.addEventListener("click", () => { s = {...defaults}; save(); dialog.close(); location.reload(); });
    const actions = make("div", null, "x-actions");
    actions.append(close, reset);
    dialog.append(h,
      group("Тақырып", "theme", [["auto", "Жүйе бойынша"], ["light", "☀ Жарық"], ["dark", "☾ Қараңғы"]]),
      group("Мәтін өлшемі", "size", [[1, "Қалыпты"], [1.12, "Үлкен"], [1.25, "Өте үлкен"]]),
      toggle("contrast", "Жоғары контраст", "Мәтін мен жиектер айқынырақ көрінеді"),
      toggle("readable", "Оқуға ыңғайлы мәтін", "Әріп пен жол аралығы кеңейеді"),
      toggle("motion", "Қозғалысты азайту", "Анимациялар мен жылжу әсерлері өшеді"),
      make("p", "Баптаулар осы браузерде сақталады.", "x-note"), actions);
    document.body.append(dialog);
    open.addEventListener("click", () => dialog.showModal());
    dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();
