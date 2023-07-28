let count = 0;
let btns = document.getElementsByClassName("submitbutton");
let items = document.getElementsByClassName("item");
let opt=document.getElementsByClassName("options");
let stat=document.getElementById("status");
let results=document.getElementById("results");
let right=document.getElementById("rightquestion");
let wrong=document.getElementById("wrongquestion");
let finalresult=document.getElementById("finalresult");

let rightquestion=0;
const totalquestion=10;
function close() {
    if(count==0 && opt[count].value=="4"){
        stat.innerText="Previous Status: Right"
        rightquestion++;
    }
    else if(count==1 && opt[count].value=="9"){
        stat.innerText="Previous Status: Right"
        rightquestion++;
    }
    else if(count==2 && opt[count].value=="Narendra Modi"){
        stat.innerText="Previous Status: Right"
        rightquestion++;
    }
    else if(count==3 && opt[count].value=="Square of edge"){
        stat.innerText="Previous Status: Right"
        rightquestion++;
    }
    else if(count==4 && opt[count].value=="9.8 m/s"){
        stat.innerText="Previous Status: Right"
        rightquestion++;
    }
    else if(count==5 && opt[count].value=="3 hr"){
        stat.innerText="Previous Status: Right"
        rightquestion++;
    }
    else if(count==6 && opt[count].value=="Relative"){
        stat.innerText="Previous Status: Right"
        rightquestion++;
    }
    else if(count==7 && opt[count].value=="Cascading style sheet."){
        stat.innerText="Previous Status: Right"
        rightquestion++;
    }
    else if(count==8 && opt[count].value=="Hyper text markup language"){
        stat.innerText="Previous Status: Right"
        rightquestion++;
    }
    else if(count==9 && opt[count].value=="15"){
        stat.innerText="Previous Status: Right"
        rightquestion++;
    }
    else{
        stat.innerText="Previous Staus: Wrong"
    }
  items[count].style.display = "none";
  if(count<9){
    items[count + 1].style.display = "block";
  }
  count++;
  if(count>9){
    results.style.display= "block";
    right.innerText="Total right question: "+rightquestion;
    const wrongquestion=totalquestion-rightquestion;
    wrong.innerText="Total wrong question: "+wrongquestion;
    stat.style.display="none";
    if(rightquestion>=6){
        finalresult.innerText="Final result: pass"
    }
    else{
        finalresult.innerText="Final result: fail"
    }
}
}

for (let i = 0; i < 10; i++) {
  btns[i].addEventListener("click", close);
}