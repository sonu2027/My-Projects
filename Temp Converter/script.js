let converToCelcius = false;
let converToFahrenheit = false;
let inputTag = document.getElementById("inputTag");
let ans=document.getElementById("ans")
function cToF() {
  inputTag.placeholder = "Enter temperature in degree celcius";
  converToFahrenheit = true;
  converToCelcius=false
  inputTag.value=""
  ans.style.display="none"
}
function fToC() {
  inputTag.placeholder = "Enter temperature in degree fahrenheit";
  converToCelcius = true;
  converToFahrenheit=false
  inputTag.value=""
  ans.style.display="none"
}
function getAnsInCelcius() {
    if (converToCelcius == true) {
        console.log("To celcius");
        let f = inputTag.value;
        let c = 5*(f-32)/9;
        ans.innerText=`Celcius: ${c}`
        ans.style.display="block"
      }
}
function getAnsInFahrenheit() {
  if (converToFahrenheit == true) {
    console.log("To fh");
    let c = inputTag.value;
    let f = (9 * c) / 5 + 32;
    ans.innerText=`Fahrenheit: ${f}`
    ans.style.display="block"
  }
}
