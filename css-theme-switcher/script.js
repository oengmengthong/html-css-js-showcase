document.querySelectorAll('[data-theme]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark', btn.dataset.theme === 'dark');
  });
});
