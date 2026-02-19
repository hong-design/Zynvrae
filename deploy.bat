@echo off
echo === 開始部署 PrismarkStudio ===

:: 記錄當前時間
set currentTime=%time%
set currentDate=%date%
echo [%currentTime%] 更新檔案狀態...

:: 將變更加入 Git
git add .

:: 自動建立 commit，包含時間戳
git commit -m "自動部署 %currentDate% %currentTime%"

:: Push 到 GitHub
git push origin main

echo.
echo ✅ 部署成功！網站已更新到 GitHub Pages。
pause
echo.
echo === 部署完成 === 