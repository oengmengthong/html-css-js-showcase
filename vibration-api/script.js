const button = document.getElementById('vibrate');
const status = document.getElementById('status');

button.addEventListener('click', () => {
  if ('vibrate' in navigator) {
    navigator.vibrate([200, 100, 200]);
    status.textContent = 'Vibrating...';
  } else {
    status.textContent = 'Vibration API not supported.';
  }
});
