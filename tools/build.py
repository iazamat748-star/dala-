"""Дала мұрасы · құрастыру.

dist/sw.js офлайн тізімі мен нұсқасын жаңартады және офлайн батырмасындағы көлемді жазады.

dist/ ішіндегі кез келген өзгерістен кейін іске қос:
    python tools/build.py
"""
import hashlib, json, os, re
from pathlib import Path

DIST = Path(__file__).resolve().parent.parent / "dist"
CORE_EXT = {".html", ".js", ".css", ".webmanifest", ".svg", ".ico", ".woff2"}
SKIP = {"sw.js"}  # site.css is included below like any other file

# 0) Басты беттің CSS файлдарын бір home.css файлына біріктіру (бетті бөгейтін сұраныстар азаяды)
HOME_CSS = ["fonts/fonts.css", "explore.css", "features.css", "v3.css"]
parts = []
for name in HOME_CSS:
    text = (DIST / name).read_text(encoding="utf-8")
    if name.startswith("fonts/"):
        text = re.sub(r"url\((?!fonts/)", "url(fonts/", text)
    parts.append(f"/* ---- {name} ---- */\n{text.strip()}\n")
(DIST / "home.css").write_text("/* tools/build.py жасайды. Өзгерісті бастапқы CSS файлдарына енгіз. */\n" + "".join(parts), encoding="utf-8")

def all_files():
    return [p for p in sorted(DIST.rglob("*")) if p.is_file() and p.name not in SKIP and not p.name.startswith(".")]

# 1) офлайн батырмасындағы көлемді жаңарту
mb = round(sum(p.stat().st_size for p in all_files()) / 1024 / 1024)
pwa = DIST / "pwa.js"
pwa.write_text(re.sub(r"≈\d+ МБ", f"≈{mb} МБ", pwa.read_text(encoding="utf-8")), encoding="utf-8")

# 2) файлдар тізімі мен нұсқа хэші
files, digest, total = [], hashlib.sha256(), 0
for path in sorted(DIST.rglob("*")):
    if not path.is_file() or path.name in SKIP or path.name.startswith("."):
        continue
    rel = path.relative_to(DIST).as_posix()
    data = path.read_bytes()
    digest.update(rel.encode() + data)
    total += len(data)
    files.append(rel)

core = ["./"] + [f for f in files if Path(f).suffix in CORE_EXT]
core += ["qozybasy/", "orbulak/", "karatau/"]
full = ["./", "qozybasy/", "orbulak/", "karatau/"] + files
version = digest.hexdigest()[:10]

template = (DIST.parent / "tools" / "sw.template.js").read_text(encoding="utf-8")
out = (template.replace("__VERSION__", version)
               .replace("__CORE__", json.dumps(core, ensure_ascii=False))
               .replace("__FULL__", json.dumps(full, ensure_ascii=False)))
(DIST / "sw.js").write_text(out, encoding="utf-8")

print(f"sw.js version {version}: {len(core)} core, {len(full)} files, {total/1024/1024:.1f} MB")
