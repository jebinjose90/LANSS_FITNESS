// backend/src/modules/user/models/UserModel.ts

import { User } from '@core/entities/User';
import mongoose, { Document, model, Schema } from 'mongoose';

// Create a User schema
const userSchema = new Schema<User>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: false }, // Optional
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: false, unique: true }, // Optional
    googleId: { type: String, required: false, unique: true }, // Required
    isGoogleAuth: { type: Boolean, required: true }, // Required
    profilePictureUrl: { type: String, required: false }, // Optional
    gender: { type: String, required: false },
    height: { type: String, required: false },
    weight: { type: String, required: false },
    age: { type: String, required: false },
    place: { type: String, required: false },
    role: { type: String, required: true },
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create a User model
const UserModel = model<User>('User', userSchema, 'user');

export default UserModel;
