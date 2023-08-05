const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => bcrypt.hashSync(password, salt);
const comparePassword = (inputPassword, hashedPassword) =>
  bcrypt.compareSync(inputPassword, hashedPassword);

module.exports = { hashPassword, comparePassword };
