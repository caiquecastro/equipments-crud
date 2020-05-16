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
    const equipment = await Equipment.query().insert(req.body);

    res.status(201).json(equipment);
  } catch (err) {
    next(err);
  }
};

exports.show = async function show(req, res, next) {
  try {
    const equipment = await Equipment.query()
      .findById(req.params.id)
      .throwIfNotFound();

    res.json(equipment);
  } catch (err) {
    next(err);
  }
};

exports.update = async function update(req, res, next) {
  try {
    const equipment = await Equipment.query()
      .findById(req.params.id)
      .throwIfNotFound();

    await equipment.$query().patchAndFetch(req.body);

    res.json(equipment);
  } catch (err) {
    next(err);
  }
};

exports.destroy = async function destroy(req, res, next) {
  try {
    const equipment = await Equipment.query()
      .findById(req.params.id)
      .throwIfNotFound();

    await equipment.$query().delete();

    res.status(204).send({});
  } catch (err) {
    next(err);
  }
};
