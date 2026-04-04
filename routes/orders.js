const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

// Get all orders (with populate)
router.get("/", async (req, res) => {
  const orders = await Order.find()
    .populate("user")
    .populate("products");

  res.json(orders);
});

module.exports = router;