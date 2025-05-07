import express from 'express'
import {
  listarTestes,
  listarTiposTeste,
  listarTestePorId,
  criarTeste,
  atualizarTeste,
  eliminarTeste
} from '../controllers/testesController.js'

const router = express.Router()

router.get('/', listarTestes)
router.get('/tipos', listarTiposTeste)
router.get('/:id', listarTestePorId)
router.post('/', criarTeste)
router.put('/:id', atualizarTeste)
router.delete('/:id', eliminarTeste)

export default router
