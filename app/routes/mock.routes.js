var express = require('express');
var router = express.Router();


const mockController = require('../controllers').mocks;

module.exports = (app) => {
	app.get('/api',(req,res)=>res.status(200).send({
		message:"Welcome to the api!",
	}));
	router.route('/whatsapp/:phone/:text').get(mockController.callWhatsapp);
	router.route('/whatsappCb').post(mockController.callbackWhatsapp);
	app.use('/',router);
};
