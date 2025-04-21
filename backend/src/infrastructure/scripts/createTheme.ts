// backend/src/infrastructure/scripts/createTheme.ts
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import ThemeModel from '../../modules/theme/models/ThemeModel';
import AdminModel from '../../modules/admin/models/AdminModel';

const createTheme = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    // Get the admin (reference owner of the theme)
    const admin = await AdminModel.findOne({ email: process.env.ADMIN_EMAIL });

    if (!admin) {
      console.log('❌ Admin not found. Create the admin first.');
      return;
    }

    // Check if theme already exists for the admin
    const existingTheme = await ThemeModel.findOne({ refId: admin._id });
    if (existingTheme) {
      console.log('⚠️ Theme already exists for this admin.');
      return;
    }

    const themeData = {
      refId: admin._id,
      logoUrl: "https://i.imgur.com/H7QtKIM.png",
      companyName: "LANSS FITNESS",
      color1: "#2F2F2F",
      color2: "#424449",
      color3: "#D3FBD8"
    };

    const theme = new ThemeModel(themeData);
    await theme.save();

    console.log('✅ Theme created successfully');

  } catch (error) {
    console.error('❌ Error creating theme:', error);
  } finally {
    await mongoose.disconnect();
  }
};

createTheme();

// HOW TO RUN
// npx ts-node src/infrastructure/scripts/createTheme.ts

//OR

// npm run create:theme