
const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const getAllProducts = require("../controller/Products/getAllProducts");
const createProduct = require("../controller/Products/createProduct")
const getProductById = require("../controller/Products/getProductById");
const uploadImageProduct = require("../controller/Products/uploadImageProduct");


router
	.get("/", getAllProducts)
	.get("/:id", getProductById)
	.post("/", createProduct)
	.post("/image", upload.single("image"), uploadImageProduct);

module.exports = router;
