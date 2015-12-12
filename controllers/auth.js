'use strict';

let AuthController = {}; //objeto AuthController
let models = require('../models');
let config = require('../config');
let jwt = require('jsonwebtoken');
let encode = require('../helpers/encode.js');

//criar um model adminusers.js e outro users.js

AuthController.local = function(req, res) {
	//documentacao 
  /**
    * @api {POST} /auth/:authType local
    * @apiDescription Authentication user, or adminuser with local strategy
    * @apiName local
    * @apiGroup Auth
    * @apiPermission Public
    *
    * @apiParam {String=user,adminuser} authType authentication type
    * @apiParam {String} email email to authentication
    * @apiParam {String} password password to authentication
    */
  let password = encode(req.body.password);
  //console.log(password);

  //let Model = models[req.params.authType+'s'];
  let Model = models.users;


  Model
    .findOne({username: req.body.username, password: password, active: true})
    .then(function(user) {
      if (!user) {
        return res.status(401).json({
          message: 'authentication failed'
        });
      }
      user = user.toObject();
      delete user.password;

      res.json({
        id: user._id,
        token: jwt.sign(user, config.secret, config.token)
      });
    });
};

module.exports=AuthController;