const box = document.getElementById('box');
const button = document.getElementById('animateBtn');

button.addEventListener('click', () => {
  box.classList.remove('spin');
  void box.offsetWidth; // trigger reflow to restart animation
  box.classList.add('spin');
});
