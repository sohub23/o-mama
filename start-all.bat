@echo off
echo Starting O Mama Email Integration...
echo.

echo Installing backend dependencies...
cd server
call npm install
echo.

echo Starting backend server...
start cmd /k "npm run dev"
cd ..

echo.
echo Backend server started on http://localhost:3001
echo.
echo Starting frontend...
start cmd /k "npm run dev"

echo.
echo Both servers are starting...
echo Backend: http://localhost:3001
echo Frontend: http://localhost:5173
echo.
pause
