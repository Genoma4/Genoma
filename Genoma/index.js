import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/auth.js'
import dotenv from 'dotenv'
import medicosRoutes from './routes/medicos.js'
import paisesRoutes from './routes/paisesRoutes.js';
import empresasRoutes from './routes/empresasRoutes.js';
import idiomasRoutes from './routes/idiomasRoutes.js';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'menu.html'))
  })

app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})

app.use('/medicos', medicosRoutes)
app.use('/paises', paisesRoutes);
app.use('/empresas', empresasRoutes);
app.use('/api/idiomas', idiomasRoutes);