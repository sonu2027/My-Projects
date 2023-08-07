let inputTag = document.getElementById("inputTag");
let change = document.getElementById("upperOperator");
inputTag.addEventListener("click", zero);
function zero() {
  inputTag.value = "";
}
let count = 0;
let forchar = 0;
function enterNum(num) {
  if (count == 0) {
    inputTag.value = "";
    count = 1;
  }
  inputTag.value = inputTag.value + num;
  count = 1;
  change.innerText = "C";
  charis = "";
  forchar = 1;
}
function dot() {
  if (count == 0) {
    inputTag.value = "";
    count = 1;
  }
  if (count < 2 && forchar == 1 ) {
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
  charis = "";
  forchar = 1;
}
let charis = "";
let operations=0
function operation(char) {
  if (charis != char && forchar == 1) {
    inputTag.value = inputTag.value + char;
    forchar = 0;
    operations=1
  }
  charis = char;
}
// 123+123+123
// function ans() {
//   let arr = Array.from(inputTag.value);
//   console.log(arr);
//   let arrnum = [];
//   let arropr = [];
//   let arroprnum = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr[i] == "+" ||
//       arr[i] == "-" ||
//       arr[i] == "x" ||
//       arr[i] == "/" ||
//       arr[i] == "%" ||
//       arr[i] == "^"
//     ) {
//       arrnum.push(arroprnum);
//       arroprnum = "";
//       arropr.push(arr[i]);
//     } else {
//       // arrnum.push(arr[i]);
//       arroprnum = arroprnum + arr[i];
//     }
//   }
//   arrnum.push(arroprnum);
//   arroprnum = "";
//   console.log(arrnum);
//   console.log(arropr);
//   let answer = "";
//   let num1 = arrnum[0];
//   for (let i = 0; i < arrnum.length - 1; i++) {
//     let num2 = arrnum[i + 1];
//     switch (arropr[i]) {
//       case "+":
//         answer = Number(num1) + Number(num2);
//         num1 = answer; //[9, 8, 7, 13, 1] ["+", "-", "-", "+"]
//         continue;
//       case "-":
//         answer = Number(num1) - Number(num2);
//         num1 = answer;
//         continue;
//       case "x":
//         answer = Number(num1) * Number(num2);
//         num1 = answer;
//         continue;
//       case "/":
//         answer = Number(num1) / Number(num2);
//         num1 = answer;
//         continue;
//       case "%":
//         answer =
//           Number(num1) -
//           Number(num2) * Number.parseInt(Number(num1) / Number(num2));
//         num1 = answer;
//         continue
//       case "^":
//         answer=1
//         for(let j=0; j<Number(num2); j++){
//           answer=answer*Number(num1)
//         }
//         num1 = answer;
//         continue
//       default:
//         continue;
//     }
//   }
//   inputTag.value = num1;
//   charis=""
// }

function ans() {
  let arr = Array.from(inputTag.value);
  let newarray = [];
  let newnum = "";
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "0" ||
      arr[i] == "1" ||
      arr[i] == "2" ||
      arr[i] == "3" ||
      arr[i] == "4" ||
      arr[i] == "5" ||
      arr[i] == "6" ||
      arr[i] == "7" ||
      arr[i] == "8" ||
      arr[i] == "9" ||
      arr[i]=="."
    ) {
      newnum = newnum + arr[i];
    } else if (
      arr[i] == "+" ||
      arr[i] == "-" ||
      arr[i] == "*" ||
      arr[i] == "/" ||
      arr[i] == "^" ||
      arr[i] == "%"
    ) {
      newarray.push(newnum);
      newarray.push(arr[i]);
      newnum = "";
      continue;
    }
  }
  newarray.push(newnum);
  newnum = "";
  arr = newarray;
  let arr2 = [];
  let count = 0;
  let answer = 0;
  let remove1 = 0;
  let remove2 = 0;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "^") {
      answer = 1;
      for (let j = 0; j < Number(arr[i + 1]); j++) {
        answer = answer * Number(arr[i - 1]);
      }
      arr[i - 1] = answer;
      arr2 = [];
      count = 0;
      remove1 = i;
      remove2 = i + 1;
      for (let i = 0; i < arr.length; i++) {
        if (i == remove1) {
          i++;
          continue
        }
        if (i == remove2) {
          i++;
          continue
        }
        arr2[count] = arr[i];
        count++;
      }
      arr = arr2;
      console.log(arr);
      i = 0;
      continue;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "%") {
      answer = 0;
      answer =
        Number(arr[i - 1]) -
        Number(arr[i + 1]) *
          Number.parseInt(Number(arr[i - 1]) / Number(arr[i + 1]));
      arr[i - 1] = answer;
      arr2 = [];
      count = 0;
      remove1 = i;
      remove2 = i + 1;
      for (let i = 0; i < arr.length; i++) {
        if (i == remove1) {
          i++;
          continue
        }
        if (i == remove2) {
          i++;
          continue
        }
        arr2[count] = arr[i];
        count++;
      }
      arr = arr2;
      console.log(arr);
      i = 0;
      continue;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "/") {
      answer = 0;
      answer = Number(arr[i - 1]) / Number(arr[i + 1]);
      arr[i - 1] = answer;
      arr2 = [];
      count = 0;
      remove1 = i;
      remove2 = i + 1;
      for (let i = 0; i < arr.length; i++) {
        if (i == remove1) {
          i++;
          continue
        }
        if (i == remove2) {
          i++;
          continue
        }
        arr2[count] = arr[i];
        count++;
      }
      arr = arr2;
      console.log(arr);
      i = 0;
      continue;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "*") {
      answer = 0;
      answer = Number(arr[i - 1]) * Number(arr[i + 1]);
      arr[i - 1] = answer;
      arr2 = [];
      count = 0;
      remove1 = i;
      remove2 = i + 1;
      for (let i = 0; i < arr.length; i++) {
        if (i == remove1) {
          i++;
          continue
        }
        if (i == remove2) {
          i++;
          continue
        }
        arr2[count] = arr[i];
        count++;
      }
      arr = arr2;
      console.log(arr);
      i = 0;
      continue;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "-") {
      answer = 0;
      answer = Number(arr[i - 1]) - Number(arr[i + 1]);
      arr[i - 1] = answer;
      arr2 = [];
      count = 0;
      remove1 = i;
      remove2 = i + 1;
      for (let i = 0; i < arr.length; i++) {
        if (i == remove1) {
          i++;
          continue
        }
        if (i == remove2) {
          i++;
          continue
        }
        arr2[count] = arr[i];
        count++;
      }
      arr = arr2;
      console.log(arr);
      i = 0;
      continue;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "+") {
      answer = 0;
      answer = Number(arr[i - 1]) + Number(arr[i + 1]);
      arr[i - 1] = answer;
      arr2 = [];
      count = 0;
      remove1 = i;
      remove2 = i + 1;
      for (let i = 0; i < arr.length; i++) {
        if (i == remove1) {
          i++;
          continue
        }
        if (i == remove2) {
          i++;
          continue
        }
        arr2[count] = arr[i];
        count++;
      }
      arr = arr2;
      console.log(arr);
      i = 0;
      continue;
    }
  }
  inputTag.value = arr[0];
  charis=""
}
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == "^") {
//     answer = 1;
//     for (let j = 0; j < Number(arr[i + 1]); j++) {
//       answer = answer * Number(arr[i - 1]);
//     }
//     arr[i - 1] = answer;
//     arr1 = arr.slice(i, i + 2);
//     arr2 = [];
//     count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] != arr1[0] && arr[i] != arr1[1]) {
//         arr2[count] = arr[i];
//         count++;
//       }
//     }
//     arr = arr2;
//     console.log(arr);
//     i=0
//     continue
//   } else if (arr[i] == "%") {
//     answer = 0;
//     answer =
//       Number(arr[i - 1]) -
//       (Number(arr[i + 1]) *
//         Number.parseInt(Number(arr[i - 1]) / Number(arr[i + 1])));
//     arr[i - 1] = answer;
//     arr1 = arr.slice(i, i + 2);
//     arr2 = [];
//     count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] != arr1[0] && arr[i] != arr1[1]) {
//         arr2[count] = arr[i];
//         count++;
//       }
//     }
//     arr = arr2;
//     console.log(arr);
//     i=0
//     continue
//   } else if (arr[i] == "/") {
//     answer = 0;
//     answer = Number(arr[i - 1]) / Number(arr[i + 1]);
//     arr[i - 1] = answer;
//     arr1 = arr.slice(i, i + 2);
//     arr2 = [];
//     count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] != arr1[0] && arr[i] != arr1[1]) {
//         arr2[count] = arr[i];
//         count++;
//       }
//     }
//     arr = arr2;
//     console.log(arr);
//     i=0
//     continue
//   } else if (arr[i] == "x") {
//     answer = 0;
//     answer = Number(arr[i - 1]) * Number(arr[i + 1]);
//     arr[i - 1] = answer;
//     arr1 = arr.slice(i, i + 2);
//     arr2 = [];
//     count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] != arr1[0] && arr[i] != arr1[1]) {
//         arr2[count] = arr[i];
//         count++;
//       }
//     }
//     arr = arr2;
//     console.log(arr);
//     i=0
//     continue
//   } else if (arr[i] == "+") {
//     answer = 0;
//     answer = Number(arr[i - 1]) + Number(arr[i + 1]);
//     arr[i - 1] = answer;
//     arr1 = arr.slice(i, i + 2);
//     arr2 = [];
//     count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] != arr1[0] && arr[i] != arr1[1]) {
//         arr2[count] = arr[i];
//         count++;
//       }
//     }
//     arr = arr2;
//     console.log(arr);
//     i=0
//     continue
//   } else if (arr[i] == "-") {
//     answer = 0;
//     answer = Number(arr[i - 1]) - Number(arr[i + 1]);
//     arr[i - 1] = answer;
//     arr1 = arr.slice(i, i + 2);
//     arr2 = [];
//     count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] != arr1[0] && arr[i] != arr1[1]) {
//         arr2[count] = arr[i];
//         count++;
//       }
//     }
//     arr = arr2;
//     console.log(arr);
//     i=0
//     continue
//   } else {
//     continue
//   }
// }
//   inputTag.value = arr[0];
// }
