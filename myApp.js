var express = require('express')
var app = express()

console.log("Hello World")

// Serve static assets
app.use('/public', express.static(__dirname +'/public'))

// Serve JSON on a Specific Route
app.get('/json', (req, res) => {
  // Send JSON response
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


































 module.exports = app;
