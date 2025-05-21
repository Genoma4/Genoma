import supabase from '../supabaseClient.js';

// Listar
export async function listarMotivos(req, res) {
  const { data, error } = await supabase
    .from('motivosanulacao')
    .select('*')
    .order('idmotivoanulacao', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

// Obter por ID
export async function obterMotivo(req, res) {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('motivosanulacao')
    .select('*')
    .eq('idmotivoanulacao', id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
}

// Criar
export async function adicionarMotivo(req, res) {
  const { nomept, nomeen, nomeit, reservadosistema } = req.body;

  const { data, error } = await supabase
    .from('motivosanulacao')
    .insert([{
      nomept,
      nomeen,
      nomeit,
      reservadosistema: reservadosistema === 'on' || reservadosistema === true
    }])
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
}

// Atualizar
export async function atualizarMotivo(req, res) {
  const { id } = req.params;
  const { nomept, nomeen, nomeit, reservadosistema } = req.body;

  const { data, error } = await supabase
    .from('motivosanulacao')
    .update({
      nomept,
      nomeen,
      nomeit,
      reservadosistema: reservadosistema === 'on' || reservadosistema === true
    })
    .eq('idmotivoanulacao', id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

// Eliminar
export async function eliminarMotivo(req, res) {
  const { id } = req.params;
  const { error } = await supabase
    .from('motivosanulacao')
    .delete()
    .eq('idmotivoanulacao', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}
