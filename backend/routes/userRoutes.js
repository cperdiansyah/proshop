import express from 'express';

import {
  authUsers,
  getUserProfile,
  registerUsers,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(registerUsers);
router.post('/login', authUsers);
router.route('/profile').get(protect, getUserProfile);

export default router;
