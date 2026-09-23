import mongoose from "mongoose";
import ApiError from "../utils/api-error.js";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    throw new ApiError(500, "Failed to connect with the database", error);
  }
};

export default connectToDB;
