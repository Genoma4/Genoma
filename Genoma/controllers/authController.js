import supabase from '../supabaseClient.js'
import bcrypt from 'bcrypt'

export async function register(req, res) {
  const { username, password, email, nome } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  const { data, error } = await supabase
    .from('utilizadores')
    .insert([
      {
        username,
        password: hashedPassword,
        email,
        nome,
        idperfil: 4
      }
    ])

  if (error) return res.status(400).json({ error: error.message })

  res.status(201).json({ message: 'Usuário registrado com sucesso', data })
}

export async function login(req, res) {
  const { username, password } = req.body

  const { data, error } = await supabase
    .from('utilizadores')
    .select('*')
    .eq('username', username)
    .single()

  if (error || !data) {
    return res.status(400).json({ error: 'Usuário não encontrado' })
  }

  const isMatch = await bcrypt.compare(password, data.password)

  if (!isMatch) {
    return res.status(401).json({ error: 'Senha incorreta' })
  }

  res.status(200).json({ message: 'Login bem-sucedido', user: data })
}
