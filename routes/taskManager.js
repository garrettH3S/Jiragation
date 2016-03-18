var express 			= require('express');

var taskManager			= express.Router();

var TimeSheet			= require('../models/time_sheet');

var fs 					= require('fs');

taskManager.post('/trackTime', function(req, res, next) {
	console.log(req.data); 
	console.log(res.data); 
	TimeSheet.logTaskTime(function(req, result) {
		res.send(result);		
	});
});

taskManager.post('/add_accounts',function(req,res,next) {
	var account = req.account;
	Accounts.setAccount(account, function(result) {
		// console.log('Account Set');
		res.send(result);		
	});
})

module.exports.taskManager = taskManager;