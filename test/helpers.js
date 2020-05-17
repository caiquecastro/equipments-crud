const Equipment = require('../src/models/Equipment');

exports.createEquipment = async function createEquipment(rawAttributes = {}) {
  return Equipment.query().insert({
    model: 'Model',
    category: 'toner',
    ...rawAttributes,
  });
};
