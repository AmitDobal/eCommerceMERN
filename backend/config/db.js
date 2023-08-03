require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.log("\nMongoDB connection FAIL: \n", error.message);
    console.log("\nSTACK: \n", error.stack)
    process.exit(1);
  }
};

module.exports = connectDB;
