// backend/src/core/entities/Admin.ts

import { Document, Types } from 'mongoose';

export interface Admin extends Document {
  username: string,
  email: string,
  password: string,
  role: string,
}


