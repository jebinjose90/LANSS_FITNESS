//LANSS_FITNESS/backend/src/infrastructure/scripts/createAdmin.ts

import dotenv from 'dotenv';
dotenv.config();

import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import AdminModel from '../../modules/admin/models/AdminModel';

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const username = "admin";
    const password = "Admin@123";
    const email = process.env.ADMIN_EMAIL;

    const existingAdmin = await AdminModel.findOne({ username: username });
    if (existingAdmin) {
      console.log('Admin already exists');
      return;
    }
    

    const hashedPassword = await bcrypt.hash(password, 10); // Change password later

    const admin = new AdminModel({
      username: username,
      email: email,
      password: hashedPassword,
      role: "admin",
    });

    await admin.save();
    console.log('✅ Admin created successfully');
  } catch (err) {
    console.error('❌ Error creating admin:', err);
  } finally {
    await mongoose.disconnect();
  }
};

createAdmin();


// HOW TO RUN
// npx ts-node src/infrastructure/scripts/createAdmin.ts

//OR

// npm run create:admin