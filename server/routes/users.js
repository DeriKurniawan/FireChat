var express = require('express');
var router = express.Router();
var userController = require('../controllers/users.js')
var passport = require('passport')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', userController.signup)
router.post('/signin', passport.authenticate('local', { session: false }), userController.signin)

module.exports = router;
