// src/domain/entities/Message.ts
import { Schema, model } from 'mongoose';

export interface IMessage {
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: Date;
}

const MessageSchema = new Schema<IMessage>({
  senderId: { type: String, required: true },
  receiverId: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Message = model<IMessage>('Message', MessageSchema);
