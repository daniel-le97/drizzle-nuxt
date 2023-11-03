import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { join } from 'pathe'
import { useDb } from '~/server/utils/db'

export default defineNitroPlugin(async () => {
  if (process.dev) {
    const { db } = useRuntimeConfig()

    if (!db.dir) {
      throw new Error('Missing db.url in runtime config')
    }

    await migrate(useDb(), { migrationsFolder: join(db.dir, './migrations') }).catch(() => console.error('db'))

    console.log('Schema and database synced')
  }
})
