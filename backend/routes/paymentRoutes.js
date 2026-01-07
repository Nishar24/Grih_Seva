import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import dotenv from 'dotenv';
import { protect } from '../middleware/authMiddleware.js';

dotenv.config();

const router = express.Router();

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
router.post('/create-order', protect, async (req, res) => {
  const { amount, currency = 'INR' } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency,
    });
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Razorpay error' });
  }
});

// Verify payment
router.post('/verify', protect, async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + '|' + razorpay_payment_id;

  const expected = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest('hex');

  if (expected === razorpay_signature) {
    return res.json({ ok: true });
  }

  return res.status(400).json({ ok: false });
});

export default router;
