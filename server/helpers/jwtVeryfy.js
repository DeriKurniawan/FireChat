var jwt = require('jsonwebtoken')



module.exports = {
  jwtVerify: (req, res, next)=>{
    jwt.verify(req.headers.token, 'rahasia', (err, decoded)=>{
      if(decoded){
        req.decoded = decoded
        next()
      } else {
        res.send(`You have to login first`)
      }
    })
  }
}
