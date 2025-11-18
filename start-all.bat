@echo off
echo ========================================
echo Starting O Mama Email Integration
echo ========================================
echo.

echo [1/4] Checking backend dependencies...
cd server
if not exist node_modules (
  echo Installing backend dependencies...
  call npm install
) else (
  echo Backend dependencies already installed.
)
echo.

echo [2/4] Starting backend server...
start "O Mama Backend" cmd /k "npm start"
cd ..
echo Backend server starting on http://localhost:3001
echo.

echo [3/4] Checking frontend dependencies...
if not exist node_modules (
  echo Installing frontend dependencies...
  call npm install
) else (
  echo Frontend dependencies already installed.
)
echo.

echo [4/4] Starting frontend...
start "O Mama Frontend" cmd /k "npm run dev"

echo.
echo ========================================
echo Both servers are starting!
echo ========================================
echo Backend:  http://localhost:3001
echo Frontend: http://localhost:5173
echo.
echo Press any key to close this window...
pause > nul
