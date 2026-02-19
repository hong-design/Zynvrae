@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul

for /f %%I in ('powershell -NoProfile -Command "(Get-Date).ToString(\"yyyy-MM-dd HH:mm:ss\")"') do set "timestamp=%%I"

echo === Deploy to GitHub Pages ===
echo [%timestamp%] Stage changes...

git add -A
if errorlevel 1 (
  echo [ERROR] git add failed.
  exit /b 1
)

git diff --cached --quiet
set "diffExit=%errorlevel%"

if "%diffExit%"=="0" (
  echo [%timestamp%] No changes to commit.
) else (
  if "%diffExit%"=="1" (
    echo [%timestamp%] Commit changes...
    git commit -m "deploy: %timestamp%"
    if errorlevel 1 (
      echo [ERROR] git commit failed.
      exit /b 1
    )
  ) else (
    echo [ERROR] git diff --cached failed.
    exit /b 1
  )
)

echo [%timestamp%] Push to origin/main...
git push origin main
if errorlevel 1 (
  echo [ERROR] git push failed.
  exit /b 1
)

echo.
echo Deployment complete.
endlocal
