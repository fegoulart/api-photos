'use strict';

let Categories = require('../models/').categories;

module.exports = {
	list: list,
	create: create,
	get: get,
	update: update,
	delete: del
}


function list(req,res){
	Categories
		.find({} , '-__v')
		.then((data)=>res.json(data))
}

function create(req,res) {
	let categories=new Categories(req.body);
	categories
		.save()
		.then(function(status) {
			//console.log(status);
			res
			.status(201)
			.json({
				message:'created'
			});

 		},function(err) {
		//console.log(err);
		res.status(400).json({
			message: 'algo errado'
			});

		});
}

function get(req,res) {
	Categories
		.findById(req.params.id)
		.then(function(category) {
			res.json(category);
		});
}

function update(req,res) {
	
	//console.log(req.body);
	let message = 'No content';
	if (req.body==null || req.body==undefine) {
		res.status(204);
	}else {

	}
	res.json({message: message});
}

function del(req,res) {
	//console.log('entrou no del');
	 
		Categories
			.findByIdAndRemove(req.params.id, function(err, data) {
				//console.log(data);
				if (err || !data) {
					return res.status(401).json({
						message: 'Error on Deletion'
					})
				}
				res.status(200);
				res.json({message:'Deleted'});		
			});
}

