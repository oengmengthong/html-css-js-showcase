const input = document.getElementById('fileInput');
const preview = document.getElementById('preview');

input.addEventListener('change', () => {
  preview.innerHTML = '';
  const file = input.files[0];
  if (!file) return;

  const type = file.type;

  if (type.startsWith('image/')) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.onload = () => URL.revokeObjectURL(img.src);
    preview.appendChild(img);
  } else if (type === 'application/pdf') {
    const embed = document.createElement('embed');
    embed.src = URL.createObjectURL(file);
    embed.type = 'application/pdf';
    embed.width = '100%';
    embed.height = '500px';
    preview.appendChild(embed);
  } else if (type.startsWith('text/')) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const pre = document.createElement('pre');
      pre.textContent = e.target.result;
      preview.appendChild(pre);
    };
    reader.readAsText(file);
  } else {
    preview.textContent = 'Unsupported file type';
  }
});
