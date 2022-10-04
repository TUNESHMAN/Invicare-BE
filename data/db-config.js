// This is the file that has knowledge of knex
// This is the file where we bring in a configuration
// This is a file where we expose "db" to the outer world

const knex = require("knex");
const configuration = require("../knexfile").development;

module.exports = knex(configuration);
