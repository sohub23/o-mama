// Simple test script to verify email configuration
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

async function testEmail() {
  console.log('Testing email configuration...\n');
  console.log('SMTP Host:', process.env.SMTP_HOST);
  console.log('SMTP User:', process.env.SMTP_USER);
  console.log('SMTP Port:', process.env.SMTP_PORT);
  console.log('\nSending test email...\n');

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: 'Test Email - O Mama Integration',
      html: '<h2>Success!</h2><p>Your email configuration is working correctly.</p>'
    });
    console.log('✅ Test email sent successfully!');
    console.log('Check your inbox at:', process.env.SMTP_USER);
  } catch (error) {
    console.error('❌ Error sending test email:');
    console.error(error.message);
  }
}

testEmail();
