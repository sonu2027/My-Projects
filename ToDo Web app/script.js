let input=document.getElementsByTagName("input")
let inputbutton=document.getElementsByTagName("button");
let para=document.getElementsByTagName("p");
inputbutton[0].addEventListener("click", writes);
function writes(){
    para[0].innerText=input[0].value;
    update.style.display="none";
}
let count=0;
inputbutton[1].addEventListener("click", remove);
function remove(){
    para[0].innerText="Task";
    para[1].innerText="Status: Pending";
    inputbutton[2].innerText="Mark Completed";
    inputbutton[2].style.background="rgb(50, 238, 50)";
    input[0].placeholder="Enter your task";
    input[0].value="";
    update.style.display="none";
    count++;
}

inputbutton[2].addEventListener("click", completed);
function completed(){
    inputbutton[2].innerText="Mark Pending"
    if(count!=0){
        para[0].innerText=input[0].value;
    }
    para[0].innerText="Task";
    para[1].innerText="Status: Completed";
    inputbutton[2].style.background="rgb(179, 255, 28)"
    input[0].placeholder="Enter your next task";
    input[0].value="";
    update.style.display="none";
}
let update=document.getElementById("update");
inputbutton[3].addEventListener("click", edittask);
function edittask(){
    inputbutton[2].innerText="Mark Completed"
    para[1].innerText="Status: Pending";
    inputbutton[2].style.background="rgb(50, 238, 50)";
    input[0].placeholder="Edit your task";
    update.style.display="block";
}
inputbutton[4].addEventListener("click", updateinput);
function updateinput(){
    para[0].innerText=input[1].value;
    input[0].value=input[1].value;
    update.style.display="none";
}
inputbutton[5].addEventListener("click", close);
function close(){
    input[1].value="";
    update.style.display="none";

}

