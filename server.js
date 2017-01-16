const express = require('express')
const handler = require('./handler')
const app = express()

app.get('/test/:example', function (req, res, next) {
  const example = req.params.example
  const label = `Handler (${example})`

  console.time(label)

  handler[example]()
    .then((result) => res.send(result))
    .catch(next)
    .then(() => {
      console.timeEnd(label)
    })
})

app.listen(3000, function () {
  console.log('Examples:')
  console.log(['callback', 'async', 'promise', 'generator', 'await']
    .map((example) => `http://localhost:3000/test/${example}`))
})
