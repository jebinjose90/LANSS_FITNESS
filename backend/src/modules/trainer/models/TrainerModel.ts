// backend/src/modules/user/models/UserModel.ts

import { Trainer } from '@core/entities/Trainer';
import { Schema, model } from 'mongoose';

// Create a User schema
const trainerSchema = new Schema<Trainer>({
    trainername: { type: String, required: true, unique: true },
    password: { type: String, required: false }, // Optional
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: false, unique: true }, // Optional
    id: { type: String, required: false, unique: true }, // Optional
    googleId: { type: String, required: false, unique: true }, // Required
    isGoogleAuth: { type: Boolean, required: true }, // Required
    profilePictureUrl: { type: String, required: false }, // Optional
    certificatePdfUrl: {type: String, required: true}
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create a User model
const TrainerModel = model<Trainer>('Trainer', trainerSchema, 'trainer');

export default TrainerModel;
