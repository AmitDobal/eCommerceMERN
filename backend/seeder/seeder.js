const connectDB = require("../config/db");
connectDB();

const categoryData = require("./categories");

const Category = require("../models/CategoryModel");

const importData = async () => {
  try {
    console.log("Seeder START!!");

    // await Category.collection.dropIndexes();
    await Category.collection.deleteMany();
    await Category.insertMany(categoryData);
    console.log("Seeder data proceeded SUCCESSFULLY!!");
    process.exit();
  } catch (error) {
    console.log("Error while processing seeder data!", error.message);
    process.exit(1);
  }
};
importData();
