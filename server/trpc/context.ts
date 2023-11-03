import { inferAsyncReturnType } from '@trpc/server'
import { H3Event } from 'h3'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */

export const createContext = (_event: H3Event) => {
  /**
   * Add any trpc-request context here. E.g., you could add `db` like this:
   * ```ts
   * return { prisma: _event.context.prisma }
   * ```
   */
  return {
    db: useDb()
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
