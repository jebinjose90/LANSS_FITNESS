//LANSS_FITNESS/backend/src/modules/user/controllers/userAuthController.ts
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { APP_CONSTANTS } from "../../../core/constants/general/apiConstants";

const accessSecretKey = process.env.JWT_SECRET || 'your-secret-key';
const refreshSecretKey = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key';

export const userRefreshAccessToken = (req: Request, res: Response) => {
  const refreshToken = req.cookies?.refreshToken;

  if (!refreshToken) {
     res.status(401).json({ message: "Refresh token not found" });
     return
  }

  try {
    // Verify refresh token
    const decoded = jwt.verify(
      refreshToken,
      refreshSecretKey as string
    ) as { id: string; username: string; email: string; role: string;};

    const newAccessToken = jwt.sign(
      {
        id: decoded.id,
        username: decoded.username,
        email: decoded.email,
        role: decoded.role,
      },
      accessSecretKey as string,
      { expiresIn: APP_CONSTANTS.ACCESS_TOKEN_EXPIRES_IN }
    );

    // Set new access token in HttpOnly cookie
    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000, // 15 min
    });

    res.status(200).json({ message: 'Access token refreshed' });
  } catch (error) {
     res.status(401).json({ message: "Invalid or expired refresh token" });
     return
  }
};
