// src/infrastructure/security/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { verifyRefreshToken } from './jwtService';
import jwt from 'jsonwebtoken';
import { APP_CONSTANTS } from '../../core/constants/general/apiConstants';

const accessSecretKey = process.env.JWT_SECRET || 'your-secret-key';
const refreshSecretKey = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key';


export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { accessToken , refreshToken } = req.cookies
  
    if (!refreshToken) {
      res.status(401).json({ message: 'Token Expired' });
      return
    }

    if (!accessToken) {
      const decoded = jwt.verify(refreshToken, refreshSecretKey) as { id: string; username: string; email: string; role: string; };
      const payload = { id: decoded.id, username: decoded.username, email: decoded.email, role: decoded.role };

      const accessToken = jwt.sign(payload, accessSecretKey!, {
        expiresIn: APP_CONSTANTS.ACCESS_TOKEN_EXPIRES_IN,
      });
      // Set tokens in cookies
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 15 * 60 * 1000, // 15 minutes
      });

      req.user = payload;
      next();
    }

    const decoded = verifyRefreshToken(refreshToken) as {
      id: string;
      email: string;
      username: string;
      role: string;
    };
    req.user = decoded;
    console.log("TOKEN VERIFIED");

    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid or Expired Access Token' });
    return
  }
};

