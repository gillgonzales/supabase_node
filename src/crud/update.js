import supabase from "../database/supabase.js"

const updatedValues = { importado: 1 }

try {
	const { data, error } = await supabase
		.from('produtos')
		.update(updatedValues)
		.gt('id_prod', 110)
		.select()
	if (error) throw error
	console.log(data)
} catch (error) {
	console.error(error.message)
} finally {
	process.exit(0)
}