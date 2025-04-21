// backend/src/modules/user/controllers/refreshTokenController.ts
import { Request, Response } from 'express';
import { handleRefreshToken } from '../../../infrastructure/security/refreshToken';

export const refreshToken = async (req: Request, res: Response) => {
  return handleRefreshToken(req, res);
};