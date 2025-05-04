// backend/src/modules/user/models/UserModel.ts

import { User } from '@core/entities/User';
import mongoose, { Document, model, Schema } from 'mongoose';

// Create a User schema
const userSchema = new Schema<User>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: false }, // Optional
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['user', 'trainer', 'admin'], required: true },
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create a User model
const UserModel = model<User>('User', userSchema, 'user');

export default UserModel;
