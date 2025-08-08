const btn = document.getElementById('start');
const spinner = document.getElementById('spinner');
const progress = document.getElementById('progress');
const bar = progress.querySelector('.bar');

btn.addEventListener('click', () => {
  let width = 0;
  spinner.style.display = 'block';
  progress.style.display = 'block';
  bar.style.width = '0';
  const interval = setInterval(() => {
    width += 10;
    bar.style.width = width + '%';
    if (width >= 100) {
      clearInterval(interval);
      spinner.style.display = 'none';
    }
  }, 500);
});
