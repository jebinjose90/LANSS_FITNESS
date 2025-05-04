// backend/src/modules/user/models/TempTrainerProfileModel.ts
import { TempTrainerProfile } from '@core/entities/TempTrainerProfile';
import mongoose, { Schema, model } from 'mongoose';

// Create a TempTrainerProfileModel schema
const tempTrainerProfileSchema = new Schema<TempTrainerProfile>({
  refId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  phone: { type: Number, required: false, unique: true }, // Optional
  otp: { type: String, required: true }, // OTP sent to the user
  otpExpiresAt: { type: Date, required: true }, // Expiry time for OTP
  profilePictureUrl: { type: String, required: false }, // Optional
  certificatePdfUrl: { type: String, required: true },
  skills: [{ type: String }],
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create a TempTrainerProfileModel model
const TempTrainerProfileModel = model<TempTrainerProfile>('TempTrainerProfile', tempTrainerProfileSchema, 'tempTrainerProfile');

export default TempTrainerProfileModel;
