exports.up = function (knex) {
  // Create the workspace table
  return knex.schema.createTable("workstation", (table) => {
    table.increments(); //create column id, primary key, auto-incrementing
    table.text("name", 128).unique().notNullable();
    table.boolean("isAvailable").notNullable();
  });
};

exports.down = function (knex) {
  // Destroy the workspace table if it exists
  return knex.schema.dropTableIfExists("workstation");
};
