import express from 'express'
import {
    listarMedicos,
    adicionarMedico,
    eliminarMedico
  } from '../controllers/medicosController.js'
  
  const router = express.Router()
  
  router.get('/', listarMedicos)
  router.post('/', adicionarMedico)
  router.delete('/:id', eliminarMedico)
  
  export default router
