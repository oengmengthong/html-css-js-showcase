const button = document.getElementById('toggle');
const status = document.getElementById('status');
let wakeLock;

async function requestWakeLock() {
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    status.textContent = 'Wake Lock active';
    wakeLock.addEventListener('release', () => {
      status.textContent = 'Wake Lock released';
    });
  } catch (err) {
    status.textContent = `Error: ${err.message}`;
  }
}

button.addEventListener('click', () => {
  if ('wakeLock' in navigator) {
    if (wakeLock) {
      wakeLock.release();
      wakeLock = null;
    } else {
      requestWakeLock();
    }
  } else {
    status.textContent = 'Wake Lock API not supported.';
  }
});
