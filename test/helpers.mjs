import Equipment from '../src/models/Equipment.mjs';

export const equipmentAttributes = {};

export async function createEquipment(rawAttributes = {}) {
  return Equipment.query().insert({
    model: 'Model',
    category: 'toner',
    ...rawAttributes,
  });
}
