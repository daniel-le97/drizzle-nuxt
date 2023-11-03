import type { Config } from 'drizzle-kit'
import { config } from 'dotenv'

config()
// console.log(process.env.PG_DB_URL);

export default {
  schema: './server/db',
  out: './server/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.PG_DB_URL!,
  },
} satisfies Config
