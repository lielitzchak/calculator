const inputNum1 = document.getElementById("inputNum1");
const inputNum2 = document.getElementById("inputNum2");
const btnInput = document.getElementById("btnInput");
const plusInput = document.getElementById("plus");
const minInput = document.getElementById("min");
const dublInput = document.getElementById("dubele");
const divisionInput = document.getElementById("division");
const numbers = document.getElementsByClassName("numbers");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    inputNum1.value += numbers[i].innerText;
  });
}

plusInput.addEventListener("click", function () {
  let sum = +inputNum1.value + +inputNum2.value;
  console.log(sum);
});

minInput.addEventListener("click", function () {
  let sum = +inputNum1.value - +inputNum2.value;
  console.log(sum);
});

dublInput.addEventListener("click", function () {
  let sum = +inputNum1.value * +inputNum2.value;
  console.log(sum);
});

divisionInput.addEventListener("click", function () {
  let sum = +inputNum1.value / +inputNum2.value;
  console.log(sum);
});
