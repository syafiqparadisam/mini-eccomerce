const mongoose = require("mongoose");

const product = mongoose.Schema({
	nama: {
		type: String,
		required: true,
	},
	gambar: {
		type: String,
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
	cloudinary_id: {
		type: String,
	},
});

module.exports = mongoose.model("product", product);
