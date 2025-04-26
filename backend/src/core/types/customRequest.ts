// src/core/types/customRequest.ts
import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface CustomRequest extends Request {
  user?: JwtPayload & { role: string; id: string; email: string };
}
