import supabase from '../supabaseClient.js';

export const obterIdiomas = async (req, res) => {
  try {
    const lang = req.query.lang || 'pt';
    const campoNome = `nom${lang}`;

    const { data, error } = await supabase
      .from('idiomas')
      .select(`ididioma, nomelocal:${campoNome}`);

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
