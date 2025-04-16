import express from 'express';

import {
  listarEmpresas,
  obterEmpresa,
  adicionarEmpresa,
  atualizarEmpresa,
  eliminarEmpresa,
  listarIdiomas,
  listarPaises
} from '../controllers/empresasController.js';

const router = express.Router();

router.get('/', listarEmpresas);
router.get('/:id', obterEmpresa);
router.post('/', adicionarEmpresa);
router.put('/:id', atualizarEmpresa);
router.delete('/:id', eliminarEmpresa);
router.get('/idiomas/lista', listarIdiomas);
router.get('/paises/lista', listarPaises);

export default router;
