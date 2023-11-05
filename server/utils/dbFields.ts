import { sql } from 'drizzle-orm'
import * as pg from 'drizzle-orm/pg-core'

/**
 * A centralized list of standardized Drizzle ORM schema field definitions to prevent duplication errors
 */

export const createdAt = pg.timestamp('createdAt', { withTimezone: true, mode: 'date' }).defaultNow()
export const updatedAt = pg.timestamp('updatedAt', { withTimezone: true, mode: 'date' }).defaultNow()
export const datetime = (name: string) => pg.timestamp(name, { withTimezone: true, mode: 'date' })
// this should be serial but it is broken, this works tho for getting random ids, as auto increment is not working
export const id = pg.varchar('id').primaryKey().$default(() => sql`gen_random_uuid()`)

// Timestamps is inspired by the Mongoose "timestamps" option to provide automated timestamps for create and update actions
export const timestamps = {
  createdAt,
  updatedAt,
}
