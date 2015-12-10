'use strict';

let Router=require('express').Router;
let router= new Router();
let controller = require('../controllers');
let bodyParser = require('body-parser');

let multer = require('multer')({dest:'./uploads'});

router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());
router.use(multer.array));

router
	.route('/photos')
	.get(controllers.users.list)
	.post(controllers.users.create)

/*router
	.route('users:id')
	.get(controllers.users.get)
	.put(controllers.users.update)
	.delete(controllers.users.delete)
*/
module.exports=router;
