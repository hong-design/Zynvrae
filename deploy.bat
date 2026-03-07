@echo off
setlocal

echo === DEPLOY TO CLOUDFLARE PAGES ===

echo [1/4] Pull latest from origin/main...
git pull --rebase --autostash origin main
if errorlevel 1 (
  echo REBASE FAILED. Resolve conflicts and retry.
  pause
  exit /b 1
)

echo [2/4] Verify production build...
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
  git commit -m "chore: update site for Cloudflare"
)

echo [4/4] Push source to origin/main...
git push origin main
if errorlevel 1 (
  echo PUSH FAILED.
  pause
  exit /b 1
)

echo DEPLOY REQUEST SENT.
echo Cloudflare Pages will detect the new commit, build the site, and publish the out/ directory.
pause
endlocal
