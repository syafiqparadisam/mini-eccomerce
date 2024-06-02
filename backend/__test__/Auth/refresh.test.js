const app = require("../../index");
const req = require("supertest");
const users = require("../../model/userSchema");
const mongoose = require("mongoose");
const Response = require("../../response/successResponse");
const errResponse = require("../../response/errorResponse");

describe("Refresh Access Token GET /api/users/refresh", () => {
	let server;
	beforeAll(async () => {
		server = await app.listen(process.env.APP_PORT, () => {
			console.log("Server is running on port ", process.env.APP_PORT)
		})
		await mongoose.connect(process.env.DATABASE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	});

	afterAll(async () => {
		await mongoose.connection.close();
	});
	describe("GET Without RefreshToken", () => {
		it('should response Unauthorized when i have no cookie name "refToken"', async () => {
			const response = await req(app).get("/api/users/refresh");
			console.log(response.statusCode);
			expect(response.statusCode).toBe(401);
			expect(response.unauthorized);
		}, 5000);
	});
	describe("GET with RefreshToken valid", () => {
		it("should response 200 Ok and i have new accessToken", async () => {
			const response = await req(app)
				.get("/api/users/refresh")
				.set(
					"Cookie",
					"refToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN5YWZpcSIsImlhdCI6MTY5Nzg2MjIwNCwiZXhwIjoxNzAwNDU0MjA0fQ.EKD2LgMCq7KPC9x8qmOejv7r8QoBPFMVxCiW7zetz3Y;"
				);

			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveProperty("accessToken");
		});
	});
});
