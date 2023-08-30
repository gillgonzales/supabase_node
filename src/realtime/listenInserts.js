import supabase from "../database/supabase.js"

supabase.channel('supabase_realtime')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'produtos' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()