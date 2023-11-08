import { insertTodoSchema, todos } from '~/server/db/schema/todos'

export default defineEventHandler(async (event) => {
const body = await readBody(event)


        const db = useDb()


return await db.insert(todos).values(body)


})
