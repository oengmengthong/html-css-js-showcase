const box = document.getElementById('box');

document.getElementById('animate').addEventListener('click', () => {
  box.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(200px)' },
    { transform: 'translateX(0)' }
  ], {
    duration: 1000,
    iterations: 1
  });
});
