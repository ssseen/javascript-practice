var min, sec; // 분, 초 선언
var timer;

function startTimer() { // 시작 버튼 눌렀을 때
   min = document.querySelector("#startMin").value;
   if (min == "") min = 0; // min 값이 없으면 min=0
   sec = document.querySelector("#startSec").value;
   if (sec == "") sec = 0; //sec 값이 없으면 sec=0

   timer = setInterval(mTimer, 1000); // mTimer 함수를 1초마다 실행
}

function mTimer() {
   if (sec != 0) { // sec이 0이 아닐 때
      sec--;
      document.querySelector("#display").innerText = min + " 분 " + sec + " 초 남았습니다.";
   }
   else { // sec이 0일 때
      if (min != 0) { // sec이 0이고 min은 0이 아닐 때
         min--;
         sec = 59;
      }
      else { // sec, min 둘 다 0일 때
         clearTimer(timer);
         document.querySelector("#display").innerText = "타이머 종료"
      }
   }
}

function resetTimer() { // 리셋버튼 눌렀을 때 clearTimer 함수 실행
   clearTimer(timer);
}

function clearTimer() { // 그 clearTimer 함수는 이러하다
   clearInterval(timer); // timer 함수 실행 종료
   document.querySelector("#display").innerText = ""; // 빈칸 만들기
   document.querySelector("#startMin").value = ""; // min 값 지우기
   document.querySelector("#startSec").value = ""; // sec 값 지우기
}
   