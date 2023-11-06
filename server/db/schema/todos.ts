import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { boolean, char, integer, pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'
import { id, timestamps } from '../../utils/dbFields'
import { users } from './auth'

/**
 * Provides a Drizzle schema for "todos" and also exposes Zod schemas for usage in tRPC routes
 */
export const todos = pgTable('todos', {
  id,
  task: text('task'),
  completed: boolean('completed').default(false),
  ...timestamps,
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

export const insertTodoSchema = createInsertSchema(todos)
export const selectTodoSchema = createSelectSchema(todos)
