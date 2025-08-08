const words = ['javascript','browser','hangman','coding'];
const word = words[Math.floor(Math.random()*words.length)];
const display = Array(word.length).fill('_');
const wordEl = document.getElementById('word');
const wrongEl = document.getElementById('wrong');
const lettersEl = document.getElementById('letters');
let wrong = [];

wordEl.textContent = display.join(' ');

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(ch=>{
  const btn = document.createElement('button');
  btn.textContent = ch;
  btn.addEventListener('click', ()=>guess(ch, btn));
  lettersEl.appendChild(btn);
});

function guess(ch, btn) {
  btn.disabled = true;
  if (word.includes(ch)) {
    [...word].forEach((c,i)=>{ if (c===ch) display[i]=ch; });
    wordEl.textContent = display.join(' ');
    if (!display.includes('_')) alert('You win!');
  } else {
    wrong.push(ch);
    wrongEl.textContent = wrong.join(' ');
    if (wrong.length >= 6) { alert('Game over'); }
  }
}
