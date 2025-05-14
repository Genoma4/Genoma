import express from 'express';
import {
  listarTiposKit,
  obterTipoKit,
  adicionarTipoKit,
  atualizarTipoKit,
  eliminarTipoKit
} from '../controllers/tipokitController.js';

const router = express.Router();

router.get('/', listarTiposKit);
router.get('/:id', obterTipoKit);
router.post('/', adicionarTipoKit);
router.put('/:id', atualizarTipoKit);
router.delete('/:id', eliminarTipoKit);

export default router;
