import supabase from '../supabaseClient.js'

// Listar todos os sistemas de saúde
export async function listarSistemas(req, res) {
  const { data, error } = await supabase
    .from('sistemassaude')
    .select('*')
    .order('idsistemasaude', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

// Obter um sistema por ID
export async function obterSistema(req, res) {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('sistemassaude')
    .select('*')
    .eq('idsistemasaude', id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
}

// Adicionar novo sistema
export async function adicionarSistema(req, res) {
  const { nome, idpais } = req.body;

  const { data, error } = await supabase
    .from('sistemassaude')
    .insert([{ nome, idpais: parseInt(idpais) }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
}

// Atualizar sistema
export async function atualizarSistema(req, res) {
  const { id } = req.params;
  const { nome, idpais } = req.body;

  const { data, error } = await supabase
    .from('sistemassaude')
    .update({ nome, idpais: parseInt(idpais) })
    .eq('idsistemasaude', id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

// Eliminar sistema
export async function eliminarSistema(req, res) {
  const { id } = req.params;

  const { error } = await supabase
    .from('sistemassaude')
    .delete()
    .eq('idsistemasaude', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}
