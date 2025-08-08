const draggables = document.querySelectorAll('.draggable');
const dropzone = document.getElementById('dropzone');

draggables.forEach((item) => {
  item.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', item.id);
  });
});

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropzone.classList.add('hover');
});

dropzone.addEventListener('dragleave', () => {
  dropzone.classList.remove('hover');
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('hover');
  const id = e.dataTransfer.getData('text/plain');
  const dragged = document.getElementById(id);
  dropzone.appendChild(dragged);
});
