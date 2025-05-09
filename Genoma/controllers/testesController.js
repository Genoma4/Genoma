import supabase from '../supabaseClient.js'

export const listarTestes = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('testes')
      .select(`
        *,
        tiposteste:tiposteste ( nomept )
      `)
      .order('idteste', { ascending: true })

    if (error) throw error

    const testes = data.map(t => ({
      ...t,
      nometipoteste: t.tiposteste?.nomept || ''
    }))

    res.json(testes)
  } catch (err) {
    console.error(err)
    res.status(500).json({ erro: 'Erro ao buscar testes' })
  }
}

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

export const listarTestePorId = async (req, res) => {
  const { id } = req.params

  try {
    const { data, error } = await supabase
      .from('testes')
      .select('*')
      .eq('idteste', id)
      .single()

    if (error || !data) throw error
    res.json(data)
  } catch (err) {
    console.error('Erro ao buscar teste:', err)
    res.status(500).json({ erro: 'Erro ao buscar teste' })
  }
}

export const criarTeste = async (req, res) => {
  try {
    const dataInserir = { ...req.body }

    const { data, error } = await supabase
      .from('testes')
      .insert([dataInserir])
      .select()
      .single()

    if (error) throw error

    res.status(201).json(data)
  } catch (err) {
    console.error('Erro ao criar teste:', err)
    res.status(500).json({ erro: 'Erro ao criar teste' })
  }
}

export const atualizarTeste = async (req, res) => {
  const { id } = req.params
  const dataAtualizar = { ...req.body }

  try {
    const { data, error } = await supabase
      .from('testes')
      .update(dataAtualizar)
      .eq('idteste', id)
      .select()
      .single()

    if (error) throw error

    res.json(data)
  } catch (err) {
    console.error('Erro ao atualizar teste:', err)
    res.status(500).json({ erro: 'Erro ao atualizar teste' })
  }
}

export const eliminarTeste = async (req, res) => {
  const { id } = req.params
  try {
    const { error } = await supabase
      .from('testes')
      .delete()
      .eq('idteste', id)

    if (error) throw error

    res.sendStatus(204)
  } catch (err) {
    console.error(err)
    res.status(500).json({ erro: 'Erro ao eliminar teste' })
  }
}
