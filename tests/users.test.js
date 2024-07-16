import { describe, it, expect } from "vitest";
import request from "supertest";

import app from "../src/app";

describe("POST /api/v1/users", function () {
  it("deve retornar status 201", async function () {
    const fill = String(Date.now());

    const response = await request(app)
      .post("/api/v1/users")
      .send({ name: fill, email: fill, username: fill, password: fill })
      .set("Accept", "application/json");

    expect(response.status).toBe(201);
  });
});
