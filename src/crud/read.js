import supabase from "../database/supabase.js"

try {
	let { data, error } = await supabase
		.from('produtos')
		.select(`
			id_prod,
			nome,
			qtd_estoque,
			preco,
			importado
		`)
		.limit(10)
		.order('id_prod', { ascending: false })
	if (error) throw error
	data && console.table(data)
} catch (error) {
	console.error(error.message)
} finally {
	process.exit(0)
}