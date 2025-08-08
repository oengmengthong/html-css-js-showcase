const grid = document.getElementById('grid');
const scoreEl = document.getElementById('score');
const startBtn = document.getElementById('start');
let score = 0;
let timer;

for (let i=0;i<9;i++) {
  const div = document.createElement('div');
  div.className='hole';
  div.addEventListener('click', () => {
    if (div.classList.contains('mole')) {
      score++;
      scoreEl.textContent = score;
      div.classList.remove('mole');
    }
  });
  grid.appendChild(div);
}

function start() {
  score = 0; scoreEl.textContent = 0;
  clearInterval(timer);
  timer = setInterval(() => {
    grid.querySelectorAll('.mole').forEach(h=>h.classList.remove('mole'));
    const hole = grid.children[Math.floor(Math.random()*9)];
    hole.classList.add('mole');
  }, 800);
  setTimeout(()=>{clearInterval(timer); alert('Time up!');}, 10000);
}

startBtn.addEventListener('click', start);
