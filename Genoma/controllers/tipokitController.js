import supabase from '../supabaseClient.js';

// Listar todos os tipos de kit
export async function listarTiposKit(req, res) {
  const { data, error } = await supabase
    .from('tiposkit')
    .select('*')
    .order('idtipokit', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

// Obter tipo de kit por ID
export async function obterTipoKit(req, res) {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('tiposkit')
    .select('*')
    .eq('idtipokit', id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
}

// Adicionar tipo de kit
export async function adicionarTipoKit(req, res) {
  const { nomept, nomeen, nomeit, idtipoteste, ididioma, comandosetiquetasimples, comandosetiquetadatanascimento, comandosetiquetalote, comandosetiquetatubo } = req.body;

  const { data, error } = await supabase
    .from('tiposkit')
    .insert([{
      nomept, nomeen, nomeit,
      idtipoteste: parseInt(idtipoteste),
      ididioma: parseInt(ididioma),
      comandosetiquetasimples,
      comandosetiquetadatanascimento,
      comandosetiquetalote,
      comandosetiquetatubo
    }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
}

// Atualizar tipo de kit
export async function atualizarTipoKit(req, res) {
  const { id } = req.params;
  const { nomept, nomeen, nomeit, idtipoteste, ididioma, comandosetiquetasimples, comandosetiquetadatanascimento, comandosetiquetalote, comandosetiquetatubo } = req.body;

  const { data, error } = await supabase
    .from('tiposkit')
    .update({
      nomept, nomeen, nomeit,
      idtipoteste: parseInt(idtipoteste),
      ididioma: parseInt(ididioma),
      comandosetiquetasimples,
      comandosetiquetadatanascimento,
      comandosetiquetalote,
      comandosetiquetatubo
    })
    .eq('idtipokit', id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

// Eliminar tipo de kit
export async function eliminarTipoKit(req, res) {
  const { id } = req.params;

  const { error } = await supabase
    .from('tiposkit')
    .delete()
    .eq('idtipokit', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}
