import {createTRPCNuxtClient, httpBatchLink} from 'trpc-nuxt/client'
import type {AppRouter} from '~/server/trpc/routers'

/**
 * Loads tRPC nuxt
 */
export default defineNuxtPlugin(() => {
  /**
   * createTRPCNuxtClient adds a `useQuery` composable
   * built on top of `useAsyncData`.
   */
  const client = createTRPCNuxtClient<AppRouter>({
    links: [
      httpBatchLink({
        url: '/api/trpc',
      }),
    ],
  })

  return {
    provide: {
      client,
    },
  }
})