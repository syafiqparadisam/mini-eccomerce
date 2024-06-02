const mongoose = require("mongoose");

const product = mongoose.Schema({
	nama: {
		type: String,
		required: true,
	},
	gambar: {
		type: String,
		required: false
	},
	harga: {
		type: Number,
		required: true,
	},
	deskripsi: {
		type: String,
		required: false,
	},
	ulasan: {
		type: [String],
		required: false,
	},
	public_gambar_id: {
		type: String,
		required: false
	},
});

module.exports = mongoose.model("product", product);
