
// CATEGORIES TABLE AND INTERMEDIARY USER TABLE

exports.up = function(knex) {
    return knex.schema
    .createTable('categories', tbl => {
        tbl.increments();

        tbl
            .string('category_name')
            .notNullable()
    })

    .createTable('items_categories', tbl => {
        tbl.increments();

        tbl
            .integer('cats_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('items')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl
            .integer('category_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('categories')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users_categories')
        .dropTableIfExists('categories')
};
