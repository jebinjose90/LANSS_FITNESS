import { Theme } from '@core/entities/Theme';
import ThemeModel from '../models/ThemeModel'; // Mongoose model for the Theme

export const getTheme = async (): Promise<Theme | null> => {
  return await ThemeModel.findOne(); // Fetching the theme (assuming only one theme document)
};
