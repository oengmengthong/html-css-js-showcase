const startBtn = document.getElementById('start');
const display = document.getElementById('display');
startBtn.addEventListener('click', () => {
  let sec = parseInt(document.getElementById('seconds').value);
  if (isNaN(sec)) return;
  display.textContent = sec;
  const interval = setInterval(() => {
    sec--;
    display.textContent = sec;
    if (sec <= 0) {
      clearInterval(interval);
      beep();
    }
  }, 1000);
});
function beep() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  osc.connect(ctx.destination);
  osc.start();
  setTimeout(() => { osc.stop(); ctx.close(); }, 500);
}
