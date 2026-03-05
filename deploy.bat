@echo off
setlocal
echo === 開始部署 Zynvrae ===

set currentTime=%time%
set currentDate=%date%

echo [%currentTime%] 先同步遠端...
git pull --rebase origin main
if errorlevel 1 (
  echo.
  echo REBASE FAILED，請先處理衝突後重試。
  pause
  exit /b 1
)

echo [%currentTime%] 執行建置檢查...
call npm run build
if errorlevel 1 (
  echo.
  echo BUILD FAILED，停止部署。
  pause
  exit /b 1
)

echo [%currentTime%] 同步 out 到根目錄（GitHub Pages）...
for %%D in (404 about company contact platform platforms principles products updates _next) do (
  if exist "%%D" rmdir /s /q "%%D"
)
for %%F in (index.html 404.html robots.txt sitemap.xml) do (
  if exist "%%F" del /f /q "%%F"
)
xcopy out\* . /E /I /Y >nul
if errorlevel 1 (
  echo.
  echo EXPORT SYNC FAILED，請檢查 out 目錄。
  pause
  exit /b 1
)

echo [%currentTime%] 收集變更...
git add -A
git diff --cached --quiet
if %errorlevel%==0 (
  echo 沒有新的檔案變更，略過 commit。
  goto :PUSH
) else (
  git commit -m "chore: deploy %currentDate% %currentTime%"
)

:PUSH
echo [%currentTime%] 推送到 GitHub...
git push origin main
if errorlevel 1 (
  echo.
  echo PUSH FAILED，請檢查權限或遠端狀態。
  pause
  exit /b 1
)

echo.
echo DEPLOY DONE。
pause
echo.
echo === 結束 ===
endlocal
