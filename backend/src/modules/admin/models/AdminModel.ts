// backend/src/modules/admin/models/AdminModel.ts

import { Admin } from '@core/entities/Admin';
import { Schema, model } from 'mongoose';

// Create a User schema
const adminSchema = new Schema<Admin>({
  id: { type: String, required: false, unique: true }, // Optional
  username: { type: String, required: true, unique: true },
  password: { type: String, required: false }, // Optional
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true, enum: ['admin'], default: 'admin' },
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create a User model
const AdminModel = model<Admin>('Admin', adminSchema, 'admin');

export default AdminModel;
