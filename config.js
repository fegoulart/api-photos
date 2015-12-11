'use strict';

let config = {
		development:  {
			db: {
				host:'localhost',
				port:27017,
				name:'test_photo_application'
			},
			secret: {
				'QWEasdafeqafb!!!244234sadlaz'
			},
			token: {
				expiresIn: '8h'
			}
		},
		production: {
			db : {
				host:'localhost',
				port: 27017,
				name: 'photo_application'
			},
			secret:{
				'rtqiuqrbwiADSIUGF@#!#!13134'
			},
			token: {
				expiresIn: '1800000' //30 minutos 
			}
		}
}



//se nao for passado o parametro NODE_ENV, assume development
let env = process.env.NODE_ENV || 'development';

module.exports = config[env];