var express 			= require('express');

var jira				= express.Router();

var Accounts 			= require('../models/accounts');

var fs 					= require('fs');

const http 				= require('http');

const https 			= require('https');

jira.get('/jira_accounts', function(req, res, next) { 
	
	var user_accounts = [];

	Accounts.getAccounts(function(accts){
		// console.log('routes - accout');
		var tasks_list = [];
		var loop_count = 0;
		user_accounts = accts;

		user_accounts.forEach(function(acct) { 		/* Loop Through accounts (user_accounts as acct) */

			var options = {
				method: 'GET',
				host: acct.url,
				path: '/rest/api/2/search?jql=assignee='+ acct.user_name + '+order+by+duedate',
				headers:{
					'Content-Type':  'application/json',
					'Authorization': 'Basic '+ new Buffer( acct.user_name + ':' + acct.password ).toString('base64')
				}
			};

	   		if(acct.protocal === "http"){
	   			http.get(options, function(r) {

				    // console.log("statusCode: ", res.statusCode);
				    // console.log("headers: ", res.headers);
				    var tasks = [];
				    
				    r.on('data', function(d) {
				    	tasks.push(d);
				    }).on('end', function() {
						
						tasks_list.push(Buffer.concat(tasks).toString());
						loop_count=loop_count+1;
						
						if(loop_count == Object.keys(user_accounts).length){
			   				console.log('Return tasks');
			   				// console.log(tasks_list);
			   				res.json(tasks_list);
			   			}
			   				res.json(tasks_list);

					});

				}).on('error', (e) => {
					console.error(e);	
				});
			}
	   // 		}else {
				// https.get(options, function(r) {

				//     // console.log("statusCode: ", res.statusCode);
				//     // console.log("headers: ", res.headers);
				//     var tasks = [];
				    
				//     r.on('data', function(d) {
				//     	tasks.push(d);
				//     }).on('end', function() {
						
				// 		tasks_list.push(Buffer.concat(tasks).toString());
				// 		loop_count=loop_count+1;
						
				// 		if(loop_count == Object.keys(user_accounts).length){
			 //   				console.log('Return tasks');
			 //   				// console.log(tasks_list);
			 //   				res.json(tasks_list);
			 //   			}

				// 	});

				// }).on('error', (e) => {
				// 	console.error(e);	
				// });
	   // 		}
	   			
			

		}, function(err) {
		    
		    console.log('iterating done');
		
		}); /* end loop */

	});

});


module.exports.jira = jira;