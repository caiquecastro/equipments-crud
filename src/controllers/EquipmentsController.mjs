import Equipment from '../models/Equipment.mjs';

export async function index(req, res, next) {
  try {
    const equipments = await Equipment.query();

    res.json(equipments);
  } catch (err) {
    next(err);
  }
}

export async function store(req, res, next) {
  try {
    const equipment = await Equipment.query().insert(req.body);

    res.status(201).json(equipment);
  } catch (err) {
    next(err);
  }
}

export async function show(req, res, next) {
  try {
    const equipment = await Equipment.query()
      .findById(req.params.id)
      .throwIfNotFound();

    res.json(equipment);
  } catch (err) {
    next(err);
  }
}

export async function update(req, res, next) {
  try {
    const equipment = await Equipment.query()
      .findById(req.params.id)
      .throwIfNotFound();

    await equipment.$query().patchAndFetch(req.body);

    res.json(equipment);
  } catch (err) {
    next(err);
  }
}

export async function destroy(req, res, next) {
  try {
    const equipment = await Equipment.query()
      .findById(req.params.id)
      .throwIfNotFound();

    await equipment.$query().delete();

    res.status(204).send({});
  } catch (err) {
    next(err);
  }
}
