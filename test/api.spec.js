const chai = require('chai');
const chaiHttp = require('chai-http');
const Application = require('../src/app');
const Database = require('../src/services/Database');

chai.use(chaiHttp);
const { assert } = chai;

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
});
