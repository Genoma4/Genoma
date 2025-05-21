import supabase from '../supabaseClient.js';

// Listar todos os postos
export async function listarPostos(req, res) {
  const { data, error } = await supabase
    .from('postos') // ajusta este nome se for diferente
    .select('*')
    .order('idposto', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

// Obter posto por ID
export async function obterPosto(req, res) {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('postos')
    .select('*')
    .eq('idposto', id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
}

// Adicionar posto
export async function adicionarPosto(req, res) {
  const { data, error } = await supabase
    .from('postos')
    .insert([req.body])
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
}

// Atualizar posto
export async function atualizarPosto(req, res) {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('postos')
    .update(req.body)
    .eq('idposto', id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

// Eliminar posto
export async function eliminarPosto(req, res) {
  const { id } = req.params;

  const { error } = await supabase
    .from('postos')
    .delete()
    .eq('idposto', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}
