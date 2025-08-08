const canvas = document.getElementById('heatmap');
const ctx = canvas.getContext('2d');
const size = 10;
const cell = canvas.width / size;

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const value = Math.random();
    const color = `hsl(${(1 - value) * 240}, 100%, 50%)`;
    ctx.fillStyle = color;
    ctx.fillRect(x * cell, y * cell, cell, cell);
  }
}
