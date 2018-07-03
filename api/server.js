const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./connection.js')
const artRouter = require('./routers/artRouter')
const Art = require('../db/art/Art')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).json({name: "jake"})
})
app.get('/arts', (req, res) => {
    Art.find()
        .then(arts => {
            console.log(arts)
            res.status(200).json(arts)
            res.end()
        })
       .catch(err => console.log(err)) 
    //res.status(200).json(arts)
})

//app.use('/art', artRouter)

app.listen(3000, () => {
    console.log('listening on port 3000' )
})

