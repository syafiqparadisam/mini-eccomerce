const router = require("express").Router();

router
	.get("/product", require("../controller/Cart/getAllProductsInCart"))
	.post("/product/:id", require("../controller/Cart/insertProductToCart"))
	.delete("/product", require("../controller/Cart/deleteAllProductInCart.js"))
	.delete("/product/:id", require("../controller/Cart/deleteProductInCartById.js"))
module.exports = router;
