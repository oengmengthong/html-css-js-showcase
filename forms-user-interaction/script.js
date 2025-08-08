document.addEventListener('DOMContentLoaded', () => {
  // 1. Multi-step form wizard
  const steps = document.querySelectorAll('#wizard-form .step');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const progress = document.getElementById('progress');
  let current = 0;
  function showStep(i) {
    steps.forEach((s, idx) => s.classList.toggle('active', idx === i));
    prevBtn.disabled = i === 0;
    nextBtn.textContent = i === steps.length - 1 ? 'Submit' : 'Next';
    progress.value = i + 1;
  }
  prevBtn.addEventListener('click', () => {
    if (current > 0) {
      current--;
      showStep(current);
    }
  });
  nextBtn.addEventListener('click', () => {
    if (current < steps.length - 1) {
      current++;
      showStep(current);
    } else {
      alert('Form submitted!');
    }
  });
  showStep(0);

  // 5. Range slider display
  const range = document.getElementById('range');
  const rangeValue = document.getElementById('range-value');
  range.addEventListener('input', () => {
    rangeValue.textContent = range.value;
  });

  // 6. Tag input
  const tagInput = document.getElementById('tag-input');
  const tagField = document.getElementById('tag-field');
  function addTag(text) {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = text;
    tagInput.insertBefore(span, tagField);
  }
  tagField.addEventListener('keydown', e => {
    const selected = tagInput.querySelector('.tag.selected');
    if (e.key === 'Enter' && tagField.value.trim()) {
      addTag(tagField.value.trim());
      tagField.value = '';
      e.preventDefault();
    } else if (e.key === 'Backspace' && !tagField.value) {
      if (selected) {
        selected.remove();
      } else {
        const lastTag = tagInput.children[tagInput.children.length - 2];
        if (lastTag) lastTag.classList.add('selected');
      }
      e.preventDefault();
    } else if (e.key === 'ArrowLeft' && tagField.selectionStart === 0) {
      const lastTag = tagInput.children[tagInput.children.length - 2];
      if (lastTag) lastTag.classList.add('selected');
    } else if (e.key === 'ArrowRight' && selected) {
      selected.classList.remove('selected');
    }
  });
  tagInput.addEventListener('click', e => {
    if (e.target.classList.contains('tag')) {
      e.target.classList.toggle('selected');
    } else {
      const selected = tagInput.querySelector('.tag.selected');
      if (selected) selected.classList.remove('selected');
      tagField.focus();
    }
  });

  // 7. File drag-and-drop
  const dropZone = document.getElementById('drop-zone');
  const dropResult = document.getElementById('drop-result');
  ['dragenter', 'dragover'].forEach(evt => {
    dropZone.addEventListener(evt, e => {
      e.preventDefault();
      dropZone.classList.add('hover');
    });
  });
  ['dragleave', 'drop'].forEach(evt => {
    dropZone.addEventListener(evt, e => {
      e.preventDefault();
      dropZone.classList.remove('hover');
    });
  });
  dropZone.addEventListener('drop', e => {
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      dropResult.textContent = `Loaded ${file.name}`;
    } else {
      dropResult.textContent = 'Only image files are allowed.';
    }
  });

  // 8. Print invoice
  document.getElementById('print-button').addEventListener('click', () => window.print());

  // 9. Auto-growing textarea
  const auto = document.getElementById('autogrow');
  const resize = () => {
    auto.style.height = 'auto';
    auto.style.height = auto.scrollHeight + 'px';
  };
  auto.addEventListener('input', resize);
  resize();

  // 10. Password strength meter
  const password = document.getElementById('password');
  const strength = document.getElementById('strength');
  password.addEventListener('input', () => {
    const val = password.value;
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[a-z]/.test(val)) score++;
    if (/\d/.test(val)) score++;
    strength.value = score;
  });

  // 11. Conditional fields
  const contact = document.getElementById('contact-method');
  const other = document.getElementById('other-contact');
  contact.addEventListener('change', () => {
    other.hidden = contact.value !== 'other';
  });

  // 12. Email verification format checker
  const emailCheck = document.getElementById('email-check');
  const emailMsg = document.getElementById('email-msg');
  emailCheck.addEventListener('input', () => {
    if (!emailCheck.value) {
      emailMsg.textContent = '';
      return;
    }
    if (emailCheck.validity.valid) {
      emailMsg.textContent = '✓';
      emailMsg.style.color = 'green';
    } else {
      emailMsg.textContent = 'Invalid email';
      emailMsg.style.color = 'red';
    }
  });

  // 13. Signature pad
  const canvas = document.getElementById('signature');
  const ctx = canvas.getContext('2d');
  let drawing = false;
  const getPos = e => ({
    x: e.offsetX ?? e.touches[0].clientX - canvas.getBoundingClientRect().left,
    y: e.offsetY ?? e.touches[0].clientY - canvas.getBoundingClientRect().top
  });
  canvas.addEventListener('pointerdown', e => {
    drawing = true;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  });
  canvas.addEventListener('pointermove', e => {
    if (!drawing) return;
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  });
  canvas.addEventListener('pointerup', () => drawing = false);
  canvas.addEventListener('pointerleave', () => drawing = false);
  document.getElementById('clear-signature').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

  // 14. Markdown editor with preview
  const mdInput = document.getElementById('md-input');
  const mdPreview = document.getElementById('md-preview');
  const renderMarkdown = text => {
    return text
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  };
  const updatePreview = () => {
    mdPreview.innerHTML = renderMarkdown(mdInput.value);
  };
  mdInput.addEventListener('input', updatePreview);
  updatePreview();

  // 15. Character counter
  const charInput = document.getElementById('char-input');
  const charCount = document.getElementById('char-count');
  charInput.addEventListener('input', () => {
    charCount.textContent = `${charInput.value.length}/100`;
  });
});
