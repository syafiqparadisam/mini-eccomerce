const req = require("supertest");
const mongoose = require("mongoose");
const app = require("../../index");
const Response = require("../../response/successResponse");
const userSchema = require("../../model/userSchema")
const bcrypt = require("bcrypt")
require("dotenv").config()


describe("Login Test POST /api/v1/auth/login", () => {
	let server;
	let payload;
	let register;
	let cookie;
	beforeAll(async () => {
		server = app.listen(process.env.APP_PORT, () => {
			console.log("Server is running on port ", process.env.APP_PORT)
		})
		await mongoose.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		register = {
			username: "syafi32",
			email: "syaewrwq@gmail.com",
			password: "12345678"
		}
		const hashPw = await bcrypt.hash(register.password, 10)
		await userSchema.insertMany({username: register.username, email: register.email, password: hashPw})
	});

	afterAll(async () => {
		await userSchema.deleteOne({username: register.username})
		await mongoose.connection.close();
		await server.close()
	});
	
})