const board = document.getElementById('board');
const status = document.getElementById('status');
let cells = Array(9).fill(null);
let current = 'X';

cells.forEach((_, i) => {
  const div = document.createElement('div');
  div.className = 'cell';
  div.addEventListener('click', () => move(i));
  board.appendChild(div);
});

function move(i) {
  if (cells[i] || winner()) return;
  cells[i] = current;
  board.children[i].textContent = current;
  if (winner()) status.textContent = `${current} wins!`;
  else if (cells.every(Boolean)) status.textContent = 'Draw';
  else current = current === 'X' ? 'O' : 'X';
}

function winner() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return wins.some(pattern =>
    pattern.every(i => cells[i] && cells[i] === cells[pattern[0]])
  );
}
