const async = require('async')
const promisify = require('es6-promisify')
const { fastAsyncFunction, asyncFunction, slowAsyncFunction } = require('../util')

function handler (done) {
  async.series([
    fastAsyncFunction,
    asyncFunction,
    slowAsyncFunction
  ], done)
}

module.exports = promisify(handler)
