/* eslint-disable node/prefer-global/process */
import type { Config } from 'drizzle-kit'
import { config } from 'dotenv'

config()

// Create an .env File and add your connection String then plug it in here..

export default {
  schema: './server/db/schema',
  out: './server/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.NUXT_DB_URL!,
  },
} satisfies Config
