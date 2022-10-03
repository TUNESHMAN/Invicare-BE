exports.up = function (knex) {
  // Create the user table
  return knex.schema.createTable("schedule", (table) => {
    table.increments(); //create column id, primary key, auto-incrementing
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("workstation_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("workstation")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.dateTime("booking_date");
  });
};

exports.down = function (knex) {
  // Destroy the workspace table if it exists
  return knex.schema.dropTableIfExists("schedule");
};
