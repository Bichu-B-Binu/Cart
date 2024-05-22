import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import product from "./model/productModel.js";
import user from "./model/userModels.js";
import order from "./model/orderModel.js";
import connectDB from "./config/db.js";
import User from "./model/userModels.js";
dotenv.config();

connectDB();

const importData = async () => {
  try {
    await product.deleteMany();
    await user.deleteMany();
    await order.deleteMany();

    const createdUsers = await User.insertMany(users);
    console.log(createdUsers);

    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await product.insertMany(sampleProducts);

    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const distroyData = async () => {
  try {
    await product.deleteMany();
    await user.deleteMany();
    await order.deleteMany();

    console.log("Data Deleted");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  distroyData();
} else {
  importData();
}

// console.log(process.argv[2]);
