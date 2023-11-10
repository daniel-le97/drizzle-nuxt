import { insertTodoSchema, todos } from '~/server/db/schema/todos'

export default defineEventHandler(async (event) => {
const body = await readBody(event)

if (body.task === '') {
return
}
        const db = useDb()
const res = await db.insert(todos).values(body).returning()

return res[0]


})
