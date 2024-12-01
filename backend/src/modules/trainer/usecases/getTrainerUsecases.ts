// backend/src/modules/user/usecases/getUserUsecase.ts

import { Trainer } from '@core/entities/Trainer';  // Import your User interface
import { generateOtp } from '../../../utils/verification/otpGenerator';
import { sendOtpEmail } from '../../../utils/verification/emailService';
import TrainerModel from '../models/TrainerModel';
import UserModel from '../../user/models/UserModel'
import bcrypt from 'bcryptjs'; // Import bcrypt for password comparison
import TempTrainerModel from '../models/TempTrainerModel';


// Function to login user
export const findExistingTrainer = async (trainername: string, email: string, hashedPassword: string, phone: number, imageUrl: string, certificatePdfUrl: string): Promise<void> => {
    try {
        console.log("email", email, "password", hashedPassword, "trainername", trainername);

        let password = hashedPassword
        let profilePictureUrl = imageUrl
        // Check if email or username already exists in the User database
        const existingTrainer = await TrainerModel.findOne({ $or: [{ email }, { trainername }] });
        if (existingTrainer) {
            throw new Error('Email or username already in use.');
        }
        // Generate OTP and save user info temporarily
        const otp = generateOtp();
        console.log(otp);

        await TempTrainerModel.create({ email, password, trainername, phone, otp, profilePictureUrl,certificatePdfUrl, otpExpiresAt: new Date(Date.now() + 10 * 60 * 1000) }); // OTP expires in 10 minutes

        // Send OTP email
        await sendOtpEmail(email, otp);
    } catch (error: any) {  // Type the error as 'any'
        console.log("ERROR", error.message);
        throw new Error(`Error sending OTP: ${error.message}`);
    }
};

// Function to create a new user
export const createTrainer = async (email: string, otp: string): Promise<Trainer> => {
    try {
        const tempTrainer = await TempTrainerModel.findOne({ email, otp });
        // Find the TempUser record
        if (!tempTrainer) {
            throw new Error('Invalid OTP or email.');
        }
        // Check OTP expiration
        if (tempTrainer.otpExpiresAt < new Date()) {
            await TempTrainerModel.deleteOne({ email });
            throw new Error('OTP expired. Please request a new one.');
        }
        // Create the User and delete the TempUser
        const { trainername, password, phone, profilePictureUrl ,certificatePdfUrl} = tempTrainer;
        const isGoogleAuth = false
        const newTrainer = new TrainerModel({ email, trainername, password, phone, isGoogleAuth, profilePictureUrl ,certificatePdfUrl});
        await newTrainer.save();
        await TempTrainerModel.deleteOne({ email });
        return newTrainer; // Return the created user object

    } catch (error: any) {  // Type the error as 'any'
        console.log(error);
        throw new Error(`Error creating user: ${error.message}`);
    }
};

// Function to resend otp
export const resendOtp = async (email: string): Promise<void> => {
    try {

        // find email in the TempUserModel data base
        const existingEmail = await TempTrainerModel.findOne({$or: [{email}]})
        if (existingEmail) {
            const otp = generateOtp();
            console.log(otp);

            await TempTrainerModel.updateOne({email: email},{$set: {otp:otp, otpExpiresAt: new Date(Date.now() + 10 * 60 * 1000) } })

            // Send OTP email
            await sendOtpEmail(email,otp);
            
        }else{
            throw new Error('Email not found');
        }

    } catch (error: any) {  // Type the error as 'any'
        console.log("ERROR", error.message);

        throw new Error(`Error sending OTP: ${error.message}`);
    }
};

// Function to get a user by ID
export const getTrainerById = async (trainerId: string): Promise<Trainer | null> => {
    try {
        const trainer = await TrainerModel.findById(trainerId);
        return trainer; // Returns the user object or null if not found
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Error fetching user: ${error.message}`);
    }
};

// Function to get a user by username
export const getTrainerByTrainername = async (trainername: string): Promise<Trainer | null> => {
    try {
        const trainer = await TrainerModel.findOne({ trainername });
        return trainer; // Returns the user object or null if not found
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Error fetching user: ${error.message}`);
    }
};

// Function to login user
export const loginTrainer = async (email: string, password: string): Promise<Trainer> => {
    try {
        console.log("email", email);
        const trainer = await TrainerModel.findOne({ email });
        console.log("TRAINER", trainer);

        if (!trainer) {
            throw new Error("Trainer not found");
        }

        if (!trainer.password) {
            throw new Error("Password is not set for this trainer");
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, trainer.password);
        if (!isMatch) {
            throw new Error("Incorrect password");
        }

        return trainer; // Return user object if credentials are valid
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Login failed: ${error.message}`);
    }
};

