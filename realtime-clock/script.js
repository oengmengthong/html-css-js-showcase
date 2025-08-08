const clock = document.getElementById('clock');
function update() {
  const now = new Date();
  clock.textContent = now.toLocaleString();
}
setInterval(update, 1000);
update();
