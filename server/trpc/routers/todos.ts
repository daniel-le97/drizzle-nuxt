import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { publicProcedure, router } from '~/server/trpc/trpc'
import { insertTodoSchema, todos } from '~/server/db/todos'


export const todosRouter = router({
  getAll: publicProcedure
    .query(async () => {
      const db = useDb()
      return await db.select().from(todos)
    }),
  getById: publicProcedure
    .input(z.object({
      id: z.string(),
    }))
    .query(async (context) => {
      const db = useDb()
      return await db.select().from(todos).where(eq(todos.id, context.input.id))
    }),
  insertTodo: publicProcedure
    .input(insertTodoSchema)
    .mutation(async ({ input }) => {
      try {
        
        const db = useDb()
        
        return await db.insert(todos).values(input)
      } catch (error) {
        console.log(error.message);
        
      }
    }),
  deleteTodo: publicProcedure
    .input(z.object({
      id: z.string(),
    }))
    .mutation(async ({ input }) => {
      const db = useDb()
      await db.delete(todos).where(eq(todos.id, input.id))
    }),
})
