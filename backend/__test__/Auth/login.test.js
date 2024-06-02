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
		console.log(hashPw)
		const result = await userSchema.insertMany({username: register.username, email: register.email, password: hashPw})
		console.log(result)
	});

	afterAll(async () => {
		await userSchema.deleteOne({username: register.username})
		await mongoose.connection.close();
		await server.close()
	});
	

	it("should response bad request 400 wrong password and wrong username", async () => {
		payload = {
			username: "unknown",
			password: "82174892384"
		}
		console.log(payload)
		const response = await req(server)
			.post("/api/v1/auth/login")
			.send(payload);

		expect(response.statusCode).toBe(400);
		expect(response.body).toMatchObject(
			new Response(400, null,"Wrong username Or password")
		);
	});

	it("Should response OK 200 If Login Success", async () => {
		const response = await req(server)
			.post("/api/v1/auth/login")
			.send(register);

		const token = await userSchema.findOne({username: register.username}, {refreshToken: 1})
		console.log(token)
		
		expect(response.statusCode).toBe(200);
		expect(response.body.accessToken).toBeTruthy();
		expect(response.headers["set-cookie"]).not.toEqual([])
		expect(token).not.toEqual([])
	});
});
