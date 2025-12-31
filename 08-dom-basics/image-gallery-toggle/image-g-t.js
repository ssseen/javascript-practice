var bigPic = document.querySelector('#cup'); // 큰 이미지 가져옴
var smallPics = document.querySelectorAll(".small"); // 작은 이미지들 가져옴

for (var i=0; i<smallPics.length; i++) { // 노드 리스트의 각 요소에 접근
   smallPics[i].onclick = showBig; // 요소 누르면 showBig() 함수 실행
}

function showBig() {
   var newPic = this.src; // 클릭 이벤트가 발생한 것의 src 속성을 가져옴
   bigPic.setAttribute("src", newPic); // newPic의 값을 큰 이미지의 src 속성에 할당
}

var isOpen = false;
var cup = document.querySelector("#cup");  
var smallPics = document.querySelectorAll(".small");  

for(i=0; i<smallPics.length; i++) {
	smallPics[i].addEventListener("click", function() {
		newPic = this.src;
		cup.setAttribute("src", newPic);
		});
	}

var view = document.querySelector('#view'); // id="view"인 요소 가져옴
view.addEventListener("click", function() { // view 눌렀을 때 실행할 함수 선언
	if(isOpen == false) {
		document.querySelector("#detail").style.display = "block"; // 상세 정보 화면에 표시
		view.innerText = "상세 설명 닫기" // 링크 내용 수정
		isOpen = true; // 표시 상태로 지정
	}
	else {
		document.querySelector("#detail").style.display = "none"; // 상세 정보 화면에서 감춤
		view.innerText = "상세 설명 보기" // 링크 내용 수정
		isOpen = false; // 감춰짐 상태로 지정
	}
});