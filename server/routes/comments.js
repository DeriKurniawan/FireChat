var express = require('express');
var router = express.Router();
var userController = require('../controllers/comments')
var helper = require('../helpers/jwtVerify.js')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/create', helper.jwtVerify, userController.create)
router.get('/read', helper.jwtVerify, userController.read)
router.get('/', userController.read);

module.exports = router;
