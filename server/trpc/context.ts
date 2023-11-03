import { getServerSession } from '@hebilicious/authjs-nuxt/dist/runtime/lib/server.js'
import type { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'
import { authOptions } from '~/server/api/auth/[...].js'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */

export async function createContext(_event: H3Event) {
  const session = await getServerSession(_event, authOptions)

  /**
   * Add any trpc-request context here. E.g., you could add `db` like this:
   * ```ts
   * return { prisma: _event.context.prisma }
   * ```
   */
  return {
    db: useDb(),
    user: session?.user,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
