import mongoose from 'mongoose';
import dotenv from 'dotenv';

import users from './data/users.js';
import products from './data/products.js';

import User from './models/userModels.js';
import Product from './models/productModels.js';
import Order from './models/orderModels.js';

import connectDb from './config/db.js';

dotenv.config();
connectDb();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProduct = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    await Product.insertMany(sampleProduct);
    console.log('Data Imported !...');
    process.exit();
  } catch (error) {
    console.log('Error: ', error);
    process.exit();
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed !...');
    process.exit();
  } catch (error) {
    console.log('Error: ', error);
    process.exit();
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
