function calcSum() {
  let num1 = document.getElementById("box1").value; //make variable for the first input
  let num2 = document.getElementById("box2").value; //make variable for the second input
  let sum = Number(num1) + Number(num2); //make third variable that is the result of addition
  document.getElementById("result").value = sum; //display result with the third variable
}
