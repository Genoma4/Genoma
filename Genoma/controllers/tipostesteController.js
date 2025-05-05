import supabase from '../supabaseClient.js'

export const listarTiposTeste = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('tiposteste')
      .select('*')
      .order('nomept', { ascending: true })

    if (error) throw error

    res.json(data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ erro: 'Erro ao buscar tipos de teste' })
  }
}
