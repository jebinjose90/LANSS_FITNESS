// backend/src/core/entities/TempUser.ts

import { Document } from 'mongoose';

export interface TempUser extends Document {  // Extend Document to include Mongoose properties

    email: string,
    password: string,
    phone: number,
    username: string,
    otp: string,
    otpExpiresAt: Date
}