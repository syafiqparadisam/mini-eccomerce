const req = require("supertest");
const mongoose = require("mongoose");
const app = require("../../index");
const Response = require("../../response/successResponse");
const errResponse = require("../../response/errorResponse");
const { LoginPayload } = require("../../utils/payload");

describe("Login Test POST /api/users/login", () => {
	beforeAll(async () => {
		await mongoose.connect(process.env.DATABASE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	});

	afterAll(async () => {
		await mongoose.connection.close();
	});

	describe("POST WITH EMPTY STRING LENGTH", () => {
		it("should response bad request 400", async () => {
			const response = await req(app)
				.post("/api/users/login")
				.send(new LoginPayload("", ""));

			expect(response.statusCode).toBe(400);
			expect(response.body).toMatchObject(new Response(400));
		});
	});

	describe("POST WITH USERNAME OR PASSWORD WRONG", () => {
		it("should response bad request 400", async () => {
			const response = await req(app)
				.post("/api/users/login")
				.send(new LoginPayload("syafiq", "87654321"));

			expect(response.statusCode).toBe(400);
			expect(response.body).toMatchObject(
				new Response(400, "Wrong Username Or Password")
			);
		});
	});

	describe("POST WITH CORRECT FIELD", () => {
		it("Should response OK 200 If Login Success", async () => {
			const response = await req(app)
				.post("/api/users/login")
				.send(new LoginPayload("syafiq", "12345678"));

			expect(response.statusCode).toBe(200);
			expect(response.body.accessToken).toBeTruthy();
			expect(response.headers["set-cookie"]).not.toEqual([])
		});
	});
});
