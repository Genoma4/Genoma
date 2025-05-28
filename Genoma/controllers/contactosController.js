import supabase from '../supabaseClient.js';

// Listar todos os contactos
export async function listarContactos(req, res) {
  const { data, error } = await supabase
    .from('contactos')
    .select('*')
    .order('idcontacto', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

// Obter contacto por ID
export async function obterContacto(req, res) {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('contactos')
    .select('*')
    .eq('idcontacto', id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
}

// Criar novo contacto
export async function adicionarContacto(req, res) {
  const payload = req.body;

  const { data, error } = await supabase
    .from('contactos')
    .insert([payload])
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
}

// Atualizar contacto
export async function atualizarContacto(req, res) {
  const { id } = req.params;
  const payload = req.body;

  const { data, error } = await supabase
    .from('contactos')
    .update(payload)
    .eq('idcontacto', id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

// Eliminar contacto
export async function eliminarContacto(req, res) {
  const { id } = req.params;

  const { error } = await supabase
    .from('contactos')
    .delete()
    .eq('idcontacto', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}
