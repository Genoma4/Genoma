import express from 'express';
import {
  listarSistemas,
  adicionarSistema,
  atualizarSistema,
  eliminarSistema,
  obterSistema
} from '../controllers/sistemasaudeController.js';

const router = express.Router();

router.get('/', listarSistemas);
router.get('/:id', obterSistema);
router.post('/', adicionarSistema);
router.put('/:id', atualizarSistema);
router.delete('/:id', eliminarSistema);

export default router;
