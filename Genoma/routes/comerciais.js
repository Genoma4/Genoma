import express from 'express';
const router = express.Router();

import {
  listarComerciais,
  obterComercial,
  adicionarComercial,
  atualizarComercial,
  eliminarComercial
} from '../controllers/comerciaisController.js';

router.get('/', listarComerciais);
router.get('/:id', obterComercial);
router.post('/', adicionarComercial);
router.put('/:id', atualizarComercial);
router.delete('/:id', eliminarComercial);

export default router;
