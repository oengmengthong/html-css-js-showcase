const btn = document.getElementById('read');
btn.addEventListener('click', () => {
  const text = window.getSelection().toString();
  if (text) {
    const utter = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utter);
  }
});
