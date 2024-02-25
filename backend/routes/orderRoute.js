const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

router
	.post("/pesanan", orderController.addOrderedProduct)
	.get("/pesanan", orderController.getAllOrdered);

module.exports = router;
