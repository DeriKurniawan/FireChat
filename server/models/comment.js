var mongoose = require('mongoose')
var Schema = mongoose.Schema


var commentSchema = new Schema({
  comment: String
  user_id: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})



var Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
