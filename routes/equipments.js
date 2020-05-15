const express = require('express');
const EquipmentsController = require('../controllers/EquipmentsController');

const router = express.Router();

/* GET equipments listing. */
router.get('/', EquipmentsController.index);

module.exports = router;
