const request = require("supertest");

const auth = require("./auth-router");

describe("auth.js", function() {
  describe("environment", function() {
    it("should set environment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
});
// describe("POST /", function() {
//   it("should return a 200 OK", function() {
//     // spin up the server
//     return request(auth)
//       .post("/login")
//       .then(res => {
//         expect(res.status).toBe(200);
//       });
//   });
// });
