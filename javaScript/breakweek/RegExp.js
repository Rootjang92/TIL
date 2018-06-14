// http로 시작하는지 검사.
var url = 'http://example.com';
var regexr = /^http/;
console.log(regexr.test(url));

// 'html'로 끝나는지 검사.
var fileName = 'index.html';
var regexr = /html$/;
console.log(regexr.test(fileName));

// 숫자인지 검사.
var targetStr = '12345';
var regexr = /^\d+$/;
console.log(regexr.test(targetStr));

// 하나 이상의 공백으로 시작하는지 검사.

var targetStr = ' Hi!';
var regexr = /^[\s]+/;
console.log(regexr.test(targetStr));

// 아이디로 사용 가능한지 검사한다. (영문자, 숫자만 허용, 4~10자리)
var id = 'abc123';
var regexr = /^[A-Za-z0-9]{4,10}$/
console.log(regexr.test(id));