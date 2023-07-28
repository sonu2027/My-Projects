let y=document.getElementsByClassName("box")
let num=0
y[0].innerText=num
y[2].innerText=num
y[4].innerText=num
let c=0;
y[0].addEventListener("click", takea)
function takea(){
    let a=Number.parseInt(prompt("Enter your first no: "))
    y[0].innerText=a;
    c=c+a
}
y[2].addEventListener("click", takeb)
function takeb(){
    let b=Number.parseInt(prompt("Enter your first no: "))
    y[2].innerText=b;
    c=c+b
}
function hello(){
    y[4].innerText=c;
}
