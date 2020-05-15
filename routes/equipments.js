const express = require('express');
const Equipment = require('../models/Equipment');

const router = express.Router();

/* GET equipments listing. */
router.get('/', async function(req, res, next) {
  try {
    const equipments = await Equipment.query();

    res.json(equipments);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
