import "dotenv/config";
import { describe, it, expect } from "vitest";

describe("GET api/v1/links", () => {
  it("", async () => {
    const response = await fetch("http://localhost:8080/api/v1/links", {
      headers: {
        "Content-Type": "application/json",
        token: "",
      },
    });

    expect(response.status).toBe(200);
  });
});
