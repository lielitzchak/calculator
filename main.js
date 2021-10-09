// const inputNum1 = document.getElementById("inputNum1");
// const inputNum2 = document.getElementById("inputNum2");
// const btnInput = document.getElementById("btnInput");
// const plusInput = document.getElementById("plus");
// const minInput = document.getElementById("min");
// const dublInput = document.getElementById("dubele");
// const divisionInput = document.getElementById("division");
// const numbers = document.getElementsByClassName("numbers");
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i].addEventListener("click", function () {
//     inputNum1.value += numbers[i].innerText;
//   });
// }

// plusInput.addEventListener("click", function () {
//   let sum = +inputNum1.value + +inputNum2.value;
//   console.log(sum);
// });

// minInput.addEventListener("click", function () {
//   let sum = +inputNum1.value - +inputNum2.value;
//   console.log(sum);
// });

// dublInput.addEventListener("click", function () {
//   let sum = +inputNum1.value * +inputNum2.value;
//   console.log(sum);
// });

// divisionInput.addEventListener("click", function () {
//   let sum = +inputNum1.value / +inputNum2.value;
//   console.log(sum);
// });

//! 04.10.2021

let cleanAll = document.getElementById("cleanAll");
let Solution = document.getElementById("Solution");
let opers = document.getElementsByClassName("oper");
let allResult = document.getElementById("allResult");
let num;
let operator;
let result;
// let shouldClear = false;
let Equal = document.getElementById("Equal");
let clean = document.getElementById("clean");
let btnNumbers = document.getElementsByClassName("numbers");

for (let i = 0; i < btnNumbers.length; i++) {
  btnNumbers[i].onclick = () => concat_number(btnNumbers[i].value);
}
for (let i = 0; i < opers.length; i++) {
  opers[i].onclick = () => {
    num = Number(Solution.innerText);
    operator = opers[i].value;
    // shouldClear = true;
    result = num + operator;
    Solution.innerText = result;
    // console.log(result);
    console.log(num);
  };
}
function concat_number(num) {
  // if (shouldClear == true) {
  // Solution.innerText = "";
  // shouldClear = false;
  // }
  console.log(num);
  Solution.innerText += num;
}

Equal.onclick = () => {
  // (allResult.innerText = `${result}`),
    cal(num, Number(Solution.innerText), operator);
  Solution.innerText = "";
};

function cal(num1, num2, op) {
  switch (op) {
    case "+":
      return (allResult.innerText = num1 + num2);

    case "-":
      return (allResult.innerText = num1 - num2);

    case "*":
      return (allResult.innerText = num1 * num2);

    case "/":
      return (allResult.innerText = num1 / num2);
  }
}

cleanAll.onclick = () => {
  num = 0;
  allResult.innerText = "";
  Solution.innerText = "";
};
clean.onclick = () => {
  Solution.innerText = Solution.innerText.substring(
    0,
    Solution.innerText.length - 1
  );
};
