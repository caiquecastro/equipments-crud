const chai = require('chai');
const chaiHttp = require('chai-http');
const helpers = require('./helpers');
const Application = require('../src/app');
const Database = require('../src/services/Database');

chai.use(chaiHttp);
const { assert } = chai;

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
    it('creates an equipment', async () => {
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
  });

  describe('GET /equipments/:id', () => {
    it('fetches equipment details', async () => {
      const equipment = await helpers.createEquipment({
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
      const equipment = await helpers.createEquipment({
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
      const equipment = await helpers.createEquipment({
        model: 'Model A',
      });

      const response = await chai.request(Application)
        .delete(`/equipments/${equipment.id}`);

      assert.equal(response.status, 204);
    });
  });
});
