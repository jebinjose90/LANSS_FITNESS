// backend/src/modules/user/usecases/getUserUsecase.ts

import { User } from '@core/entities/User';  // Import your User interface
import UserModel from '../models/UserModel';
import bcrypt from 'bcryptjs'; // Import bcrypt for password comparison

// Function to create a new user
export const createUser = async (username: string, password: string, email: string, phone: number): Promise<User> => {
    try {
        const newUser = new UserModel({
            username,
            password, // Password should be hashed before calling this function
            email,
            phone
        });
        await newUser.save();
        return newUser; // Return the created user object
    } catch (error: any) {  // Type the error as 'any'
        console.log(error);
        
        throw new Error(`Error creating user: ${error.message}`);
    }
};

// Function to get a user by ID
export const getUserById = async (userId: string): Promise<User | null> => {
    try {
        const user = await UserModel.findById(userId);
        return user; // Returns the user object or null if not found
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Error fetching user: ${error.message}`);
    }
};

// Function to get a user by username
export const getUserByUsername = async (username: string): Promise<User | null> => {
    try {
        const user = await UserModel.findOne({ username });
        return user; // Returns the user object or null if not found
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Error fetching user: ${error.message}`);
    }
};

// Function to login user
export const loginUser = async (email: string, password: string): Promise<User | null> => {
    try {
        console.log("email",email)
        const user = await UserModel.findOne({ email });
        console.log("USER",user);
        
        if (!user) return null; // User not found
        
        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return null; // Incorrect password

        return user; // Return user object if credentials are valid
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Error logging in: ${error.message}`);
    }
};
