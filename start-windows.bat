@echo off
chcp 65001 >nul
title Dala murasy
cd /d "%~dp0dist"
echo Dala murasy: http://localhost:8000
echo Toqtatu ushin osy terezeni jabynyz.
where python >nul 2>nul && goto py1
where py >nul 2>nul && goto py2
echo Python tabylmady: sait fail retinde ashylady.
start "" "%~dp0dist\index.html"
exit /b
:py1
start "" cmd /c "timeout /t 2 >nul & start http://localhost:8000"
python -m http.server 8000 --bind 127.0.0.1
exit /b
:py2
start "" cmd /c "timeout /t 2 >nul & start http://localhost:8000"
py -m http.server 8000 --bind 127.0.0.1
