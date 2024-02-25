const cart = require("../../model/cartSchema");
const errResponse = require("../../response/errorResponse");
const Response = require("../../response/successResponse");
const mongoose = require("mongoose");

const deleteProductInCartById = async (req, res) => {
	const { user } = req;
	const { id } = req.params;
	if (!user) return res.sendStatus(403);
	if (!id?.length) return res.sendStatus(400);

	try {
		const findUser = await cart.findOne({ user }).exec();
		if (!findUser) {
			return res.sendStatus(400);
		}

		findUser.items = findUser.items.filter((data) => data.productId != id);

		console.log(findUser.items);
		await findUser.save();
		res.status(204).json(new Response(204, "Succesfully deleted product"));
	} catch (error) {
		res.status(400).json(new errResponse(400, error));
	}
};

module.exports = deleteProductInCartById;
