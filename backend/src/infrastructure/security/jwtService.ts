// src/infrastructure/security/jwtService.ts
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'your-secret-key';
const refreshSecretKey = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key';

// Generate Access Token
export const generateToken = (payload: object): string => {
  return jwt.sign(payload, secretKey, { expiresIn: '24h' }); // Token expires in 1 hour
};

// Generate Refresh Token
export const generateRefreshToken = (payload: object): string => {
  return jwt.sign(payload, refreshSecretKey, { expiresIn: '7d' }); // Refresh token valid for 7 days
};

// Verify Token (General)
export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    throw new Error('Invalid token');
  }
};
