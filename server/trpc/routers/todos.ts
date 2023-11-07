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
      return (await db.select().from(todos).where(eq(todos.id, context.input.id)))[0]
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
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      try {
        const db = useDb()
        const caller = appRouter.createCaller({})
        const todoToUpdate = await caller.todos.getById({ id: input.id })
        if (todoToUpdate)
          todoToUpdate.completed = !todoToUpdate.completed ?? false
        await db.update(todos).set({ completed: todoToUpdate.completed }).where(eq(todos.id, input.id))
      }
      catch (error) {
        console.log(error.message)
      }
    }),
})
