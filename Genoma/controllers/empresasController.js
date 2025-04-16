import supabase from '../supabaseClient.js';

export async function listarEmpresas(req, res) {
  const { data, error } = await supabase
    .from('empresas')
    .select('*')
    .order('idempresa');

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

export async function obterEmpresa(req, res) {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('empresas')
    .select('*')
    .eq('idempresa', id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
}

export async function adicionarEmpresa(req, res) {
  const nova = {
    ...req.body,
    reservadasistema: '0',
  };

  const { data, error } = await supabase
    .from('empresas')
    .insert([nova])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
}

export async function atualizarEmpresa(req, res) {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('empresas')
    .update(req.body)
    .eq('idempresa', id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

export async function eliminarEmpresa(req, res) {
  const { id } = req.params;

  const { error } = await supabase
    .from('empresas')
    .delete()
    .eq('idempresa', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}

export async function listarIdiomas(req, res) {
  const { data, error } = await supabase
    .from('idiomas')
    .select('ididioma, nomept')
    .order('ididioma');

  if (error) return res.status(500).json({ error: error.message });

  res.json(
    data.map(i => ({
      ididioma: i.ididioma,
      nomelocal: i.nomept
    }))
  );
}

export async function listarPaises(req, res) {
  const { data, error } = await supabase
    .from('paises')
    .select('idpais, nomept')
    .order('idpais');

  if (error) return res.status(500).json({ error: error.message });

  res.json(
    data.map(p => ({
      idpais: p.idpais,
      nomelocal: p.nomept
    }))
  );
}
