const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');
const data = [4, 8, 15, 16, 23, 42];
const barWidth = 40;
const gap = 10;

function draw(highlight = -1) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  data.forEach((v, i) => {
    ctx.fillStyle = i === highlight ? 'orange' : 'steelblue';
    const x = i * (barWidth + gap);
    const y = canvas.height - v * 5;
    ctx.fillRect(x, y, barWidth, v * 5);
  });
}

draw();

canvas.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const index = Math.floor(x / (barWidth + gap));
  if (index >= 0 && index < data.length) {
    draw(index);
  } else {
    draw();
  }
});
