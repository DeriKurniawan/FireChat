var User = require('../models/user.js')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
var helper = require('../helpers/croneJob.js')
var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')


module.exports = {
  signup : (req, res)=>{
    User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    })
    .then((user)=>{
      helper.createCronJob(user)
      res.send(user)
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  signin : (req, res)=>{
    var user = req.user
    console.log(user)
    if(user.hasOwnProperty('massage')){
      res.send(user.massage)
    }else {
      var token = jwt.sign({
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
      }, 'rahasia', {expiresIn: '1d'})
      res.send({

        token: token

      })
      console.log(token)
    }
  },
  read : (req, res)=>{
    User.find((err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  }
}
