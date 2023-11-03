import { createNuxtApiHandler } from 'trpc-nuxt'
import { appRouter } from '~/server/trpc/routers'
import { createContext } from '~/server/trpc/context'

/**
 * One tRPC handler to handle all the routes. You could apply additional cache headers here
 */
export default createNuxtApiHandler({
  router: appRouter,
  createContext,

  /**
   * @link https://trpc.io/docs/caching#api-response-caching
   */
  responseMeta(_opts) {
    // cache request for 1 day + revalidate once every second
    const ONE_DAY_IN_SECONDS = 60 * 60 * 24
    return {
      headers: {
        'cache-control': `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    }
  },
})
