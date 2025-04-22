import express from 'express'
import {
  listarMedicos,
  obterMedicoPorId,
  adicionarMedico,
  atualizarMedico,
  eliminarMedico
} from '../controllers/medicosController.js'

const router = express.Router()

router.get('/', listarMedicos)
router.get('/:id', obterMedicoPorId)
router.post('/', adicionarMedico)
router.put('/:id', atualizarMedico)
router.delete('/:id', eliminarMedico)

export default router
