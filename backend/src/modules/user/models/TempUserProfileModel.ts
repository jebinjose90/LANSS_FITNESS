//backend/src/modules/user/models/TempUserProfileModel.ts

import { TempUserProfile } from '@core/entities/TempUserProfile';
import mongoose, { model, Schema } from 'mongoose';

// Create a TempUserProfile schema
const tempUserProfileSchema = new Schema<TempUserProfile>({
    refId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    profilePictureUrl: { type: String, required: false }, // Optional
    phone: { type: Number, required: false, unique: true }, // Optional
    otp: { type: String, required: true }, // OTP sent to the user
    otpExpiresAt: { type: Date, required: true }, // Expiry time for OTP
    age: { type: Number, required: false}, // Optional
    height: { type: Number, required: false}, // Optional
    weight: { type: Number, required: false}, // Optional
  }, { timestamps: true });

// Create a TempUserProfileModel model
const TempUserProfileModel = model<TempUserProfile>('TempUserProfile', tempUserProfileSchema, 'tempUserProfile');

export default TempUserProfileModel;
