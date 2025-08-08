const btn = document.getElementById('theme-toggle');
const countEl = document.getElementById('count');

const savedTheme = localStorage.getItem('theme') || 'light';
document.body.dataset.theme = savedTheme;

let visits = Number(sessionStorage.getItem('visits') || 0) + 1;
sessionStorage.setItem('visits', visits);
countEl.textContent = visits;

btn.addEventListener('click', () => {
  const next = document.body.dataset.theme === 'light' ? 'dark' : 'light';
  document.body.dataset.theme = next;
  localStorage.setItem('theme', next);
});
