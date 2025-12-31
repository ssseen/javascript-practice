var checkBttn = document.querySelectorAll(".check"); // class에 접근
for(i=0; i<checkBttn.length; i++) {
   checkBttn[i].addEventListener("click", function() {
      this.parentNode.style.color = "#ccc";
   });
}