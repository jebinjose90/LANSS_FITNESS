// backend/src/core/entities/User.ts

import { Document, Types } from 'mongoose';

export interface User extends Document {
    
    password: string;
    username: string;
    email: string;
    phone?: number;
    googleId?: string; // Required for Google authentication
    isGoogleAuth: boolean; // Indicates if the user authenticated via Google
    profilePictureUrl?: string; // Optional for Google-auth users
    gender?: string;
    height?: string;
    weight?: string;
    age?: string;
    place?: string;
}
