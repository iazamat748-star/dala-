// Дала мұрасы · 3D бөлімдердің ортақ жинағы.
// tools/build.py esbuild арқылы dist/dala3d.js файлына жинайды (кәдімгі скрипт, ES модуль емес),
// сондықтан сайт файлды екі рет басып ашқанда да (file://) 3D жұмыс істейді.
import "./museum3d.js";
import {start as asyk} from "./asyk3d.js";
import {start as bayge} from "./bayge3d.js";
import {start as yurt} from "./yurt3d.js";
window.DALA3D = {asyk, bayge, yurt};
