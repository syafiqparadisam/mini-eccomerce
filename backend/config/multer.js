const { randomUUID } = require("crypto");
const multer = require("multer");
const path = require("path");
const allowedFile = require("./allowedExtFilename");

module.exports = multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		if (!allowedFile.includes(path.extname(file.originalname))) {
			cb("Not Allowed Type Image", false);
            return;
		}
		cb(null, true);
	},
});
