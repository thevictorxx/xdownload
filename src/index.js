const path = require('path')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const mainRoutes = require('./routes/main.routes')

require('dotenv').config()

const PORT = process.env.PORT || 3000

const app = express()

// Server Configuration
app.use(cors())

app.use(morgan('dev'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Public folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use(mainRoutes)

// Server Start
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}!`)
})
