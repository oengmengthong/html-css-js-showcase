const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');
const statusEl = document.getElementById('status');
const data = [];
const ws = new WebSocket('wss://echo.websocket.events');

ws.addEventListener('open', () => {
  statusEl.textContent = 'Connected';
  setInterval(() => {
    const value = Math.floor(Math.random() * 100);
    ws.send(value.toString());
  }, 1000);
});

ws.addEventListener('message', (e) => {
  const value = parseFloat(e.data);
  if (!isNaN(value)) {
    data.push(value);
    if (data.length > 20) data.shift();
    draw();
  }
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = (i / (20 - 1)) * canvas.width;
    const y = canvas.height - (v / 100) * canvas.height;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = 'purple';
  ctx.stroke();
}
