const list = document.getElementById('repo-list');
const sentinel = document.getElementById('sentinel');

let page = 1;
const perPage = 20;
const query = 'stars:%3E1';

async function loadRepos() {
  try {
    const res = await fetch(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&page=${page}&per_page=${perPage}`);
    const data = await res.json();
    if (data.items) {
      data.items.forEach(repo => {
        const div = document.createElement('div');
        div.className = 'repo';
        div.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.full_name}</a> – ⭐ ${repo.stargazers_count}`;
        list.appendChild(div);
      });
      if (data.items.length === perPage) {
        page++;
      } else {
        observer.disconnect();
      }
    }
  } catch (err) {
    console.error('Failed to load repos', err);
    observer.disconnect();
  }
}

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadRepos();
  }
});

loadRepos();
observer.observe(sentinel);
