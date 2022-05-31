import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';

/* Routes */
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

/* Middleware */
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

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

/* upload routes */
app.use('/api/upload', uploadRoutes);

/* payment routes */
app.use('/api/config', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

const __dirname = path.resolve();

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
// app.use('/api/upload', uploadRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running ${process.env.NODE_ENV} mode on port ${PORT}`)
);
