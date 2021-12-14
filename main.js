const slowbtn=document.querySelector("#slow");
const normalbtn=document.querySelector("#normal");
const fastbtn=document.querySelector("#fast");
const startbtn=document.querySelector("#start");
let speed=0;
startbtn.addEventListener('click',e=>{
if(slowbtn.checked)speed=200;
else if(normalbtn.checked)speed=100;
else if(fastbtn.checked)speed=50;
sessionStorage.setItem('speed',speed);
window.location.href = "game.html";
});