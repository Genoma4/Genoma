import supabase from '../supabaseClient.js'

// Função utilitária para converter checkboxes em booleanos
const toBool = (val) => val === true || val === 'true' || val === 'on' || val === 1 || val === '1';

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
    relatorioclientecarta
  } = req.body;

  const medico = {
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
    idcomercial: 7,
    idpais: 1,
    relatoriomedicoemail: toBool(relatoriomedicoemail),
    relatoriomedicocarta: toBool(relatoriomedicocarta),
    relatorioclienteemail: toBool(relatorioclienteemail),
    relatorioclientecarta: toBool(relatorioclientecarta)
  };

  const { data, error } = await supabase
    .from('medicos')
    .insert([medico])
    .select();

  if (error) {
    console.error('Erro ao adicionar médico:', error.message);
    return res.status(400).json({ error: error.message });
  }

  res.status(201).json(data[0]);
}


// Eliminar médico por ID
export async function eliminarMedico(req, res) {
  const id = parseInt(req.params.id)

  const { error } = await supabase
    .from('medicos')
    .delete()
    .eq('idmedico', id)

  if (error) {
    console.error('Erro ao eliminar médico:', error.message)
    return res.status(400).json({ error: error.message })
  }

  res.json({ message: 'Médico eliminado com sucesso' })
}
