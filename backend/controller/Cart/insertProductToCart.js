const cart = require("../../model/cartSchema");
const product = require("../../model/productSchema");
const errResponse = require("../../response/errorResponse");
const jwt = require("jsonwebtoken");

const insertProductToCart = async (req, res) => {
	const { user } = req;
	const { id } = req.params;
	const { quantity } = req.body;
	if (!user) return res.sendStatus(403);

	if (!id?.length) return res.sendStatus(400);
	try {
		const findUserInCart = await cart.findOne({ user }).exec();
		if (!findUserInCart?.user) {
				const addProductToCart = await cart.insertMany({
					items: [
						{
							productId: id,
							quantity,
						},
					],
					user,
				});
				if (!addProductToCart) {
					return res.sendStatus(400);
				}
				return res
					.status(201)
					.json(
						new Response(201, { message: "Successfully add product to cart" })
					);
			
		} else if (findUserInCart?.user) {
			const findId = findUserInCart.items.findIndex(
				(data) => data.productId == id
			);
			console.log(findId)
			if (findId >= 0) {
				findUserInCart.items[findId].quantity += parseInt(quantity);
				await findUserInCart.save();
				return res.sendStatus(201)
			}  else {
				
				findUserInCart.items.push({ productId: id, quantity });
				await findUserInCart.save();
				return res.sendStatus(201)
			}
		}
	} catch (error) {
		res.status(400).json(new errResponse(400, error));
	}
};

module.exports = insertProductToCart;
