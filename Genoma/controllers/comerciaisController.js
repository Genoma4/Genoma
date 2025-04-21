import supabase from '../supabaseClient.js';

export async function listarComerciais(req, res) {
  const { data, error } = await supabase
    .from('comerciais')
    .select('*')
    .order('idcomercial');

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

export async function obterComercial(req, res) {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('comerciais')
    .select('*')
    .eq('idcomercial', id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
}

export async function adicionarComercial(req, res) {
  const novo = {
    nome: req.body.nome,
    telefone: req.body.telefone || null,
    email: req.body.email || null,
    idempresa: parseInt(req.body.idempresa)
  };

  const { data, error } = await supabase
    .from('comerciais')
    .insert([novo])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
}

export async function atualizarComercial(req, res) {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('comerciais')
    .update(req.body)
    .eq('idcomercial', id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

export async function eliminarComercial(req, res) {
  const { id } = req.params;

  const { error } = await supabase
    .from('comerciais')
    .delete()
    .eq('idcomercial', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}
