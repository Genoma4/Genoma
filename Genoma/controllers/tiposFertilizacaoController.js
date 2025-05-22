import supabase from '../supabaseClient.js';

// Listar todos os tipos de fertilização
export async function listarTiposFertilizacao(req, res) {
  const { data, error } = await supabase
    .from('tiposfertilizacao')
    .select('*')
    .order('seq', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

// Obter um tipo por ID
export async function obterTipoFertilizacao(req, res) {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('tiposfertilizacao')
    .select('*')
    .eq('idtipofertilizacao', id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
}

// Criar novo tipo
export async function adicionarTipoFertilizacao(req, res) {
  const { nompt, nomeen, nomeit, seq } = req.body;

  const { data, error } = await supabase
    .from('tiposfertilizacao')
    .insert([{ nompt, nomeen, nomeit, seq: parseInt(seq) }])
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
}

// Atualizar tipo
export async function atualizarTipoFertilizacao(req, res) {
  const { id } = req.params;
  const { nompt, nomeen, nomeit, seq } = req.body;

  const { data, error } = await supabase
    .from('tiposfertilizacao')
    .update({ nompt, nomeen, nomeit, seq: parseInt(seq) })
    .eq('idtipofertilizacao', id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

// Eliminar
export async function eliminarTipoFertilizacao(req, res) {
  const { id } = req.params;

  const { error } = await supabase
    .from('tiposfertilizacao')
    .delete()
    .eq('idtipofertilizacao', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}
