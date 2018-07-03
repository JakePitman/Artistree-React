const mongoose = require('../../api/connection')
const Profile = require('../profile/Profile')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const userSchema = new Schema({
    email: String,
    password: String,
    profile: { type: ObjectId, ref: 'Profile' }
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel
