const mongoose = require('../../connection')
const Profile = require('./Profile')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const userSchema = new Schema({
    email: String,
    password: String,
    profile: { type: ObjectId, ref: 'Profile' }
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel
