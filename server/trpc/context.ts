import {inferAsyncReturnType} from '@trpc/server'
import {H3Event} from 'h3'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */

export const createContext = (event: H3Event) => {
    return {
        me: 'daniel'
    }
}

export type Context = inferAsyncReturnType<typeof createContext>