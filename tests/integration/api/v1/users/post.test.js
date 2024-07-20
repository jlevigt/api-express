import "dotenv/config";
import { describe, it, expect } from "vitest";

describe("POST /api/v1/users", () => {
  it("With unique and valid data", async () => {
    const response = await fetch("http://localhost:8080/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "name",
        username: "uniqueUsername",
        email: "uniqueEmail",
        password: "password",
      }),
    });

    expect(response.status).toBe(201);
  });
});
