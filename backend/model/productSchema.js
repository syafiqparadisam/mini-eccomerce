const mongoose = require("mongoose");

const product = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	image: [{
		body: {
			public_image_id: String,
			public_image_url: String
		},
	}],
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	rating: {
		type: [String],
		required: false,
	},
	public_image_id: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model("product", product);
