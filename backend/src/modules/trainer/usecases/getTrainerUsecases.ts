// backend/src/modules/user/usecases/getUserUsecase.ts

import { generateOtp } from '../../../utils/verification/otpGenerator';
import { sendOtpEmail } from '../../../utils/verification/emailService';
import { trainerProfileRepository } from '../repositories/trainerProfileRepository';
import { tempTrainerProfileRepository } from '../repositories/tempTrainerProfileRepository';
import { User } from '../../../core/entities/User';
import { TrainerInterface } from '../../../core/entities/apiResponseInterface/TrainerAPIInterface/TrainerInterface';

// Function to login user
export const findExistingTrainer = async (username: string, email: string, hashedPassword: string, phone: number, imageUrl: string, certificatePdfUrl: string, role: string): Promise<void> => {
    try {
        console.log("email", email, "password", hashedPassword, "username", username);

        let password = hashedPassword
        let profilePictureUrl = imageUrl
        // Check if email or username already exists in the User database
        await trainerProfileRepository.findTrainerWithEmailOrUsername(email, username)
        // Generate OTP and save user info temporarily
        const otp = generateOtp();
        console.log(otp);

        await tempTrainerProfileRepository.createTrainerWithProfile({ email, password, username, role, profileData: { phone, otp, profilePictureUrl, certificatePdfUrl, otpExpiresAt: new Date(Date.now() + 10 * 60 * 1000) } }) // OTP expires in 10 minutes

        // Send OTP email
        await sendOtpEmail(email, otp);
    } catch (error: any) {  // Type the error as 'any'
        console.log("ERROR", error.message);
        throw new Error(`Error sending OTP: ${error.message}`);
    }
};

// Function to create a new user
export const createTrainer = async (email: string, otp: string): Promise<TrainerInterface> => {
    try {
        const createdTrainer = await trainerProfileRepository.createTrainerByVerifyingOtp(email, otp);
        return createdTrainer; // Return the created user object

    } catch (error: any) {  // Type the error as 'any'
        console.log(error);
        throw new Error(`Error creating user: ${error.message}`);
    }
};

// Function to resend otp
export const resendOtp = async (email: string): Promise<void> => {
    try {

        await tempTrainerProfileRepository.findTrainerAndSendOtp(email)

    } catch (error: any) {  // Type the error as 'any'
        console.log("ERROR", error.message);

        throw new Error(`Error sending OTP: ${error.message}`);
    }
};

// Function to get a user by ID
export const getTrainerById = async (userId: string): Promise<TrainerInterface | null> => {
    try {
        const trainer = await trainerProfileRepository.findTrainerWithId(userId);
        return trainer; // Returns the user object or null if not found
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Error fetching user: ${error.message}`);
    }
};

// Function to get a user by username
export const getTrainerByTrainername = async (username: string): Promise<TrainerInterface | null> => {
    try {
        const trainer = await trainerProfileRepository.findTrainerWithUsername(username);
        return trainer; // Returns the user object or null if not found
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Error fetching user: ${error.message}`);
    }
};

// Function to login user
export const loginTrainer = async (email: string, password: string): Promise<User> => {
    try {
        const trainer = trainerProfileRepository.trainerLogin(email, password)
        return trainer; // Return user object if credentials are valid
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Login failed: ${error.message}`);
    }
};

