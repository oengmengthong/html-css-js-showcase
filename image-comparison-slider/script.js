const slider = document.getElementById('slider');
const overlay = document.querySelector('.overlay');
slider.addEventListener('input', e => {
  overlay.style.width = e.target.value + '%';
});
