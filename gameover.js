const scoreDisplay=document.querySelector('p');
const score=sessionStorage.getItem('score');
scoreDisplay.textContent='Your score is '+score;