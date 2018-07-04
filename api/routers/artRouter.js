const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('../connection')
//const http = require('http')
const axios = require('axios')

//router.get('/', (req, res) => {
    //fetch('mongodb://localhost:27017/artisree')
        //.then((data) => {
            //res.status(200).json(data)
        //})
//})




//axios.get('mongodb://localhost:27017/artisree')
    //.then((response) => {console.log(response.data)})
    //.catch((err) => {console.log(err)})

module.exports = router
