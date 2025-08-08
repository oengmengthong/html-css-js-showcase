// Register service worker for offline caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

// Text-to-Speech
const ttsText = document.getElementById('tts-text');

document.getElementById('speak').addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(ttsText.value);
  speechSynthesis.speak(utterance);
});

document.getElementById('stop-speak').addEventListener('click', () => {
  speechSynthesis.cancel();
});

// Speech-to-Text
const transcriptEl = document.getElementById('transcript');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    transcriptEl.textContent = transcript;
  });

  recognition.addEventListener('error', (event) => {
    transcriptEl.textContent = 'Error: ' + event.error;
  });
}

document.getElementById('start-listen').addEventListener('click', () => {
  if (recognition) {
    recognition.start();
  }
});

document.getElementById('stop-listen').addEventListener('click', () => {
  if (recognition) {
    recognition.stop();
  }
});
