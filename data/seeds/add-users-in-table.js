exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          firstName: "Babatunde",
          lastName: "Adeniran",
          email: "tuneshman92@gmail.com",
          password: "Testing1$",
        },
        {
          firstName: "Tola",
          lastName: "Akere",
          email: "tolaakere@gmail.com",
          password: "Testing1$",
        },
      ]);
    });
};
