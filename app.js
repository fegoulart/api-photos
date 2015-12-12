'use strict';

let express= require('express');
let app=express();

let routers = require('./routers/');

let config = require('./config.js');



//app.use('/auth', routers.auth);

app.use(express.static('public'));

//console.log('app.js linha 16');

app.use('/api', routers.api);//middleware para mandar para routers.api tudo que comecar com /api

let mongoose = require('mongoose'); 

let urlDb=`mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(urlDb);

mongoose.connection.once('open', function() {
	app.listen(3000, ()=>console.log('> localhost:3000'));
});

mongoose.connection.on('error', function(err){
	console.log('database connection error');
});

module.exports=app;
