import supabase from '../supabaseClient.js';

// Listar todos os lotes
export async function listarLotes(req, res) {
  const { data, error } = await supabase
    .from('lotes')
    .select('*')
    .order('idlote', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

// Obter um lote por ID
export async function obterLote(req, res) {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('lotes')
    .select('*')
    .eq('idlote', id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
}

// Adicionar novo lote
export async function adicionarLote(req, res) {
  const { designacao, datacriacao, dataexpiracao, idtipokit, idempresa } = req.body;

  const { data, error } = await supabase
    .from('lotes')
    .insert([
      {
        designacao,
        datacriacao,
        dataexpiracao,
        idtipokit: parseInt(idtipokit),
        idempresa: parseInt(idempresa)
      }
    ])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
}

// Atualizar lote
export async function atualizarLote(req, res) {
  const { id } = req.params;
  const { designacao, datacriacao, dataexpiracao, idtipokit, idempresa } = req.body;

  const { data, error } = await supabase
    .from('lotes')
    .update({
      designacao,
      datacriacao,
      dataexpiracao,
      idtipokit: parseInt(idtipokit),
      idempresa: parseInt(idempresa)
    })
    .eq('idlote', id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

// Eliminar lote
export async function eliminarLote(req, res) {
  const { id } = req.params;

  const { error } = await supabase
    .from('lotes')
    .delete()
    .eq('idlote', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}
