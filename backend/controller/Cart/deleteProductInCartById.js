const cart = require("../../model/cartSchema");
const Response = require("../../response/successResponse");

const deleteProductInCartById = async (req, res) => {
	const { user } = req;
	const { id } = req.params;
	if (!id?.length) return res.status(400).json(new Response(400, null, "Please enter the right id"))

	try {
		const findUser = await cart.findOne({ user }).exec();

		// delete cart user by id
		findUser.items = findUser.items.filter((data) => data.productId != id);

		await findUser.save();
		return res.status(200).json(new Response(200, "Succesfully deleted product"));
	} catch (error) {
		return res.sendStatus(500)
	}
};

module.exports = deleteProductInCartById;
