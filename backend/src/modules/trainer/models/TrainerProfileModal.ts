// backend/src/modules/user/models/TrainerProfileModel.ts
import { TrainerProfile } from '@core/entities/TrainerProfile';
import mongoose, { Schema, model } from 'mongoose';

// Create a TrainerProfile schema
const trainerProfileSchema = new Schema<TrainerProfile>({
  refId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  phone: { type: Number, required: false, unique: true }, // Optional
  googleId: { type: String, required: false, unique: true }, // Required
  isGoogleAuth: { type: Boolean, required: true }, // Required
  profilePictureUrl: { type: String, required: false }, // Optional
  certificatePdfUrl: { type: String, required: true },
  skills: [{ type: String }],
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create a TrainerProfileModel model
const TrainerProfileModel = model<TrainerProfile>('TrainerProfile', trainerProfileSchema, 'trainerProfile');

export default TrainerProfileModel;
