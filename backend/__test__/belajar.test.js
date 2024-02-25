// const request = require("supertest");
// const app = require("../index");
// const payload = {
// 	name: "Syafiq",
// };

// describe("example test", () => {
// 	it("get /", async () => {
// 		const data = await request(app).get("/");
// 		expect(data.body.name).toEqual("Syafiq");
// 	});
// 	it("post /", async () => {
// 		const data = await request(app).post("/").send(payload);
// 		expect(data.status).toBe(201);
// 		expect(data.body).toMatchObject(payload);
// 	});
// 	it("PUT /", async () => {
// 		const response = await request(app).put("/").send(payload);
// 		expect(response.statusCode).toBe(200);
// 		expect(response.body).toMatchObject(payload);
// 	});
// 	it("DELETE /", async () => {
// 		const id = 1;
// 		const response = await request(app).delete(`/${id}`);
// 		expect(response.statusCode).toBe(200);
// 		expect(response.body).toEqual({ message: `${id} WAS DELETED` });
// 	});
// });
