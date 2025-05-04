// backend/src/core/entities/User.ts

import { Document, Types } from 'mongoose';

export interface User extends Document {
  username: string,
  email: string,
  password: string,
  role: string,
}


