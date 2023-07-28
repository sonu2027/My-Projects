let button=document.getElementsByTagName("button")
let dishItem=document.getElementById("dishItem")
let itemsSelected=document.getElementById("itemsSelected")
let totalprice=document.getElementById("totalprice")
let priceperperson=document.getElementById("priceperperson")
let inputvalue=document.getElementById("inputvalue")
const arr=[]
let pr=0
for(let i=0; i<18; i++){
    button[i].addEventListener("click", function(){
        button[i].style.background="red"
        arr[i]=button[i].innerText
    })
}
let count=0;
const cost=[80, 60, 120, 40, 80, 120, 80, 180, 100, 120, 90, 50, 90, 70, 70, 110, 40, 80]
function done(){
    if(inputvalue.value==""){
        inputvalue.value="1"
    }
    for(let j=0; j<18; j++){
        count=0;
        for(let i=0; i<arr.length; i++){
            if(button[j].innerText==arr[i]){
                pr=pr+cost[j]
                count=1;
                break;
            }
        }
        if(count==0){
            button[j].style.display="none"
        }
    }
    itemsSelected.style.display="none"
    totalprice.style.display="block"
    totalprice.innerText="Total Price: "+pr+" Rs";
    priceperperson.style.display="block"
    priceperperson.innerText="Price Per Person: "+pr/inputvalue.value+" Rs";
}
