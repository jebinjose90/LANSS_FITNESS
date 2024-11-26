///backend/src/modules/trainer/routes/trainerRoutes.ts

import { Router } from 'express';
import { getTrainer, getTrainerByTrainernameController, trainerSignupRequestOtp, trainerSignupVerifyOtp, trainerLogin, googleCallbackController, signinFailed, logout, getProfileData, requestResendOtp} from '../controllers/trainerController';
import passport from 'passport';
import { uploadImage } from '../controllers/imageController';
import multer from "multer";
import { authenticateToken } from '../../../infrastructure/security/authMiddleware';
import { uploadPdf } from "../controllers/pdfController";

// Configure multer for file uploads with size limit
const pdfUpload = multer({
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB size limit
});

// Set up multer storage configuration
const storage = multer.memoryStorage();  // Store files in memory
const imageUpload = multer({ storage }); // Use multer middleware

const router = Router();

router.post('/signup/request-otp', trainerSignupRequestOtp);
router.post('/signup/verify-otp', trainerSignupVerifyOtp);
router.post('/request-resend-otp', requestResendOtp)
router.post('/signin', trainerLogin);
router.post('/profile', authenticateToken, getProfileData);
router.post('/logout', logout);
router.get('/:id', getTrainer);
router.get('/trainername/:trainername', getTrainerByTrainernameController);
router.get('/signin/failed', signinFailed)
router.get('/auth/trainer/google', passport.authenticate('trainer-google', { scope: ['profile', 'email'] }));
router.get('/auth/trainer/google/callback', passport.authenticate('trainer-google', {failureRedirect: '/signin/failed' }), googleCallbackController);
router.post('/upload', imageUpload.single("file"), uploadImage);
// Route to upload PDF
router.post("/upload-pdf", pdfUpload.single("file"), uploadPdf);

export default router;
