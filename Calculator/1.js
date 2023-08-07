let arr = ["8", "5", "-", "1", "x", "5"];
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
    arr[i] == "9"
  ) {
    newnum = newnum + arr[i];
  } else if (
    arr[i] == "+" ||
    arr[i] == "-" ||
    arr[i] == "x" ||
    arr[i] == "/" ||
    arr[i] == "^" ||
    arr[i] == "%"
  ) {
    newarray.push(newnum);
    console.log(newnum);
    newnum = "";
    continue;
  }
}
newarray.push(newnum);
console.log(newnum);
newnum = "";
arr = newarray;
console.log(arr);
