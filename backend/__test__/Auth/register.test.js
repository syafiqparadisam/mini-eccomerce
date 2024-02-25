const app = require("../../index");
const req = require("supertest");
const users = require("../../model/userSchema");
const mongoose = require("mongoose");
const Response = require("../../response/successResponse");
const validateUser = require("../../validation/validateUser");
const errResponse = require("../../response/errorResponse");
const bcrypt = require("bcrypt");

describe("Register Test POST /api/users/register", () => {
	beforeAll(async () => {
		await mongoose.connect(process.env.DATABASE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	});

	afterAll(async () => {
		await mongoose.connection.close();
	});

	describe("POST WITH WRONG EMAIL FIELD", () => {
		it("should response bad request 400 when Request isn't validate", async () => {
			const payload = {
				username: "dsa",
				email: "Ro@gmohha",
				password: "12345678",
				confirmPassword: "12345678",
			};
			const response = await req(app).post("/api/users/register").send(payload);
			const { value, error } = validateUser.validate(payload);
			expect(response.statusCode).toBe(400);
			expect(response.body).toMatchObject(new errResponse(400, error));
		});
	});
	describe("POST WITH WRONG USERNAME 1 LENGTH", () => {
		it("should response bad request 400 when Request isn't validate", async () => {
			const payload = {
				username: "f",
				email: "Ro@gmail.com",
				password: "12345678",
				confirmPassword: "12345678",
			};
			const response = await req(app).post("/api/users/register").send(payload);
			const { value, error } = validateUser.validate(payload);
			expect(response.statusCode).toBe(400);
			expect(response.body).toMatchObject(new errResponse(400, error));
		});
	});
	describe("POST WITH LENGTH 7 LENGHT OR ABOVE", () => {
		it("should response bad request 400 when Request isn't validate", async () => {
			const payload = {
				username: "fFSA",
				email: "Ro@gmail.com",
				password: "12347",
				confirmPassword: "12347",
			};
			const response = await req(app).post("/api/users/register").send(payload);
			const { value, error } = validateUser.validate(payload);
			expect(response.statusCode).toBe(400);
			expect(response.body).toMatchObject(new errResponse(400, error));
		});
	});
	describe("POST WITH password is not same", () => {
		it("should response bad request 400 when Request isn't validate", async () => {
			const payload = {
				username: "dsa",
				email: "Ro@gmail.com",
				password: "12345678",
				confirmPassword: "12345687",
			};
			const response = await req(app).post("/api/users/register").send(payload);
			expect(response.statusCode).toBe(400);
			expect(response.body).toMatchObject(
				new Response(400, "Password is not same")
			);
		});
	});

	describe("POST WITH FIELD HAS IN DATABASE", () => {
		it("should response conflict 409 when payload has in database", async () => {
			const response = await req(app).post("/api/users/register").send({
				username: "da",
				email: "hshfh@makjf.com",
				password: "2132444",
				confirmPassword: "2132444",
			});
			expect(response.statusCode).toBe(409);
			expect(response.body).toMatchObject(
				new Response(409, "username or email already exists")
			);
		});
	});
	describe("POST WITH CORRECT FIELD", () => {
		it("should response Ok 200 when Register Success", async () => {
			const payload = {
				username: "dshdkss",
				email: "hsdafdd@gmail.com",
				password: "12345678",
				confirmPassword: "12345678",
			};
			const response = await req(app).post("/api/users/register").send(payload);
			expect(response.statusCode).toBe(201);
			expect(response.body).toMatchObject(
				new Response(201, `Succesfully created new user ${payload.username}`)
			);
		});
	});
});
