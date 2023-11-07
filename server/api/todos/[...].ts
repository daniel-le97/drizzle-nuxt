export default defineEventHandler(async (_event) => {
  const db = useDb()
  return await db.select().from(todos)
})
