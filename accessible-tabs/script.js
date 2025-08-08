const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));
function activate(tab) {
  tabs.forEach(t => {
    const selected = t === tab;
    t.setAttribute('aria-selected', selected);
    t.tabIndex = selected ? 0 : -1;
    const panel = document.getElementById(t.getAttribute('aria-controls'));
    panel.hidden = !selected;
  });
}
tabs.forEach(tab => {
  tab.addEventListener('click', () => activate(tab));
  tab.addEventListener('keydown', e => {
    let idx = tabs.indexOf(document.activeElement);
    if (e.key === 'ArrowRight') {
      idx = (idx + 1) % tabs.length;
      tabs[idx].focus();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      idx = (idx - 1 + tabs.length) % tabs.length;
      tabs[idx].focus();
      e.preventDefault();
    }
  });
});
