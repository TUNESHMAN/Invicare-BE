const router = require("express").Router();
const workStation = require("../workstation/workstation-model");
const authenticate = require("../auth/middleware/authenticate-middleware");

/**
 * @swagger
 * /api/v1/workstation:
 *   get:
 *     summary: Retrieve a list of workstations
 *     description: Retrieve a list of workstation.
 *     responses:
 *       200:
 *         description: All workstations.
 */
router.get("/", authenticate, (req, res) => {
  workStation
    .getWorkStation()
    .then((workstation) => {
      res.status(200).json(workstation);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
