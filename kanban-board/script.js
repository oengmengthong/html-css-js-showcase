const columns = document.querySelectorAll('.column');
let dragged;
document.addEventListener('dragstart', e => {
  if (e.target.classList.contains('card')) dragged = e.target;
});
columns.forEach(col => {
  col.addEventListener('dragover', e => e.preventDefault());
  col.addEventListener('drop', e => {
    e.preventDefault();
    if (dragged) col.appendChild(dragged);
  });
});
