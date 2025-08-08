const btn = document.getElementById('notify');
const live = document.getElementById('live');
let count = 0;
btn.addEventListener('click', () => {
  count++;
  live.textContent = `Announcement ${count}`;
});
