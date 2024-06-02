const Response = require("../../response/successResponse");
const product = require("../../model/productSchema");

const getProductById = async (req, res) => {
	const id = req.params.id;
	if (!id?.length) return res.status(400).json(new Response(400, null, "Please enter the right id"))

	try {
		const productById = await product.findById(id).exec();
		return res.status(200).json(new Response(200, productById));
	} catch (error) {
		return res.sendStatus(500)
	}
};

module.exports = getProductById;
