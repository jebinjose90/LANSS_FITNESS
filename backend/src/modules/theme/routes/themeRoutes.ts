// backend/src/modules/theme/routes/themeRoutes.ts

import express from 'express';
import { getCurrentTheme } from '../controllers/themeController';

const router = express.Router();

router.get('/theme', getCurrentTheme);  // Make sure this route points to the controller

export default router;
