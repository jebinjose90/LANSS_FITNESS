import { Admin } from '@core/entities/Admin';
import AdminModel from "../models/AdminModel";
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

// Function to login user
export const loginAdmin = async (email: string, password: string): Promise<Admin> => {
    try {
        console.log("email", email);
        const admin = await AdminModel.findOne({ email });
        console.log("ADMIN", admin);

        if (!admin) {
            throw new Error("User not found");
        }

        if (!admin.password) {
            throw new Error("Password is not set for this admin");
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            throw new Error("Incorrect password");
        }

        return admin; // Return admin object if credentials are valid
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Login failed: ${error.message}`);
    }
};