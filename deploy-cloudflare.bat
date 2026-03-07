@echo off
setlocal

echo === START DEPLOY TO CLOUDFLARE PAGES ===

echo [1/4] Pull latest from origin/main...
git pull --rebase --autostash origin main
if errorlevel 1 (
  echo REBASE FAILED. Resolve conflicts and retry.
  pause
  exit /b 1
)

echo [2/4] Verify build...
call npm run build
if errorlevel 1 (
  echo BUILD FAILED.
  pause
  exit /b 1
)

echo [3/4] Commit source changes...
git add -A
git diff --cached --quiet
if %errorlevel%==0 (
  echo No file changes. Skip commit.
) else (
  git commit -m "chore: update site for Cloudflare Pages"
)

echo [4/4] Push source to origin/main...
git push origin main
if errorlevel 1 (
  echo PUSH FAILED.
  pause
  exit /b 1
)

echo PUSH DONE.
echo Cloudflare Pages will build from GitHub and publish the out/ output directory.
pause
endlocal
