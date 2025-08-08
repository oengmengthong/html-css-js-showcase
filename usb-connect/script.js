const button = document.getElementById('connect');
const status = document.getElementById('status');

button.addEventListener('click', async () => {
  if (!navigator.usb) {
    status.textContent = 'WebUSB not supported.';
    return;
  }
  try {
    const device = await navigator.usb.requestDevice({ filters: [] });
    await device.open();
    status.textContent = `Opened ${device.productName}`;
  } catch (err) {
    status.textContent = `Error: ${err.message}`;
  }
});
