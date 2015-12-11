'use strict';

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;

let schema=new Schema({
	url: {type:String, required:true,unique:true},
	categories: [ {type:Object, required:true}],
	//createdAt: {type:Date, set: lero},  //set -> para executar funcao no insert 
	tags: [{type:Object}],
	createdBy:{type:String, required:true},
	createdAt:{type:Date,set:Date.now}
});


module.exports=mongoose.model('images', schema); //primeiro parametro é o nome da collection