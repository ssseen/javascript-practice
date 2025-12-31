function openPop() {
   var newWin = window.open("current.html", "", "width=300, height=50");
   if (newWin == null) {
      alert("팝업 차단을 풀고 다시 시도하십시오.");
   }
}

window.onload = openPop;