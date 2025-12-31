var r = prompt("원의 반지름은? (cm)"); //r은 입력값 변수

var circle1 = new Circle(r); //circle1은 완성된걸 저장하는 변수, Circle은 원 객체를 만드는 함수

function Circle(r1) { // r1은 매개변수
   this.r1 = r1; // 이 원 객체에 전달받은 r1 저장해라

   this.dul = function() { // Circle이라는 객체의 dul 구하는 이건 함수임 무슨 함수냐면~
      return Math.round(Math.PI * this.r1 * 2); // 계산한 값을 나중에 반환하기 위해
   };

   this.nul = function() {
      return Math.round(Math.PI * Math.pow(this.r1, 2));
   };
}

document.write("반지름이 " + r + "cm일 때<br>");
document.write("원의 둘레 : 약 " + circle1.dul() + "cm<br>"); // ()를 붙여야 함수가 실행되고 그값을 반환함
document.write("원의 넓이 : 약 " + circle1.nul() + "cm<sup>2</sup>");