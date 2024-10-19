// backend/src/core/entities/Theme.ts

import { Document } from 'mongoose';

export interface Theme extends Document {  // Extend Document to include Mongoose properties
  logoUrl: string;
  companyName: string;
  color1: string;
  color2: string;
  color3: string;
}
