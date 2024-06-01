const Response = require("../../response/successResponse");
const product = require("../../model/productSchema");

const getProductById = async (req, res) => {
	const id = req.params.id;
	if (!id?.length) return res.sendStatus(400);

	try {
		const productById = await product.findById(id).exec();

		res.json(new Response(200, productById));
	} catch (error) {
		return res.sendStatus(500)
	}
};

module.exports = getProductById;
