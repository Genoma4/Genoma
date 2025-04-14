import supabase from '../supabaseClient.js';

// Listar todos os países
export async function listarPaises(req, res) {
  const { data, error } = await supabase
    .from('paises')
    .select('idpais, nomept, indicativotelefonico')
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
