const { fastAsyncFunctionPromise, asyncFunctionPromise, slowAsyncFunctionPromise } = require('../util')

function handler (params) {
  return fastAsyncFunctionPromise()
    .then(() => asyncFunctionPromise())
    .then(() => slowAsyncFunctionPromise())
}

module.exports = handler
