// 날짜와 시간을 위한 built-in 객체.

// date생성자를 사용하여 날짜와 시간을 가지는 인스턴스를 생성한다.
// milliseconds, datestring, year, month
// new 연산자 없이 사용하면 date 객체를 반환하지 않고 문자열로 반환한다.

var d = new Date();
console.log(d);

var d = new Date(86400000);
console.log(d);

// dateString

var d = new Date('May 12, 2016 12:13:00');
console.log(d);

// Date method

var n = Date.now();
console.log(n);
// 현재시간을 밀리터리초로 반환한다.

var d = Date.parse('Jan 2, 1970 00:00:00 UTC');
console.log(d);
// 전달된 지정시간까지의 밀리터리초를 반환한다.

var d = Date.UTC(1970, 0, 2);
console.log(d);
// UTC 기점으로 매개변수로 전달된 지정 시간 까지의 밀리초를 숫자로 반환.

var today = new Date();
var year = today.getFullYear();
console.log(today);
console.log(year);
// 현재 년도 반환.

var today = new Date();
today.setFullYear(2000);
var year = today.getFullYear();
console.log(today);
console.log(year);
today.setFullYear(1900, 0, 1);
year = today.getFullYear();
console.log(today);
console.log(year);
// 해당 연도를 나타내는 4자리 숫자를 설정한다.

var today = new Date();
var time = today.getTime();
console.log(today);
console.log(time);
// 1970.1.1 ~ 현재까지 경과한 밀리초 반영.

var today = new Date();
var x = today.getTimezoneOffset() / 60;
console.log(today);
console.log(x);
// UTC와 지정 로케일 시간과의 차이를 분단위로 반환한다.

var d = new Date('1988/8/17/13:30');
console.log(d.toString());
console.log(d.toDateString());
// 문자열로 날짜를 반환한다.

(function printNow(){
  var today = new Date();
  var dayNames = ['(일요일)' , '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
  var day = dayNames[today.getDay()];
  var year = today.getFullYear(),
      month = today.getMonth() + 1,
      date = today.getDate(),
      hour = today.getHours(),
      minute = today.getMinutes(),
      second = today.getSeconds(),
      ampm = hour >= 12 ? 'PM' : 'AM';

      // 12
      hour = hour % 12;
      hour = hour ? hour : 12;

      // 10미만 분과 초를 2자리로 변경.
      minute = minute < 10 ? '0' + minute : minute;
      second = second < 10 ? '0' + second : second;

      var now = year + '년 ' + month + '월 ' + date + '일 ' + day + ' ' + hour + ':' + minute + ":" + second + '' + ampm;

      console.log(now);
      setTimeout(printNow, 1000);
}());