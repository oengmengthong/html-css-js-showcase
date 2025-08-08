document.getElementById('load').addEventListener('click', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const data = await res.json();
  const list = document.getElementById('posts');
  list.innerHTML = '';
  data.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p.title;
    list.appendChild(li);
  });
});
