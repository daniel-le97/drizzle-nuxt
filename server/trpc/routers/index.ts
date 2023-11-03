import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { todosRouter } from '~/server/trpc/routers/todos'

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      }
    }),
  todos: todosRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
