var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

const should = chai.should();

var server = require('../app');

var Comment = require('../models/comment.js')
var User = require('../models/user.js')

describe('Comment', ()=>{
	var newComment_id = "";
	var newUser_id = "";

	beforeEach((done)=>{
		// var newComment = Comment({
		// 	comment: 'Bagus sekali beritanya bro!',
		// })

		// newUser.save((err, user)=>{
		// 	newComment_id = comment._id;
		// 	done();
		// })

		var newUser = User({
			name: "deri kurniawan",
			username: "derikurniawan",
			email: "deri@example.com",
			password: "123456"
		})

		newUser.save((err, user)=>{
			newUser_id = user._id;
			done();
		})
	});

	afterEach((done)=>{
		Comment.remove({}, (err)=>{
			if(err){
				console.log(err)
			} else {
				User.remove({}, err=>{
				done();
			})
			}
		})

		
	});

	describe('POST sign-in user', ()=>{
		it('should return a user data with token', (done)=>{
			chai.request(server)
			.post('/api/user/signin')
			.send({
				username: "derikurniawan",
				password: "123456"
			})
			.end((err, result)=>{
				console.log(result.body);
				result.should.have.status(200)
				result.body.should.be.an('object')
				// result.body.should.have.property('username')
				// result.body.should.have.property('name')
				// result.body.should.have.property('email')
				result.body.should.have.property('token')

				// result.body.name.should.equal('deri kurniawan')
				// result.body.email.should.equal('deri@example.com')
				// result.body.username.should.equal('derikurniawan')

				done()
			})
		})
	})

	describe('POST creat comment', ()=>{
		it('should be creating comment with user id', (done)=>{
			chai.request(server)
			.post('/api/user/signin')
			.send({
				username: "derikurniawan",
				password: "123456"
			})
			.end((err, result)=>{
				console.log("-------------ini body:",result.body)

				//let userId = result.body[0]._id

				//console.log("ini user id:  ",userId)
				chai.request(server)
				.post('/api/comment/create')
				//.headers( 'Authorization' : 'Bearer' + result.body.token )
				.send({
					comment: 'bagus sekali beritanya bro!!',
					token: result.body.token
					//user_id: userId,

				})
				.end((err, data)=>{
					console.log("ini data : ", data.body)
					data.should.have.status(200)
					data.body.should.be.an('object')
					data.body.should.have.property('comment')
					data.body.should.have.property('user_id')

					// data.body.comment.should.equal('bagus sekali beritanya bro!!')
					// data.body.user_id.should.equal(userId)

					done()
				})
			})
		})
	})

});