// backend/src/modules/user/models/UserModel.ts

import { TempUser } from '@core/entities/TempUser';
import mongoose, { Document, model, Schema } from 'mongoose';

// Create a User schema
const tempUserSchema = new Schema<TempUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: false }, // Optional
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['user', 'trainer', 'admin'], required: true },
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create a User model
const TempUserModel = model<TempUser>('TempUser', tempUserSchema, 'tempUser');

export default TempUserModel;
