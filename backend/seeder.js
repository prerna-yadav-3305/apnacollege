const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./src/config/db');
const College = require('./src/models/College');
const colleges = require('./src/data/colleges');

const importData = async () => {
  try {
    await connectDB();  // only once, await connection before DB ops

    await College.deleteMany();
    await College.insertMany(colleges);

    console.log('✅ College data imported!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error importing data:', err);
    process.exit(1);
  }
};

importData();

console.log('MONGO_URI:', process.env.MONGO_URI);
