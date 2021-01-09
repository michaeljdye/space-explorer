const express = require('express')
const path = require('path')

// Create Express app
const app = express()

// Add Body Parser middleware
app.use(express.json())

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

// Import routes
const planet = require('./routes/planet')
const mars = require('./routes/mars')
const search = require('./routes/search')
const user = require('./routes/user')
const auth = require('./routes/auth')

// Use routes
app.use('/api/planet', planet)
app.use('/api/mars', mars)
app.use('/api/search', search)
app.use('/api/user', user)
app.use('/api/auth', auth)

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

module.exports = app
