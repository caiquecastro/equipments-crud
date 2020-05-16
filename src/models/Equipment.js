const BaseModel = require('./BaseModel');

class Equipment extends BaseModel {
  static get tableName() {
    return 'equipments';
  }
}

module.exports = Equipment;
