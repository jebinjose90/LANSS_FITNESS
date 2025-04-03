// backend\src\infrastructure\database\connection.ts

import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/lanss-fitness');

    const db = mongoose.connection;
    console.log(`✅ MongoDB connected successfully: ${db.host}:${db.port}/${db.name}`);

    db.on('connected', () => {
      console.log(`✅ MongoDB connected successfully: ${db.host}:${db.port}/${db.name}`);
    });

    db.on('error', (err) => {
      console.error(`❌ MongoDB connection error: ${err.message}`);
      process.exit(1); // Exit the process on connection failure
    });

    db.on('disconnected', () => {
      console.warn('⚠️ MongoDB disconnected. Reconnecting...');
    });

    db.on('reconnected', () => {
      console.log('🔄 MongoDB reconnected successfully.');
    });

  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err);
    process.exit(1); // Exit the process on connection failure
  }
};

export default connectToDatabase;