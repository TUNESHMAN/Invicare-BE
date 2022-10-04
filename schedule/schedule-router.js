const router = require("express").Router();
const schedule = require("./schedule-model");
const authenticate = require("../auth/middleware/authenticate-middleware");

router.get("/", authenticate, (req, res) => {
  schedule
    .getSchedule()
    .then((schedule) => {
      res.status(200).json(schedule);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/createSchedule", (req, res) => {
  schedule
    .addSchedule(req.body)
    .then((schedule) => {
      res.status(201).json(schedule);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  schedule
    .getScheduleById(id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", authenticate, (req, res) => {
  const id = req.params.id;

  schedule
    .deleteSchedule(id)
    .then((deletedSchedule) => {
      res.status(200).json({ message: "schedule deleted" });
    })
    .catch((error) => {
      res.status(500).json(err);
    });
});

router.put("/:id", authenticate, (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  schedule
    .updateSchedule(id, changes)
    .then((updateSchedule) => {
      res.status(201).json(updateSchedule);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
module.exports = router;
