// Register service worker for offline caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(function(error) {
      console.error('Service worker registration failed:', error);
    });
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
    const errorMessages = {
      'no-speech': 'No speech was detected. Please try again.',
      'audio-capture': 'No microphone was found. Please ensure your microphone is connected.',
      'not-allowed': 'Microphone access was denied. Please allow microphone access and try again.',
      'aborted': 'Speech input was aborted. Please try again.',
      'network': 'A network error occurred. Please check your connection and try again.',
      'service-not-allowed': 'Speech recognition service was not allowed. Please check your browser settings.',
      'bad-grammar': 'There was an error in the speech recognition grammar.',
      'language-not-supported': 'The selected language is not supported.'
    };
    transcriptEl.textContent = errorMessages[event.error] || ('An error occurred: ' + event.error);
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
