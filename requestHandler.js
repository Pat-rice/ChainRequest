var request = require('request');
var q = require('q');
var config = require('./config/config');
var util = require('./util');

var requestHandler = {};

requestHandler.begin = function() {

  var deferred = q.defer();

  request.post(config.host + config.path.begin, {form:{name:config.name}}, function(err, httpResponse, body) {
    //Extract user id
    console.log(body);
    var uid = util.parseUserId(body);
    deferred.resolve(uid);
  });

  return deferred.promise;
}

requestHandler.askQuestion = function(uid) {

	var path = config.path.question.replace('{uid}',uid);

	var deferred = q.defer();

	request.get(config.host + path, function(err, httpResponse, body) {
		console.log(body);
		var res = {};
		res.uid = uid;
		res.answer = util.parseQuestion(body);

		console.log(res.answer);
		deferred.resolve(res);

	});

  	return deferred.promise;
}


requestHandler.giveAnswer = function(res) {

	var path = config.path.answer.replace('{uid}', res.uid);

	var deferred = q.defer();

	request.post(config.host + path, {form:{answer:res.answer}}, function(err, httpResponse, body) {
		console.log(body);
		deferred.resolve(res.uid);
	});

  	return deferred.promise;
}


module.exports = requestHandler;