import supabase from "../database/supabase.js"

const deletedId = 123

try {
	const { data, error } = await supabase
		.from('produtos')
		.delete()
		.eq('id_prod', deletedId)
		.select()
	if (error) throw error
	console.log(data)
} catch (error) {
	console.error(error.message)
} finally {
	process.exit(0)
}