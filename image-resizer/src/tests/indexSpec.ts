import supertest from "supertest";
import app from "../index";
import { existsSync } from "fs";

const request = supertest(app);

describe("Tests for the endpoint", function () {
  it("expects to get correct http status respones", async (done) => {
    const response = await request.get("");
    expect(response.status).toBe(200);
    done();
  });
});

describe("Tests for the resize middleware", function () {
  it("expects image file to be written", async (done) => {
    const response = await request.get(
      "/api?filename=femi.jpg&width=200&height=200"
    );
    expect(existsSync(response.files)).toBe(true);
    done();
  });

  it("expects error to be thrown if file does not exist", async (done) => {
    const response = await request.get(
      "/api?filename=kemi.jpg&width=200&height=200"
    );
    expect(response.text).toBe("Image does not exist");
    done();
  });
});
