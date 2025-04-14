import express from 'express';
import { listarPaises, adicionarPais } from '../controllers/paisesController.js';

const router = express.Router();

router.get('/', listarPaises);
router.post('/', adicionarPais);

export default router;
