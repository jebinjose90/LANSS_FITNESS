//backend/src/core/entities/apiResponseInterface/UserAPIInterface/UserInterface.ts
import mongoose from "mongoose";

export interface UserInterface {
    _id: mongoose.Schema.Types.ObjectId;
    password: string;
    username: string;
    email: string;
    role: string;
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