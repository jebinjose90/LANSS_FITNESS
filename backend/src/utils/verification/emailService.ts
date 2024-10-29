import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Ensure your environment variables are loaded

const transporter = nodemailer.createTransport({
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendOtpEmail = async (email: string, otp: string) => {
    console.log('Recipient Email:', email); 
    console.log('Email User:', process.env.EMAIL_USER);
    console.log('Email Pass:', process.env.EMAIL_PASS ? 'Loaded' : 'Not Loaded');
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`OTP sent to ${email}`);
    } catch (error: any) {
        console.error(`Error sending OTP email: ${error.message}`);
        throw new Error(`Failed to send OTP email to ${email}: ${error.message}`);
    }
};
