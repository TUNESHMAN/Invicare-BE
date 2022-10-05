const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/user-model");

const genToken = require("../auth/token");

router.post("/login", (req, res) => {
  let { email, password } = req.body;

  Users.getBy({ email })
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        console.log(user);
        const token = genToken(user);
        console.log(token);

        res.status(200).json({
          message: `Welcome ${user.email}!`,
          token,
        });
      } else if (user && user.password === "Token") {
        const token = genToken(user);
        console.log(token);

        res.status(200).json({
          message: `Welcome ${user.email}!`,
          token,
        });
      } else {
        res.status(401).json({ message: "Incorrect Credentials" });
      }
    })
    .catch((error) => {
      console.log(error, "LOGIN ERROR");
      res.status(500).json(error);
    });
});

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  Users.insert(user)
    .then((saved) => {
      res.status(201).json({ message: `Sucessful sign up ${user.firstName}` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// LOGOUT ENDPOINT
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.json({
          message: "Vacating the site is allowed",
        });
      } else {
        res.status(200).json({
          message: "See you next time!",
        });
      }
    });
  } else {
    res.status(200).json({
      message: "Make sure you login",
    });
  }
});

module.exports = router;
