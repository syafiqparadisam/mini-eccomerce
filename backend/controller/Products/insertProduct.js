const product = require("../../model/productSchema");
const errResponse = require("../../response/errorResponse");
const Response = require("../../response/successResponse");
const cloudinary = require("../../config/cloudinary");

const insertProducts = async (req, res) => {
	const { nama, harga, deskripsi } = req.body;
	const path = req.file.path;
	try {
		const result = await cloudinary.uploader.upload(path, {
			transformation: { width: 170, height: 170, crop: "fill" },
		});
		console.log(result);
		const insertProduct = await product.insertMany({
			nama: nama,
			harga: harga,
			deskripsi: deskripsi,
			gambar: result.secure_url,
			cloudinary_id: result.public_id,
		});
		console.log(insertProduct);
		if (!insertProduct) {
			return res
				.status(400)
				.json(new Response(400, "Error While Uploading File"));
		}
		res.status(200).json(new Response(200, "Succesfully created product"));
	} catch (error) {
		res.status(500).json(new errResponse(500, error));
	}
};

module.exports = insertProducts