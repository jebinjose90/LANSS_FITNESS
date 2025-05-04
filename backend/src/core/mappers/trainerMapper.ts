import { TrainerInterface } from '../entities/apiResponseInterface/TrainerAPIInterface/TrainerInterface';
import mongoose from 'mongoose';
interface MapUserOptions {
  hidePassword?: boolean;
}
// Mapper function
export function mapTrainerToTrainerInterface(
  createdTrainer: any,   // coming from Mongoose UserModel.create()
  trainerProfile?: any,  // coming from TempUserProfileModel (optional)
  options?: MapUserOptions, // 👈 added options
): TrainerInterface {
  return {
    _id: createdTrainer._id as mongoose.Schema.Types.ObjectId,
    username: createdTrainer.username,
    password: options?.hidePassword ? '' : createdTrainer.password, // 👈 Hide password if requested
    email: createdTrainer.email,
    role: createdTrainer.role,
    googleId: trainerProfile?.googleId, // Required for Google authentication
    isGoogleAuth: trainerProfile?.isGoogleAuth, // Indicates if the user authenticated via Google
    phone: trainerProfile?.phone,
    profilePictureUrl: trainerProfile?.profilePictureUrl,
    certificatePdfUrl: trainerProfile?.certificatePdfUrl,
    gender: trainerProfile?.gender,
    place: trainerProfile?.place,
    skills: trainerProfile?.skills,
  };
}
