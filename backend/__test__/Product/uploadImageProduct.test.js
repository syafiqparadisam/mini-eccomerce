const cloudinary = require("../../config/cloudinary")
const req = require("supertest");
const mongoose = require("mongoose");
const app = require("../../index");
const userSchema = require("../../model/userSchema")
const bcrypt = require("bcrypt")
require("dotenv").config()
const path = require("node:path")


describe("Upload image test POST /api/v1/products/image", () => {
	let server;
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

    beforeEach(async () => {
		const resp = await req(server).get("/api/v1/auth/refresh").set("Cookie", cookies)
        accToken = resp.body.data.accessToken
	})

	afterAll(async () => {
		await userSchema.deleteOne({username: register.username})
		await mongoose.connection.close();
		await server.close()
	});
	

    it('should return 400 When no file uploaded', async () => {
        const response = await req(server).post("/api/v1/products/image").set("Authorization", "Bearer " + accToken)

        const res = {
            statusCode: 400,
            data: null,
            message: "Please upload your image"
        }

        expect(response.statusCode).toBe(400)
        expect(response.body).toMatchObject(res)
    });

    it('should return 415 Unsupported media type When file extname is not allowed', async () => {
        const file =  path.join(__dirname, "assets", "1307837.ai")
        const response = await req(server).post("/api/v1/products/image").set("Authorization", "Bearer " + accToken).attach("image",file)
        
        const res = {
            statusCode: 415,
            data: null,
            message: `File type application/postscript not allowed`
        }
        console.log(response.body)
        expect(response.statusCode).toBe(res.statusCode)
        expect(response.body).toMatchObject(res)
    });

    it('should return 422 Unprocessable entity When file size is larger than 2mb size', async () => {
        const file =  path.join(__dirname, "assets", "chooseus_fac0xl.png")
        const response = await req(server).post("/api/v1/products/image").set("Authorization", "Bearer " + accToken).attach("image",file)
        
        const res = {
            statusCode: 422,
            data: null,
            message: "Image should be less than 2mb size"
        }
        
        expect(response.statusCode).toBe(res.statusCode)
        expect(response.body).toMatchObject(res)
    });

    it('should return 200 OK When file successfully uploaded', async () => {
        const file =  path.join(__dirname, "assets", "kacanggaruda.jpg")
        const response = await req(server).post("/api/v1/products/image").set("Authorization", "Bearer " + accToken).attach("image",file)
        
        
        expect(response.statusCode).toBe(200)
        expect(response.body.data.public_id).toBeTruthy()
        expect(response.body.data.public_url).toBeTruthy()
        await cloudinary.uploader.destroy(response.body.data.public_id)
    });
})