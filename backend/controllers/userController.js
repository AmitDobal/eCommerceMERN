const User = require("../models/UserModel");
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error.message);
    res.json({ err: error, message: error.message });
  }
};

module.exports = getUsers;
