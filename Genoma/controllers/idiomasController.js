import supabase from '../supabaseClient.js';

export const obterIdiomas = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('idiomas')
      .select('ididioma, nomelocal:nom' + req.query.lang || 'pt');

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
