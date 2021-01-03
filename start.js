const mongoose = require('mongoose')

// import environmental variables from our .env file
require('dotenv').config()

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })

mongoose.set('useCreateIndex', true)

mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises

mongoose.connection.on('error', err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
})

// Import all of our models
require('./models/User')

// Start our app
const app = require('./app')
const port = 4000
app.listen(port, () => console.log(`App is listening on ${port}`))
