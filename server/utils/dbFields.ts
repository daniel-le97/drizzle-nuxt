import * as pg from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

/**
 * A centralized list of standardized Drizzle ORM schema field definitions to prevent duplication errors
 */

export const createdAt = pg.timestamp('createdAt', { withTimezone: true, mode: 'date' }).defaultNow()
export const updatedAt = pg.timestamp('updatedAt', { withTimezone: true, mode: 'date' }).defaultNow()
export const datetime = (name: string) => pg.timestamp(name, { withTimezone: true, mode: 'date' })
export const id = pg.char('id').primaryKey()

// Timestamps is inspired by the Mongoose "timestamps" option to provide automated timestamps for create and update actions
export const timestamps = {
    createdAt,
    updatedAt
}
