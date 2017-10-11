exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("tasks", function(table) {
      table.increments().primary();
      table.integer("list_id").unsigned();
      table.foreign("list_id").references("list_id");
      table.string("name");
      table.boolean("completed");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("tasks")]);
};
