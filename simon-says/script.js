const pads = ['green','red','yellow','blue'].map(id=>document.getElementById(id));
const startBtn = document.getElementById('start');
let sequence=[], userSeq=[];

function flash(pad) {
  pad.classList.add('active');
  setTimeout(()=>pad.classList.remove('active'), 400);
}

function playSeq() {
  let i=0;
  const interval = setInterval(()=>{
    flash(pads[sequence[i]]);
    i++;
    if (i>=sequence.length) clearInterval(interval);
  },600);
}

pads.forEach((pad,i)=>pad.addEventListener('click', ()=>{
  userSeq.push(i);
  flash(pad);
  if (sequence[userSeq.length-1] !== i) {
    alert('Wrong!');
    userSeq=[]; sequence=[];
  } else if (userSeq.length === sequence.length) {
    userSeq=[];
    sequence.push(Math.floor(Math.random()*4));
    setTimeout(playSeq, 1000);
  }
}));

startBtn.addEventListener('click', ()=>{
  sequence=[Math.floor(Math.random()*4)];
  userSeq=[];
  playSeq();
});
