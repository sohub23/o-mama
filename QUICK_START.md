# ⚡ Quick Start Guide - Email Integration

## 🚀 Start in 3 Steps

### Step 1: Install Backend Dependencies
```bash
cd server
npm install
```

### Step 2: Start Backend Server
```bash
npm run dev
```
✅ Backend running on: **http://localhost:3001**

### Step 3: Start Frontend (New Terminal)
```bash
cd ..
npm run dev
```
✅ Frontend running on: **http://localhost:5173**

---

## 🧪 Test Email Configuration (Optional)

Before starting the servers, test if email is working:

```bash
cd server
npm test
```

This sends a test email to verify SMTP configuration.

---

## 📧 What Happens When Form is Submitted?

1. Customer fills contact form
2. **Email 1** → Sent to **sohub.web@gmail.com** (admin)
3. **Email 2** → Sent to **customer's email** (auto-reply)
4. Success message shown on website

---

## 🔧 Quick Troubleshooting

### Backend won't start?
```bash
cd server
npm install
```

### Emails not sending?
- Check `server/.env` file exists
- Verify SMTP credentials are correct
- Run `npm test` in server directory

### Form not working?
- Ensure backend is running (http://localhost:3001)
- Check browser console for errors
- Verify all required fields are filled

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `server/index.js` | Backend server code |
| `server/.env` | SMTP credentials |
| `src/components/Contact.tsx` | Contact form |
| `SETUP_EMAIL.md` | Detailed setup guide |
| `EMAIL_INTEGRATION_README.md` | Complete documentation |

---

## ✅ Success Checklist

- [ ] Backend dependencies installed
- [ ] Backend server running (port 3001)
- [ ] Frontend server running (port 5173)
- [ ] Test email sent successfully
- [ ] Contact form submits without errors
- [ ] Admin receives email
- [ ] Customer receives auto-reply

---

## 🎯 Need Help?

1. Read `SETUP_EMAIL.md` for detailed instructions
2. Check `EMAIL_INTEGRATION_README.md` for troubleshooting
3. Review `IMPLEMENTATION_SUMMARY.md` for overview

---

## 🌐 Production Deployment

When ready for production:

1. Deploy backend to hosting service
2. Update API URL in `Contact.tsx`
3. Set environment variables on host
4. Test thoroughly

---

**That's it! You're ready to go! 🎉**
