'use strict';

angular
.module('Jiragation.taskList', ['ngRoute','timer','appFilters'])
.controller('accountsController', ['$scope', '$http', '$q', '$myAccounts', '$mdMedia', '$mdDialog', '$rootScope', function($scope, $http, $q, $myAccounts, $mdMedia, $mdDialog, $rootScope) {

	// ---------------------------
	// This should be a directive
	$('img.svg').each(function(){
	    var $img = $(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    $.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = $(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Replace image with new SVG
	        $img.replaceWith($svg);

	    }, 'xml');
	});    
	// ---------------------------

	$scope.isActive = false;
	$scope.JiraAccounts;

	// Task Status Filters
	$scope.taskStatuses = [
		{	"name": 	"Open",
			"isActive": true},
		{	"name": 	"Resolved",
			"isActive": false},
		{	"name": 	"Closed",
			"isActive": false},
		{	"name": 	"To Do",
			"isActive": true},
		{	"name": 	"Reopened",
			"isActive": true},
		{	"name": 	"In Progress",
			"isActive": true},
		{	"name": 	"Done",
			"isActive": false}
	];

	// sort list by predicate
	$scope.predicate = 'task.fields.created';
	$scope.predicate = 'task.key'
	$scope.reverse = true;
	
	$scope.activeTask=[];
		
  // --------------------------------------------- //
  //            Jira Related functions             //
  // --------------------------------------------- //
	
	// Toggle active task		
	var taskNumber = 0;

	$scope.fetching_tasks = false;

	function resetActiveTasks(){
		
		$scope.allTimerPaused = false;
	}

	function modify_task_list(taskList) {
		var res = []
 		var deferred = $q.defer();

		taskList.forEach(function(task, key){	
			
			// convert created date to unix time
			task.fields.created = parseInt(Date.parse(task.fields.created)); 


			$myAccounts.then(function(accountService){ 
				// console.log(accountService);
				task.accountId = accountService.getUrlId(task.self);
			});

			// push data
			res.push(task);
			deferred.resolve(res);

		});

		return deferred.promise;
	}

	$scope.addSettings = function(ev) {
		var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
		
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'common/account/new_settings.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
			fullscreen: useFullScreen
		}).then(function(answer) {

		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});

		$scope.$watch(function() {
			return $mdMedia('xs') || $mdMedia('sm');
		}, function(wantsFullScreen) {
			$scope.customFullscreen = (wantsFullScreen === true);
		});
		
		function DialogController($scope, $mdDialog) {
			$scope.hide = function() {
				$mdDialog.hide();
			};
			$scope.cancel = function() {
				$mdDialog.cancel();
			};
			$scope.save = function(answer) {
				$mdDialog.hide(answer);
			};
		}
    };

	$scope.getJiraTasks = function(){

		// Fetch Jira Data`
		$scope.fetching_tasks = true;
		
		$http({
			method: 'GET',
			url: '/account/fetch_accounts'
		
		}).then(function successCallback(response){
			$scope.JiraAccounts = response.data;
			if($scope.JiraAccounts){

				$http({
					method: 'GET',
					url: '/jira/jira_accounts'
				
				}).then(function successCallback(res){
					delete $scope.jiraTaskListError
					$scope.fetching_tasks = false;

					modify_task_list(
						res.data
					).then(function(response){		
						$scope.taskList = response;
						console.log($scope.taskList);
					});

				}, function errorCallback(res){
					$scope.jiraTaskListError={
						messsage:res.data
					};
					$scope.fetching_tasks = false;
				});

			} else {
				$scope.addSettings(); 
			}

		}, function errorCallback(response){
			
			$scope.jiraTaskListError = {
				message:response.data,
				noAccounts:false
			};
			
			if(response.data = 'no-accounts'){
				$scope.jiraTaskListError.noAccounts=true;
			}
			
			$scope.fetching_tasks = false;
		
		});
	}

	// Task Status Filter Toggle
	$scope.changeStatus = function(status){
		// console.log($scope.taskStatuses);
		for(var i=0; i<$scope.taskStatuses.length; i++){
			// console.log($scope.taskStatuses[i]);
			if(status == $scope.taskStatuses[i].name){
				if($scope.taskStatuses[i].isActive === false){
					$scope.taskStatuses[i].isActive = true;
				}else{
					$scope.taskStatuses[i].isActive =false;
				}		
			}
		}	
	};

	
	// Return Task Url
	$scope.taskUrl = function(taskKey, taskUrl) {
		return taskUrl.substring(0,taskUrl.indexOf('/rest/'))+'/browse/'+taskKey;
	}


	$scope.order = function(predicate) {
		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
		$scope.predicate = predicate;
	};
	
	$rootScope.$on('searchTextChange', function(event, newvalue){
		$scope.taskFilterText = newvalue;
	});

	$scope.getJiraTasks();

}]).directive('taskBar', function(){
	return {
	    link: function(scope, element, attr) {
	    	var scroll = angular.element('#main');
	    	var navHeight = angular.element('headernav')[0].offsetHeight+10;

	    	scroll.on('DOMContentLoaded load resize scroll',function(){
	    		if(attr.isactive == "true"){

	    			var active_bars = element.parent().parent().find('task-bar.select-active');

	    			if(element.parent().offset().top - navHeight < 0){
	    				element.parent().css({paddingTop: element[0].offsetHeight+10});
	    				element.css({top:(navHeight-10)});
	    				element.addClass("sticky");
	    			} 

	    			if(element.parent().offset().top - navHeight +10 > 0) {
	    				element.parent().css({paddingTop: '0'});
	    				element.removeClass("sticky");
	    			}

					} else {
						element.removeClass("sticky")
						element.parent().css({paddingTop: '0'});
		    				
					}
	    	});
	    },
	}
});;