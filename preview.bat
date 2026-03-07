@echo off
setlocal

echo === START PREVIEW ZYNVRAE ===
echo.
echo Cleaning old process on port 3000...
for /f "tokens=5" %%P in ('netstat -ano ^| findstr ":3000" ^| findstr "LISTENING"') do (
  taskkill /PID %%P /F >nul 2>nul
)
echo.
echo Clearing Next.js webpack cache...
if exist ".next\cache\webpack" rmdir /s /q ".next\cache\webpack"
echo.
echo Opening local dev server on http://localhost:3000
echo Press Ctrl+C to stop the server.
echo.

cmd /c npm run dev

endlocal
