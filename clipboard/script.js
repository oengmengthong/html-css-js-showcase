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
  try {
    const text = await navigator.clipboard.readText();
    destination.value = text;
    status.textContent = 'Pasted from clipboard!';
  } catch (err) {
    status.textContent = 'Paste failed.';
  }
});
