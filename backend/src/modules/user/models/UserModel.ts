// backend/src/modules/user/models/UserModel.ts

import { User } from '@core/entities/User';
import { Schema, model } from 'mongoose';


// Create a User schema
const userSchema = new Schema<User>({
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create a User model
const UserModel = model<User>('User', userSchema);

export default UserModel;
