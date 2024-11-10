import mongoose from "mongoose"

const MONGO_DB_URL = "mongodb://127.0.0.1:27017/fileSharing";

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (error) {
    console.log("connecting error", error);
  }
};

export default dbConnection;
