const mongoose = require('../../api/connection')
const profile = require('../profile/Profile')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const artSchema = new Schema({
    title: String,
    url: String,
    profile: { type: ObjectId, ref: 'Profile' }
})

const artModel = mongoose.model('Art', artSchema)

module.exports = artModel
