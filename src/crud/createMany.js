import supabase from "../database/supabase.js"
import { faker } from '@faker-js/faker';

const totalProdutos = 3
const novosProdutos = Array.from({length:totalProdutos}).map(()=>({
	nome: faker.commerce.productName(),
	descricao: faker.commerce.productDescription(),
	qtd_estoque: faker.number.int(100),
	preco: faker.commerce.price(),
	importado: faker.number.binary()
}))

try {
	const { data, error } = await supabase
	.from('produtos')
	.insert(novosProdutos)
	.select()
	if(error) throw error
	console.log(data)
} catch (error) {
	console.error(error.message)
}finally{
	process.exit(0)
}