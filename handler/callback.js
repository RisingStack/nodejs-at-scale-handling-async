const promisify = require('es6-promisify')
const { fastAsyncFunction, asyncFunction, slowAsyncFunction } = require('../util')

function handler (done) {
  fastAsyncFunction((err) => {
    if (err) return done(err)
    asyncFunction((err) => {
      if (err) return done(err)
      slowAsyncFunction((err) => {
        done(err)
      })
    })
  })
}

module.exports = promisify(handler)
