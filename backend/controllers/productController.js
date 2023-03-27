const Product = require("../models/ProductModel");
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error.message);
    res.json({ err: error, message: error.message });
  }
};

module.exports = getProducts;
