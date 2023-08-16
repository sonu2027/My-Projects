let para = document.getElementById("hambergermenu");
let arr = ["Home", "Projects", "Coding Profile", "Resume", "Contact"];
let contact = document.getElementById("contacts");
let project = document.getElementById("projectlink");
let codingprofile = document.getElementById("codingprofile");
let bar2=document.getElementById("bar2")
let cap=document.getElementById("cap")
let count = 0;
let withoutjs=document.getElementById("withoutjs")
function showbar() {
  withoutjs.style.display="none"
  para.style.display = "block";
  contact.style.display = "none";
  project.style.display = "none";
  codingprofile.style.display = "none";
  if (count == 0) {
    bar2.style.display="block"
    cap.style.display="none"
    for (let i = 0; i < 5; i++) {
      if (i == 3) {
        let a = document.createElement("li");
        let b = document.createElement("a");
        b.style.textDecoration="none"
        b.href = "./assets/Resumeat75px.pdf";
        b.innerText = arr[i];
        a.appendChild(b);
        para.appendChild(a);
        a.style.textAlign = "center";
        a.className = "fan";
        continue;
      }
      let y = document.createElement("li");
      y.innerText = arr[i];
      y.className = "fan";
      para.appendChild(y);
      y.style.textAlign = "center";
    }
    count = 1;
  } 
  else {
    withoutjs.style.display="block"
    bar2.style.display="none"
    cap.style.display="block"
    para.innerHTML = "";
    // document.body.style.overflow = "visible";
    count = 0;
  }
  let fans = document.getElementsByClassName("fan");
  fans[0].addEventListener("click", jump);
  fans[1].addEventListener("click", showproject);
  fans[2].addEventListener("click", showcodingprofile);
  fans[4].addEventListener("click", cntf);
}
function jump() {
  withoutjs.style.display="block"
  bar2.style.display="none"
    cap.style.display="block"
  project.style.display = "none";
  contact.style.display = "none";
  codingprofile.style.display = "none";
  para.innerHTML = "";
  count = 0;
}
function cntf() {
  para.innerHTML = "";
  codingprofile.style.display = "none";
  project.style.display = "none";
  contact.style.display = "block";
  para.style.display = "none";
  count = 1;
}

function showproject() {
  withoutjs.style.display="none"
  codingprofile.style.display = "none";
  contact.style.display = "none";
  para.innerHTML = "";
  project.style.display = "block";
  count=1;
}

function showcodingprofile() {
  para.innerHTML = "";
  codingprofile.style.display = "block";
  contact.style.display = "none";
  project.style.display = "none";
  // codingprofile.style.height = "20vh";
  count=1;
}


function empty(){
  withoutjs.style.display="none"
}

