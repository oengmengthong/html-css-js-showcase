const toggleButton = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(theme);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) {
    setTheme(stored);
  } else if (prefersDarkScheme.matches) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.add('light');
  }
}

toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});

prefersDarkScheme.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});

initTheme();
