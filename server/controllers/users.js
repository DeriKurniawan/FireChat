var User = require('../models/user.js')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')

module.exports = {
  signup : (req, res)=>{
    var createUser = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    })
    createUser.save((err, user)=>{
      if(!err){
        console.log(bcrypt.compareSync('123456', user.password));
        res.send(user)
      } else {
        res.send({message: 'user is alraedy usage, please log in'})
      }
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
