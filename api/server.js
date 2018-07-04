const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./connection.js')
const artRouter = require('./routers/artRouter')
const Art = require('../db/art/Art')
const User = require('../db/user/User')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).json({name: "jake"})
})
app.get('/arts', (req, res) => {
    Art.find()
        .then(arts => {
    
            res.status(200).json(arts)
            res.end()
        })
       .catch(err => console.log(err)) 
    //res.status(200).json(arts)
})


function checkEmail(req, res, next){
    const email = req.body.email
    User.findOne({email}, function(err, user){

        if (user){
            next(new Error('duplicate'))  
        }
      next()
        
    })
}


function hashPassword(req, res, next) {
    const password = req.body.password
    

    next()
}

app.post('/login', (req, res) => {
    const user = req.body
 
    const existingUser = User.findOne({email: user.email})

    if(user.passowrd === existingUser.password){
        const token = jwt.sign({email: user.email}, 'this is the secret')
        res.status(200).json(token)
    }
})
app.post('/adduser', checkEmail, (req, res)=> {
    const user = req.body 
   
    User.create(user)
    res.status(200).json(user)

})

app.post('/art', (req, res) => {
    const art = req.body

    Art.create(art)
    .then(newArt => res.status(200).json(newArt))
    .catch(err => console.log(err))
    
    // res.status(200).json(art)
})

app.delete('/art', (req, res) => {
    const id = req.body
    Art.findByIdAndRemove(id, (err, art => {
        if (err) return res.status(500).send(err)
        res.status(200).send(art.id)
    })
    )}
)


//app.use('/art', artRouter)
app.use((err, req, res, next)=>{
    console.log('general error')
    res.status(500)
    res.json({error: err})
})
app.listen(5000, () => {
    console.log('listening on port 5000' )
})
