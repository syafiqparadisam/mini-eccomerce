const productSchema = require("../../model/productSchema");
const req = require("supertest");
const path = require("node:path");
const mongoose = require("mongoose");
const app = require("../../index");
const userSchema = require("../../model/userSchema");
const bcrypt = require("bcrypt");
require("dotenv").config();

describe("Insert Product Test POST /api/v1/products", () => {
  let server;
  let register;
  let accToken;
  let cookie;
  let public_id;
  let public_url;
  beforeAll(async () => {
    server = app.listen(process.env.APP_PORT, () => {
      console.log("Server is running on port ", process.env.APP_PORT);
    });
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    register = {
      username: "syafi32",
      email: "syaewrwq@gmail.com",
      password: "12345678",
    };

    const hashPw = await bcrypt.hash(register.password, 10);
    await userSchema.insertMany({
      username: register.username,
      email: register.email,
      password: hashPw,
    });

    // login
    const respLogin = await req(server)
      .post("/api/v1/auth/login")
      .send({ username: register.username, password: register.password });
    accToken = respLogin.body.data.accessToken;
    cookies = respLogin.headers["set-cookie"];

    // upload image
    const respUploadImage = await req(server)
      .post("/api/v1/products/image")
      .set("Authorization", "Bearer " + accToken)
      .attach("image", path.join(__dirname, "assets", "kacanggaruda.jpg"));
    public_id = respUploadImage.body.data.public_id;
    public_url = respUploadImage.body.data.public_url;
  });

  beforeEach(async () => {
    const resp = await req(server)
      .get("/api/v1/auth/refresh")
      .set("Cookie", cookies);
    accToken = resp.body.data.accessToken;
  });

  afterAll(async () => {
    await userSchema.deleteOne({ username: register.username });
    await mongoose.connection.close();
    await server.close();
  });

  it("should return 400 error while validating request body", async () => {
    const body = {
      name: "Kacang garuda",
      price: -432,
      description: "",
      image: [
        {
          public_image_url: public_url,
          public_image_id: public_id,
        },
      ],
    };
    const res = await req(server)
      .post("/api/v1/products")
      .send(body)
      .set("Authorization", accToken);

    expect(res.statusCode).toBe(400);
    expect(res.body.statusCode).toBe(400);
    expect(res.body.data).toBeNull();
    expect(res.body.message).toBeTruthy();
  });

  it("should return 200 OK when success create product", async () => {
    const body = {
      name: "Kacang garuda",
      price: 1000,
      description: "",
      image: [
        {
          public_image_url: public_url,
          public_image_id: public_id,
        },
      ],
    };
    const res = await req(server)
      .post("/api/v1/products")
      .send(body)
      .set("Authorization", accToken);

    const response = {
      statusCode: 200,
      data: null,
      message: "Successfully create product",
    };

    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject(response);
    await productSchema.deleteOne({ name: body.name });
  });
});
