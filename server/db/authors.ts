import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { pgTable, text, unique } from 'drizzle-orm/pg-core'
import { id, timestamps } from '../utils/dbFields'

/**
 * Provides a Drizzle schema for "authors" and also exposes Zod schemas for usage in tRPC routes
 */
export const authors = pgTable('authors', {
    id,
    firstName: text('firstName'),
    lastName: text('lastName'),
    ...timestamps
}, (t) => ({
    name: unique().on(t.firstName, t.lastName)
}))

// Expose authorId for other tables to prevent errors in repetition
export const authorId = text('authorId').references(() => authors.id)

export const insertAuthorSchema = createInsertSchema(authors)
export const selectAuthorSchema = createSelectSchema(authors)