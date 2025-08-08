const copyBtn = document.getElementById('copy');
const pasteBtn = document.getElementById('paste');
const source = document.getElementById('source');
const destination = document.getElementById('destination');
const status = document.getElementById('status');

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(source.value);
    status.textContent = 'Copied to clipboard!';
  } catch (err) {
    status.textContent = 'Copy failed.';
  }
});

pasteBtn.addEventListener('click', async () => {
  if (!navigator.clipboard) {
    status.textContent = 'Clipboard API not supported.';
    return;
  }
  try {
    // Check for clipboard-read permission if Permissions API is available
    if (navigator.permissions) {
      const permissionStatus = await navigator.permissions.query({ name: 'clipboard-read' });
      if (permissionStatus.state !== 'granted' && permissionStatus.state !== 'prompt') {
        status.textContent = 'Clipboard read permission denied.';
        return;
      }
    }
    const text = await navigator.clipboard.readText();
    destination.value = text;
    status.textContent = 'Pasted from clipboard!';
  } catch (err) {
    status.textContent = 'Paste failed.';
  }
});
