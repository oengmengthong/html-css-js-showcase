const grid = document.querySelector('.grid');

function resizeAll() {
  grid.querySelectorAll('.item').forEach(item => {
    const img = item.querySelector('img');
    const rowSpan = Math.ceil((img.getBoundingClientRect().height + 10) / 10);
    item.style.gridRowEnd = `span ${rowSpan}`;
  });
}

window.addEventListener('load', resizeAll);
window.addEventListener('resize', resizeAll);
