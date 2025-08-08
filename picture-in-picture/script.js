const video = document.getElementById('video');
const button = document.getElementById('pip');
const status = document.getElementById('status');

button.addEventListener('click', async () => {
  if (!document.pictureInPictureEnabled) {
    status.textContent = 'PiP not supported.';
    return;
  }
  try {
    if (video !== document.pictureInPictureElement) {
      await video.requestPictureInPicture();
      status.textContent = 'In Picture-in-Picture';
    } else {
      await document.exitPictureInPicture();
      status.textContent = 'Exited Picture-in-Picture';
    }
  } catch (err) {
    status.textContent = `Error: ${err.message}`;
  }
});
