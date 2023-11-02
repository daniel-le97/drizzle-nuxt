import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { publicProcedure } from '../trpc'
import { insertBookSchema, books } from '../../db/books'

export const getBooks = publicProcedure
    .query(async ({ input }) => {
        const db = useDb()

        return db.select().from(books)
    })

export const insertBook = publicProcedure
    .input(insertBookSchema)
    .mutation(async ({ input }) => {
        const db = useDb()

        await db.insert(books).values(input)
    })

export const deleteBook = publicProcedure
    .input(z.object({
        id: z.string().nonempty()
    }))
    .mutation(async ({ input }) => {
        const db = useDb()

        await db.delete(books).where(eq(books.id, input.id))
    })