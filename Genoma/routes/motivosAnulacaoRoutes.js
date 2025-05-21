import express from 'express';
import {
  listarMotivos,
  obterMotivo,
  adicionarMotivo,
  atualizarMotivo,
  eliminarMotivo
} from '../controllers/motivosAnulacaoController.js';

const router = express.Router();

router.get('/', listarMotivos);
router.get('/:id', obterMotivo);
router.post('/', adicionarMotivo);
router.put('/:id', atualizarMotivo);
router.delete('/:id', eliminarMotivo);

export default router;
