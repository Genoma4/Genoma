import supabase from '../supabaseClient.js';

// Listar todos os países
export async function listarPaises(req, res) {
  const { data, error } = await supabase
    .from('paises')
    .select('idpais, nomept, nomeen, nomeit, indicativotelefonico')
    .order('idpais', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
}

// Adicionar novo país
export async function adicionarPais(req, res) {
  const { nomept, indicativotelefonico } = req.body;

  const { data, error } = await supabase
    .from('paises')
    .insert([{ nomept, indicativotelefonico }])
    .select();

  if (error) return res.status(400).json({ error: error.message });

  res.status(201).json(data[0]);
}

export async function obterPaisPorId(req, res) {
  const id = parseInt(req.params.id);
  const { data, error } = await supabase
    .from('paises')
    .select('*')
    .eq('idpais', id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
}

export async function atualizarPais(req, res) {
  const id = parseInt(req.params.id);
  const { nomept, nomeen, nomeit, indicativotelefonico } = req.body;

  const { error } = await supabase
    .from('paises')
    .update({ nomept, nomeen, nomeit, indicativotelefonico })
    .eq('idpais', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: 'Atualizado com sucesso' });
}

export async function eliminarPais(req, res) {
  const id = parseInt(req.params.id);
  const { error } = await supabase
    .from('paises')
    .delete()
    .eq('idpais', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: 'Eliminado com sucesso' });
}

