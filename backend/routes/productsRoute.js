const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const getAllProducts = require("../controller/Products/getAllProducts");
const getProductById = require("../controller/Products/getProductById");
const insertProducts = require("../controller/Products/insertProduct");


router
	.get("/", getAllProducts)
	.get("/:id", getProductById)
	.post("/", upload.single("image"), insertProducts);

module.exports = router;
