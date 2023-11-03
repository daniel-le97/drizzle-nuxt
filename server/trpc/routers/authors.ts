import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { publicProcedure } from '../trpc'
import { authors, insertAuthorSchema, selectAuthorSchema } from '../../db/todos'

export const getAuthors = publicProcedure
  .input(selectAuthorSchema)
  .query(async () => {
    const db = useDb()
    return await db.select().from(authors)
  })

export const insertAuthor = publicProcedure
  .input(insertAuthorSchema)
  .mutation(async ({ input }) => {
    const db = useDb()
    return await db.insert(authors).values(input)
  })

export const deleteAuthor = publicProcedure
  .input(z.object({
    id: z.string().nonempty(),
  }))
  .mutation(async ({ input }) => {
    const db = useDb()
    await db.delete(authors).where(eq(authors.id, input.id))
  })
