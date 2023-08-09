const express = require("express");
const router = express.Router();
const {getUserOrders} = require("../controllers/orderController");

router.get("/", getUserOrders);

module.exports = router;
