const Equipment = require('../models/Equipment');

exports.index = async function index(req, res, next) {
  try {
    const equipments = await Equipment.query();

    res.json(equipments);
  } catch (err) {
    next(err);
  }
};

exports.store = async function store(req, res, next) {
  try {
    const equipments = await Equipment.query();

    res.json(equipments);
  } catch (err) {
    next(err);
  }
};
