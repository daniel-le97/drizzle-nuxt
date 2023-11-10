import { insertTodoSchema, todos } from '~/server/db/schema/todos'

export default defineEventHandler(async (event) => {
  const db = useDb()
  const todosRes = await db.select().from(todos)
  return todosRes
})
