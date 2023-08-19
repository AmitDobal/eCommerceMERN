const express = require("express");
const router = express.Router();
const {
  getCategories,
  newCategory,
  deleteCategory,
  saveAttr,
} = require("../controllers/categoryController");
const {
  verifyIsLoggedIn,
  verifyIsAdmin,
} = require("../middleware/verifyAuthToken");

//User privileges
router.get("/", getCategories);

//ADMIN Privileges
router.use(verifyIsLoggedIn);// TO verify is user is Logged in --> its a middleware
router.use(verifyIsAdmin); // middleware to verify user is Admin
router.post("/", newCategory);
router.delete("/:category", deleteCategory);
router.post("/attr", saveAttr);

module.exports = router;
