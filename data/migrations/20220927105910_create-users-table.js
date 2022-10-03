exports.up = function (knex) {
  // Create the user table
  return knex.schema.createTable("users", (table) => {
    table.increments(); //create column id, primary key, auto-incrementing
    table.text("firstName", 128).notNullable();
    table.text("lastName", 128).notNullable();
    table.text("email").unique().notNullable();
    table.boolean("password").notNullable();
  });
};

exports.down = function (knex) {
  // Destroy the workspace table if it exists
  return knex.schema.dropTableIfExists("users");
};
