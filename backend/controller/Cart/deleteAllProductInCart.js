const cart = require("../../model/cartSchema");
const errResponse = require("../../response/errorResponse");

const deleteAllProductInCart = async (req, res) => {
	const { user } = req;
    if (!user) return res.sendStatus(401)
	try {
		const findUser = await cart.findOne({ user }).exec()
        if (!findUser) {
           return res.sendStatus(400)
        }
        findUser.items = []
        await findUser.save()
        res.sendStatus(204)
	} catch (error) {
        res.status(400).json(new errResponse(400, error))
    }
};

module.exports = deleteAllProductInCart;
