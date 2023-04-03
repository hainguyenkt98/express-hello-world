const express = require('express')
const app = express()
const port = 1337

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/do-something', (req, res) => {
  res.send('[GET] Do Something!')
})

app.post('/do-something', (req, res) => {
  res.send('[POST] Do Something!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})