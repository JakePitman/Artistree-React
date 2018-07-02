const mongoose = require('../../connection')
const User = require('./User')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const profileSchema = new Schema({
    username: String,
    user: { type: ObjectId, ref: 'User' }
})

/*
profileSchema.methods.addUser = function(userID) {
    //add it as an ObjectId, not a string
    const _id = mongoose.Types.ObjectId(userID)
    this.user = _id
}
*/

const profileModel = mongoose.model('Profile', profileSchema)

module.exports = profileModel
