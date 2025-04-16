import express from 'express';
import { obterIdiomas } from '../controllers/idiomasController.js';

const router = express.Router();

router.get('/', obterIdiomas);

export default router;
