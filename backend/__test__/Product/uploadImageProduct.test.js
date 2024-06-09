const cloudinary = require("../../config/cloudinary")
const req = require("supertest");
const mongoose = require("mongoose");
const app = require("../../index");
const userSchema = require("../../model/userSchema")
const bcrypt = require("bcrypt")
require("dotenv").config()
const path = require("node:path")


describe("Login Test POST /api/v1/products/image", () => {
	let server;
	let file;
	let register;
    let accToken;
	beforeAll(async () => {
		server = app.listen(process.env.APP_PORT, () => {
			console.log("Server is running on port ", process.env.APP_PORT)
		})
		await mongoose.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		register = {
			username: "syafweriq2",
			email: "syaaas@gmail.com",
			password: "12345678"
		}

        file = path.join(__dirname, "assets", "kacanggaruda.jpg")
		const hashPw = await bcrypt.hash(register.password, 10)
		await userSchema.insertMany({username: register.username, email: register.email, password: hashPw})

        // login
        const response = await req(server)
		.post("/api/v1/auth/login")
		.send({username: register.username, password: register.password});
        console.log(response.body)
        accToken = response.body.data.accessToken
        console.log(accToken)

	});

	afterAll(async () => {
		await userSchema.deleteOne({username: register.username})
		await mongoose.connection.close();
		await server.close()
	});
	

    it('should return 400 When no file uploaded', async () => {
        let noFile = "assets/noFile.jpg"
        const response = await req(server).post("/api/v1/products/image").set("Authorization", "Bearer " + accToken)

        const res = {
            statusCode: 400,
            data: null,
            message: "Please upload your image"
        }

        expect(response.statusCode).toBe(400)
        expect(response.body).toMatchObject(res)
    });

    it('should return 200 OK When file successfully uploaded', async () => {
        const response = await req(server).post("/api/v1/products/image").set("Authorization", "Bearer " + accToken).attach("image",file)
        
        console.log(response.body)
        await cloudinary.uploader.destroy(response.body.data.public_id)

        expect(response.statusCode).toBe(200)
        expect(response.body.data.public_id).toBeTruthy()
        expect(response.body.data.public_url).toBeTruthy()
    });
})