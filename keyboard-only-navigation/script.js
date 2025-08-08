const items = Array.from(document.querySelectorAll('#menu a'));
items.forEach(a => {
  a.addEventListener('keydown', e => {
    let idx = items.indexOf(document.activeElement);
    if (e.key === 'ArrowRight') {
      idx = (idx + 1) % items.length;
      items[idx].focus();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      idx = (idx - 1 + items.length) % items.length;
      items[idx].focus();
      e.preventDefault();
    }
  });
});
