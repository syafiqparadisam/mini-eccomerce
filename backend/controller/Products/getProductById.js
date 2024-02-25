const Response = require("../../response/successResponse");
const product = require("../../model/productSchema");
const errResponse = require("../../response/errorResponse");

const getProductById = async (req, res) => {
	const id = req.params.id;
	if (!id?.length) return res.sendStatus(400);

	try {
		const productById = await product.findById(id).exec();

		res.json(new Response(200, productById));
	} catch (error) {
		res.status(404).json(new errResponse(404, error));
	}
};

module.exports = getProductById;
