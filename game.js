let canvas=document.querySelector('canvas');
const ctx=canvas.getContext("2d");
const cell_size=50;
const width=canvas.width=Math.floor(window.innerWidth/cell_size)*cell_size;
const height=canvas.height=Math.floor(window.innerHeight/cell_size)*cell_size;

let x_num=Math.floor(width/cell_size);
let y_num=Math.floor(height/cell_size);
let score=1;
let snake=[[3,3]];
let dx=1;
let dy=0;
let item_x=7;
let item_y=7;
let speed=sessionStorage.getItem('speed');
const scoreDisplay=document.querySelector('p');
function keyDown(e){
    if(e.key=="ArrowRight"){if(dx===0){dx=1;dy=0;}}
    else if(e.key=="ArrowLeft"){if(dx===0){dx=-1;dy=0;}}
    else if(e.key=="ArrowUp"){if(dy===0){dx=0;dy=-1;}}
    else if(e.key=="ArrowDown"){if(dy===0){dx=0;dy=1;}}
}

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }
function draw_cell(x,y,color){
    ctx.fillStyle=color;
    ctx.fillRect(cell_size*(x-1)+2,cell_size*(y-1)+2,cell_size-2,cell_size-2);
}

function update(){
snake.push([snake[snake.length-1][0]+dx,snake[snake.length-1][1]+dy]);
if(snake[snake.length-1][0]===item_x && snake[snake.length-1][1]===item_y){
    score++;
    scoreDisplay.textContent='Score: '+score;
    sessionStorage.setItem("score", score);
   while(true){
       item_x=random(1,x_num);
       item_y=random(1,y_num);
       let flag=true;
       for(let i=0;i<snake.length;i++){
           if(snake[i][0]===item_x && snake[i][1]===item_y){
               flag=false;
           }
       }
       if(flag){
           break;
       }
   }
}
else{
    snake.shift();
}
}
function check(){
    const last_x=snake[snake.length-1][0];
    const last_y=snake[snake.length-1][1];
    if(last_x<1 || last_x>x_num || last_y<1 || last_y>y_num){
        window.location.href = "gameover.html";

       
    }
    for(let i=0;i<snake.length-1;i++){
        if(snake[i][0]===last_x&&snake[i][1]===last_y){
            
            window.location.href = "gameover.html";
        }
    }

}
function draw(){
    ctx.fillStyle='black';
    ctx.fillRect(0,0,width,height);
    update();
    check();
    for(let i=0;i<snake.length;i++){
        draw_cell(snake[i][0],snake[i][1],'white');
    }
    draw_cell(item_x,item_y,'orange');
    
}
sessionStorage.setItem("score", 1);
document.addEventListener("keydown", keyDown, false);

setInterval(draw,speed);