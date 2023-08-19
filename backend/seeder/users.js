const bcrypt = require("bcryptjs");
const ObjectId = require("mongodb").ObjectId;

const users = [
  {
    name: "admin",
    lastName: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin@admin.com", 10),
    isAdmin: true,
  },
  {
    _id: ObjectId(),
    name: "John",
    lastName: "Doe",
    email: "john@doe.com",
    password: bcrypt.hashSync("john@doe.com", 10),
  },
  {
    _id: ObjectId("64d5ecda9cc63f617271cb78"),
    name: "Amit",
    lastName: "D",
    email: "amit@D.com",
    password: bcrypt.hashSync("amit@D.com", 10),
    phoneNumber: 9876543210,
    address: "H.No - 123",
    country: "India",
    zipCode: "632145",
    city: "Dehradun",
    state: "Uttrakhand",
    isAdmin: true,
  },
];

module.exports = users;
