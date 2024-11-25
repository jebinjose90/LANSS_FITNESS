// backend/src/modules/user/models/TempTrainerModel.ts

import { TempTrainer } from '@core/entities/TempTrainer';
import mongoose, { Document, model, Schema } from 'mongoose';


const tempTrainerSchema = new Schema<TempTrainer>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    trainername: { type: String, required: true },
    otp: { type: String, required: true },
    otpExpiresAt: { type: Date, required: true },
    profilePictureUrl: { type: String, required: false }, // Optional
    certificatePdfUrl: {type: String, required: true}
});
// Create a User model
const TempTrainerModel = model<TempTrainer>('TempTrainer', tempTrainerSchema, "temp-trainer");

export default TempTrainerModel;
