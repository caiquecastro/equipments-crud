import { Router } from 'express';
import {
  index, store, show, update, destroy,
} from '../controllers/EquipmentsController.mjs';

const router = Router();

/* GET equipments listing. */
router.get('/', index);
router.post('/', store);
router.get('/:id', show);
router.patch('/:id', update);
router.delete('/:id', destroy);

export default router;
