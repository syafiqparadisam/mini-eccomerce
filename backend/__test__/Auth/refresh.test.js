const req = require("supertest");
const mongoose = require("mongoose");
const app = require("../../index");
const userSchema = require("../../model/userSchema")
const bcrypt = require("bcrypt")
require("dotenv").config()

describe("Refresh Access Token GET /api/users/refresh", () => {
	let server;
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
			username: "syafiq2",
			email: "syafiq@gmail.com",
			password: "12345678"
		}
		const hashPw = await bcrypt.hash(register.password, 10)
		await userSchema.insertMany({username: register.username, email: register.email, password: hashPw})

		const response = await req(server)
		.post("/api/v1/auth/login")
		.send({username: register.username, password: register.password});

		console.log(response.headers["set-cookie"])
		cookie = response.headers["set-cookie"][0]
	});

	afterAll(async () => {
		await userSchema.deleteOne({username: register.username})
		await mongoose.connection.close();
		await server.close()
	});
	
	
	it('should response 401 Unauhorized when user have no cookie or has been deleted', async () => {
		const response  = await req(server).get("/api/v1/auth/refresh")

		expect(response.statusCode).toBe(401)
	});


	it('should response 200 OK when cookie is exist and correct, and get new access token', async () => {
		const response  = await req(server).get("/api/v1/auth/refresh").set("Cookie", cookie)


		expect(response.statusCode).toBe(200)
		expect(response.body).toBeTruthy()
		expect(response.body.accessToken).not.toBe("")
		expect(response.body.statusCode).toBe(200)
		expect(response.body.message).toBe("Ok")
	});
});
