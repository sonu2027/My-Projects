let menu=document.getElementsByClassName("fa-solid fa-bars")
let listItem=document.getElementById("menuItem")
let arr=["Home", "About Us", "Careers", "Offers", "Blog", "FAQs", "Contact Us"]
menu[0].addEventListener("click", showMenuItem)
let listItemOfMenuItem=document.getElementsByClassName("listItemOfMenuItem")
let count=0;
function showMenuItem(){
    if(count==0){
        for(let i=0; i<arr.length; i++){
            let x=document.createElement("li")
            x.className="listItemOfMenuItem"
            x.innerText=arr[i]
            listItem.appendChild(x)
        }
        count++
    }
    else{
        for(let i=0; i<arr.length; i++){
            listItem.removeChild(listItemOfMenuItem[0])
        }
        count--
    }
}