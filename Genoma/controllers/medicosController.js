import supabase from '../supabaseClient.js'

// Helper para converter valores para booleanos (bit)
function toBool(val) {
  return val === true || val === 'true' || val === 'on' || val === 1 || val === '1'
}

// Listar todos os médicos
export async function listarMedicos(req, res) {
  const { data, error } = await supabase
    .from('medicos')
    .select('*')
    .order('idmedico', { ascending: true });

  if (error) return res.status(500).json({ error: error.message })

  res.json(data)
}

// Adicionar novo médico
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
    contacto1telefone,
    contacto2nome,
    contacto2funcao,
    contacto2telefone,
    contacto3nome,
    contacto3funcao,
    contacto3telefone,
    notas,
    relatoriomedicoemail,
    relatoriomedicocarta,
    relatorioclienteemail,
    relatorioclientecarta,
    relatoriocontacto1email,
    relatoriocontacto2email,
    relatoriocontacto3email,
    relatoriomedicosms,
    idpais,
    idcomercial
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
      genero: parseInt(genero),
      contacto1nome,
      contacto1funcao,
      contacto1telefone,
      contacto2nome,
      contacto2funcao,
      contacto2telefone,
      contacto3nome,
      contacto3funcao,
      contacto3telefone,
      notas,
      relatoriomedicoemail: toBool(relatoriomedicoemail),
      relatoriomedicocarta: toBool(relatoriomedicocarta),
      relatorioclienteemail: toBool(relatorioclienteemail),
      relatorioclientecarta: toBool(relatorioclientecarta),
      relatoriocontacto1email: toBool(relatoriocontacto1email),
      relatoriocontacto2email: toBool(relatoriocontacto2email),
      relatoriocontacto3email: toBool(relatoriocontacto3email),
      relatoriomedicosms: toBool(relatoriomedicosms),
      idpais: parseInt(idpais),
      idcomercial: parseInt(idcomercial),
      idutilizador: 1
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
