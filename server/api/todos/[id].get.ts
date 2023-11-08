import { eq } from 'drizzle-orm'
import { insertTodoSchema, todos } from '~/server/db/schema/todos'

export default defineEventHandler(async (event) => {
const body = await readBody(event)


    const db = useDb()
     const res = await db.select().from(todos).where(eq(todos.id, body.id))

     return {res}

})
