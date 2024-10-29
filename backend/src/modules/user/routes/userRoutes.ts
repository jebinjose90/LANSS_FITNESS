///backend/src/modules/user/routes/userRoutes.ts

import { Router } from 'express';
import { getUser, getUserByUsernameController, userSignupRequestOtp, userSignupVerifyOtp,userLogin } from '../controllers/userController';


const router = Router();

router.post('/signup/request-otp', userSignupRequestOtp);
router.post('/signup/verify-otp', userSignupVerifyOtp);
router.post('/signin', userLogin);
router.get('/:id', getUser);
router.get('/username/:username', getUserByUsernameController);

export default router;
