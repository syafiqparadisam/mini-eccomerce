const userSchema = require("../../model/userSchema")
const app = require("../../index");
const req = require("supertest");
const mongoose = require("mongoose");
const Response = require("../../response/successResponse");
const {validateUser}= require("../../validation/validateUser");
require("dotenv").config()

describe("Register Test POST /api/v1/auth/register", () => {
	let server;
	let payload;
	beforeAll(async () => {
		server = app.listen(process.env.APP_PORT, () => {
			console.log("Server is running on port ", process.env.APP_PORT)
		})
		await mongoose.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	});

	afterAll(async () => {
		await userSchema.deleteOne({username: payload.username})
		await mongoose.connection.close();
		await server.close()
	});

	it("should response bad request 400 email is wrong", async () => {
		payload = {
			username: "dsa",
			email: "Ro@gmohha",
			password: "12345678",
			confirmPassword: "12345678",
		};
		const response = await req(server).post("/api/v1/auth/register").send(payload);
		expect(response.statusCode).toBe(400);
		const {error} = validateUser.validate(payload)
		// "email must be a string"
		expect(response.body).toMatchObject(new Response(400, null, error?.details));
	});
	
	it("should response conflict 409 when user already exist", async () => {
		payload = {
			username: "syafiq",
			email: "apasih@gmail.com",
			password: "21324444",
			confirmPassword: "21324444",
		}

		// make first
		const response1 = await req(server).post("/api/v1/auth/register").send(payload);
		expect(response1.statusCode).toBe(201);
		expect(response1.body).toMatchObject(
			new Response(201, null,`Succesfully created new user ${payload.username}`)
		);

		const response = await req(server).post("/api/v1/auth/register").send(payload);
		expect(response.statusCode).toBe(409);
		expect(response.body).toMatchObject(
			new Response(409, null,"username or email already exists")
		);

		await userSchema.deleteOne({username: payload.username})
	});
	it("should response Ok 200 when Register Success", async () => {
		payload = {
			username: "hahaha",
			email: "hahaha@gmail.com",
			password: "12345678",
			confirmPassword: "12345678",
		};
		const response = await req(server).post("/api/v1/auth/register").send(payload);
		expect(response.statusCode).toBe(201);
		expect(response.body).toMatchObject(
			new Response(201, null,`Succesfully created new user ${payload.username}`)
		);
	});
});
