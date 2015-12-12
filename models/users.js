'use strict';

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;

let schema=new Schema({
	username: {type:String, required:true,unique:true},
	password: {type:String, required:true},
	active: {type:Boolean, required:true},
	//tag:{type:String, required:true,unique:true},
	//createdAt: {type:Date, set: lero},  //set -> para executar funcao no insert 
	//createdBy: {type: String, required:true},
	createdAt: {type:Date,set:Date.now}
});


module.exports=mongoose.model('users', schema); //primeiro parametro é o nome da collection