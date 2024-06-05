require('newrelic');
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.status(200).send('Hello world')
})

const server = app.listen(3000, () => {
  console.log('My Server is running on port 3000!')
  console.log('Prueba TP')
})

module.exports = { app, server }
