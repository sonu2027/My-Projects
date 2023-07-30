let count=0;
let menubar=document.getElementById("menubar")
function showbar(){
   if(count==0){
    let arr=["Home", "About", "Contact", "Blog"]
    for(let i=0; i<4; i++){
        let x=document.createElement("li")
        x.innerText=arr[i]
        menubar.appendChild(x)
        x.style.listStyle="none"
    }
    count=1
   }
   else{
    menubar.innerText=""
    count=0
   }
}