// backend/src/modules/theme/controllers/themeController.ts

import { Request, Response } from 'express';
import { get_theme } from '../usecases/getThemeUsecase';
import AdminModel from '../../admin/models/AdminModel';
import ThemeModel from '../models/ThemeModel';

export const getCurrentTheme = async (req: Request, res: Response): Promise<void> => {  // Adjusted return type
  try {
    const theme = await get_theme();
    if (!theme) {
      res.status(404).json({ message: 'Theme not found' });
      return;  // Ensure that it doesn't continue
    }
    console.log("URL",process.env.PORT);
    res.json(theme);  // Send the theme data in the response
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

export const createTheme = async (req: Request, res: Response): Promise<void> => {
  try {
    const { secret } = req.headers;
    if (secret !== process.env.ADMIN_SECRET) {
      res.status(403).json({ message: 'Unauthorized' });
      return;
    }

    const { email, logoUrl, companyName, color1, color2, color3 } = req.body;

    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      res.status(404).json({ message: 'Admin not found' });
      return;
    }

    const existingTheme = await ThemeModel.findOne({ refId: admin._id });
    if (existingTheme) {
      res.status(400).json({ message: 'Theme already exists for this admin' });
      return;
    }

    const theme = new ThemeModel({refId: admin._id, logoUrl, companyName, color1, color2, color3});

    await theme.save();
    res.status(201).json({ message: 'Theme created successfully' });

  } catch (error) {
    console.error('Error creating theme:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
