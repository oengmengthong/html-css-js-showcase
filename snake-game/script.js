const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const grid = 20;
let snake = [{x:160,y:160}];
let dx = grid, dy = 0;
let apple = randomPosition();
let loop;

function randomPosition() {
  return { x: Math.floor(Math.random()*10)*grid, y: Math.floor(Math.random()*10)*grid };
}

function game() {
  loop = setTimeout(game, 100);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  snake.unshift({x: snake[0].x + dx, y: snake[0].y + dy});
  if (snake[0].x === apple.x && snake[0].y === apple.y) {
    apple = randomPosition();
  } else {
    snake.pop();
  }
  ctx.fillStyle = 'red';
  ctx.fillRect(apple.x, apple.y, grid-1, grid-1);
  ctx.fillStyle = 'lime';
  snake.forEach(part => ctx.fillRect(part.x, part.y, grid-1, grid-1));
  if (snake[0].x<0 || snake[0].x>=canvas.width || snake[0].y<0 || snake[0].y>=canvas.height || snake.slice(1).some(p=>p.x===snake[0].x&&p.y===snake[0].y)) {
    clearTimeout(loop);
    alert('Game over');
  }
}

document.addEventListener('keydown', e => {
  if (e.key==='ArrowLeft' && dx===0) {dx=-grid;dy=0;}
  if (e.key==='ArrowRight' && dx===0) {dx=grid;dy=0;}
  if (e.key==='ArrowUp' && dy===0) {dy=-grid;dx=0;}
  if (e.key==='ArrowDown' && dy===0) {dy=grid;dx=0;}
});

game();
