import express from 'express';
import { listarPaises, adicionarPais, obterPaisPorId,atualizarPais, eliminarPais} from '../controllers/paisesController.js';

const router = express.Router();

router.get('/', listarPaises);
router.post('/', adicionarPais);
router.get('/:id', obterPaisPorId);
router.put('/:id', atualizarPais);
router.delete('/:id', eliminarPais);

export default router;
