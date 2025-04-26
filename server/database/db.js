import mongoose from "mongoose";

const MONGO_DB_URL = "mongodb+srv://sureshwadkar5678:RbuEO0bha877W14H@filesharing.wfpmvcy.mongodb.net/fileSharing?retryWrites=true&w=majority";

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_DB_URL);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.log("❌ MongoDB connection error:", error);
  }
};

export default dbConnection;
