import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { appRouter } from '.'
import { publicProcedure, router } from '~/server/trpc/trpc'
import { insertTodoSchema, todos } from '~/server/db/schema/todos'

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
      }
      catch (error) {
        console.log(error.message)
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
  updateTodo: publicProcedure
    .input(insertTodoSchema)
    .mutation(async ({ input }) => {
      try {
        console.log('updating todos');
        
        const db = useDb()
        const id = input.id!
        const caller = appRouter.createCaller({})
        const todoToUpdate = await caller.todos.getById({ id })
        if (todoToUpdate)
          await db.update(todos).set(input).where(eq(todos.id, id))
      }
      catch (error) {
        console.log(error.message)
      }
    }),
})
