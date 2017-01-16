const co = require('co')
const { fastAsyncFunctionPromise, asyncFunctionPromise, slowAsyncFunctionPromise } = require('../util')

function * handler () {
  yield fastAsyncFunctionPromise()
  yield asyncFunctionPromise()
  yield slowAsyncFunctionPromise()
}

module.exports = co.wrap(handler)
