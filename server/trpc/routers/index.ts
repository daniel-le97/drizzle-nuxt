import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { todosRouter } from './todos'
import { todos } from '~/server/db/todos'

export const appRouter = router({
  todos: todosRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
