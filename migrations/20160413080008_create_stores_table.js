
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`stores`, (table) => {
    table.increments(`id`);
    table.string(`name`);
    table.string(`location`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`stores`);
};
