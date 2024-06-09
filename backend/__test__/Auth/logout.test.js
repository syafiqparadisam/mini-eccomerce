const parseCookie = require("../utils/parseCookie")
const req = require("supertest");
const mongoose = require("mongoose");
const app = require("../../index");
const userSchema = require("../../model/userSchema")
const bcrypt = require("bcrypt")
require("dotenv").config()


describe("Login Test POST /api/v1/auth/login", () => {
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
	
    it("should response 204 When user have no cookie", async ()=> {
        const response = await req(app).delete("/api/v1/auth/logout")

        expect(response.statusCode).toBe(204)
    })

    it("should response 204 and clear cookie successfully delete cookie", async ()=> {
        const response = await req(app).delete("/api/v1/auth/logout").set("Cookie", cookie)

        const cookie1 = parseCookie(response.headers["set-cookie"][0])

        expect(cookie1).toBeTruthy()
		expect(cookie1.httpOnly).toContain("HttpOnly")
		expect(cookie1.value).toBe('');
		expect(cookie1.sameSite).toContain('None');
		expect(cookie1.path).toContain('/');
		expect(cookie1.secure).toContain('Secure');
		expect(cookie1.exp).toBeTruthy();
        expect(response.statusCode).toBe(204)
    })

});