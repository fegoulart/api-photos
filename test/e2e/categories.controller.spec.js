'use strict';


let app = require('../../app.js');
let request = require('supertest');
let chai=require('chai');

let expect = chai.expect;

chai.use(require('chai-things'));

describe('Categories controller', function(){
	describe('.create - Post /api/categories', function(){
		it('should create a category test', function(done) {
			request(app)
				.post('/api/categories')
				.field('name', 'my awesome category6')
				.field('createdBy', 'Luke')
				.field('createdAt', '2015-12-10')
				.end(function(err,res){
					expect(res.statusCode).to.be.equal(201);
					expect(res.body).have.property('message','created' );
					done();
				});
		});
	});

describe('.create - Post /api/categories', function(){
		it('should not permit create an unamed category test', function(done) {
			request(app)
				.post('/api/categories')
				.field('name', '')
				.field('createdBy', 'Luke')
				.field('createdAt', '2015-12-10')
				.end(function(err,res){
					expect(res.statusCode).to.be.equal(400);
					expect(res.body).have.property('message');
					done();
				});
		});
	});

	describe('.list - Get /api/categories', function(){
		it('should return a json array test', function(done) {
			request(app)
				.get('/api/categories')
				.end(function(err,res){
					//console.log(res);
					//console.log(res.statusCode ,res.body);
					//res.statusCode.should.be.an('array');
					expect(res.statusCode).to.be.equal(200);	
					expect(res.body).to.be.an('array');
					expect(res.body)
						.all.have.property('name')
						//.to.be.an('string');


					done();
				});
		});
		it('test de comportamento 2', function() {

		});
	});
});