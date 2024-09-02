const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const http = require('http')

require('dotenv').config()

const PORT = process.env.PORT || 4000;

const app = express()

app.use(express.json())

app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`Database connected`))
    .catch(err => console.log(err))

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})