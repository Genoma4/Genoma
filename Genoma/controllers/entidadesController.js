import supabase from '../supabaseClient.js';

// util simples
const toInt   = v => v === null || v === undefined ? null : parseInt(v,10);
const toFloat = v => v === null || v === undefined ? null : parseFloat(v);

export async function listarEntidades(req,res){
  const { data, error } = await supabase
    .from('entidades')
    .select('*')
    .order('identidade');
  if(error) return res.status(500).json({ error:error.message });
  res.json(data);
}

export async function obterEntidade(req,res){
  const { id } = req.params;
  const { data, error } = await supabase
    .from('entidades')
    .select('*')
    .eq('identidade', id).single();
  if(error) return res.status(404).json({ error:error.message });
  res.json(data);
}

export async function adicionarEntidade(req,res){
  const corpo = limpa(req.body);
  const { data, error } = await supabase
    .from('entidades').insert([corpo]).select();
  if(error) return res.status(400).json({ error:error.message });
  res.status(201).json(data[0]);
}

export async function atualizarEntidade(req,res){
  const { id } = req.params;
  const corpo  = limpa(req.body);
  const { data, error } = await supabase
    .from('entidades').update(corpo)
    .eq('identidade', id).select().single();
  if(error) return res.status(400).json({ error:error.message });
  res.json(data);
}

export async function eliminarEntidade(req,res){
  const { id } = req.params;
  const { error } = await supabase
    .from('entidades').delete().eq('identidade', id);
  if(error) return res.status(400).json({ error:error.message });
  res.status(204).send();
}

// remove strings vazias e converte números
function limpa(o){
  const out = { ...o };
  out.idpais       = toInt(out.idpais);
  out.idempresa    = toInt(out.idempresa);
  out.precocolheita= toFloat(out.precocolheita);
  out.origemfacturacao = toInt(out.origemfacturacao);
  return Object.fromEntries(
    Object.entries(out).map(([k,v])=>[k,v===''?null:v])
  );
}
