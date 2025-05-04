// backend/src/modules/user/controllers/userController.ts

import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { createUser, findExistingUser, getUserById, getUserByUsername, loginUser, resendOtp, updateUserProfile } from '../usecases/getUserUsecases';
import { generateTokens } from '../../../infrastructure/security/jwtService';
import { USER } from '../../../core/constants/general/messages';
import { UserRole } from '../../../core/constants/general/roles';
import { CustomRequest } from '@core/types/customRequest';


// Controller function to create a new user
export const userSignupRequestOtp = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log(req.body);
        // const serverAddress = `${req.protocol}://${req.get('host')}`;
        const { username, email, phone, password, imageUrl } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const role = UserRole.USER
        await findExistingUser(username, email, hashedPassword, phone, imageUrl, role);
        res.status(201).json({ message: 'OTP sent to email. Please verify to complete signup.' ,
            data: {
                email: email
            }});
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : USER.MESSAGES.ERROR.CREATE_USER_ERROR_MSG;
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

        const role = UserRole.USER
        // Generate JWT token
        generateTokens({ id: user._id, username: user.username, email: user.email, role: role }, res);
        res.status(201).json({
            message: "User Login Success",
            data: {
                role: user.role
            }
        })
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : USER.MESSAGES.ERROR.CREATE_USER_ERROR_MSG;
        res.status(500).json({ message: errorMessage });
    }
};

export const requestResendOtp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body;
        await resendOtp(email);
        res.status(201).json({ message: 'OTP sent to email. Please verify to complete signup.' });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : USER.MESSAGES.ERROR.ERROR_SENDING_OTP;
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
            res.status(404).json({ message: USER.MESSAGES.ERROR.USER_NOT_FOUND_MSG });
        }
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : USER.MESSAGES.ERROR.FETCH_USER_ERROR_MSG;
        res.status(500).json({ message: errorMessage });
    }
};

export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const { user } = req as CustomRequest;

        if (!user) {
            res.status(401).json({ message: 'Unauthorized' });
            return 
        }

        res.status(200).json({
            role: user.role,
            id: user.id,
            email: user.email,
        });

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : USER.MESSAGES.ERROR.FETCH_USER_ERROR_MSG;
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
            res.status(404).json({ message: USER.MESSAGES.ERROR.USER_NOT_FOUND_MSG });
        }
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : USER.MESSAGES.ERROR.FETCH_USER_ERROR_MSG;
        res.status(500).json({ message: errorMessage });
    }
};

// Controller function to login a user
export const userLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        if (!user) {
            console.log("not a user")
            res.status(401).json({ message: USER.MESSAGES.ERROR.INVALID_CREDENTIALS_MSG });
            return;
        }
        function capitalizeFirstLetter(str: string): string {
            if (!str) return ''; // Handle empty strings
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        const username = capitalizeFirstLetter(user.username)
        const role = UserRole.USER
        // Generate JWT token
        generateTokens({ id: user._id, username: username, email: user.email, role: role }, res);
        res.status(201).json({
            message: "User Login Success",
            data: {
                role: role
            }
        })
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : USER.MESSAGES.ERROR.LOGIN_ERROR_MSG;
        console.log("error", errorMessage);
        res.status(500).json({ message: errorMessage });
    }
};

export const signinFailed = async (req: Request, res: Response): Promise<void> => {
    res.status(404).json({ error: true, message: USER.MESSAGES.ERROR.LOGIN_ERROR_MSG })
};

export const googleCallbackController = (req: Request, res: Response) => {
    if (req.user) {
        const user = req.user as any; // Cast req.user to the correct user type
        console.log(req.user);

        const firstName = user.username.split(' ')[0]; // Get only the first name
        const imageUrl = user.profilePictureUrl;

        const role = UserRole.USER
        // Generate JWT token
        generateTokens({ id: user._id, username: user.username, email: user.email, role: role }, res);
        // Redirect to frontend with token, username, and image URL as query parameters
        res.redirect(`${process.env.CLIENT_URL}/home`);
        //?token=${token}&username=${firstName}&imageUrl=${imageUrl}
    } else {
        res.redirect(`${process.env.CLIENT_URL}/userSignin`);
    }
};

export const logout = (req: Request, res: Response) => {
    const token = req.cookies?.accessToken;
    console.log("FROM LOGOUT TOKEN", token);
    console.log("Cookies before clear:", req.cookies);

    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        path: "/", // optional, but good to include if your cookie had it
    });

    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        path: "/",
    });
    res.status(200).json({ message: 'Logged out successfully' });
};

export const uploadProfileImage = (req: Request, res: Response): void => {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return
    }
    res.send(`File uploaded: ${req.file.path}`);
};

export const getHomeData = async (req: Request, res: Response) => {
    try {
        const user = req.user; // Assuming `id` was part of the token payload
        if (user) {
            
            const { id } = user as { id: string; }; // Cast to expected structure
            console.log("USER ID",id)
            // Fetch user data based on `userId`
            const tokenUser = await getUserById(id);
            if (!tokenUser) {
                console.log("ERR");
                
                res.status(404).json({ message: USER.MESSAGES.ERROR.USER_NOT_FOUND_MSG });
            }

            

            function capitalizeFirstLetter(str: string | undefined): string {
                if (!str) return ''; // Handle empty strings
                return str.charAt(0).toUpperCase() + str.slice(1);
            }

            // Send the data needed for the home page
            res.status(201).json({
                message: 'Home Data',
                data: {
                    username: capitalizeFirstLetter(tokenUser?.username),
                    imageUrl: tokenUser?.profilePictureUrl,
                    role: tokenUser?.role,
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

export const getProfileData = async (req: Request, res: Response) => {
    try {
        // `req.user` contains decoded token data if token verification was successful
        const user = req.user; // Assuming `id` was part of the token payload
        if (user) {
            const { id } = user as { id: string; }; // Cast to expected structure
            // Fetch user data based on `userId`
            const tokenUser = await getUserById(id);
            if (!tokenUser) {
                res.status(404).json({ message: USER.MESSAGES.ERROR.USER_NOT_FOUND_MSG });
            }

            function capitalizeFirstLetter(str: string | undefined): string {
                if (!str) return ''; // Handle empty strings
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
            console.log("DATA", {
                username: capitalizeFirstLetter(tokenUser?.username),
                imageUrl: tokenUser?.profilePictureUrl,
                email: tokenUser?.email,
                phone: tokenUser?.phone,
            }
                // Add any other relevant data here, such as recent activities or stats}
            );


            // Send the data needed for the profile page
            res.status(201).json({
                message: 'Profile Data',
                data: {
                    username: capitalizeFirstLetter(tokenUser?.username),
                    imageUrl: tokenUser?.profilePictureUrl,
                    email: tokenUser?.email,
                    phone: tokenUser?.phone,
                    gender: tokenUser?.gender,
                    age: tokenUser?.age,
                    weight: tokenUser?.weight,
                    height: tokenUser?.height,
                    place: tokenUser?.place,
                    // Add any other relevant data here, such as recent activities or stats
                },
            });
        } else {
            res.status(403).json({ message: 'Profile data not found in token' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching home data' });
    }
};

export const updat_UserProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log(req.body);
        // const serverAddress = `${req.protocol}://${req.get('host')}`;
        const { email, username, age, gender, height, weight, place } = req.body;

        await updateUserProfile(email, username, age, gender, height, weight, place);
        res.status(201).json({ message: 'User Profile updated succssfully' });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : USER.MESSAGES.ERROR.UPDATE_USER_PROFILE_ERROR_MSG;
        res.status(500).json({ message: errorMessage });
    }
};
