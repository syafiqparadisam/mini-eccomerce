const mongoose = require("mongoose");
const app = require("./index");
const port = process.env.APP_PORT

mongoose.connection.once("open", () => {
	console.log("Connected to mongoDB on port 27017");
	app.listen(port, () => {
		console.log("Server is running on port " + port);
	});
});
