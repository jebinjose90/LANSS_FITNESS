// backend/src/core/entities/TempTrainerProfile.ts

import mongoose, { Document, Types } from 'mongoose';

export interface TempTrainerProfile extends Document {
  refId: mongoose.Schema.Types.ObjectId;
  phone: number,
  otp: string,
  otpExpiresAt: Date
  profilePictureUrl: String,
  certificatePdfUrl: string;
  skills: string[];
}