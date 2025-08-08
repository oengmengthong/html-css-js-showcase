const startBtn = document.getElementById('start');
const status = document.getElementById('status');
let recognition;
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.onresult = e => {
    const transcript = e.results[0][0].transcript.toLowerCase();
    status.textContent = 'Heard: ' + transcript;
    if (['red','green','blue','yellow','white'].includes(transcript)) {
      document.body.style.background = transcript;
    }
  };
  recognition.onerror = e => {
    status.textContent = 'Error: ' + e.error;
  };
} else {
  startBtn.disabled = true;
  status.textContent = 'SpeechRecognition not supported in this browser.';
}
startBtn.addEventListener('click', () => recognition && recognition.start());
