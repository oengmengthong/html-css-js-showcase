let startTime, interval;
const timeEl = document.getElementById('time');
const laps = document.getElementById('laps');
function update() {
  const diff = Date.now() - startTime;
  const ms = Math.floor((diff % 1000) / 100);
  const sec = Math.floor(diff / 1000) % 60;
  const min = Math.floor(diff / 60000);
  timeEl.textContent = `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}.${ms}`;
}
document.getElementById('start').addEventListener('click', () => {
  if (interval) { clearInterval(interval); interval = null; }
  else { startTime = Date.now(); interval = setInterval(update, 100); }
});
document.getElementById('lap').addEventListener('click', () => {
  if (!interval) return;
  const li = document.createElement('li');
  li.textContent = timeEl.textContent;
  laps.appendChild(li);
});
document.getElementById('reset').addEventListener('click', () => {
  clearInterval(interval); interval = null;
  timeEl.textContent = '00:00.0';
  laps.innerHTML = '';
});
