const button = document.getElementById('connect');
const status = document.getElementById('status');

button.addEventListener('click', async () => {
  if (!navigator.bluetooth) {
    status.textContent = 'Web Bluetooth not supported.';
    return;
  }
  try {
    const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
    status.textContent = `Connected to ${device.name || 'Unnamed device'}`;
  } catch (err) {
    status.textContent = `Error: ${err.message}`;
  }
});
