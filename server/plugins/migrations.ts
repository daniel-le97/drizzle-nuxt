import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { join } from 'pathe'
import { useLogger } from '@nuxt/kit'
import { useDb } from '~/server/utils/db'

export default defineNitroPlugin(async () => {
  const logger = useLogger('drizzle')
  try {
    if (process.dev) {
      const { db } = useRuntimeConfig()

      if (!db.dir)
        throw new Error('Missing db.url in runtime config')

      await migrate(useDb(), { migrationsFolder: join(db.dir, './migrations') }).catch(() => logger.error('db'))

      logger.success('schema and db migrated')
    }
  }
  catch (error) {
    logger.error(error)
  }
})
