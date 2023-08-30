import supabase from "../database/supabase.js"

const produto = {
	nome: "Write Supabase Teste",
	descricao: "Writting on Supabase ProstgreSQL Database",
	qtd_estoque: 99,
	preco: 234.56,
	importado: 1
}

try {
	const { data, error } = await supabase
	.from('produtos')
	.insert([produto])
	.select()
	if(error) throw error
	console.log(data)
} catch (error) {
	console.error(error.message)
}finally{
	process.exit(0)
}