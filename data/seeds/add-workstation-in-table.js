exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("workstation")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("workstation").insert([
        { name: "WorkStation 1", isAvailable: false },
        { name: "WorkStation 2", isAvailable: true },
        { name: "WorkStation 3", isAvailable: true },
        { name: "WorkStation 4", isAvailable: false },
      ]);
    });
};
