const express = require('express');
const EquipmentsController = require('../controllers/EquipmentsController');

const router = express.Router();

/* GET equipments listing. */
router.get('/', EquipmentsController.index);
router.post('/', EquipmentsController.store);
router.get('/:id', EquipmentsController.show);
router.patch('/:id', EquipmentsController.update);
router.delete('/:id', EquipmentsController.destroy);

module.exports = router;
