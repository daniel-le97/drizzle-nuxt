import { eq } from 'drizzle-orm'
import { insertTodoSchema, todos } from '~/server/db/schema/todos'


export default defineEventHandler(async (event) => {
  const db = useDb()
const body = await readBody(event)

  await db.delete(todos).where(eq(todos.id, body.id))
  return
})
