'use strict';

angular.module('appFilters',[])

.constant("moment", moment)

.filter('priorityF', function() {
  return function(input) {
  	var rageface_icon= 'img/rageface.png';
    var sup_son = 'img/supson.png';
    var low_icon = 'img/foreveralone.png';

  	switch(input.name){
      case 'Critical': 
      	return rageface_icon;
      	break;
      case 'Minor': 
        return low_icon;
        break;
      case 'Low': 
      	return low_icon;
      	break;
      default: 
        return input.iconUrl;
  	}
  };
})

.filter('statusF', function() {
  return function(input, taskList) {

    var output = [];
    var notAllowed = [];

    angular.forEach(taskList, function(status, key) {
      if(status.isActive != true){
        notAllowed.push(status.name);
      }
    });
    
    angular.forEach(input, function(task, key) {

      if(notAllowed.indexOf(task.fields.status.name) == -1){
         output.push(task);
      }
    });
    
    return output;
  };
})

.filter('readableDateF', function() {
  return function(input) {
    var dateObj = new Date(input);
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = dateObj.getDate();
    return monthNames[month] + ' ' + date +  ', ' + year;
    
  };
})

.filter('dateF', function() {
  return function(input) {
    var unixtime = input/1000;
    var dateObj = new Date(unixtime*1000);
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth();
    if(month<10){month='0'+month};
    // var monthWords = months[month];
    var date = dateObj.getDate();
    if(date<10){date='0'+date};
    var hour = dateObj.getHours();
    // var min = dateObj.getMinutes();
    // var sec = dateObj.getSeconds();
    var res = year + '.' + month + '.' + date + '.' + hour;
    // console.log(res);
    return res;
  };
})

.filter('returnTime', function() {
  return function(input) {    
    var hour = Math.floor(input/1000/60/60);
    var min = Math.floor((input-hour*60*60*1000)/1000/60);
    var sec = Math.floor((input-hour*60*60*1000-min*1000*60)/1000);
    if(hour>0){
      var res = hour+' hr '+min+' min';      
    }else if (min>0){
      var res = min+' min';      
    } else  {
      var res = "--";
    }
    // console.log(res);
    return res;
  };
});
