const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const paddleH=60,paddleW=10;
let playerY = canvas.height/2 - paddleH/2;
let cpuY = playerY;
let ball = {x:canvas.width/2, y:canvas.height/2, vx:3, vy:3};

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='white';
  ctx.fillRect(0, playerY, paddleW, paddleH);
  ctx.fillRect(canvas.width-paddleW, cpuY, paddleW, paddleH);
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, 5, 0, Math.PI*2);
  ctx.fill();
}

function update() {
  ball.x += ball.vx; ball.y += ball.vy;
  if (ball.y<0||ball.y>canvas.height) ball.vy*=-1;
  if (ball.x< paddleW && ball.y>playerY && ball.y<playerY+paddleH) ball.vx*=-1;
  if (ball.x> canvas.width-paddleW && ball.y>cpuY && ball.y<cpuY+paddleH) ball.vx*=-1;
  if (ball.x<0||ball.x>canvas.width) reset();
  cpuY += (ball.y - (cpuY+paddleH/2))*0.05;
}

function reset(){ ball={x:canvas.width/2,y:canvas.height/2,vx:3*(Math.random()>0.5?1:-1),vy:3*(Math.random()>0.5?1:-1)}; }

canvas.addEventListener('mousemove', e=>{ playerY = e.offsetY - paddleH/2; });

function loop(){ update(); draw(); requestAnimationFrame(loop); }
loop();
