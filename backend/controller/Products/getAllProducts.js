const product = require("../..//model/productSchema");
const Response = require("../../response/successResponse");

const getAllProducts = async (_, res) => {
	try {
		const products = await product.find();
		if (!products) return res.sendStatus(404);
		res.status(200).json(new Response(200, products));
	} catch (error) {
		return res.sendStatus(500)
	}
};

module.exports = getAllProducts