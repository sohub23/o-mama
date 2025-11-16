const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

app.post('/send-mail', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  try {
    // Email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `🔔 New Contact: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #667eea; }
            .label { color: #667eea; font-weight: bold; margin-bottom: 5px; }
            .value { color: #333; margin-bottom: 15px; }
            .message-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border: 1px solid #e0e0e0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🎉 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">O Mama Smart Stores</p>
            </div>
            <div class="content">
              <div class="info-box">
                <div class="label">👤 Name</div>
                <div class="value">${name}</div>
                <div class="label">📧 Email</div>
                <div class="value">${email}</div>
              </div>
              <div class="message-box">
                <div class="label">💬 Message Details</div>
                <div class="value" style="white-space: pre-line;">${message}</div>
              </div>
              <div class="footer">
                <p>This email was sent from O Mama contact form</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    });

    // Auto-reply to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: '✅ Thank you for contacting O Mama Smart Stores',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #ffffff; padding: 40px 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .greeting { font-size: 24px; color: #667eea; margin-bottom: 20px; }
            .message-box { background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #667eea; }
            .cta-box { background: #667eea; color: white; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 14px; }
            .icon { font-size: 48px; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="icon">🎉</div>
              <h1 style="margin: 0; font-size: 28px;">Thank You for Reaching Out!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">O Mama Smart Stores</p>
            </div>
            <div class="content">
              <div class="greeting">Hello ${name}! 👋</div>
              <p style="font-size: 16px; line-height: 1.8;">
                We've received your inquiry and we're excited to help you bring fresh, smart food solutions to your location!
              </p>
              <div class="cta-box">
                <h3 style="margin: 0 0 10px 0;">⏱️ Thank You For Your Time</h3>
                <p style="margin: 0; font-size: 16px;">Our team will get back to you within <strong>24 hours</strong></p>
              </div>
              <div class="message-box">
                <p style="margin: 0 0 10px 0; color: #667eea; font-weight: bold;">📝 Your Submission Details:</p>
                <div style="margin: 0; white-space: pre-line; word-wrap: break-word; overflow-wrap: break-word;">${message}</div>
              </div>
              <p style="font-size: 16px; line-height: 1.8;">
                In the meantime, feel free to explore more about our smart vending solutions and how they can transform your business.
              </p>
              <div class="footer">
                <p style="margin: 5px 0;"><strong>O Mama Smart Stores</strong></p>
                <p style="margin: 5px 0;">📧 sohub.web@gmail.com | 📞 +88 09678-076482</p>
                <p style="margin: 5px 0;">📍 Flat #C2, House 29, Katasur Rd, Dhaka 1207</p>
                <p style="margin: 15px 0 5px 0; font-size: 12px; color: #999;">Next Generation Vending Experience</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    });

    res.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
