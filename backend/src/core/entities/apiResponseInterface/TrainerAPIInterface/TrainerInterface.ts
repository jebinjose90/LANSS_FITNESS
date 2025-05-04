//backend/src/core/entities/apiResponseInterface/TrainerAPIInterface/TrainerInterface.ts
import mongoose from "mongoose";

export interface TrainerInterface {
  _id: mongoose.Schema.Types.ObjectId;
  username: string;
  password: string;
  email: string;
  role: string;
  googleId?: string; // Required for Google authentication
  isGoogleAuth: boolean; // Indicates if the user authenticated via Google
  phone?: number;
  profilePictureUrl: String,
  certificatePdfUrl: string;
  gender?: string;
  place?: string;
  skills?: string[];
}