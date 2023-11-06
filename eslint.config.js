import antfu from '@antfu/eslint-config'

export default antfu({
  rules:{"no-console": 'off', 'no-alert': 'off'},
  ignores: [
    './server/db/migrations',
  ],
})
