// src/infrastructure/security/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './jwtService';

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {

  const token = req.cookies?.accessToken;
  console.log("TOKEN",token);
  console.log("Cookies before clear:", req.cookies);
  if (!token) {
    res.status(401).json({ message: 'Access Denied - No Access Token' });
    return 
  }

  try {
    const decoded = verifyToken(token); // your access token verifier
    req.user = decoded;
    console.log("TOKEN VERIFIED");
    
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid or Expired Access Token' });
    return 
  }
};

