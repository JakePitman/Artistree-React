const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/artisree'
mongoose.connect(url)

const connection = mongoose.connection


connection.on('connected', () => {
    console.log('established connection to 27017')
})

module.exports = mongoose

