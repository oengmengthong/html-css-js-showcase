document.getElementById('start').addEventListener('click', () => {
  const el = document.getElementById('counter');
  const target = 1000;
  const duration = 2000;
  const startTime = performance.now();
  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
});
