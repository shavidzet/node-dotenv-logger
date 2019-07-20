;(() => {
  const beautify = require('json-beautify')

  const logger = require('tracer').console()

  const env = require('dotenv').config({
    path: process.env.ENV_PATH || '.env'
  })

  /* eslint-disable no-console */
  const envs = {
    ...env,
    NODE_ENV: process.env.NODE_ENV
  }

  const output = beautify(envs.parsed, null, 1, 30)

  logger.log(output)
})()
