const puzzle = document.getElementById('puzzle');
let tiles = [...Array(8).keys()].map(n=>n+1).concat(0);
shuffle(tiles);
render();

function shuffle(arr) {
  for (let i=arr.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
}

function render() {
  puzzle.innerHTML='';
  tiles.forEach((n,i)=>{
    const div=document.createElement('div');
    div.className='tile'+(n===0?' empty':'');
    div.textContent = n||'';
    div.addEventListener('click',()=>move(i));
    puzzle.appendChild(div);
  });
}

function move(i) {
  const emptyIndex = tiles.indexOf(0);
  const valid = [emptyIndex-3, emptyIndex+3];
  if (emptyIndex%3!==0) valid.push(emptyIndex-1);
  if (emptyIndex%3!==2) valid.push(emptyIndex+1);
  if (valid.includes(i)) {
    [tiles[i], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[i]];
    render();
    if (tiles.join('')==='123456780') alert('Solved!');
  }
}
