var mongoose = require('mongoose')
var Schema = mongoose.Schema


var newsSchema = new Schema({
  title: String,
  description: String,
  post: String,
  comments: [{type: Schema.Type.ObjectId, ref: 'Comment'}],
  user_id: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})


var News = mongoose.model('News', newsSchema)
module.exports = News
