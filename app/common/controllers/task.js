'use strict';

angular.module('Jiragation.task', ['ngRoute','timer','appFilters'])

.controller('taskController', ['$scope', '$http', '$currentUser', '$q', '$myAccounts', '$rootScope', function($scope, $http, $currentUser, $q , $myAccounts, $rootScope) {

	$scope.isActive=false;
	$scope.timerStarted=false;
	$scope.taskFilterText = ''
	function reset_form(comment_form){
		if(comment_form){
			comment_form.$setPristine();
			comment_form.$setUntouched();
		}
	}

	function timerDataToUnix(data) {
		var msPsec = 1000;
		var secPmin = 60;
		var minPhr = 60;
		var hrPday = 24;
		// + msPsec*data.seconds + msPsec*secPmin*data.minutes + msPsec*secPmin*minPhr*data.hours + msPsec*secPmin*minPhr*hrPday *data.days;
		return data.millis 
	}

	function comment_preprocess(comments) {
		var res = [];
 		var deferred = $q.defer();

 		comments.forEach(function(comment, key){
			var comment_push = comment;
			comment_push.isCurrentUser = false;
			if($currentUser.user_accounts_email.indexOf(comment.author.emailAddress) != -1 ){
				comment_push.isCurrentUser = true;
			}
	 		res.push(comment_push);
			deferred.resolve(res);
			
 		})
		return deferred.promise;
	}

	function get_comments(acct){
		$myAccounts.then(function(accountService){
			
			var account = accountService.user_accounts[acct.accountId];
			var data_load = {
				issueId: acct.id,
				acct: account
			}
		
			// get comments // GET /rest/api/2/issue/{issueIdOrKey}/comment
			$http({
				method: 'GET',
				url: '/jira/task_comments',
				params: data_load
			}).then(function successCallback(response){
				// pass in comment array for preprocessing
				comment_preprocess(response.data.comments).then(function(comments){
					// console.log(comments)
					$scope.comment_limit_end = comments.length-$scope.comment_limit;

					if(comments){
						$scope.task_comments=comments;					
					}

					$scope.viewAllComments = function(){
						$scope.comment_limit = comments.length;
						$scope.comment_limit_end = 0;
						$scope.non_visible_tasks = comments.length - $scope.comment_limit;
						console.log($scope.comment_limit);
					}
					
					if(comments.length > $scope.comment_limit){
						$scope.non_visible_tasks = comments.length - $scope.comment_limit;
					}
				});
			});
		});
	}


	$scope.taskLink = function(){	
	}

	$scope.getTaskTime = function(){
		if($scope.task.key){
			// var taskID = ;
			$http({
				method:  'GET',
				url: 	 '/task/getTaskTime',
				params:  { task_id: $scope.task.key},
				headers: {'Content-Type': 'application/json'}

			}).then(function successCallback(res){		
				if(res.data.logged_time > 0 ) $scope.timeLogged = res.data.logged_time;
			}, function errorCallback(res){
				console.log(res);
			});	
		}
	}
	
	$scope.stateLog = function(){
		console.log('Timer started:'+$scope.timerStarted);
		console.log('Active state:'+$scope.isActive);
	}

	$scope.timerToggle = function(){

		if(!$scope.timerStarted){
			$scope.$broadcast('timer-start');
			$scope.timerStarted=true;
			$scope.isActive=true;
			$scope.getTaskTime();
		}else{
			$scope.$broadcast('timer-stop');
			$scope.timerStarted=false;
			$scope.isActive=false;
			$scope.getTaskTime();
		}
	}
	// Toggle active task		
	$scope.updateRightView = function(acct) {
	
		$scope.comment_limit = 6;
		$scope.currentUser = $currentUser.user_accounts;
		
		get_comments(acct)
	}
	// REQUIRES ROBUST WAY TO OBTAIN TASK SPECIFIC JITA ACCOUNT 
	$scope.addComment = function(task, data, form) {
		$myAccounts.then(function(accountService){
			$scope.commentButtonDissabled=true;
			var account = accountService.user_accounts[task.accountId];
			var payload = {
				issueId: task.id,
				acct: JSON.stringify(account),
				body: data
			}

			$http({
				rejectUnauthorized: false,
				method: 'GET',
				url: '/jira/add_comments',
				params: payload
			}).then(function successCallback(response){
				$scope.commentButtonDissabled=false;

				get_comments(task);

				$scope.add_comment={};
				form.$setPristine();
				form.$setUntouched();
			});
		});
	}

	$scope.$on('timer-stopped', function (event, logged_time){
		console.log($scope.task.self.split('://')[1].split('/rest/api/')[0])
		var date = new Date();
		var current_date = date.getTime();
			console.log(current_date);
		var payload = {
			account_url: $scope.task.self.split('://')[1].split('/rest/api/')[0],
			task_id: $scope.task.key,
			end_time: new Date(current_date),
			start_time: new Date(current_date-timerDataToUnix(logged_time))
		}
		console.log(payload)
		
		// send data to databse
		$http({
			method: 'POST',
			url: 	'/task/trackTime',
			data: 	JSON.stringify(payload),
			headers: {'Content-Type': 'application/json'}

		}).then(function successCallback(res){
			$scope.usrAccountData = res.data;

		}, function errorCallback(err){
			console.log(err)
			console.log('Warning Will Robinson');
		});
	});
	

	$scope.getTaskTime();
	$scope.add_comment={};
	
}]);