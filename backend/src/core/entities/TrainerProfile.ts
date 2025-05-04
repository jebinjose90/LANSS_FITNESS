// backend/src/core/entities/TrainerProfile.ts

import mongoose, { Document, Types } from 'mongoose';

export interface TrainerProfile extends Document {
  refId: mongoose.Schema.Types.ObjectId;
  phone?: number;
  googleId?: string; // Required for Google authentication
  isGoogleAuth: boolean; // Indicates if the user authenticated via Google
  profilePictureUrl?: string; // Optional for Google-auth users
  certificatePdfUrl: string;
  skills: string[];
}