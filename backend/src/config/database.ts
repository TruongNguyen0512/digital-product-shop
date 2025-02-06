import mongoose from 'mongoose';

const MONGO_URI = process.env.NODE_ENV === 'production' 
  ? process.env.MONGO_URI_PROD 
  : process.env.MONGO_URI_DEV;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI || 'mongodb://localhost:27017/digipro-store');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};
