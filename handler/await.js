const { fastAsyncFunctionPromise, asyncFunctionPromise, slowAsyncFunctionPromise } = require('../util')

async function handler () {
  await fastAsyncFunctionPromise()
  await asyncFunctionPromise()
  await slowAsyncFunctionPromise()
}

module.exports = handler
