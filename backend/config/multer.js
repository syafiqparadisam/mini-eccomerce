const { randomUUID } = require("crypto");
const multer = require("multer");
const path = require("path");

module.exports = multer({
	storage: multer.diskStorage({
		destination: path.join(__dirname,"..","upload"),
		filename: (_, file,cb) => {
			const uniqueFile = new Date() + randomUUID() + file.originalname
			cb(null, uniqueFile)
		}
	})
});
