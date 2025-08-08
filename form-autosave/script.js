const form = document.getElementById('form');
const key = 'autosave';

window.addEventListener('load', () => {
  const saved = localStorage.getItem(key);
  if (saved) {
    const data = JSON.parse(saved);
    Object.keys(data).forEach(k => {
      if (form.elements[k]) form.elements[k].value = data[k];
    });
  }
});

form.addEventListener('input', () => {
  const data = {};
  Array.from(form.elements).forEach(el => {
    if (el.name) data[el.name] = el.value;
  });
  localStorage.setItem(key, JSON.stringify(data));
});
