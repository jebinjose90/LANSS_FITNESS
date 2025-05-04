// backend/src/core/entities/AdminProfile.ts

import mongoose, { Document, Types } from 'mongoose';

export interface AdminProfile extends Document {
  refId: mongoose.Schema.Types.ObjectId;
  phone: number,
  profilePictureUrl: string
}

