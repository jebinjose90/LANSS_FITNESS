///backend/src/modules/user/routes/userRoutes.ts

import { Router } from 'express';
import { getUser, getUserByUsernameController, registerUser, userLogin } from '../controllers/userController';


const router = Router();

router.post('/register', registerUser);
router.post('/login', userLogin);
router.get('/:id', getUser);
router.get('/username/:username', getUserByUsernameController);

export default router;
