let button = document.getElementsByTagName("button");
let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");

let inputTag = document.getElementById("inputTag");

let balance = document.getElementById("balance");
let submit = document.getElementById("submit");
let returns = document.getElementById("home");
let deposit = document.getElementById("deposit");
let withdraw = document.getElementById("withdraw");

let count = 0;
let Accountbalance = 0;
function add() {
  deposit.style.display = "none";
  withdraw.style.display = "none";
  container2.style.display = "block";
  submit.style.display = "block";
  returns.style.display = "none";
  balance.style.display = "none";
  count = 0;
}
function subtract() {
  deposit.style.display = "none";
  withdraw.style.display = "none";
  container2.style.display = "block";
  submit.style.display = "block";
  returns.style.display = "none";
  balance.style.display = "none";
  count = 1;
}
function submitButton() {
  if (inputTag.value == "") {
    alert("Enter the amount to proceed");
  } else if (inputTag.value <= 0) {
    alert("Amount should be greater than 0");
  } else {
    balance.innerText = "Account Balance";
    container2.style.display = "none";
    submit.style.display = "none";
    balance.style.display = "block";
    returns.style.display = "block";
    if (inputTag.value > Accountbalance && count == 1) {
      alert("You don't have sufficient balance");
    }
  }
}
function showBalance() {
    if (count == 0 && inputTag.value>=0) {
      Accountbalance =
        Number.parseInt(inputTag.value) + Number.parseInt(Accountbalance);
      balance.innerText = "Account Balance: " + Accountbalance;
      count = 2;
    }

    if (count == 2 && inputTag.value>=0) {
        balance.innerText = "Account Balance: " + Accountbalance;
        count = 2;
      }

    if (count == 1 && inputTag.value <= Accountbalance) {
      Accountbalance =
        Number.parseInt(Accountbalance) - Number.parseInt(inputTag.value);
      balance.innerText = "Account Balance: " + Accountbalance;
      count = 2;
    } else {
      if (count == 1) {
        balance.innerText = "Account Balance: " + 0;
      }
    }

}
function home() {
  deposit.style.display = "block";
  withdraw.style.display = "block";
  balance.style.display = "block";
  submit.style.display = "none";
  returns.style.display = "none";
  balance.style.display = "block";
  balance.innerText = "Account Balance";
}
