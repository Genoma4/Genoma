import express from 'express';
import {
  listarLotes,
  obterLote,
  adicionarLote,
  atualizarLote,
  eliminarLote
} from '../controllers/lotesController.js';

const router = express.Router();

router.get('/', listarLotes);
router.get('/:id', obterLote);
router.post('/', adicionarLote);
router.put('/:id', atualizarLote);
router.delete('/:id', eliminarLote);

export default router;
