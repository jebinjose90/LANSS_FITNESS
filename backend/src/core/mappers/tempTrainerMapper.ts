import { TrainerInterfaceTemp } from '../entities/apiResponseInterface/TrainerAPIInterface/TrainerInterfaceTemp';
import mongoose from 'mongoose';

interface MapUserOptions {
  hidePassword?: boolean;
}

// Mapper function
export function mapTrainerToTrainerInterfaceTemp(
  createdTrainer: any,   // coming from Mongoose UserModel.create()
  trainerProfile?: any,  // coming from TempUserProfileModel (optional)
  options?: MapUserOptions, // 👈 added options
): TrainerInterfaceTemp {
  return {
    _id: createdTrainer._id as mongoose.Schema.Types.ObjectId,
    username: createdTrainer.username,
    password: options?.hidePassword ? '' : createdTrainer.password, // 👈 Hide password if requested
    email: createdTrainer.email,
    role: createdTrainer.role,
    phone: trainerProfile?.phone,
    otp: trainerProfile?.otp,
    otpExpiresAt: trainerProfile?.otpExpiresAt,
    profilePictureUrl: trainerProfile?.profilePictureUrl,
    certificatePdfUrl: trainerProfile?.certificatePdfUrl,
    skills: trainerProfile?.skills,
  };
}
