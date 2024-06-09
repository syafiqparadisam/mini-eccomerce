const cart = require("../../model/cartSchema");
const products = require("../../model/productSchema");
const Response = require("../../response/successResponse")

const getAllProductsInCart = async (req, res) => {
	const { user } = req;
	try {
		const cartUser = await cart
			.findOne({ user: user })
			.populate("items.productId");
		if (!cartUser) {
			return res.status(200).json(new Response(200, null, "You haven't yet cart, please insert product to your cart"))
		}
		return res.status(200).json(new Response(200, cartUser, "Ok"));
	} catch (error) {
		return res.sendStatus(500)
	}
};

module.exports = getAllProductsInCart;
