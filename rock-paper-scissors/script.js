const result = document.getElementById('result');
const choices = ['rock','paper','scissors'];

document.querySelectorAll('#choices button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const player = btn.dataset.choice;
    const cpu = choices[Math.floor(Math.random()*3)];
    const win = (player==='rock'&&cpu==='scissors')||(player==='paper'&&cpu==='rock')||(player==='scissors'&&cpu==='paper');
    const tie = player===cpu;
    result.textContent = `You ${tie?'tie':' '+(win?'win':'lose')}! CPU chose ${cpu}.`;
  });
});
