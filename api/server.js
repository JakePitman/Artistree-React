const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.listen(3000, () => {
    console.log('listening on port 3000' )
})
