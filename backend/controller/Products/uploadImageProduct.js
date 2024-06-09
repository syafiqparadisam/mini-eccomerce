
const productSchema = require("../../model/productSchema");
const Response = require("../../response/successResponse");
const cloudinary = require("../../config/cloudinary");

const uploadImageProduct = async (req, res) => {
	const productId = req.headers["X-Data-ProductId"]
	if (!productId) return res.status(400).json(new Response(400, null, "Please enter your product id"))
	const file = req.file;
	console.log(file)
	if (!file) return res.status(400).json(new Response(400, null,"Please upload your image"))
	try {
		const result = await cloudinary.uploader.upload(file.path, {
			transformation: { width: 170, height: 170, crop: "fill" },
		});
		console.log(result);
		await productSchema.updateOne({_id: productId}, {$set: {gambar: result.secure_url, public_gambar_id: result.public_id}});

		return res.status(200).json(new Response(200, "Succesfully created product"));
	} catch (error) {
		return res.sendStatus(500)
	}
};

module.exports = uploadImageProduct