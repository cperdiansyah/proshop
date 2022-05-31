import express from 'express';

import {
  addOrderItems,
  getOrderById,
  upateOrderTopaid,
  upateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, upateOrderTopaid);
router.route('/:id/deliver').put(protect, admin, upateOrderToDelivered);

export default router;
