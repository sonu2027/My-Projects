let inputTag = document.getElementById("inputTag");
let change = document.getElementById("upperOperator");
inputTag.addEventListener("click", zero);
function zero() {
  inputTag.value = "";
}
let count = 0;
let forchar=0
function enterNum(num) {
  if (count == 0) {
    inputTag.value = "";
    count = 1;
  }
  inputTag.value = inputTag.value + num;
  count = 1;
  change.innerText = "C";
  forchar=1
}
function dot() {
  if (count == 0) {
    inputTag.value = "";
    count = 1;
  }
  if (count<2 && forchar==1) {
    inputTag.value = inputTag.value + ".";
    count = 2;
  }
}
function c() {
  inputTag.value = "0";
  count = 0;
  change.innerText = "AC";
}
function ce() {
  if (inputTag.value.length == 1) {
    inputTag.value = "0";
    change.innerText = "AC";
  } else {
    let newInputValue = "";
    let inputValue = Array.from(inputTag.value);
    for (let i = 0; i < inputValue.length - 1; i++) {
      newInputValue = newInputValue + inputValue[i];
    }
    inputTag.value = newInputValue;
  }
}
let charis=""
function operation(char) {
  if(charis!=char && forchar==1){
    inputTag.value = inputTag.value + char;
    forchar=0
  }
  charis=char
}
// 123+123+123
function ans() {
  let arr = Array.from(inputTag.value);
  console.log(arr);
  let arrnum = [];
  let arropr = [];
  let arroprnum = "";
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "+" ||
      arr[i] == "-" ||
      arr[i] == "x" ||
      arr[i] == "/" ||
      arr[i] == "%" ||
      arr[i] == "^"
    ) {
      arrnum.push(arroprnum);
      arroprnum = "";
      arropr.push(arr[i]);
    } else {
      // arrnum.push(arr[i]);
      arroprnum = arroprnum + arr[i];
    }
  }
  arrnum.push(arroprnum);
  arroprnum = "";
  console.log(arrnum);
  console.log(arropr);
  let answer = "";
  let num1 = arrnum[0];
  for (let i = 0; i < arrnum.length - 1; i++) {
    let num2 = arrnum[i + 1];
    switch (arropr[i]) {
      case "+":
        answer = Number(num1) + Number(num2);
        num1 = answer; //[9, 8, 7, 13, 1] ["+", "-", "-", "+"]
        continue;
      case "-":
        answer = Number(num1) - Number(num2);
        num1 = answer;
        continue;
      case "x":
        answer = Number(num1) * Number(num2);
        num1 = answer;
        continue;
      case "/":
        answer = Number(num1) / Number(num2);
        num1 = answer;
        continue;
      case "%":
        answer =
          Number(num1) -
          Number(num2) * Number.parseInt(Number(num1) / Number(num2));
        num1 = answer;
        continue
      case "^":
        answer=1
        for(let j=0; j<Number(num2); j++){
          answer=answer*Number(num1)
        }
        num1 = answer;
        continue
      default:
        continue;
    }
  }
  inputTag.value = num1;
  charis=""
}
