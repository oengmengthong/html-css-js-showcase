const list = document.getElementById('list');
let dragged;
list.addEventListener('dragstart', e => { dragged = e.target; });
list.addEventListener('dragover', e => e.preventDefault());
list.addEventListener('drop', e => {
  e.preventDefault();
  if (e.target.tagName === 'LI' && e.target !== dragged) {
    const items = [...list.children];
    const draggedIndex = items.indexOf(dragged);
    const targetIndex = items.indexOf(e.target);
    if (draggedIndex < targetIndex) list.insertBefore(dragged, e.target.nextSibling);
    else list.insertBefore(dragged, e.target);
  }
});
