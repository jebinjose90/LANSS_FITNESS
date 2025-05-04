// backend/src/core/entities/UserProfile.ts

import mongoose, { Document, Types } from 'mongoose';

export interface UserProfile extends Document {
  refId: mongoose.Schema.Types.ObjectId;
  phone?: number;
  googleId?: string; // Required for Google authentication
  isGoogleAuth: boolean; // Indicates if the user authenticated via Google
  profilePictureUrl?: string; // Optional for Google-auth users
  gender?: string;
  height?: string;
  weight?: string;
  age?: string;
  place?: string;
  subscription?: string;
  subsscriptionId?: string;
}