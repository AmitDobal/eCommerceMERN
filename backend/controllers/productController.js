const Product = require("../models/ProductModel");
const getProducts = async (req, res) => {
  // res.send("Handling product routes, e.g search for products");
  try {
    // await Product.create({
    //   name: "Panasonic23",
    //   description: "this is the best phone",
    //   category: "mobile",
    //   count: 1,
    // });
    console.log("Product created");
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error.message);
    res.json({ err: error, message: error.message });
  }
};

module.exports = { getProducts };
