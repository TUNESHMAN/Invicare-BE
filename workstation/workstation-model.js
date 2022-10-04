// Import the database
const db = require("../data/db-config");

function getWorkStation() {
  return db("workstation");
}

module.exports = {
  getWorkStation,
};
