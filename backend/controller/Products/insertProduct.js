const validationProducts = require("../../validation/validateProducts")

const product = require("../../model/productSchema");
const Response = require("../../response/successResponse");
const cloudinary = require("../../config/cloudinary");

const insertProducts = async (req, res) => {
	// const { nama, harga, deskripsi } = req.body;
	// const isValidate = validationProducts.validate(req.body)
	// if (isValidate?.error) {
	// 	return res.status(400).json(new Response(400, isValidate?.error?.details))
	// }
	const file = req.file;
	console.log(file)
	if (!file) return res.status(400).json(new Response(400, "Please upload your image"))
	try {
		const result = await cloudinary.uploader.upload(file.path, {
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
		
		return res.status(500)
	}
};

module.exports = insertProducts