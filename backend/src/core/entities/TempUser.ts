// backend/src/core/entities/TempUser.ts

import { Document, Types } from 'mongoose';

export interface TempUser extends Document {
  username: string,
  email: string,
  password: string,
  role: string,
}


