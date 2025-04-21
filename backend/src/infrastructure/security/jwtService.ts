// src/infrastructure/security/jwtService.ts
import jwt from 'jsonwebtoken';
import { Response } from "express";
import { APP_CONSTANTS } from '../../core/constants/general/apiConstants';

const accessSecretKey = process.env.JWT_SECRET || 'your-secret-key';
const refreshSecretKey = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key';


export const generateTokens = (payload: object, res: Response) => {
  console.log("GENERATING NEW RE-TOKEN");

  const accessToken = jwt.sign(payload, accessSecretKey!, {
    expiresIn: APP_CONSTANTS.ACCESS_TOKEN_EXPIRES_IN,
  });

  const refreshToken = jwt.sign(payload, refreshSecretKey!, {
    expiresIn: APP_CONSTANTS.REFRESH_TOKEN_EXPIRES_IN,
  });

  // Set tokens in cookies
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    // secure: false, // set to true in prod (with HTTPS)
    // sameSite: "lax", // or "None" with secure: true for cross-origin
    maxAge: 15 * 60 * 1000, // 15 minutes
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    // secure: false, // set to true in prod (with HTTPS)
    // sameSite: "lax", // or "None" with secure: true for cross-origin
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return { accessToken, refreshToken };
};


// Verify Token (General)
export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, accessSecretKey);
  } catch (error) {
    throw new Error('Invalid token');
  }
};