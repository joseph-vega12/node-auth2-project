
exports.up = function(knex) {
    return knex.schema
    .createTable('users', table => {
        table.increments()
        table.string('name', 128).notNullable().unique()
        table.string('password', 128).notNullable()
        table.integer('department')
    })
};

exports.down = function(knex) {
    return knex.schema 
    .dropTableIfExists('users');
};
