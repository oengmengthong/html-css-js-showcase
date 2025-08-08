const video = document.getElementById('video');
const play = document.getElementById('play');
const speed = document.getElementById('speed');
const captions = document.getElementById('captions');

play.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    play.textContent = 'Pause';
  } else {
    video.pause();
    play.textContent = 'Play';
  }
});

speed.addEventListener('change', () => {
  video.playbackRate = parseFloat(speed.value);
});

captions.addEventListener('change', () => {
  const track = video.textTracks[0];
  track.mode = captions.checked ? 'showing' : 'hidden';
});
