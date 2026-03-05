@echo off
setlocal

echo === START DEPLOY ZYNVRAE ===

set currentTime=%time%
set currentDate=%date%

echo [%currentTime%] Pull latest from origin/main...
git pull --rebase --autostash origin main
if errorlevel 1 (
  echo REBASE FAILED. Resolve conflicts and retry.
  pause
  exit /b 1
)

echo [%currentTime%] Clean previous static export in repo root...
for %%D in (404 about company contact platform platforms principles products updates _next) do (
  if exist "%%D" rmdir /s /q "%%D"
)
for %%F in (index.html index.txt 404.html robots.txt sitemap.xml) do (
  if exist "%%F" del /f /q "%%F"
)

echo [%currentTime%] Build project...
call npm run build
if errorlevel 1 (
  echo BUILD FAILED.
  pause
  exit /b 1
)

echo [%currentTime%] Copy out/* to repo root for GitHub Pages...
xcopy out\* . /E /I /Y >nul
if errorlevel 1 (
  echo EXPORT SYNC FAILED.
  pause
  exit /b 1
)

echo [%currentTime%] Create fallback error chunk compatibility file...
if not exist "_next\static\chunks\fallback\pages" mkdir "_next\static\chunks\fallback\pages" >nul
for %%F in (_next\static\chunks\pages\_error-*.js) do (
  copy /Y "%%F" "_next\static\chunks\fallback\pages\_error.js" >nul
)

echo [%currentTime%] Stage changes...
git add -A
git diff --cached --quiet
if %errorlevel%==0 (
  echo No file changes. Skip commit.
  goto :PUSH
) else (
  git commit -m "chore: deploy %currentDate% %currentTime%"
)

:PUSH
echo [%currentTime%] Push to origin/main...
git push origin main
if errorlevel 1 (
  echo PUSH FAILED.
  pause
  exit /b 1
)

echo DEPLOY DONE.
pause
endlocal
