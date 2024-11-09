// backend/src/modules/user/models/TempUserModel.ts

import { TempUser } from '@core/entities/TempUser';
import mongoose, { Document, model, Schema } from 'mongoose';


const tempUserSchema = new Schema<TempUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    username: { type: String, required: true },
    otp: { type: String, required: true },
    otpExpiresAt: { type: Date, required: true },
    profilePictureUrl: { type: String, required: false } // Optional
});
// Create a User model
const TempUserModel = model<TempUser>('TempUser', tempUserSchema, "temp-user");

export default TempUserModel;
