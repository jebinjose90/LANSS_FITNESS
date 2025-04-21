// backend/src/modules/theme/models/ThemeModel.ts

import mongoose, { Schema } from 'mongoose';
import { Theme } from '@core/entities/Theme';  // The interface you have

const themeSchema: Schema = new Schema({
  refId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true, },
  logoUrl: { type: String, required: true },
  companyName: { type: String, required: true },
  color1: { type: String, required: true },
  color2: { type: String, required: true },
  color3: { type: String, required: true }
});

// Create the model
const ThemeModel = mongoose.model<Theme>('Theme', themeSchema, "theme");

export default ThemeModel;
