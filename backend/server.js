import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

/* Routes */
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

/* Middleware */
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

/* Product routes */
app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);

/* User Routes */
app.use('/api/users', userRoutes);

/* Order Routes */
app.use('/api/orders', orderRoutes);

/* payment routes */
app.use('/api/config', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running ${process.env.NODE_ENV} mode on port ${PORT}`)
);
