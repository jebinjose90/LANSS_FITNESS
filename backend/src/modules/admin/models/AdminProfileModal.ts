//backend/src/modules/user/models/AdminProfileModel.ts

import { AdminProfile } from '@core/entities/AdminProfile';
import mongoose, { model, Schema } from 'mongoose';

// Create a AdminProfileModel schema
const adminProfileSchema = new Schema<AdminProfile>({
  refId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  profilePictureUrl: { type: String, required: false }, // Optional
  phone: { type: Number, required: false, unique: true }, // Optional
}, { timestamps: true });

// Create a AdminProfileModel model
const AdminProfileModel = model<AdminProfile>('AdminProfile', adminProfileSchema, 'adminProfile');

export default AdminProfileModel;