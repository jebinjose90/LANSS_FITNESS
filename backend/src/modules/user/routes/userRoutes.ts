///backend/src/modules/user/routes/userRoutes.ts

import { Router } from 'express';
import { getUser, getUserByUsernameController, userSignupRequestOtp, userSignupVerifyOtp, userLogin, googleCallbackController, signinFailed, logout, getHomeData, getProfileData ,requestResendOtp, updat_UserProfile} from '../controllers/userController';
import passport from 'passport';
import { uploadImage } from '../controllers/imageController';
import multer from "multer";
import { authenticateToken } from '../../../infrastructure/security/authMiddleware';
import { calculateBMIHandler } from '../controllers/bmiController';


// Set up multer storage configuration
const storage = multer.memoryStorage();  // Store files in memory
const upload = multer({ storage }); // Use multer middleware

const router = Router();

router.post('/signup/request-otp', userSignupRequestOtp);
router.post('/signup/verify-otp', userSignupVerifyOtp);
router.post('/request-resend-otp', requestResendOtp)
router.post('/signin', userLogin);
router.post('/home', authenticateToken, getHomeData);
router.post('/profile', authenticateToken, getProfileData);
router.post('/updateUserProfile', authenticateToken, updat_UserProfile);
router.post('/logout', logout);
router.get('/:id', getUser);
router.get('/username/:username', getUserByUsernameController);
router.get('/signin/failed', signinFailed)
router.get('/auth/user/google', passport.authenticate('user-google', { scope: ['profile', 'email'] }));
router.get('/auth/user/google/callback', passport.authenticate('user-google', 
    {failureRedirect: '/signin/failed' }), googleCallbackController);
router.post('/upload-image', upload.single("file"), uploadImage);
router.post('/calculate-bmi', calculateBMIHandler);
export default router;
