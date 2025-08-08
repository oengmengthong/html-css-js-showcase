const symbols = ['🍎','🍌','🍇','🍒','🥝','🍑','🍋','🍉'];
let cards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
const game = document.getElementById('game');
let first = null;
let lock = false;

cards.forEach(sym => {
  const div = document.createElement('div');
  div.className = 'card';
  div.dataset.sym = sym;
  div.addEventListener('click', flip);
  game.appendChild(div);
});

function flip() {
  if (lock || this.classList.contains('matched') || this === first) return;
  this.textContent = this.dataset.sym;
  this.classList.add('flipped');
  if (!first) { first = this; return; }
  lock = true;
  if (first.dataset.sym === this.dataset.sym) {
    first.classList.add('matched');
    this.classList.add('matched');
    reset();
  } else {
    setTimeout(() => {
      first.textContent = '';
      this.textContent = '';
      first.classList.remove('flipped');
      this.classList.remove('flipped');
      reset();
    }, 800);
  }
}

function reset() {
  first = null;
  lock = false;
}
