const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');
let size = 100;
function update(){
  document.documentElement.style.fontSize = size + '%';
}
inc.addEventListener('click', () => {
  size += 10;
  update();
});
dec.addEventListener('click', () => {
  if (size > 50) size -= 10;
  update();
});
update();
