// import required modules
const express = require('express')

// configure the express app
const app = express()
const PORT = 3000
// app middlewares
app.use(express.urlencoded({ extended: true }))

// define our routes
app.get('/', (req, res) => {
  res.send('hello world 🌍')
})

/* GET REQUESTS -- QUERY STRINGS */
app.get('/hello_person', (req, res) => {
  // console.log(req)
  res.send(`hey ${req.query.name}! Thanks for stoppin by the server!`)
})

/* POST -- REQ BODY -- REDIRECTS */

// fake database
let instructors = [
  'Anna',
  'Nick',
  'Weston'
]

// GET /instructors -- READ all instructors
app.get('/instructors', (req, res) => {
  res.json({ instructors: instructors })
})

// POST /instructors -- CREATE a new instructor
app.post('/instructors', (req, res) => {
  // look at request body for a new instructor
  console.log(req.body)

  // add the new instructors to the 'database'
  instructors.push(req.body.newInstructor)

  // redirect to GET /instructors
  res.redirect('/instructors')
})

/* ALL REQUESTS: REQ PARAMETERS */

app.get('/greet/:firstName/:lastName', (req, res) => {
  res.send(`oh hello ${req.params.firstName} ${req.params.lastName}`)
})



// listen on a port
app.listen(PORT, () => {
  console.log(`you are listening to the smooth sounds of port ${PORT} in the morning 🌊`)
})