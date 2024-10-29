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

// Controller function to create a new user
export const userSignupRequestOtp = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log(req.body);
        
        const { username, email, phone ,password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await findExistingUser( username, email, hashedPassword ,phone);
        res.status(201).json({ message: 'OTP sent to email. Please verify to complete signup.' });
    } catch (error: unknown) {
        console.log(error);
        
        const errorMessage = error instanceof Error ? error.message : CREATE_USER_ERROR_MSG;
        res.status(500).json({ message: errorMessage });
    }
};

// Verify OTP and Create User
export const userSignupVerifyOtp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, otp } = req.body;
        const newUser = await createUser(email, otp);
        res.status(201).json({ message: 'User created successfully', user: newUser });
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
        console.log("SECRET KEY",process.env.JWT_SECRET);
        
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );
        res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : LOGIN_ERROR_MSG;
        console.log("error",errorMessage);
        
        res.status(500).json({ message: errorMessage });
    }
};
