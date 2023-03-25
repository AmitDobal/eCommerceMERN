const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: { type: String, default: "Default category description" },
  image: { type: String, default: "/images/tablets-category.png" },
  attrs: [{ key: { type: String }, value: [{ type: String }] }],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
