///backend/src/modules/user/routes/userRoutes.ts
import { Router } from 'express';
import { adminChangePassword, adminSignin, adminSignup, getAdminProfile } from '../controllers/adminController';
import { authenticateToken } from '../../../infrastructure/security/authMiddleware';
import { refreshToken } from '../controllers/refreshTokenController';

const router = Router();

router.post('/signup', adminSignup);
router.post('/changePassword', authenticateToken, adminChangePassword);
router.post('/signin', adminSignin)
router.get('/refresh-token', refreshToken);
router.get('/me', authenticateToken, getAdminProfile);

export default router;
