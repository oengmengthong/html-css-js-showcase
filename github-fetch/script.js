const form = document.getElementById('user-form');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  if (!username) return;
  result.textContent = 'Loading...';
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      result.textContent = 'User not found';
      return;
    }
    const data = await response.json();
    result.innerHTML = `
      <img src="${data.avatar_url}" alt="${data.login}'s avatar" />
      <h2>${data.login}</h2>
      ${data.name ? `<p>${data.name}</p>` : ''}
      <p>Public repos: ${data.public_repos}</p>
    `;
  } catch (err) {
    result.textContent = 'Error fetching data';
  }
});
