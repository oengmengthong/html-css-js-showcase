const map = {A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..',1:'.----',2:'..---',3:'...--',4:'....-',5:'.....',6:'-....',7:'--...',8:'---..',9:'----.',0:'-----'};
document.getElementById('translate').addEventListener('click', () => {
  const text = document.getElementById('text').value.toUpperCase();
  const morse = text.split('').map(ch => map[ch] || ' ').join(' ');
  document.getElementById('morse').textContent = morse;
});
