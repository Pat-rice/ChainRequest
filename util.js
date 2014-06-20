var util = {};

util.parseUserId = function(msg) {
	var regex = new RegExp('([^/]+)(?=/[^/]+/?$)');
	return regex.exec(msg)[0];
}

util.parseQuestion = function(msg) {
		
		var numbers = [];

		var b = msg.split(' ');
		for(var i=0; i<b.length; i++) {
		  if( !isNaN( parseInt(b[i]) ) ) {
		    numbers.push(parseInt(b[i]));
		  }
		}

		var answer = undefined;
		if (msg.indexOf('times') !== -1) {
		  answer = numbers[0] * numbers[1];
		} else if (msg.indexOf('minus') !== -1) {
		  answer = numbers[0] - numbers[1];
		} else if (msg.indexOf('plus') !== -1) {
		  answer = numbers[0] + numbers[1];
		}
		return answer;

}

module.exports = util;