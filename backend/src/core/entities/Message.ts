// backend/src/core/entities/Message.ts
import mongoose, { Document, Types } from 'mongoose';

export interface Message extends Document {
  senderId: mongoose.Schema.Types.ObjectId;
  receiverId: mongoose.Schema.Types.ObjectId;
  message: string;
  timestamp: Date;
  image: string;
}
