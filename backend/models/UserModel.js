const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, require: true, unique: true },
    phoneNumber: { type: Number },
    address: { type: String },
    country: { type: String },
    zipCode: { type: String },
    city: { type: String },
    state: { type: String },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, require: true, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
