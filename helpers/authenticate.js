'use strict';


let jwt = require('jsonwebtoken');
let config = require('../config');
let express= require('express');
let app=express();

let authenticate = function(req,res,next){

	//console.log(req.body.token);
	//console.log(req.query.token);
	//console.log(req.headers);
	
	//console.log('Passou aqui');
// check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers.token; //['x-access-token'];

  //console.log(token);
  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }

}

module.exports=authenticate;