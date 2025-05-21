import express from 'express';
import {
  listarPostos,
  obterPosto,
  adicionarPosto,
  atualizarPosto,
  eliminarPosto
} from '../controllers/postosController.js';

const router = express.Router();

router.get('/', listarPostos);
router.get('/:id', obterPosto);
router.post('/', adicionarPosto);
router.put('/:id', atualizarPosto);
router.delete('/:id', eliminarPosto);

export default router;
