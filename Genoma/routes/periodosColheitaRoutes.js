import express from 'express';
import {
  listarPeriodos,
  obterPeriodo,
  adicionarPeriodo,
  atualizarPeriodo,
  eliminarPeriodo
} from '../controllers/periodosColheitaController.js';

const router = express.Router();

router.get('/', listarPeriodos);
router.get('/:id', obterPeriodo);
router.post('/', adicionarPeriodo);
router.put('/:id', atualizarPeriodo);
router.delete('/:id', eliminarPeriodo);

export default router;
