var myText = document.querySelector("#myText"); // mytext 가져오기
myText.addEventListener("click", function() { // myText 누르면 함수 실행
   this.style.fontSize = "20px";
	this.style.color = "blue";
	this.style.backgroundColor = "#ccc";
})