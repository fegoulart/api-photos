'use strict';

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;

let schema=new Schema({
	name: {type:String, required:true,unique:true},
	//tag:{type:String, required:true,unique:true},
	//createdAt: {type:Date, set: lero},  //set -> para executar funcao no insert 
	createdBy: {type: String, required:true},
	createdAt: {type:Date,set:Date.now}
});


module.exports=mongoose.model('categories', schema); //primeiro parametro é o nome da collection