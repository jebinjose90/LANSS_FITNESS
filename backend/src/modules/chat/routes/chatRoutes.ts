// **src/interfaces/routes/chatRoutes.ts**
import { Router } from 'express';
import { getMessages, sendMessage } from '../controllers/chatController';
import { authenticateToken } from '../../../infrastructure/security/authMiddleware';

const router = Router();

router.get('/:receiverId', authenticateToken, getMessages);
router.post('/', authenticateToken, sendMessage);

export default router;