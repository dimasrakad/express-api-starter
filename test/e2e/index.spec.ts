import request from "supertest";
import { createApp } from "@src/app.js";

let userId: string;
describe("end to end testing", () => {
  it("create", async () => {
    const app = await createApp();
    const response = await request(app)
      .post("/v1/user")
      .set({ firstName: "Sakura", lastName: "Haruno", phone: "081234", email: "sakura@gmail.com" });
    userId = response.body.id;
    expect(response.statusCode).toEqual(201);
    expect(response.body.id).not.toEqual([]);
  });
  it("read all", async () => {
    const app = await createApp();
    const response = await request(app).get("/v1/user");
    expect(response.statusCode).toEqual(200);
    expect(response.body).not.toBeNull();
  });
  it("read one", async () => {
    const app = await createApp();
    const response = await request(app).get("/v1/user/" + userId);
    expect(response.statusCode).toEqual(200);
    expect(response.body.id).not.toBeNull();
  });
  it("update", async () => {
    const app = await createApp();
    const response = await request(app).patch("/v1/user/" + userId);
    expect(response.statusCode).toEqual(200);
    expect(response.body.id).not.toBeNull();
  });
  it("destroy", async () => {
    const app = await createApp();
    const response = await request(app).delete("/v1/user/" + userId);
    const deletedUser = await request(app).get("/v1/user/" + userId);
    expect(response.statusCode).toEqual(204);
    expect(response.body).toEqual({});
    expect(deletedUser.body).toBeNull();
  });
});
