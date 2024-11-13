// src/infrastructure/security/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './jwtService';

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Access Denied' });
    return; // Ensure function ends here if there's no token
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded; // Attach decoded data to request
    next(); // Pass control to the next middleware or route handler
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
    return; // Ensure function ends here if token is invalid
  }
};
