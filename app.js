'use strict';

let express= require('express');
let app=express();

let routers = require('./routers/');

let config = require('./config.js');

app.use('/api', routers.api);

let mongoose = require('mongoose'); 

let urlDb=`mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(urlDb);

mongoose.connection.once('open', function() {
	app.listen(3000m ()=>console.log('> localhost:3000'));
}

mongoose.connection.on('error', function(err){
	console.log('database connection error');
});

module.exports=app;
