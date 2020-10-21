exports.up = function (knex) {
  return knex.schema.createTable("comments", (table) => {
    table.increments("id").primary();
    table.text("comment");
    table.integer("postId").references("id").inTable("posts").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("comments");
};
