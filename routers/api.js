'use strict';

let Router=require('express').Router;
let router= new Router();
let controllers = require('../controllers');
let bodyParser = require('body-parser');

let multer = require('multer')({dest:'./uploads'});

router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());
router.use(multer.array());

//middleware para id
router.param('id', function(req,res,next,value){
	//value = valor do id

	//se parametro é valido next*()
});

router.param('authType', function(req,res,next,value){
	let values= [ 'user', 'adminuser'];
	if values(.indexOf(value)===-1){
		return res.status(404);
	}
	next();

})

router
	.route('/auth/:authType')
	.post(api.auth.local);

router 
	.route('/categories/:id')
	.get(controllers.categories.get)
	.put(controllers.categories.update)
	.delete(controllers.categories.delete)

router
	.route('/categories')
	.get(controllers.categories.list)
	.post(controllers.categories.create)

router
	.route('/images')
	.post(controllers.images.create)
	
/*router
	.route('/images')
	.get(controllers.images.list)
	.post(controllers.images.create)


router
	.route('users:id')
	.get(controllers.users.get)
	.put(controllers.users.update)
	.delete(controllers.users.delete)
*/



module.exports=router;
