const boardEl = document.getElementById('board');
let board = Array(4).fill().map(()=>Array(4).fill(0));

document.addEventListener('keydown', e => {
  let moved = false;
  if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) {
    for (let i=0;i<4;i++) {
      let row = board[i];
      if (e.key==='ArrowUp' || e.key==='ArrowDown') row = board.map(r=>r[i]);
      if (e.key==='ArrowRight' || e.key==='ArrowDown') row.reverse();
      const filtered = row.filter(v=>v);
      for (let j=0;j<filtered.length-1;j++) {
        if (filtered[j]===filtered[j+1]) { filtered[j]*=2; filtered.splice(j+1,1); }
      }
      while (filtered.length<4) filtered.push(0);
      if (e.key==='ArrowRight' || e.key==='ArrowDown') filtered.reverse();
      if (e.key==='ArrowUp' || e.key==='ArrowDown') filtered.forEach((v,j)=>board[j][i]=v);
      else board[i] = filtered;
      moved = moved || row.toString() !== filtered.toString();
    }
    if (moved) addTile();
    draw();
  }
});

function addTile() {
  const empty = [];
  board.forEach((row,i)=>row.forEach((v,j)=>{ if(!v) empty.push([i,j]); }));
  const [i,j] = empty[Math.floor(Math.random()*empty.length)];
  board[i][j] = Math.random()<0.9?2:4;
}

function draw() {
  boardEl.innerHTML='';
  board.flat().forEach(v=>{
    const div = document.createElement('div');
    div.className='tile';
    div.textContent = v||'';
    boardEl.appendChild(div);
  });
}

addTile();
addTile();
draw();
