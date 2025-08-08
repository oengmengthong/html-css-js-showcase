document.querySelectorAll('.toggle').forEach(toggler => {
  const next = toggler.nextElementSibling;
  if (next && next.tagName === 'UL') {
    toggler.addEventListener('click', () => {
      next.style.display = next.style.display === 'block' ? 'none' : 'block';
    });
  }
});
