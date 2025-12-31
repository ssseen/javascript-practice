var userR = document.querySelector("#radius");
var start = document.querySelector("#start");

start.addEventListener("click", function() {
   document.querySelector("#round").value = Number(userR.value) * 2 * Math.PI;
   document.querySelector("#area").value = Math.pow(Number(userR.value), 2) * Math.PI;
});