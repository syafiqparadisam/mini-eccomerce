const cart = require("../../model/cartSchema");
const product = require("../../model/productSchema");
const jwt = require("jsonwebtoken");

const insertProductToCart = async (req, res) => {
	const { user } = req;
	const { id } = req.params;
	const { quantity } = req.body;
	if (!id?.length) return res.status(400).json(new Response(400, null, "Please enter the right id"))
	try {
		const findUserInCart = await cart.findOne({ user }).exec();

		// if there has no cart, insert to database
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
					new Response(201, null, "Successfully add product to cart" )
				);
			
		// if there has cart, just append it
		} else if (findUserInCart?.user) {
			const findId = findUserInCart.items.findIndex(
				(data) => data.productId == id
			);
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
		return res.sendStatus(500)
	}
};

module.exports = insertProductToCart;
