const content = document.getElementById('content');
function render(page) {
  content.textContent = page === 'about' ? 'This is the about page.' : 'Welcome home!';
}
document.querySelectorAll('button[data-page]').forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.dataset.page;
    history.pushState({ page }, '', '#' + page);
    render(page);
  });
});
window.addEventListener('popstate', e => {
  render(e.state?.page || 'home');
});
render(location.hash.slice(1) || 'home');
