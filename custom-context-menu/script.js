const menu = document.getElementById('context-menu');

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  menu.style.top = `${e.clientY}px`;
  menu.style.left = `${e.clientX}px`;
  menu.classList.remove('hidden');
});

document.addEventListener('click', () => {
  menu.classList.add('hidden');
});

menu.addEventListener('click', (e) => {
  if (e.target.matches('.menu-item')) {
    const action = e.target.dataset.action;
    if (action === 'greet') {
      alert('Hello!');
    } else if (action === 'time') {
      alert(new Date().toLocaleTimeString());
    }
  }
});
