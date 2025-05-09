import "dotenv/config";
import { describe, it, expect } from "vitest";

describe("GET api/v1/status", () => {
  it("", async () => {
    const response = await fetch("http://localhost:8080/api/v1/status");
    expect(response.status).toBe(200);

    const responseBody = await response.json();

    const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
    expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

    expect(responseBody.dependencies.database.version).toEqual("16.3");
    expect(responseBody.dependencies.database.max_connections).toEqual(100);
    expect(responseBody.dependencies.database.opened_connections).toEqual(1);
  });
});
