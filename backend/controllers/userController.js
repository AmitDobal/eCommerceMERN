const User = require("../models/UserModel");
const { hashPassword } = require("../utils/hashPassword");

//FETCH ALL USERS
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    next(error);
  }
};

//REGISTER USER
const registerUser = async (req, res, next) => {
  try {
    const { name, lastName, email, password } = req.body;
    if (!(name && lastName && email && password)) {
      return res.status(400).send("All inputs are required");
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ error: "User Exists (email)" });
    } else {
      const hashedPassword = hashPassword(password);
      const user = await User.create({
        name,
        lastName,
        password: hashedPassword,
        email: email.toLowerCase(),
      });
      res.status(201).json(user);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers, registerUser };
