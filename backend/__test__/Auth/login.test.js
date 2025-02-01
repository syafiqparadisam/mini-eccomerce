const req = require("supertest");
const mongoose = require("mongoose");
const app = require("../../index");
const Response = require("../../response/successResponse");
const userSchema = require("../../model/userSchema");
const bcrypt = require("bcrypt");
const parseCookie = require("../utils/parseCookie");
require("dotenv").config();

describe("Login Test POST /api/v1/auth/login", () => {
  let server;
  let payload;
  let register;
  let cookie;
  beforeAll(async () => {
    server = app.listen(process.env.APP_PORT, () => {
      console.log("Server is running on port ", process.env.APP_PORT);
    });
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    register = {
      username: "syafiq2",
      email: "syafiq@gmail.com",
      password: "12345678",
    };
    const hashPw = await bcrypt.hash(register.password, 10);
    await userSchema.insertMany({
      username: register.username,
      email: register.email,
      password: hashPw,
    });
  });

  afterAll(async () => {
    await userSchema.deleteOne({ username: register.username });
    await mongoose.connection.close();
    await server.close();
  });

  it("should response bad request 400 wrong password and wrong username", async () => {
    payload = {
      username: "unknown",
      password: "82174892384",
    };
    const response = await req(server).post("/api/v1/auth/login").send(payload);

    expect(response.statusCode).toBe(400);
    expect(response.body).toMatchObject(
      new Response(400, null, "Wrong username or password")
    );
  });

  it("Should response OK 200 If Login Success", async () => {
    const response = await req(server)
      .post("/api/v1/auth/login")
      .send({ username: register.username, password: register.password });

    const { refreshToken } = await userSchema.findOne(
      { username: register.username },
      { refreshToken: 1 }
    );
    expect(response.statusCode).toBe(200);
    const cookie1 = parseCookie(response.headers["set-cookie"][0]);
    expect(cookie1).toBeTruthy();

    expect(cookie1.httpOnly).toContain("HttpOnly");
    expect(cookie1.value).not.toBe("");
    expect(cookie1.value).toBeTruthy();
    expect(cookie1.sameSite).toContain("None");
    expect(cookie1.path).toContain("/");
    expect(cookie1.secure).toContain("Secure");
    expect(cookie1.exp).toBeTruthy();

    expect(response.body.data.accessToken).not.toBe(null);
    expect(response.headers["set-cookie"][0]).toBeTruthy();
    expect(refreshToken[0]).toBeTruthy();
    cookie = response.headers["set-cookie"];
  });

  it("Should response OK 200 and have 2 refresh token", async () => {
    const response = await req(server)
      .post("/api/v1/auth/login")
      .send({ username: register.username, password: register.password })
      .set("Cookie", cookie);

    const { refreshToken } = await userSchema.findOne(
      { username: register.username },
      { refreshToken: 1 }
    );

    expect(response.statusCode).toBe(200);
    expect(response.body.data.accessToken).not.toBe(null);
    const cookie1 = parseCookie(response.headers["set-cookie"][0]);

    expect(cookie1).toBeTruthy();
    expect(cookie1.httpOnly).toContain("HttpOnly");
    expect(cookie1.value).toBe("");
    expect(cookie1.sameSite).toContain("None");
    expect(cookie1.path).toContain("/");
    expect(cookie1.secure).toContain("Secure");
    expect(cookie1.exp).toBeTruthy();

    const cookie2 = parseCookie(response.headers["set-cookie"][1]);

    expect(cookie2.httpOnly).toContain("HttpOnly");
    expect(cookie2.value).not.toBe("");
    expect(cookie2.value).toBeTruthy();
    expect(cookie2.sameSite).toContain("None");
    expect(cookie2.path).toContain("/");
    expect(cookie2.secure).toContain("Secure");
    expect(cookie2.exp).toBeTruthy();

    expect(refreshToken[0]).toBeTruthy();
    expect(refreshToken[1]).toBeUndefined();
  });
});
