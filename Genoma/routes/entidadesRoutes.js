import { Router } from 'express';
import {
  listarEntidades, obterEntidade, adicionarEntidade,
  atualizarEntidade, eliminarEntidade
} from '../controllers/entidadesController.js';

const r = Router();

r.get ('/',          listarEntidades);
r.get ('/:id',       obterEntidade);
r.post('/',          adicionarEntidade);
r.put ('/:id',       atualizarEntidade);
r.delete('/:id',     eliminarEntidade);

export default r;
