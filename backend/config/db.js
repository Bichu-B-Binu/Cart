import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDb connected ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.massage}`);
    process.exit(1);
  }
};

export default connectDB;
