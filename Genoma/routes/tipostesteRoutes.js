import express from 'express'
import { listarTiposTeste } from '../controllers/tipostesteController.js'

const router = express.Router()

router.get('/', listarTiposTeste)

export default router
