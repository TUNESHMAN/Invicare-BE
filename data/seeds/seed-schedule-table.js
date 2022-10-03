exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("schedule")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("schedule").insert([
        {
          user_id: 2,
          workstation_id: 3,
          booking_date: "2022-10-23T09:07:21.20",
        },
        {
          user_id: 1,
          workstation_id: 2,
          booking_date: "2022-10-23T09:08:21.20",
        },
        {
          user_id: 1,
          workstation_id: 4,
          booking_date: "2022-10-22T09:09:21.20",
        },
        {
          user_id: 2,
          workstation_id: 1,
          booking_date: "2022-10-21T09:07:21.20",
        },
      ]);
    });
};
