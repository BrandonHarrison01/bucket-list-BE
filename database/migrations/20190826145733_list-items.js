
// BUCKET LIST ITEMS TABLE


exports.up = function(knex) {
  return knex.schema
    .createTable('items', tbl => {
        tbl.increments();

        tbl
            .string('name')
            .notNullable()
        tbl
            .string('description')
            .notNullable()
        tbl
            .integer('category_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('categories')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl
            .boolean('privacy')
            .defaultTo(false)
        tbl
            .boolean('complete')
            .defaultTo(false)
        tbl
            .date('target_date')
    })
};

exports.down = function(knex) {
    dropTableIfExists('items')
};
