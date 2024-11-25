// backend/src/core/entities/TempUser.ts

import { Document } from 'mongoose';

export interface TempTrainer extends Document {  // Extend Document to include Mongoose properties

    email: string,
    password: string,
    phone: number,
    trainername: string,
    otp: string,
    otpExpiresAt: Date
    profilePictureUrl: String,
    certificatePdfUrl: string;
}