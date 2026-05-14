const request = require("supertest");
const app = require("../src/app");

describe("Auth", () => {
  it("POST /api/auth/register debería crear usuario", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: "test@test.com",
        password: "123456"
      });

    expect(res.status).toBe(200);
    expect(res.body.email).toBe("test@test.com");
  });

  it("POST /api/auth/login debería devolver token", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "test@test.com",
        password: "123456"
      });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});