import BaseModel from './BaseModel.mjs';

class Equipment extends BaseModel {
  static get tableName() {
    return 'equipments';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['model', 'category'],
      properties: {
        id: {
          type: 'integer',
        },
        model: {
          type: 'string',
        },
        category: {
          type: 'string',
          enum: ['toner', 'cartucho'],
        },
        ppm: {
          type: 'integer',
          minimum: 0,
          maximum: 999999,
        },
        consumption: {
          type: 'number',
          minimum: 0,
          maximum: 999999,
        },
        wifi: {
          type: 'boolean',
        },
      },
    };
  }
}

export default Equipment;
