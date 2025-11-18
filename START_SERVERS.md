# How to Start O Mama Email System

## Problem Diagnosed ✅
The email wasn't working because:
1. `.env` file was in root directory, but server needs it in `server/` folder
2. Server dependencies weren't installed

## Fixed ✅
1. Copied `.env` to `server/` directory
2. Installed server dependencies
3. Added better error handling in Contact form

## To Start the Application:

### Option 1: Use the batch file (Easiest)
```bash
start-all.bat
```

### Option 2: Manual start (2 terminals)

**Terminal 1 - Backend Server:**
```bash
cd server
npm start
```
You should see: `Server running on port 3001`

**Terminal 2 - Frontend:**
```bash
npm run dev
```
You should see: `Local: http://localhost:5173/`

## Testing the Email:
1. Open http://localhost:5173
2. Scroll to Contact section
3. Fill the form and submit
4. Check:
   - Admin email: hello@sohub.com.bd
   - Customer email: (the email you entered)

## Troubleshooting:
- If emails don't send, check server terminal for errors
- Verify Gmail credentials in `server/.env`
- Make sure both servers are running
