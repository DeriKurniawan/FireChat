var mongoose = require('mongoose')
var Schema = mongoose.Schema



var userSchema = new Schema({
  name: String,
  username: {type: String, unique: true},
  email: {type: String, unique: true, match: [/\w+@\w{2,7}\.\w{2,5}(\.\w{2,5})?/, `Format email invalid`]},
  password: String
},{timestamps: true})


var User = mongoose.model('User', userSchema)
module.exports = User
