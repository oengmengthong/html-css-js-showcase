const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let drawing = false;

function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  if (e.touches) {
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top
    };
  }
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function start(e) {
  drawing = true;
  draw(e);
}

function end() {
  drawing = false;
  ctx.beginPath();
}

function draw(e) {
  if (!drawing) return;
  e.preventDefault();
  const pos = getPos(e);
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

canvas.addEventListener('mousedown', start);
canvas.addEventListener('touchstart', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('mouseup', end);
canvas.addEventListener('mouseleave', end);
canvas.addEventListener('touchend', end);
