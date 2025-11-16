# Email Integration Setup Guide

## Overview
This guide will help you set up the complete email integration for the O Mama contact form using Node.js, Express, and Nodemailer.

## Prerequisites
- Node.js installed (v14 or higher)
- npm or yarn package manager

## Step-by-Step Setup Instructions

### 1. Install Backend Dependencies

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

This will install:
- express (web server)
- nodemailer (email sending)
- cors (cross-origin requests)
- dotenv (environment variables)
- nodemon (development auto-reload)

### 2. Configure Environment Variables

The `.env` file is already created in the `server` folder with your SMTP credentials:

```
SMTP_HOST=smtp.gmail.com
SMTP_USER=sohub.web@gmail.com
SMTP_PASS=nzvj pwif dqmc rhyb
SMTP_PORT=587
PORT=3001
```

**Important:** Make sure this file is added to `.gitignore` to keep credentials secure.

### 3. Start the Backend Server

From the `server` directory, run:

```bash
# Development mode (auto-reload on changes)
npm run dev

# OR Production mode
npm start
```

The server will start on `http://localhost:3001`

### 4. Start the Frontend

In a new terminal, from the root project directory:

```bash
npm run dev
```

The frontend will start on `http://localhost:5173` (or your configured port)

### 5. Test the Integration

1. Open your browser and navigate to the contact form section
2. Fill out all required fields:
   - Name
   - Email
   - Phone
   - Interest (select from dropdown)
3. Click "Submit Request"
4. You should see a success message
5. Check both:
   - Admin email (sohub.web@gmail.com) for the customer inquiry
   - Customer email for the auto-reply

## How It Works

### Backend Flow (`server/index.js`)

1. **Receives POST request** at `/send-mail` endpoint
2. **Validates** required fields (name, email, message)
3. **Sends two emails**:
   - Email to admin with customer details
   - Auto-reply to customer confirming receipt
4. **Returns JSON response** with success/failure status

### Frontend Flow (`src/components/Contact.tsx`)

1. **Form submission** triggers `handleSubmit` function
2. **Collects form data** and formats it
3. **Sends POST request** to backend API
4. **Displays toast notification** based on response
5. **Resets form** on success

## Email Templates

### Admin Email
- Subject: "New Contact Form Submission from [Name]"
- Contains: Name, Email, Phone, Company, Interest, Message

### Customer Auto-Reply
- Subject: "Thank you for contacting O Mama"
- Contains: Personalized greeting, confirmation message, copy of their inquiry

## Troubleshooting

### Backend not starting
- Ensure all dependencies are installed: `npm install`
- Check if port 3001 is available
- Verify `.env` file exists in server directory

### Emails not sending
- Verify SMTP credentials in `.env` file
- Check if Gmail account allows "Less secure app access" or use App Password
- Check server console for error messages

### CORS errors
- Ensure backend server is running
- Verify frontend is making requests to correct URL (http://localhost:3001)
- Check CORS is enabled in backend

### Form not submitting
- Open browser console for error messages
- Verify all required fields are filled
- Check network tab to see if API request is being made

## Production Deployment

### Backend Deployment
1. Deploy backend to a hosting service (Heroku, Railway, DigitalOcean, etc.)
2. Set environment variables on the hosting platform
3. Update the API URL in frontend code

### Frontend Update
Replace `http://localhost:3001` with your production backend URL in `Contact.tsx`:

```typescript
const response = await fetch('https://your-backend-url.com/send-mail', {
  // ... rest of the code
});
```

## Security Notes

- Never commit `.env` file to version control
- Use environment variables for all sensitive data
- Consider rate limiting for production
- Add input validation and sanitization
- Use HTTPS in production

## Support

For issues or questions, contact the development team.
