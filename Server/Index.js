const express = require('express')
const app = express()
const port = 8000

app.post('/contact', (req, res, next) => {
  console.log(req.user)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})