// backend/src/core/entities/TempUserProfile.ts

import mongoose, { Document, Types } from 'mongoose';

export interface TempUserProfile extends Document {
  refId: mongoose.Schema.Types.ObjectId;
  phone?: number;
  profilePictureUrl?: string; // Optional for Google-auth users
  gender?: string;
  height?: string;
  weight?: string;
  age?: string;
  place?: string;
  otp: string;
  otpExpiresAt: Date;
}