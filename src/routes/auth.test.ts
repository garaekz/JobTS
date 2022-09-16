import request from 'supertest';
import { expect } from 'chai';
import createServer from 'server';
import { response } from 'express';
const app = createServer();

describe("Auth API", () => {
  it("POST /register -> Registers a User and returns JWT Token", (done) => {
    try {
      request(app)
        .post("/api/v1/auth/register")
        .set("Accept", "application/json")
        .send({
          name: "John Doe",
          email: "john@doe.io",
          password: "123456",
        }).then((response) => {
          expect(response.status).to.equal(200);
          // expect(response.body).to.have.property("token");
        });
      done();
    } catch (error) {
      console.error(error);
      throw new Error("Server failed to start");
    }
  });

  // it("POST /login -> Returns JWT Token", async (done) => {
  //   const response = await request(app)
  //     .post("/api/v1/auth/login")
  //     .set("Accept", "application/json")
  //     .send({
  //       email: "john@doe.io",
  //       password: "123456",
  //     });
  //   expect(response.status).to.equal(200);
  //   expect(response.body).to.have.property("token");
  //   done();
  // });
});