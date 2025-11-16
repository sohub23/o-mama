# 📝 Commands Cheatsheet - Email Integration

## 🚀 Installation Commands

### Install Backend Dependencies
```bash
cd server
npm install
```

### Install Frontend Dependencies (if needed)
```bash
npm install
```

---

## ▶️ Start Commands

### Start Backend Server (Development)
```bash
cd server
npm run dev
```
**Output:** Server running on port 3001

### Start Backend Server (Production)
```bash
cd server
npm start
```

### Start Frontend
```bash
npm run dev
```
**Output:** Frontend running on port 5173

---

## 🧪 Testing Commands

### Test Email Configuration
```bash
cd server
npm test
```
**What it does:** Sends a test email to verify SMTP setup

### Test Backend API (using curl)
```bash
curl -X POST http://localhost:3001/send-mail ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"message\":\"Test message\"}"
```

---

## 🛠️ Development Commands

### Watch Backend for Changes
```bash
cd server
npm run dev
```
**Uses:** nodemon (auto-restart on file changes)

### Build Frontend for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📦 Package Management

### Update Backend Dependencies
```bash
cd server
npm update
```

### Check for Outdated Packages
```bash
cd server
npm outdated
```

### Install Specific Package
```bash
cd server
npm install package-name
```

---

## 🔍 Debugging Commands

### Check Backend Server Status
```bash
# Windows
netstat -ano | findstr :3001

# Check if port is in use
```

### View Backend Logs
```bash
cd server
npm run dev
# Logs appear in console
```

### Check Node Version
```bash
node --version
```

### Check npm Version
```bash
npm --version
```

---

## 🧹 Cleanup Commands

### Remove node_modules (Backend)
```bash
cd server
rmdir /s /q node_modules
```

### Remove node_modules (Frontend)
```bash
rmdir /s /q node_modules
```

### Clean Install (Backend)
```bash
cd server
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

## 📁 File Operations

### View .env File
```bash
cd server
type .env
```

### Edit .env File
```bash
cd server
notepad .env
```

### Check if Files Exist
```bash
dir server\index.js
dir server\.env
dir server\package.json
```

---

## 🌐 Production Commands

### Set Environment Variables (Example for Heroku)
```bash
heroku config:set SMTP_HOST=smtp.gmail.com
heroku config:set SMTP_USER=sohub.web@gmail.com
heroku config:set SMTP_PASS="nzvj pwif dqmc rhyb"
heroku config:set SMTP_PORT=587
```

### Deploy Backend (Example for Heroku)
```bash
cd server
git init
heroku create your-app-name
git add .
git commit -m "Deploy backend"
git push heroku main
```

---

## 🔧 Troubleshooting Commands

### Kill Process on Port 3001 (Windows)
```bash
# Find process
netstat -ano | findstr :3001

# Kill process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

### Clear npm Cache
```bash
npm cache clean --force
```

### Reinstall Everything
```bash
# Backend
cd server
rmdir /s /q node_modules
del package-lock.json
npm install

# Frontend
cd ..
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

## 📊 Monitoring Commands

### Check Backend Health
```bash
curl http://localhost:3001/send-mail
```
**Expected:** 400 error (missing fields) - means server is running

### Monitor Backend Logs
```bash
cd server
npm run dev
# Keep terminal open to see logs
```

---

## 🎯 Quick Start (Copy-Paste Ready)

### First Time Setup
```bash
cd server && npm install && cd ..
```

### Start Both Servers (Two Terminals)

**Terminal 1 (Backend):**
```bash
cd server && npm run dev
```

**Terminal 2 (Frontend):**
```bash
npm run dev
```

---

## 🔐 Security Commands

### Check for Vulnerabilities
```bash
cd server
npm audit
```

### Fix Vulnerabilities
```bash
cd server
npm audit fix
```

---

## 📝 Git Commands (if using version control)

### Add .gitignore
```bash
echo node_modules/ >> .gitignore
echo .env >> .gitignore
echo *.log >> .gitignore
```

### Commit Changes
```bash
git add .
git commit -m "Add email integration"
git push
```

---

## 🎨 Useful Aliases (Optional)

Add to your shell profile for quick access:

```bash
# Backend start
alias backend="cd server && npm run dev"

# Frontend start
alias frontend="npm run dev"

# Test email
alias test-email="cd server && npm test"
```

---

## 📞 Help Commands

### View npm Scripts
```bash
cd server
npm run
```

### View Package Info
```bash
cd server
npm list
```

### Get Help for npm Command
```bash
npm help install
```

---

## ✅ Verification Commands

### Check All Files Created
```bash
dir server\index.js
dir server\package.json
dir server\.env
dir server\test-email.js
dir QUICK_START.md
dir SETUP_EMAIL.md
```

### Verify Backend Dependencies
```bash
cd server
npm list express nodemailer cors dotenv
```

---

## 🚨 Emergency Commands

### Stop All Node Processes (Windows)
```bash
taskkill /F /IM node.exe
```

### Restart Everything
```bash
# Stop all node processes
taskkill /F /IM node.exe

# Start backend
cd server && npm run dev

# Start frontend (new terminal)
npm run dev
```

---

## 📖 Documentation Commands

### View README Files
```bash
type QUICK_START.md
type SETUP_EMAIL.md
type EMAIL_INTEGRATION_README.md
```

---

**💡 Tip:** Keep this file open while working for quick reference!
