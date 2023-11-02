import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { pgTable, primaryKey, text, unique } from 'drizzle-orm/pg-core'
import { timestamps, id } from '../utils/dbFields'

import { authorId } from './authors'

export const books = pgTable('books', {
    id,
    title: text('title'),
    authorId,
    ...timestamps
}, (t) => ({
    name: unique().on(t.title, t.authorId)
}))

export const insertBookSchema = createInsertSchema(books)
export const selectBooksSchema = createSelectSchema(books)