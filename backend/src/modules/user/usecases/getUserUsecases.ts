// backend/src/modules/user/usecases/getUserUsecase.ts

import { User } from '@core/entities/User';  // Import your User interface
import { generateOtp } from '../../../utils/verification/otpGenerator';
import { sendOtpEmail } from '../../../utils/verification/emailService';
import UserModel from '../models/UserModel';
import bcrypt from 'bcryptjs'; // Import bcrypt for password comparison
import TempUserModel from '../models/TempUserModel';


// Function to login user
export const findExistingUser = async (username: string, email: string, hashedPassword: string, phone: number): Promise<void> => {
    try {
        console.log("email", email, "password", hashedPassword, "username", username);

        let password = hashedPassword
        // Check if email or username already exists in the User database
        const existingUser = await UserModel.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            throw new Error('Email or username already in use.');
        }
        // Generate OTP and save user info temporarily
        const otp = generateOtp();
        console.log(otp);

        await TempUserModel.create({ email, password, username, phone, otp, otpExpiresAt: new Date(Date.now() + 10 * 60 * 1000) }); // OTP expires in 10 minutes

        // Send OTP email
        await sendOtpEmail(email, otp);
    } catch (error: any) {  // Type the error as 'any'
        console.log("ERROR", error.message);

        throw new Error(`Error sending OTP: ${error.message}`);
    }
};

// Function to create a new user
export const createUser = async (email: string, otp: string): Promise<User> => {
    try {
        const tempUser = await TempUserModel.findOne({ email, otp });
        // Find the TempUser record
        if (!tempUser) {
            throw new Error('Invalid OTP or email.');
        }
        // Check OTP expiration
        if (tempUser.otpExpiresAt < new Date()) {
            await TempUserModel.deleteOne({ email });
            throw new Error('OTP expired. Please request a new one.');
        }
        // Create the User and delete the TempUser
        const { username, password } = tempUser;
        const isGoogleAuth = false
        const newUser = new UserModel({ email, username, password, isGoogleAuth});
        await newUser.save();
        await TempUserModel.deleteOne({ email });
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
export const loginUser = async (email: string, password: string): Promise<User> => {
    try {
        console.log("email", email);
        const user = await UserModel.findOne({ email });
        console.log("USER", user);

        if (!user) {
            throw new Error("User not found");
        }

        if (!user.password) {
            throw new Error("Password is not set for this user");
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Incorrect password");
        }

        return user; // Return user object if credentials are valid
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Login failed: ${error.message}`);
    }
};

