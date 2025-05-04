//backend/src/core/entities/apiResponseInterface/TrainerAPIInterface/TrainerInterfaceTemp.ts
import mongoose from "mongoose";

export interface TrainerInterfaceTemp {
  _id: mongoose.Schema.Types.ObjectId;
  username: string;
  password: string;
  email: string;
  role: string;
  phone: number,
  otp: string,
  otpExpiresAt: Date
  profilePictureUrl: String,
  certificatePdfUrl: string;
  skills?: string[];
}