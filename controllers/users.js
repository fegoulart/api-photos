'use strict';

//let Photos = require('../models/').photos;

module.exports = {
	list: list,
	create: create,
	get: get,
	update: update,
	delete: del
}

/*function filterByPermission(array){
	return processData;
}*/

function list(req,res){
	Photos
		.find({} , '-__v'
		.then((data)=>res.json(data))
}

function create(req,res) {
	let user=new Users(req.body);
	user
		.save()
		.then(function(status) {
			console.log(status);
			res
			.status(201)
			.json({
				message:'created'
			});

 		},function(err) {
		console.log(err);
		res.status(400).json({
			message: 'algo errado'
			});

		});
}


function get(req,res) {
	Users
		.findById(req.params.id)
		.then(function(user) {
			res.json(user);
		});
}

function update(req,res) {
	console.log(req.body);
	if (req.body==null || req.body==undefine) {
		res.status(204);
	}
	res.json({message:'No content'});
}

function del(req,res) {
	res.status(400);
	res.json({message:'Not found'});
}

