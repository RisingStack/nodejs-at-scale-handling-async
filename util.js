const promisify = require('es6-promisify')

function fastAsyncFunction (done) {
  console.time('fastAsyncFunction')
  setTimeout(() => {
    console.timeEnd('fastAsyncFunction')
    done()
  }, 100)
}

function asyncFunction (done) {
  console.time('asyncFunction')
  setTimeout(() => {
    console.timeEnd('asyncFunction')
    done()
  }, 500)
}

function slowAsyncFunction (done) {
  console.time('slowAsyncFunction')
  setTimeout(() => {
    console.timeEnd('slowAsyncFunction')
    done()
  }, 1000)
}

const fastAsyncFunctionPromise = promisify(fastAsyncFunction)
const asyncFunctionPromise = promisify(asyncFunction)
const slowAsyncFunctionPromise = promisify(slowAsyncFunction)

module.exports = {
  fastAsyncFunction,
  asyncFunction,
  slowAsyncFunction,
  fastAsyncFunctionPromise,
  asyncFunctionPromise,
  slowAsyncFunctionPromise
}
