const openBtn = document.getElementById('open');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');

function openModal() {
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  const focusable = modal.querySelectorAll('button');
  modal.firstFocusable = focusable[0];
  modal.lastFocusable = focusable[focusable.length - 1];
  modal.firstFocusable.focus();
}

function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  openBtn.focus();
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (modal.classList.contains('hidden')) return;
  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'Tab') {
    const active = document.activeElement;
    if (e.shiftKey && active === modal.firstFocusable) {
      e.preventDefault();
      modal.lastFocusable.focus();
    } else if (!e.shiftKey && active === modal.lastFocusable) {
      e.preventDefault();
      modal.firstFocusable.focus();
    }
  }
});
