import { eq } from "drizzle-orm"
import { insertTodoSchema, todos } from '~/server/db/schema/todos'
export default defineEventHandler(async (event) => {
     const db = useDb()
const body = await readBody(event)



const update = db.select().from(todos).where(eq(todos.id, body.id))

// await  db.update(todos).set({completed: body.completed}).where(eq(todos.id,body.id))
return {body}
})
