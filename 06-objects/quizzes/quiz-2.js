var r = prompt("원의 반지름은? (cm)");

function Circle(r) { // Circle(r)이라는 함수 정의
	var dul = Math.round(Math.PI * r * 2);
	var nul = Math.round(Math.PI * Math.pow(r, 2));

	document.write("반지름이 " + r + "cm일 때<br>");
	document.write("원의 둘레 : 약 " + dul + "cm<br>");
	document.write("원의 넓이 : 약 " + nul + "cm<sup>2</sup>");
}

Circle(r); // Circle(r)이라는 함수 실행