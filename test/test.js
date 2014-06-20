var assert = require('assert');

var util = require('../util');


describe('Util', function(){

   describe('#parseUserId()', function(){
       it('should parse uid in response body', function(){
			var s = 'Hello patrice!\nGET the first question from /user/1079/question';
			var uid = util.parseUserId(s);
		  	assert.equal(uid, '1079');
		  	assert.equal(isNaN(parseInt(uid)), false);
       });
       it('should not parse uid in malformed response body', function(){
			var s = 'Hello patrice!\nGET the first question from /user1079/question';
			var uid = util.parseUserId(s);
		  	assert.equal(isNaN(parseInt(uid)), true);
       });
   });

   describe('#parseQuestion()', function(){
       it('should parse question and do multiply operation', function(){
			var s = 'What is 23 times 59?';
			var ans = util.parseQuestion(s);
		  	assert.equal(ans, '1357');
       });
       it('should parse question and do plus operation', function(){
			var s = 'What is 93 plus 97?';
			var ans = util.parseQuestion(s);
		  	assert.equal(ans, '190');
       });
       it('should parse question and do minus operation', function(){
			var s = 'What is 29 minus 33?';
			var ans = util.parseQuestion(s);
		  	assert.equal(ans, '-4');
       });
       it('should return undefined', function(){
			var s = 'What is 29 divided by 33?';
			var ans = util.parseQuestion(s);
		  	assert.equal(ans, undefined);
       });
   });
});