// backend/src/infrastructure/security/refreshToken.ts
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { generateTokens } from './jwtService'; // if you placed token generator here too
const JWT_REFRESH_SECRET = process.env.JWT_REFREST_SECRET!;

export const handleRefreshToken = (req: Request, res: Response) => {
  try {
    const refresh_token = req.cookies?.refreshToken;
    console.log("REFRESH TOKEN", refresh_token);

    if (!refresh_token) {
      res.status(401).json({ message: 'Token Expired' });
      return
    }
    const decoded = jwt.verify(refresh_token, JWT_REFRESH_SECRET) as { id: string; username: string; email: string; role: string; };
    const payload = { id: decoded.id, username: decoded.username, email: decoded.email, role: decoded.role };
    const { accessToken, refreshToken } = generateTokens(payload, res);

    // Set tokens in cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      message: "Token Generated"
    })
    return

  } catch (error) {
    console.error('Refresh token error:', error);
    console.log('Refresh token error:', error);

    res.status(403).json({ message: 'Invalid or expired refresh token' });
    return
  }
};