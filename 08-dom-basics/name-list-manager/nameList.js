function newRegister() {
   var newP = document.createElement("p"); // 새 p 요소 만들기
   var userName = document.querySelector("#userName"); // 텍스트 필드 내용 가져오기
   var newText = document.createTextNode(userName.value); // 새 텍스트 노드 만들기
   newP.appendChild(newText); // newText 노드를 newP 노드의 자식 노드로 연결

   var delBttn = document.createElement("span"); // 새 span 요소 만들기
   var delText = document.createTextNode("X"); // 새 텍스트 노드 만들기
   delBttn.setAttribute("class", "del"); // 버튼에 class 속성 설정하기
   delBttn.appendChild(delText); // 텍스트 노드를 button 요소의 자식 요소로 추가하기
   newP.appendChild(delBttn); // del 버튼을 p 요소의 자식으로 추가하기

   var nameList = document.querySelector("#nameList"); // nameList 가져오기
   nameList.insertBefore(newP, nameList.childNodes[0]); // p 요소를 #nameList 맨 앞에 추가하기
   // nameList.appendChild(newP); // newP 노드를 nameList 노드의 자식 노드로 연결
   userName.value = ""; // 다른 이름 입력할 수 있도록 텍스트 필드 비우기

   var removeBttns = document.querySelectorAll(".del");

   for (var i=0; i<removeBttns.length; i++) { // removeBttns에 있는 요소 전체 반복
      removeBttns[i].addEventListener("click", function() {
         if (this.parentNode.parentNode) // 현재 노드의 부모노드의 보모노드가 있을 경우 실행
            this.parentNode.parentNode.removeChild(this.parentNode); // 현재노드의 부모노드의 부모노드를 찾아 현재노드의 부모노드 삭제
      });
   }
}