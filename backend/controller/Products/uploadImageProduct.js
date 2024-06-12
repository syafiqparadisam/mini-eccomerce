const allowedFile = require("../../config/allowedExtFilename")
const path = require("node:path")
const Response = require("../../response/successResponse");
const cloudinary = require("../../config/cloudinary");
const fs = require("node:fs/promises")

const uploadImageProduct = async (req, res) => {
	const file = req.file;
	if (!file) {
		return res.status(400).json(new Response(400,null,"Please upload your image"))
	}
	console.log(file)
	const isAllowedFile = allowedFile.includes(path.extname(file.path))
	if (!isAllowedFile) {
		await fs.rm(file.path)
		return res.status(415).json(new Response(415, null,`File type ${file.mimetype} not allowed`))
	}

	// chech max file size is below 2mb
	const maxFileSize = 2 * 1024 * 1024
	if (file.size > maxFileSize) {
		await fs.rm(file.path)
		return res.status(422).json(new Response(422, null, "Image should be less than 2mb size"))
	}
	
	try {
		const result = await cloudinary.uploader.upload(file.path, {
			transformation: { width: 170, height: 170, crop: "fill" },
		});
		await fs.rm(file.path)
		return res.status(200).json(new Response(200, {public_url: result.secure_url, public_id: result.public_id}));
	} catch (error) {
		return res.sendStatus(500)
	}
};

module.exports = uploadImageProduct