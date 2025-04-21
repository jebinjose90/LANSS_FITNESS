// backend/src/modules/user/controllers/trainerController.ts

import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { createTrainer, findExistingTrainer, getTrainerById, getTrainerByTrainername, loginTrainer, resendOtp } from '../usecases/getTrainerUsecases';
import { generateTokens } from '../../../infrastructure/security/jwtService';
import { UserRole } from '../../../core/constants/general/roles';


// Constants for error and success messages
const USER_NOT_FOUND_MSG = 'User not found';
const INVALID_CREDENTIALS_MSG = 'Invalid credentials';
const CREATE_USER_ERROR_MSG = 'Error creating user';
const FETCH_USER_ERROR_MSG = 'Error fetching user';
const ERROR_SENDING_OTP = "Error sending otp"
const LOGIN_ERROR_MSG = 'Error logging in';
const AUTH_ERROR_MSG = 'Not Authorized';

// Controller function to create a new user
export const trainerSignupRequestOtp = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log(req.body);
        // const serverAddress = `${req.protocol}://${req.get('host')}`;
        const { trainername, email, phone, password, imageUrl ,certificatePdfUrl} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const role = UserRole.TRAINER
        await findExistingTrainer(trainername, email, hashedPassword, phone, imageUrl, certificatePdfUrl, role);
        res.status(201).json({ message: 'OTP sent to email. Please verify to complete signup.'});
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : CREATE_USER_ERROR_MSG;
        res.status(500).json({ message: errorMessage });
    }
};

// Verify OTP and Create User
export const trainerSignupVerifyOtp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, otp } = req.body;
        const trainer = await createTrainer(email, otp);
        const trainername = trainer.trainername
        const imageUrl = trainer.profilePictureUrl || ""

        const role = UserRole.TRAINER
        // Generate JWT token
        generateTokens({ id: trainer._id, trainername: trainer.trainername, email: trainer.email , role: role},res);
        res.json({
            message: "Login Success",
            data: {
                trainername,
                imageUrl,
            }
        })
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : CREATE_USER_ERROR_MSG;
        res.status(500).json({ message: errorMessage });
    }
};

export const requestResendOtp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email} = req.body;
        await resendOtp(email);
        res.status(201).json({ message: 'OTP sent to email. Please verify to complete signup.'});
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : ERROR_SENDING_OTP;
        res.status(500).json({ message: errorMessage });
    }
};

// Controller function to get a user by ID
export const getTrainer = async (req: Request, res: Response): Promise<void> => {
    try {
        const trainerId = req.params.id;
        const trainer = await getTrainerById(trainerId);
        if (trainer) {
            res.status(200).json(trainer);
        } else {
            res.status(404).json({ message: USER_NOT_FOUND_MSG });
        }
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : FETCH_USER_ERROR_MSG;
        res.status(500).json({ message: errorMessage });
    }
};

// Controller function to get a user by username
export const getTrainerByTrainernameController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { trainername } = req.params;
        const trainer = await getTrainerByTrainername(trainername);
        if (trainer) {
            res.status(200).json(trainer);
        } else {
            res.status(404).json({ message: USER_NOT_FOUND_MSG });
        }
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : FETCH_USER_ERROR_MSG;
        res.status(500).json({ message: errorMessage });
    }
};

// Controller function to login a user
export const trainerLogin = async (req: Request, res: Response): Promise<void> => {
    console.log("HELLO");

    try {
        const { email, password } = req.body;
        const trainer = await loginTrainer(email, password);
        if (!trainer) {
            console.log("not a user")
            res.status(401).json({ message: INVALID_CREDENTIALS_MSG });
            return;
        }
        function capitalizeFirstLetter(str: string): string {
            if (!str) return ''; // Handle empty strings
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        const trainername = capitalizeFirstLetter(trainer.trainername)
        const imageUrl = trainer.profilePictureUrl || ""

        const role = UserRole.TRAINER
        // Generate JWT token
        generateTokens({ id: trainer._id, trainername: trainername, email: trainer.email , role: role},res);
        res.json({
            message: "Login Success",
            data: {
                role: role
            }
        })
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : LOGIN_ERROR_MSG;
        console.log("error", errorMessage);

        res.status(500).json({ message: errorMessage });
    }
};

export const signinFailed = async (req: Request, res: Response): Promise<void> => {
    res.status(404).json({ error: true, message: LOGIN_ERROR_MSG })
};

export const googleCallbackController = (req: Request, res: Response) => {
    if (req.user) {
        const trainer = req.user as any; // Cast req.user to the correct user type
        console.log(req.user);

        const firstName = trainer.trainername.split(' ')[0]; // Get only the first name
        const imageUrl = trainer.profilePictureUrl;

        const role = UserRole.TRAINER
        // Generate JWT token
        generateTokens({ id: trainer._id, trainername: trainer.trainername, email: trainer.email , role: role},res);
        // Redirect to frontend with token, username, and image URL as query parameters
        res.redirect(`${process.env.CLIENT_URL}/trainer/profile`);
        //?token=${token}&username=${firstName}&imageUrl=${imageUrl}
    } else {
        res.redirect(`${process.env.CLIENT_URL}/trainer/signin`);
    }
};

export const logout = (req: Request, res: Response) => {
    res.clearCookie('token'); // Clears cookie if JWT is stored in cookies
    res.status(200).json({ message: 'Logged out successfully' });
};

export const uploadProfileImage = (req: Request, res: Response): void => {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return
    }
    res.send(`File uploaded: ${req.file.path}`);
};

export const getProfileData = async (req: Request, res: Response) => {
    try {
        // `req.user` contains decoded token data if token verification was successful
        const trainer = req.user; // Assuming `id` was part of the token payload
        if (trainer) {
            const { id } = trainer as { id: string; }; // Cast to expected structure
            // Fetch user data based on `userId`
            const tokenTrainer = await getTrainerById(id);
            if (!tokenTrainer) {
                res.status(404).json({ message: USER_NOT_FOUND_MSG });
            }

            function capitalizeFirstLetter(str: string | undefined): string {
                if (!str) return ''; // Handle empty strings
                return str.charAt(0).toUpperCase() + str.slice(1);
            }

            let trainername = tokenTrainer?.trainername
            let imageUrl = tokenTrainer?.profilePictureUrl
            let phone = tokenTrainer?.phone
            let email = tokenTrainer?.email
            // Send the data needed for the home page
            res.json({
                message: 'Profile Data',
                data: {
                    trainername: capitalizeFirstLetter(trainername),
                    imageUrl: imageUrl,
                    phone: phone,
                    email: email
                    // Add any other relevant data here, such as recent activities or stats
                },
            });
        } else {
            res.status(403).json({ message: 'User data not found in token' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching home data' });
    }
};

export const getUsersList = async (req: Request, res: Response) => {
    try {
        // `req.user` contains decoded token data if token verification was successful
        const trainer = req.user; // Assuming `id` was part of the token payload
        if (trainer) {
            const { id } = trainer as { id: string; }; // Cast to expected structure
            // Fetch user data based on `userId`
            const tokenTrainer = await getTrainerById(id);
            if (!tokenTrainer) {
                res.status(404).json({ message: USER_NOT_FOUND_MSG });
            }

            function capitalizeFirstLetter(str: string | undefined): string {
                if (!str) return ''; // Handle empty strings
                return str.charAt(0).toUpperCase() + str.slice(1);
            }

            let trainername = tokenTrainer?.trainername
            let imageUrl = tokenTrainer?.profilePictureUrl
            let phone = tokenTrainer?.phone
            let email = tokenTrainer?.email
            // Send the data needed for the home page
            res.json({
                message: 'Profile Data',
                data: {
                    trainername: capitalizeFirstLetter(trainername),
                    imageUrl: imageUrl,
                    phone: phone,
                    email: email
                    // Add any other relevant data here, such as recent activities or stats
                },
            });
        } else {
            res.status(403).json({ message: 'User data not found in token' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching home data' });
    }
};