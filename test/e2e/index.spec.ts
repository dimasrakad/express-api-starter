import request from "supertest";
import { createApp } from "@src/app.js";

describe("end to end testing", () => {
  it("create", async () => {
    const app = await createApp();
    const response = await request(app)
      .post("/v1/user")
      .set({ firstName: "Sakura", lastName: "Haruno", phone: "081234", email: "sakura@gmail.com" });
    expect(response.statusCode).toEqual(201);
    expect(response.body.id).not.toBeNull();
  });
  it("read all", async () => {
    const app = await createApp();
    const response = await request(app).get("/v1/user");
    expect(response.statusCode).toEqual(200);
  });
  it("read one", async () => {
    const app = await createApp();
    const response = await request(app).get("/v1/user/63657fbe1b8b1521a838c42b");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      user: null,
    });
  });
  it("update", async () => {
    const app = await createApp();
    const response = await request(app).patch("/v1/user/63657fbe1b8b1521a838c42b");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      user: null,
    });
  });
  it("destroy", async () => {
    const app = await createApp();
    const response = await request(app).delete("/v1/user/63657fbe1b8b1521a838c42b");
    expect(response.statusCode).toEqual(204);
  });
});
