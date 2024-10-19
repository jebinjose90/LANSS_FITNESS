// backend/src/modules/theme/controllers/themeController.ts

import { Request, Response } from 'express';
import { getThemeUsecase } from '../usecases/getThemeUsecase';

export const getTheme = async (req: Request, res: Response): Promise<void> => {  // Adjusted return type
  try {
    const theme = await getThemeUsecase();
    if (!theme) {
      res.status(404).json({ message: 'Theme not found' });
      return;  // Ensure that it doesn't continue
    }
    res.json(theme);  // Send the theme data in the response
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
