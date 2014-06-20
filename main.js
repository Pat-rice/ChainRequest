var requestHandler = require('./requestHandler');
var ask = requestHandler.askQuestion;
var ans = requestHandler.giveAnswer;

/* 
  Chain request handlers 
  Ask 10 questions and give answers
*/
requestHandler.begin()
//1
.then(ask)
.then(ans)
//2
.then(ask)
.then(ans)
//3
.then(ask)
.then(ans)
//4
.then(ask)
.then(ans)
//5
.then(ask)
.then(ans)
//6
.then(ask)
.then(ans)
//7
.then(ask)
.then(ans)
//8
.then(ask)
.then(ans)
//9
.then(ask)
.then(ans)
//10
.then(ask)
.then(ans);