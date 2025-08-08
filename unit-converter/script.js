function convert() {
  const v = parseFloat(document.getElementById('value').value);
  const type = document.getElementById('type').value;
  let result = '';
  if (!isNaN(v)) {
    if (type === 'length') result = (v * 3.28084).toFixed(2) + ' ft';
    if (type === 'weight') result = (v * 2.20462).toFixed(2) + ' lb';
    if (type === 'temp') result = (v * 9/5 + 32).toFixed(2) + ' °F';
  }
  document.getElementById('output').textContent = result;
}
document.getElementById('value').addEventListener('input', convert);
document.getElementById('type').addEventListener('change', convert);
