import asyncHandler from 'express-async-handler';
import Order from '../models/orderModels.js';

// @desc Create new order
// @route POST /api/orders
// @access private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createOrder = await order.save();

    res.status(201).json(createOrder);
  }
});

// @desc Get order by id
// @route GET /api/orders/:id
// @access private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  res.status(200).json(order);
});

// @desc Update order to paid
// @route GET /api/orders/:id/pay
// @access private
const upateOrderTopaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }
  order.isPaid = true;
  order.paidAt = Date.now();
  order.paymentResult = {
    id: req.body._id,
    status: req.body.status,
    update_time: req.body.update_time,
    email_address: req.body.email_address,
  };

  const updatedorder = await order.save();

  res.json(updatedorder);
});

// @desc Get Login User orders
// @route GET /api/orders/myorders
// @access private
const getMyOrders = asyncHandler(async (req, res) => {
  const order = await Order.find({ user: req.user._id });
  res.json(order);
});

// @desc Get all orders
// @route GET /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const order = await Order.find({}).populate('user', 'id name');
  res.json(order);
});

// @desc Update order to Delivered
// @route GET /api/orders/:id/deliver
// @access Private/Admin
const upateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }
  order.isDelivered = true;
  order.deliveredAt = Date.now();

  const updatedorder = await order.save();

  res.json(updatedorder);
});

export {
  addOrderItems,
  getOrderById,
  upateOrderTopaid,
  upateOrderToDelivered,
  getMyOrders,
  getOrders,
};
