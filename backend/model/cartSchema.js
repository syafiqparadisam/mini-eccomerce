const mongoose = require("mongoose");
const { format } = require("date-fns");
const idLocale = require("date-fns/locale/id");

const cart = mongoose.Schema({
	user: {
		type: String,
		ref: "User",
	},
	items: [
		{
			productId: {type: mongoose.Schema.Types.ObjectId, ref: "product"},
			quantity: Number,
		},
	],
	time: {
		type: String,
		default: () => format(new Date(), "dd MMMM yyyy", { locale: idLocale }),
	},
});

module.exports = mongoose.model("cart", cart);
