import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { boolean, pgTable, text } from 'drizzle-orm/pg-core'
import { id, timestamps } from '../utils/dbFields'
import { users } from './auth.js';

/**
 * Provides a Drizzle schema for "authors" and also exposes Zod schemas for usage in tRPC routes
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
