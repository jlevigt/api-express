import { describe, it, expect, afterAll, beforeAll } from "vitest";
import request from "supertest";
import app from "../src/app.js";

let server;

beforeAll(() => {
  server = app.listen(8080, () => {
    console.log("Test server running on port 8080");
  });
});

afterAll(() => {
  server.close(() => {
    console.log("Test server closed");
  });
});

describe("POST /api/v1/auth", function () {
  it("deve retornar status 201 com credenciais válidas", async function () {
    const email = "1";
    const password = "1";

    const response = await request(app)
      .post("/api/v1/auth/login")
      .send({ email, password })
      .set("Accept", "application/json");

    expect(response.status).toBe(201);
  });

  it("deve retornar status 400 com email ou senha inválidos", async function () {
    const email = "invalid@example.com";
    const password = "invalidpassword";

    const response = await request(app)
      .post("/api/v1/auth/login")
      .send({ email, password })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
  });

  it("deve retornar status 400 quando o email ou a senha estiverem em branco", async function () {
    const email = "";
    const password = "";

    const response = await request(app)
      .post("/api/v1/auth/login")
      .send({ email, password })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
  });
});
