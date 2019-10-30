var cel = document.getElementsByClassName("Celsius");
var far = document.getElementsByClassName("Fahrenheit");
var kel = document.getElementsByClassName("Kelvin");

function c2f() {
  far.value= (1.8*cel.value) + 32;
  alert(cel.value + " Celsius is equal to " + far.value+ "Fahrenheit")
}