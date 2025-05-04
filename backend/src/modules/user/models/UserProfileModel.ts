//backend/src/modules/user/models/UserProfileModel.ts

import { UserProfile } from '@core/entities/UserProfile';
import mongoose, { model, Schema } from 'mongoose';

// Create a UserProfileModel schema
const userProfileSchema = new Schema<UserProfile>({
  refId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  profilePictureUrl: { type: String, required: false }, // Optional
  phone: { type: Number, required: false, unique: true }, // Optional
  age: { type: Number, required: false }, // Optional
  googleId: { type: String, required: false, unique: true }, // Required
  isGoogleAuth: { type: Boolean, required: true }, // Required
  height: { type: Number, required: false }, // Optional
  weight: { type: Number, required: false }, // Optional
  gender: { type: String },
  place: { type: String },
  subscription: { type: String },
  subsscriptionId: {type: String},
}, { timestamps: true });

// Create a User model
const UserProfileModel = model<UserProfile>('UserProfile', userProfileSchema, 'userProfile');

export default UserProfileModel;