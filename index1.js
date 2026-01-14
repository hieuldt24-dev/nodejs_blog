const express = require('express')
const app = express()
const port = 3000
const host = 'localhost'

app.get('/', (req, res) => {
  res.send('Hello World from the other side hi!')
})

app.listen(port, host, () => {
  console.log(`Server chạy tại http://${host}:${port}`)
})
