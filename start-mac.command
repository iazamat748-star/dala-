#!/bin/bash
# Дала мұрасы: ноутбукта іске қосу (macOS). Тоқтату үшін терезені жабыңыз.
cd "$(dirname "$0")/dist" || exit 1
if command -v python3 >/dev/null; then
  (sleep 2; open "http://localhost:8000") &
  python3 -m http.server 8000 --bind 127.0.0.1
else
  open "index.html"
fi
