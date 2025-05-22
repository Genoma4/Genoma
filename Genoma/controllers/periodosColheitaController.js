import supabase from '../supabaseClient.js';

// Listar todos os períodos de colheita
export async function listarPeriodos(req, res) {
  const { data, error } = await supabase
    .from('periodoscolheita')
    .select('*')
    .order('seq', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

// Obter um período por ID
export async function obterPeriodo(req, res) {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('periodoscolheita')
    .select('*')
    .eq('idperiodocolheita', id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
}

// Criar novo período
export async function adicionarPeriodo(req, res) {
  const { nompt, nomeen, nomeit, seq } = req.body;

  const { data, error } = await supabase
    .from('periodoscolheita')
    .insert([{ nompt, nomeen, nomeit, seq: parseInt(seq) }])
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
}

// Atualizar período
export async function atualizarPeriodo(req, res) {
  const { id } = req.params;
  const { nompt, nomeen, nomeit, seq } = req.body;

  const { data, error } = await supabase
    .from('periodoscolheita')
    .update({ nompt, nomeen, nomeit, seq: parseInt(seq) })
    .eq('idperiodocolheita', id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

// Eliminar
export async function eliminarPeriodo(req, res) {
  const { id } = req.params;

  const { error } = await supabase
    .from('periodoscolheita')
    .delete()
    .eq('idperiodocolheita', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}
