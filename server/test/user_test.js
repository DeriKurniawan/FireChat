var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

const should = chai.should();

var server = require('../app');

var User = require('../models/user');

describe('User', ()=>{
	var newUser_id = "";

	beforeEach((done)=>{
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
		User.remove({}, err=>{
			done();
		})
	});

	describe('POST sign-up user', ()=>{
		it('should create a new user', (done)=>{
			chai.request(server)
			.post('/api/user/')
			.send({
				name: 'deri irmansyah',
				username: 'deriirmansyah',
				email: 'irmansyah@example.com',
				password: '123456'
			})
			.end((err, result)=>{
				result.should.have.status(200)
				result.body.should.be.an('object')
				result.body.should.have.property('name')
				result.body.should.have.property('username')
				result.body.should.have.property('email')
				result.body.should.have.property('password')
				result.body.should.have.property('createdAt')
				result.body.should.have.property('updatedAt')

				result.body.name.should.equal('deri irmansyah')
				result.body.username.should.equal('deriirmansyah')
				result.body.email.should.equal('irmansyah@example.com')
				result.body.password.should.equal('123456')

				done()

			})
		})
	});

	describe('POST sign-in user', ()=>{
		it('should return a user data with token', (done)=>{
			chai.request(server)
			.post('api/user')
			.send({
				username: "derikurniawan",
				password: "123456"
			})
			.end((err, result)=>{
				result.should.have.status(200)
				result.body.should.be.an('object')
				result.body.should.have.property('username')
				result.body.should.have.property('name')
				result.body.should.have.property('email')
				result.body.should.have.property('token')

				result.body.name.should.equal('deri kurniawan')
				result.body.email.should.equal('deri@example.com')
				result.body.username.should.equal('derikurniawan')

				done()
			})
		})
	})

}) ;