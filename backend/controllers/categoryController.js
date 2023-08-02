const Category = require("../models/CategoryModel");

//FETCH ALL CATEGORY
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({}).sort({ name: "asc" }).orFail();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

//CREATE CATEGORY
const newCategory = async (req, res, next) => {
  try {
    const { category } = req.body;
    if (!category) {
      res.status(400).send("Category Input is required");
    }
    const categoryExists = await Category.findOne({ name: category });
    if (categoryExists) {
      res.status(400).send("Category Aready Exists!");
    } else {
      const categoryCreated = await Category.create({
        name: category,
      });
      res.status(201).send({ categoryCreated: categoryCreated });
    }
  } catch (error) {
    next(error);
  }
};

//DELETE CATEGORY'
const deleteCategory = async (req, res, next) => {
  try {
    const category = decodeURIComponent(req.params.category);
    if (category !== "Choose category") {
      const categoryExist = Category.findOne({ name: category }).orFail();
      await categoryExist.remove();
      res.json({ categoryDeleted: true });
    }
  } catch (error) {
    next(error);
  }
};

//SAVE ATTRIBUTES -
const saveAttr = async (req, res, next) => {
  const { key, val, categoryChoosen } = req.body;
  if (!key || !val || !categoryChoosen) {
    return res.status(400).send("All inputs are required");
  }
  try {
    const category = categoryChoosen.split("/")[0];
    const categoryExists = await Category.findOne({ name: category }).orFail();

    if (categoryExists.attrs.length > 0) {
      //if key exist in the data base (attrs exist in DB)
      var keyDoesNotExistInDB = true;

      categoryExists.attrs.map((item, idx) => {
        if (item.key === key) {
          keyDoesNotExistInDB = false;
          var copyAttributeValues = [...categoryExists.attrs[idx].value];
          copyAttributeValues.push(val);
          var newAttributeValues = [...new Set(copyAttributeValues)]; //set ensure unique values
          categoryExists.attrs[idx].value = newAttributeValues;
        }
      });

      if (keyDoesNotExistInDB) {
        categoryExists.attrs.push({ key, value: [val] });
      }
    } else {
      categoryExists.attrs.push({ key, value: [val] });
    }
    await categoryExists.save();
    let cat = await Category.find({}).sort({ name: "asc" });
    return res.status(201).json({ categoriesUpdated: cat });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCategories, newCategory, deleteCategory, saveAttr };
