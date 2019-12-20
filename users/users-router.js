const router = require("express").Router();

const Users = require("./users-model.js");

const restricted = require("../auth/authenticate-middleware.js");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users).status(200);
    })
    .catch(err => res.send(err));
});

module.exports = router;
