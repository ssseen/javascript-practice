var price = 24000;

var userch = document.querySelectorAll(".checkbx");
var total = document.querySelector("#total");
total.value = price + "원";

for (i=0; i<userch.length; i++) {
   userch[i].onclick = function() {
      if(this.checked == true) {
         price += parseInt(this.value);
      }
      else {
         price -= parseInt(this.value);
      }
      total.value = price + "원";
   }
}
