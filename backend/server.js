const mongoose = require("mongoose");
const app = require("./index");

mongoose.connection.once("open", () => {
	console.log("Connected To MOngoDB");
	app.listen(8080, () => {
		console.log("Server is running on port 8080");
	});
});
