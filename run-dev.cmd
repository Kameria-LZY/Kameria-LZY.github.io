@echo off
rem Local preview launcher. Double-click, then open http://localhost:3000/
rem Uses the portable Node in ..\toolchain when present, otherwise the system Node.
setlocal
set "NODE_DIR=%~dp0..\toolchain\node-v22.14.0-win-x64"
if exist "%NODE_DIR%\node.exe" set "PATH=%NODE_DIR%;%PATH%"
cd /d "%~dp0"
if exist "%NODE_DIR%\node.exe" (
  node "%NODE_DIR%\node_modules\npm\bin\npm-cli.js" run dev
) else (
  npm run dev
)
pause
