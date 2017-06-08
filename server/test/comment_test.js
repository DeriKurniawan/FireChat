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

	describe('POST creat commnet', ()=>{
		it('should be creating comment with user id', (done)=>{
			chai.request(server)
			.get('/api/user/')
			.end((err, result)=>{
				console.log(result.body)
				let userId = result._id
				chai.request(server)
				.post('/api/comment/')
				.send({
					comment: 'bagus sekali beritanya bro!!',
					user_id: userId
				})
				.end((err, data)=>{
					data.should.have.status(200)
					data.result.should.be.an('object')
					data.body.should.have.property('comment')
					data.body.should.have.property('user_id')

					data.body.comment.should.equal('bagus sekali beritanya bro!!')
					data.body.user_id.should.equal(userId)

					done()
				})
			})
		})
	})

});