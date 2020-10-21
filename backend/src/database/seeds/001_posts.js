exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("posts").insert([
        { message: "Hello everyone" },
        { message: "How you are?" },
        { message: "What's guys?" },
      ]);
    });
};
