//backend/src/core/entities/apiResponseInterface/UserAPIInterface/UserInterfaceTemp.ts
import mongoose from "mongoose";

export interface UserInterfaceTemp {
  _id: mongoose.Schema.Types.ObjectId;
  password: string;
  username: string;
  email: string;
  role: string;
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