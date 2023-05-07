import chai from 'chai';
import chaiHttp from 'chai-http';
import { createEquipment } from './helpers.mjs';
import Application from '../src/app.mjs';
import Database from '../src/services/Database.mjs';

chai.use(chaiHttp);
const { assert } = chai;

before(() => Database.migrate.latest());
beforeEach(() => Database('equipments').delete());
after(() => Database.destroy());

describe('Equipments API', () => {
  describe('GET /equipments', () => {
    it('lists all equipments', async () => {
      const response = await chai.request(Application)
        .get('/equipments');

      assert.equal(response.status, 200);
      assert.deepEqual(response.body, []);
    });
  });

  describe('POST /equipments', () => {
    it('creates an equipment with minimum required attributes', async () => {
      const response = await chai.request(Application)
        .post('/equipments')
        .send({
          model: 'Model A',
          category: 'toner',
        });

      assert.equal(response.status, 201);
      assert.exists(response.body.id);
      assert.equal(response.body.model, 'Model A');
      assert.equal(response.body.category, 'toner');
    });

    it('creates an equipment with all attributes', async () => {
      const response = await chai.request(Application)
        .post('/equipments')
        .send({
          model: 'Model A',
          category: 'toner',
          ppm: 30,
          consumption: 100,
          wifi: true,
        });

      assert.equal(response.status, 201);
      assert.exists(response.body.id);
      assert.equal(response.body.model, 'Model A');
      assert.equal(response.body.category, 'toner');
    });

    it('requires model to create an equipment', async () => {
      const response = await chai.request(Application)
        .post('/equipments')
        .send({
          category: 'toner',
        });

      assert.equal(response.status, 400);
      assert.equal(response.body.message, 'model: must have required property \'model\'');
    });

    it('requires category to create an equipment', async () => {
      const response = await chai.request(Application)
        .post('/equipments')
        .send({
          model: 'Model A',
        });

      assert.equal(response.status, 400);
      assert.equal(response.body.message, 'category: must have required property \'category\'');
    });

    it('requires valid category to create an equipment', async () => {
      const response = await chai.request(Application)
        .post('/equipments')
        .send({
          model: 'Model A',
          category: 'invalid',
        });

      assert.equal(response.status, 400);
      assert.equal(response.body.message, 'category: must be equal to one of the allowed values');
    });

    it('requires ppm to be integer', async () => {
      const response = await chai.request(Application)
        .post('/equipments')
        .send({
          model: 'Model A',
          category: 'toner',
          ppm: 'invalid',
        });

      assert.equal(response.status, 400);
      assert.equal(response.body.message, 'ppm: must be integer');
    });

    it('requires ppm to be greater or equal to 0', async () => {
      const response = await chai.request(Application)
        .post('/equipments')
        .send({
          model: 'Model A',
          category: 'toner',
          ppm: -1,
        });

      assert.equal(response.status, 400);
      assert.equal(response.body.message, 'ppm: must be >= 0');
    });

    it('requires ppm to be less or equal to 999999', async () => {
      const response = await chai.request(Application)
        .post('/equipments')
        .send({
          model: 'Model A',
          category: 'toner',
          ppm: 1000000,
        });

      assert.equal(response.status, 400);
      assert.equal(response.body.message, 'ppm: must be <= 999999');
    });

    it('requires consumption to be a number', async () => {
      const response = await chai.request(Application)
        .post('/equipments')
        .send({
          model: 'Model A',
          category: 'toner',
          consumption: 'invalid',
        });

      assert.equal(response.status, 400);
      assert.equal(response.body.message, 'consumption: must be number');
    });

    it('requires consumption to be greater or equal to 0', async () => {
      const response = await chai.request(Application)
        .post('/equipments')
        .send({
          model: 'Model A',
          category: 'toner',
          consumption: -1.0,
        });

      assert.equal(response.status, 400);
      assert.equal(response.body.message, 'consumption: must be >= 0');
    });

    it('requires consumption to be less or equal to 999999', async () => {
      const response = await chai.request(Application)
        .post('/equipments')
        .send({
          model: 'Model A',
          category: 'toner',
          consumption: 1000000.0,
        });

      assert.equal(response.status, 400);
      assert.equal(response.body.message, 'consumption: must be <= 999999');
    });

    it('requires wifi to be a boolean', async () => {
      const response = await chai.request(Application)
        .post('/equipments')
        .send({
          model: 'Model A',
          category: 'toner',
          wifi: 'invalid',
        });

      assert.equal(response.status, 400);
      assert.equal(response.body.message, 'wifi: must be boolean');
    });
  });

  describe('GET /equipments/:id', () => {
    it('fetches equipment details', async () => {
      const equipment = await createEquipment({
        model: 'Model B',
      });

      const response = await chai.request(Application)
        .get(`/equipments/${equipment.id}`);

      assert.equal(response.status, 200);
      assert.exists(response.body.id);
      assert.equal(response.body.model, 'Model B');
      assert.equal(response.body.category, 'toner');
    });
  });

  describe('PATCH /equipments/:id', async () => {
    it('updates equipment', async () => {
      const equipment = await createEquipment({
        model: 'Model A',
      });

      const response = await chai.request(Application)
        .patch(`/equipments/${equipment.id}`)
        .send({
          model: 'Model B',
        });

      assert.equal(response.status, 200);
      assert.exists(response.body.id);
      assert.equal(response.body.model, 'Model B');
      assert.equal(response.body.category, 'toner');
    });
  });

  describe('DELETE /equipments/:id', async () => {
    it('removes an equipment', async () => {
      const equipment = await createEquipment({
        model: 'Model A',
      });

      const response = await chai.request(Application)
        .delete(`/equipments/${equipment.id}`);

      assert.equal(response.status, 204);
    });
  });
});
