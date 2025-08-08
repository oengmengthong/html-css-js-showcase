const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
document.getElementById('gen').addEventListener('click', () => {
  const len = parseInt(document.getElementById('len').value);
  let pw = '';
  for (let i = 0; i < len; i++) pw += chars[Math.floor(Math.random() * chars.length)];
  document.getElementById('pw').textContent = pw;
});
