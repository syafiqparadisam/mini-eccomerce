const cart = require("../../model/cartSchema");
const Response = require("../../response/successResponse")

const deleteAllProductInCart = async (req, res) => {
	const { user } = req;
	try {
		const findUser = await cart.findOne({ user }).exec()
        findUser.items = []
        await findUser.save()
        return res.status(200).json(new Response(200, null, "Successfully delete all cart"))
	} catch (error) {
        return res.sendStatus(500)
      }
};

module.exports = deleteAllProductInCart;
