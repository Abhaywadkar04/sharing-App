// In db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables directly in this file
dotenv.config();

const MONGO_DB_URL = process.env.MONGO_DB_URL;

const dbConnection = async () => {
  try {
    console.log("Connecting to MongoDB with URI:", MONGO_DB_URL);
    await mongoose.connect(MONGO_DB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default dbConnection;