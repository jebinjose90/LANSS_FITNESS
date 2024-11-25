// backend/src/core/entities/Trainer.ts

import { Document, Types } from 'mongoose';

export interface Trainer extends Document {
    _id: Types.ObjectId; // Required for Mongoose
    password: string;
    trainername: string;
    email: string;
    phone?: number;
    googleId?: string; // Required for Google authentication
    isGoogleAuth: boolean; // Indicates if the user authenticated via Google
    profilePictureUrl?: string; // Optional for Google-auth users
    certificatePdfUrl: string;
}