const Order = require("../models/OrderModel");
const getUserOrders = async (req, res) => {
  try {
    const order = await Order.find();
    res.json(order);
  } catch (error) {
    console.log(error.message);
    res.json({ err: error, message: error.message });
  }
};

module.exports = {getUserOrders};
