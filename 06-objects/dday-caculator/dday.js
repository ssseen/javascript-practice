var now = new Date();
var firstDay = new Date("2022-09-01");
var toNow = now.getTime(); // 오늘 날짜를 밀리초로 바꿈
var toFirst = firstDay.getTime(); // 처음 만난 날을 밀리초로 바꿈
var passedTime = toNow - toFirst; // 빼기 밀리초값
var passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24)); // 밀리초 날짜로 변환(밀리초*초*분*시)
document.querySelector("#accent").innerText = passedDay + "일";

function clacDate(days) {
   var future = toFirst + days * (1000 * 60 * 60 * 24);
   var someday = new Date(future); // future값을 사용해 date객체의 인스턴스 만들기
   var year = someday.getFullYear();
   var month = someday.getMonth() + 1; // 0부터 시작이라
   var date = someday.getDate();
   
   document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
}

clacDate(100);
clacDate(200);
clacDate(365);
clacDate(500);