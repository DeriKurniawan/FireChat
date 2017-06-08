var Comment = require('../models/comment.js')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')

module.exports = {
  create : (req, res)=>{
    var createComment = new Comment({
      comment: req.body.comment,
      user_id: req.decoded.id
    })
    createComment.save((err, comment)=>{
      if(!err){
        res.send(comment)
      } else {
        res.send(err)
      }
    })
  },
  read : (req, res)=>{
    Comment.find({})
           .populate('user_id')
           .exec(function (err, result) {
             if(!err){
               res.send(result)
             } else {
               res.send(err)
             }
           })
  }
}
