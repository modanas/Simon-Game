let gameSeq = [];
let userSeq = [];  
let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function () {
 if(started == false)
  console.log("game is started");
 started = true; 

 levelUp();
})

function gameFlash (dabao) {
dabao.classList.add("flash");
setInterval(function () {
 dabao.classList.remove("flash");
},250)
}

function userFlash (dabao) {
dabao.classList.add("userFlash");
setInterval(function () {
 dabao.classList.remove("userFlash");
},250)
}

function levelUp() {
 userSeq = [];
 level++;
 h2.innerText = `Level ${level}`;

 let rndmIdx = Math.floor(Math.random() * 3);
 let rndmClr = btns[rndmIdx];
 let rndmBtn = document.querySelector(`.${rndmClr}`);

 gameSeq.push(rndmClr);
 console.log(gameSeq);
 gameFlash(rndmBtn);
}

function checkLvl (indx) {
if(userSeq[indx] === gameSeq[indx]){
if(userSeq.length === gameSeq.length){
 setTimeout( levelUp, 1000);
}
}
else{
 h2.innerHTML = `Game over !<br> Your score was <b> ${level} </b> <br> Press any key to start`;
 document.querySelector("body").style.backgroundColor = "red";
 setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "white";
 },150)
 reset();
}
}

function btnPress () {
 let btn = this;
 userFlash(btn);

 userColor = btn.getAttribute("id");
 userSeq.push(userColor);

 checkLvl(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".dabao");
for(dabao of allBtn) {
 dabao.addEventListener("click",btnPress);
}

function reset() {
 started = false;
 gameSeq = [];
 userSeq = [];
 level = 0;
}