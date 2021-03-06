var express 			= require('express');
var jira				= express.Router();
var Accounts 			= require('../models/accounts');
var fs 					= require('fs');
const http 				= require('http');
const https 			= require('https');
const querystring 		= require('querystring');

function taskListToArray(array){
	var res =[];
	array.forEach(function(taskList){
		res = res.concat(taskList.issues);
	});
	return res;
};

jira.get('/add_comments', function(req,res) {
	var data = req.query;
	var account = JSON.parse(data.acct);
	var post_data = '{"body":"'+data.body+'"}';

	var options = {
		method: 'POST',
		host: account.url,
		path: '/rest/api/2/issue/'+ data.issueId +'/comment',
		headers:{
			'Content-Type':  'application/json',
			'Content-Length': Buffer.byteLength(post_data),
			'Authorization': 'Basic '+ new Buffer( account.user_name + ':' + account.password ).toString('base64')
		}
	};

 	if(account.protocal === "http"){

 		var post_req = http.request(options, function(response) {
			data='';
			response.setEncoding('utf8')
			response.on('data', function(d) {
				data += d
			});
			response.on('end', function(d) {
				res.send(data)
			});
		}).on('error', (error) => {
			console.error(error);	
		});

 	} else {

		var post_req = https.request(options, function(response) {	
			data='';
			response.setEncoding('utf8')
			response.on('data', function(d) {
				data += d
			});
			response.on('end', function(d) {
				res.send(data)
			});
		}).on('error', (error) => {
			console.error(error);	
		});
	 		
 	}

 	post_req.write(post_data);
 	post_req.end();
});

jira.get('/task_comments', function(req,res) {
	var data = req.query;
	var account = JSON.parse(data.acct);
	var options = {
		rejectUnauthorized: false,
		method: 'GET',
		host: account.url,
		path: '/rest/api/2/issue/'+ data.issueId +'/comment',
		headers:{
			'Content-Type':  'application/json',
			'Authorization': 'Basic '+ new Buffer( account.user_name + ':' + account.password ).toString('base64')
		}
	};

 	if(account.protocal === "http"){

 		http.get(options, function(response) {
			
			data='';
			response.setEncoding('utf8')
		  response.on('data', function(d) {
		    data += d
		  })
		  response.on('end', function(d) {
		    res.send(data)
		  })
		}).on('error', (error) => {
			console.error(error);	
		});

 	} else {

		https.get(options, function(response) {	
			// console.log(response);
			data='';
			response.setEncoding('utf8')
		  response.on('data', function(d) {
		    data += d
		  })
		  response.on('end', function(d) {
		    res.send(data)
		  })
		  // res.pipe(response);
		}).on('error', (error) => {
			console.error(error);	
		});
	 		
 	}
});

jira.get('/jira_accounts', function(req, res) { 
	
	var user_accounts = [];

	Accounts.getAccounts(req, function(accts){
		// console.log('routes - accout');
		var tasks_list = [];
		var loop_count = 0;
		user_accounts = accts;

		function get_jira_accounts(r, acct){
			var tasks = [];
    
		    r.on('data', function(d) {
		    	tasks.push(d);
		    }).on('end', function() {
				tasks_list.push(JSON.parse(Buffer.concat(tasks).toString()));
				// console.log(tasks_list);
				loop_count=loop_count+1;
				// console.log('http request complete');
				if(loop_count == Object.keys(user_accounts).length){
	   				// console.log(taskListToArray(tasks_list,acct));
	   				console.log('Return tasks');
	   				res.json(taskListToArray(tasks_list, acct));
	   			}
			});
	    }

		user_accounts.forEach(function(acct) { 		/* Loop Through accounts (user_accounts as acct) */

			var options = {
				rejectUnauthorized: false,
				method: 'GET',
				host: acct.url,
				path: '/rest/api/latest/search?jql=assignee='+ acct.user_name + '+order+by+duedate',
				headers:{
					'Content-Type':  'application/json',
					'Authorization': 'Basic '+ new Buffer( acct.user_name + ':' + acct.password ).toString('base64')
				}
			};
			
		   	if(acct.protocal === "http"){
		   		http.get(options, function(response) {
	   				if(parseInt(response.statusCode) == 200){
			  			get_jira_accounts(response, acct);		   					
	   				}
	   				else{
	   					console.log(response);
	   					res.status(parseInt(response.statusCode)).send("internal error");
	   				}
				}).on('error', (error) => {
					console.error(error);	
				});

		   	} else {
				https.get(options, function(response) {
	   				if(response.statusCode == 200){
						get_jira_accounts(response, acct);
					}
	   				else{
	   					console.log(response);
	   					res.status(response.statusCode).send("internal error");
	   				}
				}).on('error', (error) => {
					console.error(error);	
				});
			   		
		   	}

		}, function(err) {
		    
		    console.log('iterating done');
		
		}); /* end loop */

	});
});

jira.post('/logTime', function(req,res){
	Accounts.getAccountsById(req, function(account){


		post_data = {
				timeSpentSeconds: req.body.time*60,
				// timeSpent: req.body.time+'m',
				// visibility: {
			 //        type: 'group',
			 //        value: "jira-developers"
			 //    },
				started: req.body.date,
				comment: req.body.comment
		}
		
		// console.log(post_data);
		post_data = JSON.stringify(post_data)
		// console.log(account);
		// console.log(post_data);
		var options = {
			rejectUnauthorized: false,
			method: "POST",
			host:account.url,
			path: "/rest/api/2/issue/"+ req.body.task_id+"/worklog",
			headers:{
				"Content-Type": "application/json",
				"Content-Length": Buffer.byteLength(post_data),
				"Authorization": "Basic "+ new Buffer( account.user_name + ":" + account.password ).toString('base64')
			}
		};
		// console.log(options);

	 	if(account.protocal == "http"){

	 		var post_req = http.request(options, function(response) {
				data='';
				// console.log(response);
				response.setEncoding('utf8')
				response.on('data', function(d) {
					data += d
				});
				response.on('end', function(d) {
					res.status(response.statusCode).send(data);
				});
			}).on('error', (error) => {
				console.error(error);	
			});

	 	} else {

			var post_req = https.request(options, function(response) {	
				data='';
				response.setEncoding('utf8')
				response.on('data', function(d) {
					// console.log(d)
					data += d
				});
				response.on('end', function(d) {
					res.status(response.statusCode).send(data);
				});
			}).on('error', (error) => {
				console.error(error);	
			});
		 		
	 	}
	 	post_req.write(post_data);
	 	post_req.end();
	});
});

module.exports.jira = jira;