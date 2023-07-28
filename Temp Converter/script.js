let input=document.getElementsByTagName("input")
let span=document.getElementsByTagName("span")
function getAns(){
    let c=input[0].value
    let f=(9*c)/5+32
    span[0].innerText=f;
}