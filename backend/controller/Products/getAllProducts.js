const product = require("../..//model/productSchema");
const errResponse = require("../../response/errorResponse");
const Response = require("../../response/successResponse");

const getAllProducts = async (req, res) => {
	try {
		const products = await product.find();
		if (!products) return res.sendStatus(500);
		res.status(200).json(new Response(200, products));
	} catch (error) {
		res.status(400).json(new errResponse(400, error));
	}
};

module.exports = getAllProducts