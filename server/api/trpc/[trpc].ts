// import { createNuxtApiHandler } from 'trpc-nuxt'
// import { appRouter } from '~/server/trpc/routers'
// import { createContext } from '~/server/trpc/context'

// /**
//  * One tRPC handler to handle all the routes. You could apply additional cache headers here
//  */
// export default createNuxtApiHandler({
//   router: appRouter,
//   createContext,

//   /**
//    * @link https://trpc.io/docs/caching#api-response-caching
//    */
//   responseMeta(_opts) {
//     // cache request for 1 day + revalidate once every second
//     const ONE_DAY_IN_SECONDS = 60 * 60 * 24
//     return {
//       headers: {
//         'cache-control': `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Headers': '*',
//       },
//     }
//   },
// })

// /**
//  * This is the API-handler of your app that contains all your API routes.
//  * On a bigger app, you will probably want to split this file up into multiple files.
//  */
// import { createNuxtApiHandler } from 'trpc-nuxt'
// import { publicProcedure, router } from '~/server/trpc/trpc'
// import { z } from 'zod'

// export const appRouter = router({
//   hello: publicProcedure
//     // This is the input schema of your procedure
//     .input(
//       z.object({
//         text: z.string().nullish(),
//       }),
//     )
//     .query(({ input }) => {
//       // This is what you're returning to your client
//       return {
//         greeting: `hello ${input?.text ?? 'world'}`,
//       }
//     }),
// })

// // export only the type definition of the API
// // None of the actual implementation is exposed to the client
// export type AppRouter = typeof appRouter;

// // export API handler
// export default createNuxtApiHandler({
//   router: appRouter,
//   createContext: () => ({}),
// })

import { createNuxtApiHandler } from 'trpc-nuxt'
import { appRouter } from '~/server/trpc/routers'
import { createContext } from '~/server/trpc/context'

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext,
})
