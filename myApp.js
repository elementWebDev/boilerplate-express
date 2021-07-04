const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')

console.log('Hello World')

/** 7.) Implement a Root-Level Request Logger Middleware */
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip)
  next()
})

// --> 11.) Mount the body-parser middleware here

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


/** 4.) Serve static assets */
app.use('/public', express.static(__dirname + '/public'))

/** 5) serve JSON on a specific route */
// app.get('/json', (req, res) => {
//   res.json(
//     { "message": "Hello json" }
//   )
// })

/** 6) Use the .env file to configure the app */
app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({ message: 'HELLO JSON' })
  } else {
    res.json({ message: 'Hello json' })
  }
})

// Serve an HTML File
app.get('/', (req, res) => {
  let absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath)
})

/** 8.) Chain Middleware to Create a Time Server */
function getCurrentTimeString() {
  return new Date().toString()
}

app.get('/now', (req, res, next) => {
    req.time = getCurrentTimeString()
    next()
  }, (req, res) => {
    res.json({ time: req.time })
  }
)

/** 9.) Get Route Parameter Input from the Client */
app.get('/:word/echo', (req, res) => {
  res.json({ echo: req.params.word })
})

/** 10.) Get Query Parameter Input from the Client */
app.get('/name', (req, res) => {
  res.json({ name: req.query.first + " " + req.query.last })
})

/** 11.) Use body-parser to Parse POST Requests */


/** 12.) Get Data from POST Requests */
app.post('/name', (req, res) => {
  res.json({ name: req.body.first + " " + req.body.last })
})

module.exports = app
