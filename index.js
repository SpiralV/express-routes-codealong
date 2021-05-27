// import required modules
const express = require('express')

// configure the express app
const app = express()
const PORT = 3000

// define our routes
app.get('/', (req, res) => {
  res.send('hello world 🌍')
})

/* GET REQUESTS -- QUERY STRINGS */
app.get('/hello_person', (req, res) => {
  console.log(req)
  res.send(`hey ${req.query.name}! Thanks for stoppin by the server!`)
})

// listen on a port
app.listen(PORT, () => {
  console.log(`you are listening to the smooth sounds of port ${PORT} in the morning 🌊`)
})