exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("lists", function(table) {
      table.increments().primary();
      table.string("name");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("lists")]);
};
