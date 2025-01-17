// Connecting to the MONGODB database

import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connection succesful");
  } catch (error) {
    throw new Error("Error in connecting to MongoDB");
  }
};

export default connect;
