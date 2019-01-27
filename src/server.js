const express = require('express')
const bodyParser = require('body-parser')
const Pusher = require('pusher')
const cors = require('cors')
require('dotenv').config()
const shortId = require('shortid')
let mocks = require('./mocks')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const pusher = new Pusher({
    appId: process.env.PUSHER_APPID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.PUSHER_CLUSTER,
    encrypted: true
})

app.post('/logbook', (req, res) => {
    // simulate actual db save with id and createdAt added
    const logbook = {
        id: shortId.generate(),
        createdAt: new Date().toISOString(),
        ...req.body
    }
    mocks.push(logbook) // like our db
        // trigger this update to our pushers listeners
    pusher.trigger('logbook', 'new', logbook)
    res.send(logbook)
})

app.delete('/logbook/:id', (req, res) => {
    const logbook = mocks.find(emp => emp.id === req.params.id)
    mocks = mocks.filter(emp => emp.id !== logbook.id)
    pusher.trigger('logbook', 'deleted', logbook)
    res.send(logbook)
})

app.get('/logbook', (req, res) => {
    res.send(mocks)
})

app.listen(process.env.PORT || 2000, () => console.log('Listening at 2000'))