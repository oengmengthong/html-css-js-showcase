const statusEl = document.getElementById('status');
function update() { statusEl.textContent = navigator.onLine ? 'Online' : 'Offline'; }
window.addEventListener('online', update);
window.addEventListener('offline', update);
update();
