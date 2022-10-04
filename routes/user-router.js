const router = require("express").Router();
const user = require("../users/user-model");

/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Retrieve a list of users.
 *     responses:
 *       200:
 *         description: All users.
 */
router.get("/", (req, res) => {
  user
    .get()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Users.getById(id)
    .then((users) => {
      const email = users;
      res.status(200).json({ email });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Users.deleteUser(id)
    .then((deletedUser) => {
      res.status(200).json({ message: "User successfully deleted." });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
