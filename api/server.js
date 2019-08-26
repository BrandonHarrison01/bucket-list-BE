const express = require('express')
const cors = require('cors');
const helmet = require('helmet')

const server = express()

const usersRouter = require('../users/users-route')

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/auth', usersRouter)

server.get('/', (req, res) => {
    res.send('server is running')
})

module.exports = server;