// backend/src/modules/user/usecases/getUserUsecase.ts

import { generateOtp } from '../../../utils/verification/otpGenerator';
import { sendOtpEmail } from '../../../utils/verification/emailService';
import { userProfileRepository } from '../repositories/userProfileRepository';
import { tempUserProfileRepository } from '../repositories/tempUserProfileRepository';
import { UserInterface } from '@core/entities/apiResponseInterface/UserAPIInterface/UserInterface';
import { User } from '@core/entities/User';


// Function to login user
export const findExistingUser = async (username: string, email: string, hashedPassword: string, phone: number, imageUrl: string, role: string): Promise<void> => {
    try {
        console.log("email", email, "password", hashedPassword, "username", username);

        let password = hashedPassword
        let profilePictureUrl = imageUrl
        // Check if email or username already exists in the User database
        await userProfileRepository.findUserWithEmailOrUsername(email, username)
        // Generate OTP and save user info temporarily
        const otp = generateOtp();
        console.log(otp);

        await tempUserProfileRepository.createUserWithProfile({ email, password, username, role, profileData: { phone, otp, profilePictureUrl, otpExpiresAt: new Date(Date.now() + 10 * 60 * 1000) } }) // OTP expires in 10 minutes

        // Send OTP email
        await sendOtpEmail(email, otp);
    } catch (error: any) {  // Type the error as 'any'
        console.log("ERROR", error.message);

        throw new Error(`Error sending OTP: ${error.message}`);
    }
};

// Function to create a new user
export const createUser = async (email: string, otp: string): Promise<UserInterface> => {
    try {
        console.log("EMAIL-----", email);
        
        const createdUser = await userProfileRepository.createUserByVerifyingOtp(email, otp);
        return createdUser; // Return the created user object

    } catch (error: any) {  // Type the error as 'any'
        console.log(error);
        throw new Error(`Error creating user: ${error.message}`);
    }
};

// Function to resend otp
export const resendOtp = async (email: string): Promise<void> => {
    try {

        await tempUserProfileRepository.findUserAndSendOtp(email)

    } catch (error: any) {  // Type the error as 'any'

        console.log("ERROR", error.message);
        throw new Error(`Error sending OTP: ${error.message}`);
    }
};

// Function to get a user by ID
export const getUserById = async (userId: string): Promise<UserInterface | null> => {
    try {
        const user = await userProfileRepository.findUserWithId(userId);
        return user; // Returns the user object or null if not found
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Error fetching user: ${error.message}`);
    }
};

// Function to get a user by username
export const getUserByUsername = async (username: string): Promise<UserInterface | null> => {
    try {
        const user = await userProfileRepository.findUserWithUsername(username);
        return user; // Returns the user object or null if not found
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Error fetching user: ${error.message}`);
    }
};

// Function to login user
export const loginUser = async (email: string, password: string): Promise<User> => {
    try {
        const user = userProfileRepository.userLogin(email, password)
        return user
    } catch (error: any) {  // Type the error as 'any'
        throw new Error(`Login failed: ${error.message}`);
    }
};

export const updateUserProfile = async (email: string, username: string, age: string, gender: string, height: string, weight: string, place: string): Promise<UserInterface> => {
    try {
        const user = userProfileRepository.updateUserProfile(email, username, age, gender, height, weight, place)
        return user
    } catch (error: any) {
        throw new Error(`Failed to update User Profile, please try again`)
    }
}
