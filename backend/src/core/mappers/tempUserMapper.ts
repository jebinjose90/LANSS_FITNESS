import { UserInterfaceTemp } from '../entities/apiResponseInterface/UserAPIInterface/UserInterfaceTemp';
import mongoose from 'mongoose';

interface MapUserOptions {
  hidePassword?: boolean;
}

export function mapUserToUserInterfaceTemp(
  createdUser: any,
  userProfile?: any,
  options?: MapUserOptions, // 👈 added options
): UserInterfaceTemp {
  return {
    _id: createdUser._id as mongoose.Schema.Types.ObjectId,
    password: options?.hidePassword ? '' : createdUser.password, // 👈 Hide password if requested
    username: createdUser.username,
    email: createdUser.email,
    role: createdUser.role,
    phone: userProfile?.phone,
    profilePictureUrl: userProfile?.profilePictureUrl,
    gender: userProfile?.gender,
    height: userProfile?.height,
    weight: userProfile?.weight,
    age: userProfile?.age,
    place: userProfile?.place,
    otp: userProfile?.otp,
    otpExpiresAt: userProfile?.otpExpiresAt,
  };
}
