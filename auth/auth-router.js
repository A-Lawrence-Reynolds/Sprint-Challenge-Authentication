const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model");

router.post("/register", (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 11);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })

    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);
        res.status(200).json({
          token,
          message: `welcome to the jungle ${user.username}.. we got fun and games! `
        });
      } else {
        re.status(401).json({
          message: " not ok jack!.."
        });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
function signToken(user) {
  const payload = {
    username: user.username
    // this will come from the database users.role
  };

  const secret =
    process.env.JWT_SECRET || "ask the elephant. they never forget..";

  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secret, options); // notice the return
}

module.exports = router;
