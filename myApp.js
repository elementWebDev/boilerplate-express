const express = require('express')
const app = express()
require('dotenv').config()

console.log("Hello World")

// Serve static assets
app.use('/public', express.static(__dirname +'/public'))

/** 5) serve JSON on a specific route */

// app.get('/json', (req, res) => {
//   res.json(
//     { "message": "Hello json" }
//   )
// })

/** 6) Use the .env file to configure the app */
 
app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json(
      { "message": "HELLO JSON" }
    )
  } else {
    res.json(
      { "message": "Hello json"}
    )
  }
})

// Serve an HTML File
app.get('/', (req, res) => {
  let absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath)
})






























 module.exports = app
