import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    './server/db/migrations',
  ],
})
