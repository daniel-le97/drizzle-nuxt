import GithubProvider from '@auth/core/providers/github'
import GoogleProvider from '@auth/core/providers/google'
import type { AuthConfig } from '@auth/core/types'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { NuxtAuthHandler } from '#auth'

// import EmailProvider from '@auth/core/providers/email'

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.
const runtimeConfig = useRuntimeConfig()

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  adapter: DrizzleAdapter(useDb()),
  providers: [
    GithubProvider({
      clientId: runtimeConfig.github.clientId,
      clientSecret: runtimeConfig.github.clientSecret,
    }),
    GoogleProvider({
      clientId: runtimeConfig.google.clientId,
      clientSecret: runtimeConfig.google.clientSecret,
    }),
  ],
}

export default NuxtAuthHandler(authOptions, runtimeConfig)
// If you don't want to pass the full runtime config,
//  you can pass something like this: { public: { authJs: { baseUrl: "" } } }
