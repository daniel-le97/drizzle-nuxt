import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { getAuthors } from './authors'
import { getBooks } from './books'

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
  getAuthors,
  getBooks,
})

// export type definition of API
export type AppRouter = typeof appRouter
