var db 					= require('../init_db');
var model 				= require('./jiragation');
var Sequelize 			= db.Sequelize;
var sequelize 			= db.sequelize;

var TimeSheet = function() {

};

// Pull Time Sheet
TimeSheet.getTimeSheet = function(req, callback) {
	// console.log('model - accout');
	var queryString = "SELECT * FROM time_sheet ts WHERE ts.user_id ="+req.decoded.id;
	
	sequelize.query(queryString, { type: Sequelize.QueryTypes.SELECT }).then(function(results){
		callback(results);
		// console.log(results);
	}).catch(function(err){
		throw err;
	});

};

TimeSheet.logTaskTime = function(req, callback) {
	sequelize.transaction(function(t){
		return model.jiraAccounts.find({
			where:{
				url:req.body.account_url
			},
			transaction:t
		}).then(function(account){
			// console.log(req.decoded)
			return model.timeSheet.create({
				task_id: req.body.task_id,
				account_id: account.dataValues.id,
				start_time: req.body.start_time,
				end_time: req.body.end_time,
				user_id: req.decoded.id
			},{transaction:t}).then(function(results) {
				// console.log(results);
				return results;
			});
		});
	}).then(function(results){
		return callback(results);
	}).catch(function(error){
		console.log(error)
		return callback(error);
	});	
};

//pull time log for specific task_id
TimeSheet.getTaskTime = function(req, callback) {
	
	var queryString =  " SELECT ";
		queryString += " SUM(ts.end_time - ts.start_time) as logged_time ";
		queryString += " FROM time_sheet ts ";
		queryString += " WHERE ts.task_id = '" + req.query.task_id + "' ";
		queryString += " AND ts.start_time >= '"+req.query.start_time +"' ";
		queryString += " AND ts.start_time < '"+req.query.end_time +"' ";
		queryString += " AND ts.user_id="+req.decoded.id;
		// console.log(queryString,'\n');

	sequelize.query(queryString, { type: Sequelize.QueryTypes.SELECT }).then(function(results){
		callback(results);
		// console.log(results);
	}).catch(function(err){
  		// console.log(err);
  		throw err;
  	});
};

TimeSheet.getTrackedTime = function(req, callback) {
	// var earlier_Date =  new Date( res.earlier_time);
	// var later_Date  new Date ( res.later_time);
	var queryString  = " SELECT "
		queryString += " ts.task_id as task_id, ";
		queryString += " ts.start_time as start_time, ";
		queryString += " ts.end_time as end_time, ";
		queryString += " ts.account_id as account_id, ";
		queryString += " ac.user_name as user_name, ";
		queryString += " ac.url as url, ";
		queryString += " ac.account_email as account_email, ";
		queryString += " ac.protocal as protocal ";
		queryString += " FROM time_sheet ts ";
		queryString += " JOIN jira_accounts ac ON ac.id = ts.account_id"
		queryString += " WHERE ts.start_time >= '" + new Date(req.query.earlier_time).getTime() + "' ";
		queryString += " AND ts.start_time <= '" + new Date(req.query.later_time).getTime() + "' ";
		queryString += " AND ts.user_id ="+req.decoded.id;
	sequelize.query(queryString, { type: Sequelize.QueryTypes.SELECT }).then(function(results){
		callback(results);
		// console.log(results);
	}).catch(function(err){
  		// console.log(err);
  		throw err;
  	});
};


module.exports = TimeSheet;