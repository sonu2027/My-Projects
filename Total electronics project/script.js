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
        if(i==0){
            x.style.paddingTop="2rem"
            x.style.paddingBottom="5px"
        }
        else if(i==3){
            x.style.paddingTop="5px"
            x.style.paddingBottom="2rem"
        }
        else{
            x.style.padding="5px 0"
        }
    }
    count=1
   }
   else{
    menubar.innerText=""
    count=0
   }
}