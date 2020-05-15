exports.up = function(knex) {
    return knex.schema.createTable('equipments', (t) => {
        t.increments('id');
        t.string('model');
        t.enum('category', ['cartucho', 'toner']);
        t.integer('ppm').unsigned();
        t.boolean('wifi');
        t.float('consumption').unsigned();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('equipments');
};
