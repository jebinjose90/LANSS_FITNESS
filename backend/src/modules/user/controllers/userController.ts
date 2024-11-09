// backend/src/modules/user/controllers/userController.ts

import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findExistingUser, getUserById, getUserByUsername, loginUser } from '../usecases/getUserUsecases';

// Constants for error and success messages
const USER_NOT_FOUND_MSG = 'User not found';
const INVALID_CREDENTIALS_MSG = 'Invalid credentials';
const CREATE_USER_ERROR_MSG = 'Error creating user';
const FETCH_USER_ERROR_MSG = 'Error fetching user';
const LOGIN_ERROR_MSG = 'Error logging in';
const AUTH_ERROR_MSG = 'Not Authorized';

// Controller function to create a new user
export const userSignupRequestOtp = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log(req.body);
        // const serverAddress = `${req.protocol}://${req.get('host')}`;
        const { username, email, phone, password ,imageUrl} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await findExistingUser(username, email, hashedPassword, phone, imageUrl);
        res.status(201).json({ message: 'OTP sent to email. Please verify to complete signup.' });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : CREATE_USER_ERROR_MSG;
        res.status(500).json({ message: errorMessage });
    }
};

// Verify OTP and Create User
export const userSignupVerifyOtp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, otp } = req.body;
        const user = await createUser(email, otp);
        const username = user.username
        const imageUrl = user.profilePictureUrl || ""

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                email: user.email
            },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );
        const redirectUrl = `/home?token=${token}&username=${username}&imageUrl=${imageUrl}`
        res.json({redirectUrl})
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : CREATE_USER_ERROR_MSG;
        res.status(500).json({ message: errorMessage });
    }
};

// Controller function to get a user by ID
export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.id;
        const user = await getUserById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: USER_NOT_FOUND_MSG });
        }
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : FETCH_USER_ERROR_MSG;
        res.status(500).json({ message: errorMessage });
    }
};

// Controller function to get a user by username
export const getUserByUsernameController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username } = req.params;
        const user = await getUserByUsername(username);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: USER_NOT_FOUND_MSG });
        }
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : FETCH_USER_ERROR_MSG;
        res.status(500).json({ message: errorMessage });
    }
};

// Controller function to login a user
export const userLogin = async (req: Request, res: Response): Promise<void> => {
    console.log("HELLO");

    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        if (!user) {
            console.log("not a user")
            res.status(401).json({ message: INVALID_CREDENTIALS_MSG });
            return;
        }
        const username = user.username
        const imageUrl = user.profilePictureUrl || ""
        console.log("KSDAAASASAS",imageUrl);
        
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                email: user.email
            },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );
        const redirectUrl = `/home?token=${token}&username=${username}&imageUrl=${imageUrl}`
        res.json({redirectUrl})
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
        const user = req.user as any; // Cast req.user to the correct user type
        console.log(req.user);

        const firstName = user.username.split(' ')[0]; // Get only the first name
        const imageUrl = user.profilePictureUrl;

        // Generate JWT token
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                email: user.email
            },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' });

        // Redirect to frontend with token, username, and image URL as query parameters
        res.redirect(`${process.env.CLIENT_URL}/home?token=${token}&username=${firstName}&imageUrl=${imageUrl}`);
    } else {
        res.redirect(`${process.env.CLIENT_URL}/userSignin`);
    }
};

export const uploadProfileImage = (req: Request, res: Response): void => {
    console.log("HI",req.file);
    
    if (!req.file) {
      res.status(400).send('No file uploaded.');
      return 
    }
    res.send(`File uploaded: ${req.file.path}`);
  };