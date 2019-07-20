;(() => {
  const env = require('dotenv').config({
    path: process.env.ENV_PATH || '.env'
  })
  /* eslint-disable no-console */
  const envs = {
    ...env,
    NODE_ENV: process.env.NODE_ENV
  }
  console.log(envs)
})()
