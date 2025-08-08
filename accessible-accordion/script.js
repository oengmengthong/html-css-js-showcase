const triggers = document.querySelectorAll('.accordion-trigger');
triggers.forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    const section = document.getElementById(btn.getAttribute('aria-controls'));
    section.hidden = expanded;
  });
});
