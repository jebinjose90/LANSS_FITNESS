import { UserInterface } from '../entities/apiResponseInterface/UserAPIInterface/UserInterface';
import mongoose from 'mongoose';

interface MapUserOptions {
  hidePassword?: boolean;
}

export function mapUserToUserInterface(
  createdUser: any,
  userProfile?: any,
  options?: MapUserOptions, // 👈 added options
): UserInterface {
  return {
    _id: createdUser._id as mongoose.Schema.Types.ObjectId,
    password: options?.hidePassword ? '' : createdUser.password, // 👈 Hide password if requested
    username: createdUser.username,
    email: createdUser.email,
    role: createdUser.role,
    phone: userProfile?.phone,
    googleId: userProfile?.googleId,
    isGoogleAuth: userProfile?.isGoogleAuth,
    profilePictureUrl: userProfile?.profilePictureUrl,
    gender: userProfile?.gender,
    height: userProfile?.height,
    weight: userProfile?.weight,
    age: userProfile?.age,
    place: userProfile?.place,
    subscription: userProfile?.subscription,
    subsscriptionId: userProfile?.subsscriptionId,
  };
}
