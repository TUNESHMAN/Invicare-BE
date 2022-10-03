// Import the database
const db = require("../data/db-config");

function getSchedule() {
  return db("schedule");
}

function addSchedule(schedule) {
  return db("schedule").insert(schedule, "id");
}

function getScheduleById(id) {
  return db("schedule").where({ id }).first();
}

function deleteSchedule(id) {
  return db("schedule").where({ id }).del();
}

function updateSchedule(id, changes) {
  return db("schedule").where({ id }).update(changes);
}

module.exports = {
  getSchedule,
  addSchedule,
  getScheduleById,
  deleteSchedule,
  updateSchedule,
};
