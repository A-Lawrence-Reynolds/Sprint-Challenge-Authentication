const Users = require("./users-model.js");

const db = require("../database/dbConfig.js");

describe("user model", function() {
  beforeEach(async () => {
    await db("users").truncate();
  });
  describe("add()", function() {
    it("adding a user to the db ", async function() {
      await Users.add({ username: "allen", password: "allen" });

      const users = await db("users");
      expect(users).toHaveLength(1);
    });
  });
});
describe("user model", function() {
  describe("add()", function() {
    it("adding a user to the db ", async function() {
      await Users.add({ username: "tom", password: "blah" });

      const users = await db("users");
      expect(users).toHaveLength(2);
    });
  });
});
