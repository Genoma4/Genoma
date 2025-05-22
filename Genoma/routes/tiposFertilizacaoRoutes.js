import express from 'express';
import {
  listarTiposFertilizacao,
  obterTipoFertilizacao,
  adicionarTipoFertilizacao,
  atualizarTipoFertilizacao,
  eliminarTipoFertilizacao
} from '../controllers/tiposFertilizacaoController.js';

const router = express.Router();

router.get('/', listarTiposFertilizacao);
router.get('/:id', obterTipoFertilizacao);
router.post('/', adicionarTipoFertilizacao);
router.put('/:id', atualizarTipoFertilizacao);
router.delete('/:id', eliminarTipoFertilizacao);

export default router;
