var slide = document.querySelectorAll("#container > img"); // 이미지들 저장한 배열
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var current = 0; // 이미지 표시할 위치

showSlide(current);

function showSlide(n) {
   for (var i=0; i<slide.length; i++) { // slide 배열 처음부터 끝까지
      slide[i].style.display = "none"; // 모든 이미지 숨기기
   }
   slide[n].style.display = "block"; // n번째 이미지 표시
}

function backI() {
   if (current > 0) current -= 1; // 현재가 첫번째가 아니면, -1 위치로
   else current = slide.length -1; // 현재가 첫번째면, 마지막으로
   showSlide(current);
}

function nextI() {
   if (current == slide.length - 1) current = 0; // 현재가 마지막이면, 첫번째로
   else current += 1; // 현재가 마지막이 아니면, +1 위치로
   showSlide(current);
}