const mongoose = require("mongoose");
const app = require("./index");
const port = process.env.APP_PORT

mongoose.connection.once("open", () => {
	console.log("Connected To MOngoDB");
	app.listen(port, () => {
		console.log("Server is running on port " + port);
	});
});
