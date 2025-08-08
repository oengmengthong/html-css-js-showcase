async function drawChart() {
  const res = await fetch('data.json');
  const data = await res.json();
  const canvas = document.getElementById('chart');
  const ctx = canvas.getContext('2d');
  const max = Math.max(...data);
  ctx.beginPath();
  data.forEach((y, i) => {
    const x = (i / (data.length - 1)) * canvas.width;
    const yPos = canvas.height - (y / max) * canvas.height;
    if (i === 0) ctx.moveTo(x, yPos);
    else ctx.lineTo(x, yPos);
  });
  ctx.strokeStyle = 'teal';
  ctx.stroke();
}

drawChart();
