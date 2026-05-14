const request = require("supertest");
const app = require("../src/app");

describe("API básica", () => {
  it("GET / debería responder OK", async () => {
    const res = await request(app).get("/");

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("API funcionando 🚀");
  });
});