// backend/src/modules/user/models/TempUserModel.ts

import { TempUser } from '@core/entities/TempUser';
import mongoose, { Document, model, Schema } from 'mongoose';


const tempUserSchema = new Schema<TempUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    username: { type: String, required: true },
    otp: { type: String, required: true }, // OTP sent to the user
    otpExpiresAt: { type: Date, required: true }, // Expiry time for OTP
    profilePictureUrl: { type: String, required: false } // Optional profile picture URL
}, {
    timestamps: true // Automatically manages createdAt and updatedAt fields
});

// Create a TempUser model
const TempUserModel = model<TempUser>('TempUser', tempUserSchema, 'temp_user');

export default TempUserModel;
