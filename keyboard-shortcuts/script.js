document.addEventListener('keydown', e => {
  if (e.target !== document.body) return;
  const key = e.key.toLowerCase();
  if (key === 'h') location.hash = '#home';
  else if (key === 'a') location.hash = '#about';
  else if (key === 'c') location.hash = '#contact';
});
