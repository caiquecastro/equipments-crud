const Equipment = require('../src/models/Equipment');

exports.createEquipment = async (rawAttributes = {}) => {
  return Equipment.query().insert({
    model: 'Model',
    category: 'toner',
    ...rawAttributes,
  });
};
