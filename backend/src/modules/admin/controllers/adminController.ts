import { Request, Response } from 'express';
import AdminModel from "../models/AdminModel";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserRole } from '../../../core/constants/general/roles';
import { loginAdmin } from '../usecases/getAdminUsecases';
import { generateTokens } from '../../../infrastructure/security/jwtService';
import { ADMIN, COMMON } from '../../../core/constants/general/messages';

export const adminSignup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { secret } = req.headers;
    if (secret !== process.env.ADMIN_SECRET) {
      res.status(403).json({ message: COMMON.MESSAGES.ERROR.UNAUTHORIZED });
      return;
    }

    const { username, email, password } = req.body;

    const existing = await AdminModel.findOne({ username });
    if (existing) {
      res.status(400).json({ message: 'Admin already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new AdminModel({ username, email, password: hashedPassword, role: UserRole.ADMIN });

    await admin.save();
    res.status(201).json({ message: 'Admin created successfully' });

  } catch (error) {
    console.error('Error creating admin:', error);
    res.status(500).json({ message: COMMON.MESSAGES.ERROR.INTERNAL_SERVER_ERROR });
  }
};

export const adminChangePassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const { currentPassword, newPassword } = req.body;
    const token = req.cookies.accessToken;

    if (!token) {
      res.status(401).json({ message: COMMON.MESSAGES.ERROR.UNAUTHORIZED_NO_TOKEN });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };

    const admin = await AdminModel.findById(decoded.id);
    if (!admin) {
      res.status(404).json({ message: 'Admin not found' });
      return;
    }

    const isMatch = await bcrypt.compare(currentPassword, admin.password);
    if (!isMatch) {
      res.status(401).json({ message: 'Incorrect current password' });
      return;
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    admin.password = hashedPassword;
    await admin.save();

    res.status(200).json({ message: 'Password changed successfully' });

  } catch (error) {
    console.error('Password change error:', error);
    res.status(500).json({ message: COMMON.MESSAGES.ERROR.INTERNAL_SERVER_ERROR });
  }
};

export const adminSignin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const admin = await loginAdmin(email, password);
    if (!admin) {
      console.log("not an Admin")
      res.status(401).json({ message: ADMIN.MESSAGES.ERROR.INVALID_CREDENTIALS_MSG });
      return;
    }
    function capitalizeFirstLetter(str: string): string {
      if (!str) return ''; // Handle empty strings
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const username = capitalizeFirstLetter(admin.username)

    const role = UserRole.ADMIN; 
    // Generate JWT token
    generateTokens({ id: admin._id, username: username, email: admin.email, role: role}, res);
    res.status(201).json({
      message: ADMIN.MESSAGES.SUCCESS.LOGIN_SUCCESS,
      data: {
        role: role,
      }
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : ADMIN.MESSAGES.ERROR.LOGIN_ERROR_MSG;
    console.log("error", errorMessage);
    res.status(500).json({ message: errorMessage });
  }
};
