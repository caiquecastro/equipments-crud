const { Model } = require('objection');
const Database = require('../services/Database');

Model.knex(Database);

class BaseModel extends Model {}

module.exports = BaseModel;