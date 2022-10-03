const db = require("../data/db-config.js");

module.exports = {
  get,
  insert,
  getBy,
  getById,
  deleteUser,
};

function get() {
  const query = db("users").select("id", "email");
  return query;
}

async function insert(user) {
  const [id] = await db("users").insert(user, "id");

  return getById(id);
}

function getById(id) {
  return db("users").where({ id }).first();
}

function getBy(filter) {
  return db("users").where(filter).first();
}

function deleteUser(id) {
  return db("users").where({ id }).del();
}
