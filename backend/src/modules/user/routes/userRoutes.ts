///backend/src/modules/user/routes/userRoutes.ts

import { Router } from 'express';
import { getUser, getUserByUsernameController, userSignupRequestOtp, userSignupVerifyOtp, userLogin, googleCallbackController, signinFailed } from '../controllers/userController';
import passport from 'passport';


const router = Router();

router.post('/signup/request-otp', userSignupRequestOtp);
router.post('/signup/verify-otp', userSignupVerifyOtp);
router.post('/signin', userLogin);
router.get('/:id', getUser);
router.get('/username/:username', getUserByUsernameController);
router.get('/signin/failed', signinFailed)

router.get('/auth/user/google', passport.authenticate('user-google', { scope: ['profile', 'email'] }));
router.get('/auth/user/google/callback', passport.authenticate('user-google', 
    {failureRedirect: '/signin/failed' }), googleCallbackController);
export default router;
