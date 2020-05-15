const knex = require('knex');
const Config = require('./Config');

module.exports = knex(Config.get('database'));
