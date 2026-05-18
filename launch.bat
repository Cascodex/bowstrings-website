@echo off
cd /d "%~dp0"
title Bowstrings Website - Dev Server

echo ============================================
echo  Bowstrings Website launcher
echo ============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js is not installed or not on PATH.
  echo Install it from https://nodejs.org and try again.
  echo.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo ERROR: npm is not on PATH.
  echo Reinstall Node.js from https://nodejs.org and try again.
  echo.
  pause
  exit /b 1
)

echo Node version:
node -v
echo npm version:
call npm -v
echo.

if not exist "node_modules\" (
  echo Installing dependencies, this may take a minute...
  call npm install
  if errorlevel 1 (
    echo.
    echo npm install failed. See messages above.
    pause
    exit /b 1
  )
)

echo Starting dev server at http://localhost:3000 ...
echo (The browser will open in a few seconds. Press Ctrl+C to stop.)
echo.

start "" /b cmd /c "timeout /t 4 >nul && start "" http://localhost:3000"

call npm run dev

echo.
echo Dev server stopped.
pause
