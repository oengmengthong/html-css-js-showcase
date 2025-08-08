async function load() {
  const res = await fetch('https://api.quotable.io/random');
  const data = await res.json();
  document.getElementById('quote').textContent = `${data.content} — ${data.author}`;
}
document.getElementById('new').addEventListener('click', load);
load();
