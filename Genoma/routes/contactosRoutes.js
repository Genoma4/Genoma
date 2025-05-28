import express from 'express';
import {
  listarContactos,
  obterContacto,
  adicionarContacto,
  atualizarContacto,
  eliminarContacto
} from '../controllers/contactosController.js';

const router = express.Router();

router.get('/', listarContactos);
router.get('/:id', obterContacto);
router.post('/', adicionarContacto);
router.put('/:id', atualizarContacto);
router.delete('/:id', eliminarContacto);

export default router;
