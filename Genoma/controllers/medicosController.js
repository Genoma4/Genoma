import supabase from '../supabaseClient.js'

// Listar todos os médicos
export async function listarMedicos(req, res) {
  const { data, error } = await supabase
    .from('medicos')
    .select('*')
    .order('idmedico', { ascending: true });

  if (error) return res.status(500).json({ error: error.message })

  res.json(data)
}

// Adicionar novo médico (com todos os campos do form)
export async function adicionarMedico(req, res) {
  const {
    titulo,
    nome,
    numcedula,
    telefone,
    telemovel,
    email,
    genero,
    contacto1nome,
    contacto1funcao,
    contactotelefone,
    contacto2nome,
    contacto2funcao,
    contacto2telefone,
    contacto3nome,
    contacto3funcao,
    contacto3telefone,
    notas
  } = req.body

  const { data, error } = await supabase
    .from('medicos')
    .insert([{
      titulo,
      nome,
      numcedula,
      telefone,
      telemovel,
      email,
      genero: parseInt(genero), // transforma para número
      contacto1nome,
      contacto1funcao,
      contactotelefone,
      contacto2nome,
      contacto2funcao,
      contacto2telefone,
      contacto3nome,
      contacto3funcao,
      contacto3telefone,
      notas
    }])
    .select()

  if (error) return res.status(400).json({ error: error.message })

  res.status(201).json(data[0])
}

// Eliminar médico por ID
export async function eliminarMedico(req, res) {
  const id = parseInt(req.params.id)

  const { error } = await supabase
    .from('medicos')
    .delete()
    .eq('idmedico', id)

  if (error) return res.status(400).json({ error: error.message })

  res.json({ message: 'Médico eliminado com sucesso' })
}
