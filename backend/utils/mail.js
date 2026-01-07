import nodemailer from 'nodemailer';

export const sendMail = async ({ to, subject, text }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.example.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'user@example.com',
      pass: process.env.SMTP_PASS || 'password'
    }
  });
  await transporter.sendMail({ from: process.env.SMTP_FROM || 'no-reply@homeease.local', to, subject, text });
};
