function calcular(){
  var pes = document.getElementById("peso").value;
  var altura = document.getElementById("estatura").value;
  alert("Tu IMC es " + (pes/altura).toFixed(2));
}
