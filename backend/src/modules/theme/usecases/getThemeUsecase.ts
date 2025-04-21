// backend/src/modules/theme/usecases/getThemeUsecase.ts

import { getTheme } from '../repositories/themeRepository';  // Import the repository function
import { Theme } from '../../../core/entities/Theme';

export const get_theme = async (): Promise<Theme | null> => {
  try {
    const theme = await getTheme();  // Use the repository function to get the theme
    console.log('Theme found:', theme);  // Add a log to see what is being fetched
    return theme;
  } catch (error) {
    console.error('Error fetching theme:', error);
    throw new Error('Could not fetch theme');
  }
};
