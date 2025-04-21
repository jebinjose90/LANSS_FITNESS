// backend/src/core/entities/Theme.ts

import mongoose, { Document } from 'mongoose';

export interface Theme extends Document {  // Extend Document to include Mongoose properties
  refId: mongoose.Schema.Types.ObjectId;
  logoUrl: string;
  companyName: string;
  color1: string;
  color2: string;
  color3: string;
}
