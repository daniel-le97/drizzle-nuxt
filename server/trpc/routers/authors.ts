import { z } from 'zod'
import { publicProcedure } from '../trpc'
import { eq } from 'drizzle-orm'
import { insertAuthorSchema, authors, selectAuthorSchema } from '../../db/authors'

export const getAuthors = publicProcedure
    .input(selectAuthorSchema)
    .query(async () => {
        const db = useDb()

        return db.select().from(authors)
    })

export const insertAuthor = publicProcedure
    .input(insertAuthorSchema)
    .mutation(async ({ input }) => {
        const db = useDb()

        await db.insert(authors).values(input)
    })

export const deleteAuthor = publicProcedure
    .input(z.object({
        id: z.string().nonempty()
    }))
    .mutation(async ({ input }) => {
        const db = useDb()

        await db.delete(authors).where(eq(authors.id, input.id))
    })