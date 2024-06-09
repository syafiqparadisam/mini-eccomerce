
const productSchema = require("../../model/productSchema");
const Response = require("../../response/successResponse");
const cloudinary = require("../../config/cloudinary");

const uploadImageProduct = async (req, res) => {
	const file = req.file;
	if (!file) return res.status(400).json(new Response(400, null,"Please upload your image"))
	console.log(file)	

	try {
		const result = await cloudinary.uploader.upload(file.path, {
			transformation: { width: 170, height: 170, crop: "fill" },
		});
		return res.status(200).json(new Response(200, {public_url: result.secure_url, public_id: result.public_id}));
	} catch (error) {
		return res.sendStatus(500)
	}
};

module.exports = uploadImageProduct