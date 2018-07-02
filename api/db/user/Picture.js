pictureSchema.statics.findPicturesByProfile = async function(userID) {
    const _id = mongoose.Types.ObjectIdd(UserId)
    const profiles = this.find({profile: _id})
    if(!users) {
        return new Error('no profiles found')
    }
    return profiles
}
